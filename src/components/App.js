import documents from '../data/documents'
import cities from '../data/cities'
import Document from './Document'
import { useState } from 'react';

const NoResults = () => {
  return <h3 className="NoResults">This demo app does not work for the city you entered. Try San Francisco or Oakland instead.</h3>
}

const BackToSearch = ({ onClick }) => {
  return <a href='/' onClick={onClick}>
    &lt; Back to Search
  </a>
}

const SearchResults = ({ results, city, onClickBack }) => {
  const headline = `${results.length} documents are required to close escrow in ${city}`

  return <div className="main">
    <BackToSearch onClick={onClickBack} />
    <h1>{headline}</h1>
    {results.map((r, i) => <Document document={r} index={i+1} key={i} />)}
  </div>
}

const SearchSuggestion = ({ suggestion, onClick }) => {
  return <div className="SearchSuggestion" onClick={onClick}>{suggestion}</div>
}

const SearchSuggestions = ({ onSelectCity, suggestions }) => {
  return <div className="SearchSuggestions">
    {
      suggestions.map((s, i) =>
        <SearchSuggestion suggestion={s} onClick={onSelectCity} key={i} />
    )}
  </div>
}

const Search = ({ onSearchInputChange, onSelectCity, searchInput, shouldShowSuggestions }) => {
  const [suggestions, setSuggestions] = useState([])

  const onChange = e => {
    onSearchInputChange(e);
    const value = e.target.value.toLowerCase()
    const suggestions = value === '' ?
      [] :
      cities.filter(c => c.toLowerCase().startsWith(value)).slice(0, 4)
    setSuggestions(suggestions)
  }

  return <div className="SearchPage">
    <h1>Know What You Need To Close Escrow</h1>
    <div className="SearchInputAndSuggestions">
      <input
        autoFocus
        className="SearchInput"
        onChange={onChange}
        placeholder="Enter a city name, like San Francisco"
        type="text"
        value={searchInput}
      />
      {
        shouldShowSuggestions ?
          <SearchSuggestions onSelectCity={onSelectCity} suggestions={suggestions} /> :
          null
      }
    </div>
    {shouldShowSuggestions ? null : <NoResults />}
  </div>
}

const App = () => {
  const [shouldShowSuggestions, setShouldShowSuggestions] = useState(true)
  const [searchInput, setSearchInput] = useState('')
  const [city, setCity] = useState(undefined)
  const [searchResults, setSearchResults] = useState([])
  
  // const sfDocs = documents.filter(d => d.requiredBy.name === 'San Francisco')
  // const [searchResults, setSearchResults] = useState(sfDocs)

  const onSearchInputChange = e => {
    setShouldShowSuggestions(true) // User is typing, show suggestions
    setSearchInput(e.target.value)
  }
  const onSelectCity = e => {
    const city = e.target.textContent
    const searchResults = documents.filter(d => d.requiredBy.name === city)

    setCity(city)
    setSearchInput(city)
    setSearchResults(searchResults)
    setShouldShowSuggestions(false) // Stop showing suggestions
  }
  const onClickBackToSearch = e => {
    e.preventDefault()
    setShouldShowSuggestions(true)
    setSearchInput('')
    setCity(undefined)
    setSearchResults([])
  }

  return (
    <div className="fullHeight">
      {
        searchResults.length === 0 ?
          <Search
            onSearchInputChange={onSearchInputChange}
            onSelectCity={onSelectCity}
            searchInput={searchInput}
            shouldShowSuggestions={shouldShowSuggestions}
          /> :
          <SearchResults
            city={city}
            onClickBack={onClickBackToSearch}
            results={searchResults}
          />
      }
    </div>
  )
}

export default App