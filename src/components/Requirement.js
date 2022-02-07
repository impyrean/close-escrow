
const Authority = ({ authority }) => {
    const { name, type } = authority
    let displayName

    switch (type) {
        case "city":
            displayName = `the City of ${name}`
            break;
        case "cityAndCounty":
            displayName = `the City & County of ${name}`
            break;
        case "county":
            displayName = `${name} County`
            break;
        case "state":
            displayName = `the State of ${name}`
            break;
        default:
            displayName = name
            break;
    }

    return <div className="txt-bold txt-muted">
        Required by {displayName}
    </div>
}

const DataSource = ({ dataSource }) => {
    const { excerptsHtml, lastChecked, link, name, version } = dataSource

    return <div className="data-source stack-s">
        <div className="stack-xxs">
            <DataSourceNameAndLink link={link} name={name} />
            {
                version &&
                <div className="txt-muted">{version}</div>
            }
            {
                lastChecked &&
                <div className="txt-muted">Website last checked on {lastChecked}</div>
            }
            {
                excerptsHtml.map((e, index) =>
                    <div className="data-source-excerpt" key={index} dangerouslySetInnerHTML={{ __html: e }}></div>
                )
            }
        </div>

    </div>
}

const DataSourceNameAndLink = ({ name, link }) => {
    return <>
        <h4>{name}</h4>{' '}
        {
            link &&
            <a className="txt-muted" href={link} rel="noreferrer" target="_blank">(website {'\u2197'})</a>
        }
    </>
}

const DataSources = ({ dataSources }) => {
    return <div className="data-sources stack">
        <h3>Where This Requirement Comes From</h3>
        {
            dataSources.map((ds, index) =>
                <DataSource
                    dataSource={ds}
                    key={index}
                />
            )
        }
    </div>
}

const Description = ({ description }) => {
    const { noteworthy, paragraphsHtml } = description

    return <div className="description">
        {
            paragraphsHtml.map((p, index) =>
                <p key={index} dangerouslySetInnerHTML={{ __html: p }}></p>
            )
        }
        {
            noteworthy &&
            <Noteworthy noteworthy={noteworthy} />
        }
    </div>
}

const Feedback = () => {
    return <div className="feedback pad--1-btm txt-right">
        <a className="txt-muted txt-s" href="/">Report issue or suggest improvement</a>
    </div>
}

const Header = ({ authority, name }) => {
    return <div className="accent-1 header pad-2-v stack-xxs">
        <h2>{name}</h2>
        <Authority authority={authority} />
    </div>
}

const Noteworthy = ({ noteworthy }) => {
    const { paragraphHtml: p, type } = noteworthy
    const classNames = `noteworthy noteworthy--${type}`

    return <div className={classNames} dangerouslySetInnerHTML={{ __html: p }}></div>
}

const Procurement = ({ procurement }) => {
    const { paragraphsHtml } = procurement

    return <div className="procurement stack-s">
        <h3>How To Get It</h3>
        {
            paragraphsHtml.map((p, index) =>
                <p key={index} dangerouslySetInnerHTML={{ __html: p }}></p>
            )
        }
    </div>
}

const Requirement = ({ requirement, index }) => {
    const { authority, dataSources, description, name, procurement } = requirement

    return <div className="requirement">
        <div className="accent-3 outcrop txt-center">
            <h3 className="txt-muted">#{index}</h3>
        </div>
        <div className="bg-2 card stack">
            <Header authority={authority} name={name} />
            <Description description={description} />
            <Spacer />
            <Procurement procurement={procurement} />
            <Spacer />
            <DataSources dataSources={dataSources} />
            <Spacer />
            <Feedback />
        </div>
    </div>
}

const Spacer = () => {
    return <div className="spacer">
        <div className="bar"></div>
    </div>
}

export default Requirement