import React, {useState, useEffect} from "react";
import getApiData from "../services/GetApiData";

export default function searchBar(props){
    const [searchBarValue, setSearchBarValue] = useState("");
    const [triggerSearch, setTriggerSearch] = useState(0);

    useEffect(() => {
        const apiResponse = getApiData(searchBarValue);
        props.updateResult(apiResponse);
        
    },[triggerSearch]);

    const handleChangeSearchBar = (event) => {
        setSearchBarValue(event.target.value);
    }

    const handleClickSearchButton = () => {
        setTriggerSearch((prevState)=> prevState + 1);
    };

    
    return (
        <div className="searchBar">
        <input value={searchBarValue} onChange={handleChangeSearchBar} />
        <button onClick={handleClickSearchButton}>Search</button>
        </div>
    )
}