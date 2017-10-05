import React from 'react'
export default class NameList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    value: '',
    list:[]
}
    
  }

  

  handleAdd=()=> {

    const name=  prompt('Enter New Name')
    if(name)

   
   this.setState({list:[...this.state.list, name]});
   //using that destructuring to update the value in list
   //explicit conversion to array as setstate changes array to bject and map won't work afterwards
  }
handleRemove(index) {

    
 this.state.list.splice(index,1);
   this.setState({list:this.state.list});
  }  

  render() {
    return (
   <div>  
        <label>
          Name List:
          <select id="namelist" >
            {this.state.list.map((name) => <option>{name}</option>)}
          </select>
        </label>
        <button onClick={this.handleAdd}>Add</button>
        <button onClick={()=>this.handleRemove(namelist.selectedIndex)}>Remove</button>
</div>
     
    )
  }
}