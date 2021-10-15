
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
    const { application, contractor, cost, name, time } = issuer

    return <div className="Issuer">
        <h3>Issued By</h3>
        <div>{name}</div>
        <div>Cost: {cost}</div>
        <div>Procurement time: {time}</div>
        {
            application ?
            <div>Apply here:&nbsp;
                <a href={application} target='_blank'>{application}</a>
            </div> :
            null
        }
        {
            contractor ?
            <div>Contractor:&nbsp;
                <a href={contractor} target='_blank'>{contractor}</a>
            </div> :
            null
        }
    </div>
}

// --- Fine print --- //
const FinePrint = ({ text }) => {
    return <div className="FinePrint">
        *{text}
    </div>
}

// --- Required By --- //
const RequiredBy = ({ hasFinePrint, requiredBy }) => {
    const { name, type } = requiredBy
    const maybeAsterisk = hasFinePrint ? '*' : ''

    return <div>
        Required{maybeAsterisk} by {type} of {name}
    </div>
}

const Document = ({ document, index }) => {
    const { addOns, finePrint, issuer, name, requiredBy } = document
    const nameSecondary = name.secondary ? ` (${name.secondary})` : ''
    const nameFormatted = `${name.primary}${nameSecondary}`
    
    return <div className="Document card">
        <h2><span className="Index">#{index}</span>&nbsp;&nbsp;{nameFormatted}</h2>
        <RequiredBy hasFinePrint={finePrint !== undefined} requiredBy={requiredBy} />
        {issuer ? <Issuer issuer={issuer} /> : null}
        {
            addOns && addOns.length ?
            <AddOns addOns={addOns} /> :
            null
        }
        {finePrint ? <FinePrint text={finePrint} /> : null}
    </div>
}

export default Document