
// --- Add-Ons --- //
const AddOn = ({ addOn }) => {
    return <div>
        {addOn.description}
    </div>
}
const AddOns = ({ addOns }) => {
    return <div>
        <h3>Notes</h3>
        {addOns.map((ao, i) => <AddOn addOn={ao} key={i} />)}
    </div>
}

// --- Issuer --- //
const Issuer = ({ issuer }) => {
    const { cost, name, time } = issuer

    return <div className="Issuer">
        <h3>Issued By</h3>
        <div>{name}</div>
        <div>Cost: {cost}</div>
        <div>Procurement time: {time}</div>
    </div>
}

// --- Exceptions --- //
const ExceptionFrequency = ({ frequency }) => {
    const classNames = `badge badge--green`

    return <span className={classNames}>
        {frequency}
    </span>
}
const Exception = ({ exception }) => {
    const { description, frequency } = exception

    return <div>
        {description}
        {
            frequency ?
            <ExceptionFrequency frequency={frequency} /> :
            null
        }
    </div>
}
const Exceptions = ({ exceptions }) => {
    return <div>
        <h3>Exceptions</h3>
        {exceptions.map((e, i) => <Exception exception={e} key={i} />)}
    </div>
}

// --- Required By --- //
const RequiredBy = ({ requiredBy }) => {
    const { frequency, name, type } = requiredBy
    
    let frequencyFormatted, badgeColor
    switch (frequency) {
        case 'rare':
            frequencyFormatted = 'Rarely Required'
            badgeColor = 'green'
            break
        case 'sometimes':
            frequencyFormatted = 'Sometimes Required'
            badgeColor = 'yellow'
            break
        case 'common':
        default:
            frequencyFormatted = 'Usually Required'
            badgeColor = 'red'
            break
        
    }
    const classNames = `badge badge--${badgeColor}`

    return <div>
        Required by {type } of {name}
        <span className={classNames}>
            {frequencyFormatted}
        </span>
    </div>
}

const Document = ({ document, index }) => {
    const { addOns, exceptions, issuer, name, requiredBy } = document
    const nameSecondary = name.secondary ? ` (${name.secondary})` : ''
    const nameFormatted = `${name.primary}${nameSecondary}`
    
    return <div className="Document card">
        <h2><span className="Index">#{index}</span>&nbsp;&nbsp;{nameFormatted}</h2>
        <RequiredBy requiredBy={requiredBy} />
        {
            exceptions && exceptions.length ?
            <Exceptions exceptions={exceptions} /> :
            null
        }
        {issuer ? <Issuer issuer={issuer} /> : null}
        {
            addOns && addOns.length ?
            <AddOns addOns={addOns} /> :
            null
        }
    </div>
}

export default Document