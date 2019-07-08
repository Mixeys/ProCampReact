import React, { Component } from 'react'
import { Table, Spin } from 'antd'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import moment from 'moment'

import './Fixtures.scss'

import { getFixtures } from '../../actions/FixturesActions'

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
              {this.props.isFetching ? (
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
                      score: item.score.fulltime,
                      away: item.awayTeam.team_name,
                    }
                  })}
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
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string,
}

const mapStateToProps = ({ fixtures }) => {
  return {
    isFetching: fixtures.isFetching,
    fixtures: fixtures.fixtures,
    error: fixtures.error,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getFixtures: () => dispatch(getFixtures()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Fixtures)
