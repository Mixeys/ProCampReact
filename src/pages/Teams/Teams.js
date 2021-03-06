import React, { Component } from 'react'
import { Card, Spin } from 'antd'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'

import './Teams.scss'

import { getTeams } from '../../actions/TeamsActions'
import { getTeam } from '../../actions/TeamActions'

const { Meta } = Card

class Teams extends Component {
  componentDidMount() {
    this.props.getTeams()
  }

  render() {
    return (
      <section className="teams">
        <div className="wrapper">
          <h1 className="teams-title">England Teams.</h1>
          <div className="row">
            {this.props.isFetching ? (
              <div className="example">
                <Spin />
              </div>
            ) : (
              this.props.teams.map(team => {
                return (
                  <Card
                    hoverable
                    cover={<img alt="Logo team" src={team.logo} />}
                    key={team.team_id}
                  >
                    <Link to={`/teams/${team.team_id}`}>
                      <Meta
                        title={team.name}
                        description={team.venue_city}
                        onClick={() => this.props.getTeam(team.team_id)}
                      />
                    </Link>
                  </Card>
                )
              })
            )}
          </div>
        </div>
      </section>
    )
  }
}

Teams.propTypes = {
  teams: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string,
}

const mapStateToProps = ({ teams }) => {
  return {
    isFetching: teams.isFetching,
    teams: teams.teams,
    error: teams.error,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getTeams: () => dispatch(getTeams()),
    getTeam: id => dispatch(getTeam(id)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Teams)
