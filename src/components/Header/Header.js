import React, { useState } from 'react'
import { Menu, Icon, Input } from 'antd'
import { Link } from 'react-router-dom'

import './Header.scss'
import logo from '../../assets/img/logo.png'

const { Search } = Input

const Header = () => {
  const [current, setCurrent] = useState('home')
  const handleClick = e => {
    setCurrent(e.key)
  }
  return (
    <section className="header">
      <Menu
        onClick={handleClick}
        selectedKeys={[current]}
        mode="horizontal"
        className="header-menu"
      >
        <Menu.Item key="home">
          <Link to="/">
            <Icon type="home" />
            Home
          </Link>
        </Menu.Item>
        <Menu.Item key="teams">
          <Link to="/teams">
            <Icon type="team" />
            Teams
          </Link>
        </Menu.Item>
        <Menu.Item key="fixtures">
          <Link to="/fixtures">
            <Icon type="calendar" />
            Fixtures
          </Link>
        </Menu.Item>
        <Menu.Item key="odds">
          <Link to="/odds">
            <Icon type="percentage" />
            Odds
          </Link>
        </Menu.Item>
      </Menu>
      <img src={logo} alt="logo premier league" width="100" height="100" className="header-logo" />
      <Search placeholder="input search text" style={{ width: 250, height: 50 }} />
    </section>
  )
}

export default Header
