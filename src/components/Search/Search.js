import PropTypes from "prop-types";

import "./_Search.css";

// component pour afficher la barre de recherche du tableau

const Search = ({ label, onChange, customStyle }) => {
    return (
        <div className={customStyle}>
            <label htmlFor="search" id="search" className="search-label">{label}</label>
            <input
                name="search"
                type="text"
                className="search-input"
                onChange={onChange}
                aria-labelledby="search"
            />
        </div>
    );
};

Search.propTypes = {
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    customStyle: PropTypes.string
};

export default Search;