import React from 'react';
//FINALLY!!!
export default class MVC extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:[]
        }
    }
    render(){
        return(
            <div> < label htmlFor = "dropdown" >
            Dropdown <select id = "dropdown" >{
                this.state.name.map((result)=>{
                    return (<option >{result}</option>)
                    //only result is enough as you r just going through the array
                })
            }
            </select>
            </label>
            <button id="add" onClick={event=> this.onAddition()}>Add </button>
            <button id="del" onClick={event=> this.onRemove(dropdown.selectedIndex)}>Delete </button>
            </div>
        )
        }
        onAddition(){
            var x=Number(prompt("Enter new name"));
            //alert(x);
            //this.state.name.push(x);
            //alert(this.state.name);
            var newName = this.state.name.concat([x]); 
            //alert(newName); 
            this.setState({name:newName});
            //alert(this.state.name);
        }
        onRemove(e){
            //alert(e);
            //let x=this.state.name.indexOf(Number(event.target.value));
            //alert(x);
            this.state.name.splice(e,1);
            let newName=this.state.name;
            //alert(newName);
            this.setState({name:newName})
            //this.setState({name:name.splice(x,1)})
        }
    }
