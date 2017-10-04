import React from 'react';
//if key and value are same then no need to give as detail:detail(name:value)
//directly parsed by the JSON parser
// if onl detail is used instead of {detail} we have to again parse it 
const SearchDetail = ({ detail }) => {
    const imageUrl = detail.snippet.thumbnails.default.url
    return ( < div className = "video-list media" >
        < div className = "media-left" > 
        < img className = "media-object" src = { imageUrl }/> 
        </div > 
        <div className = "media-body" >
        <div className = "media-heading" > { detail.snippet.title }
        </div >
        </div >
        </div>
    )
}

export default SearchDetail;