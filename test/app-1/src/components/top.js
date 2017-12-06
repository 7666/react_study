import React,{Component} from 'react'

class Top extends Component{
  constructor(props){
    super(props)
    this.state = {list:['新闻','hao123','地图','视频','贴吧','学术','登录','设置','更多产品'],
      Alist:{'新闻':'https://news.baidu.com',
        'hao123':'http://hao123.com',
        '地图':'http://map.baidu.com',
        '视频':'http://v.baudicom',
        '贴吧':'http://tieba.baidu.com',
        '学术':'http://xueshu.baidu.com',
        '登录':'http://https://passport.baidu.com/v2/?login&tpl=mn&u=http%3A%2F%2Fwww.baidu.com%2F',
        '设置':'',
        '更多产品':''}}
    }
  


  render(){
    return(
      <ul className='toplist clearfix'>
        {
        this.state.list.map((e,i)=>{
          return <li key={i}><a href={this.state.Alist[e]} >{e}</a></li>
        })
      }
      </ul>
    )
  }

}

export default Top
