import React,{Component} from 'react'

class If extends Component{
  constructor(props){
    super(props)
  }
  render(){
    let ele;
    if(true === this.props.test){
      ele = <h1 style={{color:'green'}}>true</h1>
    }else if(false === this.props.test){
      ele = <h1 style={{color:'red'}}>false</h1>
    }else{
      ele = <h1>{this.props.test}</h1>
    }
    return ele
  }
}

export default If
