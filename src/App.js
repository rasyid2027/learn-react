// import React from 'react'
// import Ninjas from './Ninjas';

// function App() {
//   const ninjas = [
//     { name: 'Ryu', age: 30, belt: 'black', id: 1 },
//     { name: 'Yoshi', age: 20, belt: 'red', id: 2 },
//     { name: 'Crystal', age: 25, belt: 'blue', id: 3 }
//   ]
//   return (
//     <div className="App">
//       <h1>My First React App</h1>
//       <p>Welcome...!</p>
//       <Ninjas ninjas={ninjas}/>
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react'
import Ninjas from './Ninjas'
import AddNinja from './AddNinja'

class App extends Component{
  state = {
    ninjas : [
      { name: 'Ryu', age: 30, belt: 'black', id: 1 },
      { name: 'Yoshi', age: 20, belt: 'red', id: 2 },
      { name: 'Crystal', age: 25, belt: 'blue', id: 3 }
    ]
  }
  addNinja = (ninja) => {
    ninja.id = Math.random()
    let ninjas = [...this.state.ninjas, ninja]  //copy state sebelumnya
    this.setState({
      ninjas : ninjas
    })
    
  }
  render() {
    return (
      <div className="App">
        <h1>My First React App</h1>
        <p>Welcome...!</p>
        <Ninjas ninjas={this.state.ninjas}/>
        <AddNinja addNinja={this.addNinja}/>
      </div>
    )
  }
}

export default App

//this.addNinja = untuk kirim function sebagai props
//this.state.ninja = untuk kirim data state