import React from 'react';
import SearchComponent from './search_component';
import SearchList from './search_results';
import Youtube from 'youtube-api-search';

export default class SearchApp extends React.Component{
    constructor(props){
        super(props);
        this.state={items:[]}
    }
    search=(text)=>{
        Youtube({
            key:'AIzaSyB37Fyiib70OwMhppZQHHuTtJ2NQDWjKwsnp',
            term:text
        },(searchResponse)=>{
            this.setState({items:searchResponse})
        })
    }
    render(){
        return(
            <div>
                <SearchComponent onSearchTermChange={this.search}/>
                <SearchList items={this.state.items}/>
            </div>
        )
    }
}