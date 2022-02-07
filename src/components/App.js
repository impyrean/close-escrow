import requirements from '../data/requirements'
import Requirement from './Requirement'
import Footer from './Footer'

const App = () => {
  const sausalito = requirements['sausalito']

  return (
    <article className="center stack-l">
      <h1>
        Pre-Close of Escrow Requirements for Sausalito, CA
        </h1>

      <section className="stack-l">
        {
          sausalito.requirements
            .filter(r => !r.skip)
            .map((r, index) =>
              <Requirement index={index + 1} key={index} requirement={r} />
            )
        }
      </section>

      <Footer />
    </article>
  )
}

export default App