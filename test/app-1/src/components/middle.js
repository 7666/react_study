import React,{Component} from 'react'
import LOGO from '../bd_logo1.png'
class Middle extends Component{
  constructor(props){
    super(props)
    this.state={styles:{display:'none'},list:['中国演员片酬排行','吴尊问应采儿','江歌遇害案进展','森碟 亭亭玉立','923字刷爆朋友圈','万能面霜',
    '校长扶老人后遭讹','闹离婚 丈夫太会做家务','男子地铁突然被拷','双11过后全国快递爆仓'],keyword:'',focus:false}
  }
  onfocus = (e)=>{
      this.setState({styles:{display:'block'}})
      this.setState({focus:true})
  }
  onchange = (e)=>{
    this.setState({keyword:e.target.value})
    if(e.target.value === ''){
      this.setState({styles:{display:'block'}})
    }else{
      this.setState({styles:{display:'none'}})
    }
  }
  onblur = (e)=>{
    this.setState({styles:{display:'none'}})
    this.setState({focus:false})
  }
  mouseover = (e)=>{
    if(e.target){
      e.target.className += ' on';
      this.setState({keyword:e.target.innerHTML})
    }

  }
  mouseout = (e)=>{
    e.target.className = '';
  }
  componentDidMount(){

    document.addEventListener('keyup',this.keydown)

  }
  keydown = (e)=>{
  }



  render(){
    return(
      <div className='middle'>
        <img src={LOGO}/><br/>
        <div className='baidu'>
        <input onFocus={this.onfocus} onChange={this.onchange} onBlur={this.onblur} className='result' value={this.state.keyword}  /><span className='f'></span>
        <button>百度一下</button>
        </div>
        <ul style={this.state.styles}  onMouseOver={this.mouseover} onMouseOut={this.mouseout}>
          {
              this.state.list.map(function(e,i){
                return <li    key={i}>{e}</li>
              })
          }
        </ul>
      </div>
    )
  }
}
export default Middle
