import React from 'react'
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";

const Portfolio = () => {

    const optionsArray = [
        { key: "au", label: "Australia" },
        { key: "ca", label: "Canada" },
        { key: "us", label: "USA" },
        { key: "pl", label: "Poland" },
        { key: "es", label: "Spain" },
        { key: "fr", label: "France" },
    ];

    const onChange = selected => {
        console.log(selected);
    }

    return (
        <div>
            <DropdownMultiselect handleOnChange={onChange} options={optionsArray} name="countries" />
            <button type="button" className="btn btn-outline-success">Search</button>
        </div>
    )
}

export default Portfolio
