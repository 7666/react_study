import React,{Component} from 'react';

class Welcome extends Component{
  constructor(props){
    super(props)
  }
  render(){
    var styles = {
      color:'red'
    }
    const ele =
      <h1 style={styles} >welcome to {this.props.city}</h1>

    return ele
  }
}

export default Welcome
