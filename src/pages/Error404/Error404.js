import { Link } from "react-router-dom";

import "./_Error404.css";

// Page Error404

const Error404 = () => {
    return (
        <div className="error-404">
            <h2 className="error-404-title">Sorry ! The page you request does not exist</h2>
            <Link to="/" className="error-404-link">Go to the home page</Link>
        </div>
    );
};

export default Error404;