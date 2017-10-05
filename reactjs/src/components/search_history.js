import React from 'react';

const SearchHistory =({history})=>{
    const resultItems = history.map((result) => {
        return (result)
    })
    return(<div>
        <h1>History</h1>
        <ul className="col md4 list-group ">
            {resultItems}
        </ul>
        </div>
    )
}

export default SearchHistory;