import "./searchBar.css";
import { useContext, useState } from "react";
import searcIcon from "/images/Shape 2.svg";
import { ThemeContext } from "../../App";
function SearchBar() {
    const passevedValues = useContext(ThemeContext);
    console.log(passevedValues.theme);
    const [formData, setFormData] = useState({
        search: ""
    });

    function onHandelSubmit(event) {
        event.preventDefault();
        console.log(formData);

    }

    function onHandelChange(event) {
        var value = event.target.value;
        const key = event.target.name;

        if (event.target.type == "checkbox") {
            value = event.target.checked;
        }

        setFormData({
            ...formData,
            [key]: value,
        });
    }

    return (
        <form className={passevedValues.theme + "SearchBar"} onSubmit={onHandelSubmit}>
            <div id="search">
                <img id="searchIcon" src={searcIcon} alt="" />
                <input
                    type="text"
                    placeholder="Search GitHub Username..."
                    className={passevedValues.theme + "SearchInput"}
                    name="search"
                    value={formData.search}
                    onChange={onHandelChange}
                />
            </div>
            <div id="button">
                <button id="searchBtn"> Search</button>
            </div>
        </form>
    );
}

export default SearchBar;
