import "./_Footer.css";

// Component Footer

const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer-copyright">
                Copyright, Wealth Health {new Date().getFullYear()}
            </p>
        </footer>
    );
};

export default Footer;