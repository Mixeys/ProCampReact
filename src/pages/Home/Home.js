import React, { Component } from 'react'
import { Layout, Row, Col } from 'antd'

import './Home.scss'

import FixturesComponent from '../../components/FixturesComponent'
import StandingsComponent from '../../components/StandingsComponent'
import OddsComponent from '../../components/OddsComponent'

const { Content } = Layout

class Home extends Component {
  render() {
    return (
      <Content
        style={{
          padding: 24,
          margin: 0,
          minHeight: '100%',
        }}
      >
        <Row gutter={16}>
          <Col span={8} className="gutter-row">
            <div className="gutter-box">
              <FixturesComponent />
            </div>
          </Col>
          <Col span={8} className="gutter-row">
            <div className="gutter-box">
              <StandingsComponent />
            </div>
          </Col>
          <Col span={8} className="gutter-row">
            <div className="gutter-box">
              <OddsComponent />
            </div>
          </Col>
        </Row>
      </Content>
    )
  }
}

export default Home
