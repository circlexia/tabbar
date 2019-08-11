import React, { Component } from 'react';
import Tabbar from '../../component/tabbar'
// import homepic from '../../static/images/home.png'
import { NavBar } from 'antd-mobile'
import "../home/style.css"
class Home extends Component {
  render() {
    return (
      <div>
        <NavBar
          mode="dark"
          leftContent="返回"
        >京东</NavBar>
        {/* <img className="img" src={homepic} alt="" /> */}
      </div>
    );
  }
}

export default Tabbar(Home);