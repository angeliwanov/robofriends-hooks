import React from "react";

const Searchbox = ({SearchChange}) => {
    return (
        <div className="pa2">
            <input 
            type='search' 
            placeholder="search robots" 
            className="pa3 ba b--green bg-lightest-blue"
            onChange={SearchChange}
            />
        </div>
    )
}

export default Searchbox;