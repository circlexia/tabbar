import React, { Component } from 'react';
import Tabbar from '../../component/tabbar'
import carpic from '../../static/images/category.png'
import { NavBar } from 'antd-mobile'
class Category extends Component {
  render() {
    return (
      <div>
        <NavBar
          mode="dark"
          leftContent="返回"
        >京东</NavBar>
        <img className="img" src={carpic} alt="" />
      </div>
    );
  }
}

export default Tabbar(Category);