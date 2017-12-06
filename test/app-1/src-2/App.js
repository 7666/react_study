import React from 'react'
import If from './if.js'
import Child from './child.js'
class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {value:true,list:['wangwu','zhaoliu'],num:1}
  }
  change=()=>{
    this.setState({value: !this.state.value})
  }
  add=()=>{
    let oldlist = this.state.list
    oldlist.push(Math.random()*10000)
    this.setState(this.state.list:oldlist);
    // this.setState((preventState,props)=>{
    //   return {list:preventState.list.push(Math.random*10000)}
    //   console.log(preventState.list);
    // })
  }
  changeValue=()=>{
    this.setState(function(preState,props){
      return {num:preState.num + 1}
    })
  }
  render(){
    return(
      <div>
      <h1>hello world!!</h1>
      <button onClick={this.change}>点我</button>
      <button onClick={this.add}>click</button>
      <If test={this.state.value}/>
      <ul>
        {this.state.list.map((e,i)=>{
          return <li key={i}>{e}</li>
        })
      }
      </ul>
      <h1>{this.state.num}</h1>
      <Child changeValue={this.changeValue}/>
      </div>
    )
  }
}

export default App
