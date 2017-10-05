import React, { Component } from 'react';
//statefull component
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Some name'
        }
    }
    componentWillMount() {
        console.log("Component will be mounted");
    }
    componentDidMount() {
        console.log("Component Did mount");
    }
    shouldComponentUpdate() {
        console.log("Component should be updated");
        return true;
    }
    componentWillUpdate() {
        console.log("Component will be updated");
    }

    // render() {
    //     return ( < div >
    //         <
    //         div > < label htmlFor = "search" >
    //         Search the web <
    //         input id = "search"
    //         value = { this.state.name }
    //         onChange = { event => this.onInputChange(event.target.value) }
    //         />  </label > < /div> <
    //         div >
    //         Search text: { this.state.name } <
    //         /div> < /
    //         div > )
    // }
    // onInputChange(name) {
    //     debugger;
    //     this.setState({ name: name });
    // }

    render() {
        return ( < div >
            <
            div > < label htmlFor = "search" >
            Search the web <
            input id = "search"
            value = { this.state.name }
            onChange = { event => this.onInputChange(event) }
            />  </label > < /div> <
            div >
            Search text: { this.state.name } <
            /div> < /
            div > )
    }
    onInputChange(event) {
        debugger;
        this.setState({ name: event.target.value });
    }
}

// const App = () => {
//     return ( <
//         div >
//         My first component using es2015 arrorw <
//         /div>
//     )
// }
//stateless component
// export default App;