import React, { Component } from 'react';
import Tabbar from '../../component/tabbar'
import userpic from '../../static/images/user.png'
import { NavBar } from 'antd-mobile'
class User extends Component {
  render() {
    return (
      <div>
        <NavBar
          mode="dark"
          leftContent="返回"
        >京东</NavBar>
        <img className="img" src={userpic} alt="" />
      </div>
    );
  }
}

export default Tabbar(User);