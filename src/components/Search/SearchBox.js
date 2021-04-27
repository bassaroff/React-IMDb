import React from 'react'
import { FaSearch } from 'react-icons/fa'
const SearchBox = (props) => {
    return (
        <div className="search-box">
            <input className="search-txt" value={props.value} 
            onChange={(event) => props.setSearchValue(event.target.value)}
            placeholder="Type to search..."/>
            <a class="search-btn" href="#">
                <FaSearch></FaSearch>
            </a>
        </div>
    )
}
export default SearchBox