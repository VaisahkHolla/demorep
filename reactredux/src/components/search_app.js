import React from 'react';
import SearchComponent from './search_component';
import SearchList from './search_results';
import Youtube from 'youtube-api-search';
import SearchHistory from './search_history';
export default class SearchApp extends React.Component{
    constructor(props){
        super(props);
        this.state={items:[],history:[]}   
    }
    search=(text)=>{
        Youtube({
            key:'AIzaSyB37Fyiib70OwMhppZQHHuTtJ2NQDWjKws',
            term:text
        },(searchResponse)=>{
            this.setState({items:searchResponse})
        })
        var newHistory=this.state.history.concat(text);
        //alert(newHistory);
        this.setState({history:newHistory})
    }
    render(){
        return(
            <div>
                <SearchComponent onSearchTermChange={this.search}/>
                <SearchList items={this.state.items}/>
                <SearchHistory history={this.state.history}/>
            </div>
        )
    }
}