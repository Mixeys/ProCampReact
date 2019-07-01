import React, { Component } from 'react'
import { Card } from 'antd'
import axios from '../../api/axios'

import './Home.scss'

const { Meta } = Card

class Home extends Component {
  state = {
    teams: [],
  }
  componentDidMount() {
    axios.get(`/teams/league/2`).then(response => {
      this.setState({
        teams: response.data.api.teams,
      })
    })
  }

  render() {
    return (
      <section className="home">
        <div className="wrapper">
          <h1 className="home-title">England Teams.</h1>
          <div className="row">
            {this.state.teams.map(team => {
              return (
                <Card hoverable cover={<img alt="Logo team" src={team.logo} />}>
                  <Meta title={team.name} description={team.venue_city} />
                </Card>
              )
            })}
          </div>
        </div>
      </section>
    )
  }
}

export default Home
