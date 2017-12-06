import React,{Component} from 'react'

class Bottom extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className='bottom'>
        <div className='erweima' ></div>
        <p><strong>手机百度</strong></p>
        <p><span><a>把百度设为主页</a></span><span><a>关于百度</a></span><span><a>About  Baidu</a></span><span><a>百度推广</a></span></p>
        <p><span>©2017 Baidu</span><span>使用百度前必读</span><span>意见反馈 京ICP证030173号  京公网安备11000002000001号 </span></p>
      </div>
    )
  }
}

export default Bottom
