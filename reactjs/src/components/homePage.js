import React from 'react';
import Router,{Link} from 'react-router';
const Home=()=>{
    return(
        <div className="jumbotron">
            <h1>React router</h1>
            <Link to="about">About</Link>
        </div>
    )
}
export default Home;