import React from 'react';
import SearchDetail from './search_detail';
//Stateless as only displaying the data from the server
//recieving state as props
//presentation components are stateless
//react import is necessary as component instantiation requires the import
//if asynchronous arrow fn is recommended
const SearchList = (props) => {
    const resultItems = props.items.map((result) => {
        return ( < SearchDetail detail = { result } key = { result.etag }/>
        )
    })
    return(
        <ul className="col md4 list-group ">
            {resultItems}
        </ul>
    )
}

export default SearchList;