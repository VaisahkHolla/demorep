import React, { Component } from 'react';
export default class SearchComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
    }
    render() {
        return ( <div> < label htmlFor = "search" >Search the web
             <input id = "search" ref="search"/>
            <button onClick = {(event) => this.props.onSearchTermChange(this.refs.search.value) }>Search</button>  
            </label > 
            </div> 
        )
    }
    //this.refs.search.value instead of just search.value is used because we cannot access elements in a 
    //different tag ,i.e. if the tag was not in the div tag then we can only access it using refs
      
    
    // onInputChange(search) {
        //     this.setState({ search })
        //     this.props.onSearchTermChange(search);
        // }
    }