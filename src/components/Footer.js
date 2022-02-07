import Trust from './Trust'

const Copyright = () => {
    return <div className="pad-1 txt-center txt-muted">&copy; 2022 Chirag Medhora</div>
}

const Footer = () => {
    return <footer>
        <Trust />
        <Copyright />
    </footer>
}

export default Footer