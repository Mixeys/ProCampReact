import React, { Component } from 'react'
import { Row, Col, Button, Menu, Dropdown, Table } from 'antd'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import moment from 'moment'
import { Link } from '@reach/router'

import './StandingsComponent.scss'

import * as Type from '../../actions/constants'

export class StandingsComponent extends Component {
  componentDidMount() {
    this.props.getStandings()
  }

  handleClick = e => {
    console.log('click: ', e)
  }

  columns = [
    {
      title: 'Rank',
      dataIndex: 'rank',
      key: 'rank',
    },
    {
      title: 'Team id',
      dataIndex: 'team_id',
      key: 'team_id',
    },
    {
      title: 'Team name',
      dataIndex: 'teamName',
      key: 'teamName',
    },
    {
      title: 'Forme',
      dataIndex: 'forme',
      key: 'forme',
    },
    {
      title: 'Logo',
      dataIndex: 'logo',
      key: 'logo',
    },
  ]

  render() {
    console.log('standings???: ', this.props.standings)
    console.log('data: ', this.standingsData)
    return (
      <section className="fixtures">
        <Row className="fixtures-row">
          <Col span={8} className="fixtures-col">
            <Button type="primary" onClick={this.handleClick}>
              League
            </Button>
          </Col>
          <Col span={8} className="fixtures-col">
            <Button type="primary" onClick={this.handleClick}>
              FA Cup
            </Button>
          </Col>
          <Col span={8} className="fixtures-col">
            <Button type="primary" onClick={this.handleClick}>
              ...
            </Button>
          </Col>
        </Row>
        <Row className="fixtures-row">
          <h2 className="fixtures-title">Standings</h2>
          <Table
            columns={this.columns}
            dataSource={this.props.standings && this.props.standings.map(item => {
              return {
                rank: item.rank,
                team_id: item.team_id,
                teamName: item.teamName,
                forme: item.forme,
                logo: item.logo,
              }
            })}
          />
        </Row>
      </section>
    )
  }
}

const mapStateToProps = ({ standings }) => {
  return {
    standings: standings.standings,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getFixtures: () => dispatch({ type: Type.FETCHED_FIXTURES }),
    getStandings: () => dispatch({ type: Type.FETCHED_STANDINGS }),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StandingsComponent)
