import React, { Component } from 'react'
import { Card } from 'antd'
import axios from '../../api/axios'
import { Link } from 'react-router-dom'

import './Teams.scss'

const { Meta } = Card

class Teams extends Component {
  state = {
    teams: [],
  }
  componentDidMount() {
    axios.get(`/teams/league/2`).then(response => {
      console.log('teams: ', response)
      this.setState({
        teams: response.data.api.teams,
      })
    })
  }

  render() {
    return (
      <section className="teams">
        <div className="wrapper">
          <h1 className="teams-title">England Teams.</h1>
          <div className="row">
            {this.state.teams.map(team => {
              return (
                <Card hoverable cover={<img alt="Logo team" src={team.logo} />} key={team.team_id}>
                  <Link to={`/teams/${team.team_id}`}>
                    <Meta title={team.name} description={team.venue_city} />
                  </Link>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
    )
  }
}

export default Teams
