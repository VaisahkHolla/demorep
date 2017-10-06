//TO make AJAX calls to the yt server
import axios from 'axios';

const URL="https://www.googleapis.com/youtube/v3/search";
const API_KEY='AIzaSyB37Fyiib70OwMhppZQHHuTtJ2NQDWjKws';

const searchYoutube=(searchText)=>{
    debugger;
    const params={
        part:'snippet',
        key:API_KEY,
        q:searchText,
        type:'video'
    }
const promise=axios.get(URL,{params});
debugger;
    //closure
return{
    type:'result',
    payload:promise
}
}
export default searchYoutube;