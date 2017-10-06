import React from 'react';
import SearchDetail from './search_detail';

// Stateless Component
// which is going to recieve state as props
const SearchList=(props)=>{
    return (
		<ul className="media-list">
		{props.results.map((result)=>{
			return (
	<SearchDetail onVideoSelect={props.onVideoSelect} video={result} key={result.etag} />
			)
			
		})}
		</ul>
		
			)

}

export default SearchList;