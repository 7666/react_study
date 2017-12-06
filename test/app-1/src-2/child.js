import React,{Component} from 'react'

class Child extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
        <button onClick={this.props.changeValue}>Change</button>
    )
  }
}

export default Child
