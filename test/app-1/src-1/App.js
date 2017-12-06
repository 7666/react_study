import React,{Component} from 'react';
import Welcome from './welcome.js';

class App extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div>
    <h1>hello world!!</h1>
    {/*<Welcome city='beijing' />*/}
    <Welcome city='beijing' />
    </div>
  )
  }
}

export default App
