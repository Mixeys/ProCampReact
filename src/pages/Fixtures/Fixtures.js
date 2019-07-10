import React, { Component } from 'react'
import { Table, Spin } from 'antd'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import moment from 'moment'
import { Link } from 'react-router-dom'

import './Fixtures.scss'

import { getFixtures } from '../../actions/FixturesActions'
import { getEvent } from '../../actions/FixturesActions'

class Fixtures extends Component {
  columns = [
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Event date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Home team',
      dataIndex: 'home',
      key: 'home',
      render: (text, record) => <Link to={`/teams/${record.homeId}`}>{text}</Link>,
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
      render: (text, record) => <Link to={`/teams/${record.awayId}`}>{text}</Link>,
    },
  ]

  componentDidMount() {
    this.props.getFixtures()
  }

  render() {
    return (
      <section className="teams">
        <div className="wrapper">
          <h1 className="teams-title">Fixtures.</h1>
          <div className="row">
            <div className="col-12">
              {this.props.isFetchingFixtures ? (
                <div className="example">
                  <Spin />
                </div>
              ) : (
                <Table
                  columns={this.columns}
                  dataSource={this.props.fixtures.map(item => {
                    return {
                      key: item.fixtures_id,
                      status: item.status,
                      date: moment(item.event_date).format('MM/DD/YYYY kk:mm:ss'),
                      home: item.homeTeam.team_name,
                      homeId: item.homeTeam.team_id,
                      score: item.score.fulltime,
                      away: item.awayTeam.team_name,
                      awayId: item.awayTeam.team_id,
                      fixtureId: item.fixture_id,
                    }
                  })}
                  onExpand={(expand, record) => this.props.getEvent(record.fixtureId)}
                  expandedRowRender={record => {
                    const columns = [
                      {
                        title: 'Detail',
                        dataIndex: 'detail',
                        key: 'detail',
                      },
                      {
                        title: 'Elapsed',
                        dataIndex: 'elapsed',
                        key: 'elapsed',
                      },
                      {
                        title: 'Player',
                        dataIndex: 'player',
                        key: 'player',
                      },
                      {
                        title: 'Team name',
                        dataIndex: 'teamName',
                        key: 'teamName',
                      },
                      {
                        title: 'Type',
                        dataIndex: 'type',
                        key: 'type',
                      },
                    ]
                    const event = this.props.events.map(item => {
                      return {
                        elapsed: item.elapsed,
                        teamName: item.teamName,
                        player: item.player,
                        type: item.type,
                        detail: item.detail,
                      }
                    })
                    return <Table columns={columns} dataSource={event} />
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

Fixtures.propTypes = {
  fixtures: PropTypes.array.isRequired,
  isFetchingFixtures: PropTypes.bool.isRequired,
  errorFixtures: PropTypes.string,
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
    getFixtures: () => dispatch(getFixtures()),
    getEvent: id => dispatch(getEvent(id)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Fixtures)
