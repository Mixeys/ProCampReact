import React, { Component } from 'react'
import { Layout, Row, Col } from 'antd'

import './Home.scss'

const { Content } = Layout;

class Home extends Component {
  render() {
    return (
      <Content
        style={{
          background: '#eee',
          padding: 24,
          margin: 0,
          minHeight: '100%',
        }}
      >
        <Row gutter={16}>
          <Col span={8} className="gutter-row"><div className="gutter-box" style={{background: 'red',}}>col-6</div></Col>
          <Col span={8} className="gutter-row"><div className="gutter-box" style={{background: 'red',}}>col-6</div></Col>
          <Col span={8} className="gutter-row"><div className="gutter-box" style={{background: 'red',}}>col-6</div></Col>
        </Row>
      </Content>
    )
  }
}

export default Home
