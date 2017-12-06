import React,{Component} from 'react'
import Top from './components/top.js'
import Middle from './components/middle.js'
import Right from './components/right.js'
import Bottom from './components/bottom.js'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {styles:{display:'none'}}
  }
  componentDidMount(){
    var more = document.querySelector('.toplist li:nth-child(9)')
    var madel = document.querySelector('.right')
    more.addEventListener('mouseover',()=>{
      this.setState({styles:{display:'block'}})
    })
    more.addEventListener('mouseout',()=>{
      this.setState({styles:{display:'none'}})
    })
    madel.addEventListener('mouseover',()=>{
      this.setState({styles:{display:'block'}})
    })
    madel.addEventListener('mouseout',()=>{
      this.setState({styles:{display:'none'}})
    })
  }
  render(){
    return(
      <div className='clearfix main'>
      <Top />
      <Right styles={this.state.styles} />
      <div className='clearfix'></div>
      <Middle />
      <Bottom />
      </div>
    )
  }
}

export default App
