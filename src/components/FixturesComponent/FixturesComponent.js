import React, { Component } from 'react'
import { Row, Col, Button, Table } from 'antd'
import { connect } from 'react-redux'
import moment from 'moment'
import { Link } from '@reach/router'
import axios from '../../api/axios'

import './FixturesComponent.scss'

import * as Type from '../../actions/constants'

export class FixturesComponent extends Component {
  componentDidMount() {
    this.props.getFixtures('1')
  }
  handleClick = e => {
    this.props.getFixtures(e.target.value)
  }
  columns = [
    {
      title: 'Event date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Home team',
      dataIndex: 'home',
      key: 'home',
      render: (text, record) => (
        <Link to={`/teams/${record.homeId}`} onClick={() => this.props.getTeam(record.homeId)}>
          {text}
        </Link>
      ),
    },
    {
      title: 'Score',
      dataIndex: 'score',
      key: 'score',
    },
    {
      title: 'Away team',
      dataIndex: 'away',
      key: 'away',
      render: (text, record) => (
        <Link to={`/teams/${record.awayId}`} onClick={() => this.props.getTeam(record.awayId)}>
          {text}
        </Link>
      ),
    },
  ]
  render() {
    const event = this.props.fixtures.map(item => {
      return {
        key: item.fixtures_id,
        date: moment(item.event_date).format('MM/DD/YYYY kk:mm:ss'),
        home: item.homeTeam.team_name,
        homeId: item.homeTeam.team_id,
        score: item.score.fulltime,
        away: item.awayTeam.team_name,
        awayId: item.awayTeam.team_id,
        fixtureId: item.fixture_id,
      }
    })
    return (
      <section className="fixtures">
        <Row className="fixtures-row">
          <Col span={24} className="fixtures-col">
            <Button type="primary" onClick={this.handleClick} value="1">
              World Cup
            </Button>
            <Button type="primary" onClick={this.handleClick} value="2">
              England
            </Button>
            <Button type="primary" onClick={this.handleClick} value="11">
              Portugal
            </Button>
          </Col>
        </Row>
        <Row className="fixtures-row">
          <h2 className="fixtures-title">Live Fixtures</h2>
          <Table columns={this.columns} dataSource={event} loading={this.props.isFetchingEvents} />
        </Row>
      </section>
    )
  }
}

const mapStateToProps = ({ fixtures }) => {
  return {
    isFetchingFixtures: fixtures.isFetchingFixtures,
    fixtures: fixtures.fixtures,
    errorFixtures: fixtures.errorFixtures,
    isFetchingEvents: fixtures.isFetchingEvents,
    events: fixtures.events,
    errorEvents: fixtures.errorEvents,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getFixtures: id => dispatch({ type: Type.FETCHED_FIXTURES, payload: id }),
    getEvent: id => dispatch({ type: Type.FETCHED_EVENT, payload: id }),
    getTeam: id => dispatch({ type: Type.FETCHED_TEAM, payload: id }),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FixturesComponent)
