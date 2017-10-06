// import React from 'react';
// import SearchComponent from './search_component';
// import SearchList from './search_results';
// import Youtube from 'youtube-api-search';
// import SearchHistory from './search_history';
// import searchYoutube from '../actions/index';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import SearchItem from './search_item';

// class SearchApp extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={selctedVideo:null
//         }   
//     }
//     search=(text)=>{
//         this.props.searchYoutube(text);
//         //why not state instead of props
//         //because redux is taking care of state
//         //Hence only props is available
//     }
//     componentDidMount(){
//         this.search('');
//     }
//     onVideoSelect(selectedVideo){
//         this.setState(selectedVideo)
//     }
//     componentWillReceiveProps(nextProps){
//         this.setState({selectedVideo:nextProps.selectedVideo});
//     }


//     render(){
//         return(
//             <div>
//                 <SearchComponent onSearchTermChange={this.search}/>
//                 <SearchItem/>
//                 <SearchList results={this.props.results}
//                  onVideoSelect={(selectedVideo)=>this.onVideoSelect(selectedVideo)}/>                
//             </div>
//         )
//     }
// }


// //Map the state as props to react components

// let mapStateToProps=(state)=>{
//     return{
//         results:state.results,
//         selectedVideo:state.results[0]
//     }
// }

// //Bind the actions from react component to action creators

// let mapDispatchToProps=(dispatch)=>{
//     return bindActionCreators({searchYoutube},dispatch);
// }


// //Connect react to redux

// export default connect(mapStateToProps,mapDispatchToProps)(SearchApp);
import React from 'react';
import SearchComponent from './search_component';
import SearchList from './search_results';
import SearchItem from './search_item';
import Youtube from 'youtube-api-search';
import searchYoutube from '../actions/index'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


 class SearchApp extends React.Component{

        constructor(props){
            super(props);
            this.state={
                selectedVideo:null
            }
        }

search=(text)=>{

this.props.searchYoutube(text);
}
componentDidMount(){
    debugger;
    this.search('amirkhan')
}
onVideoSelect(selectedVideo){
    debugger;
    this.setState({selectedVideo})
}
componentWillReceiveProps(nextProps){
    debugger;
    this.setState({selectedVideo:nextProps.selectedVideo});

}


render(){
    return(
        <div>
            <SearchComponent onSearchTermChange={this.search}/>

            	<div className="col-md-8">
				<SearchItem video={this.state.selectedVideo}/>
			</div>
		
            <SearchList results={this.props.results} 
            onVideoSelect={(selectedVideo)=>
            this.onVideoSelect(selectedVideo)}/>
            </div>
    )
}




}

// Map The State as Props To React Components

var mapStateToProps=(state)=>{
    return {
        results:state.results,
        selectedVideo:state.results[0]
    }
}
// Bind The Actions From ReactComponent To ActionCreators

var mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({searchYoutube},dispatch);
}

// Connect React To Redux

export default connect(mapStateToProps,mapDispatchToProps)(SearchApp);