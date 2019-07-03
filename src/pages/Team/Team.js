import React, { Component } from 'react'
import axios from '../../api/axios'
import { Card } from 'antd'

import styles from './Team.module.scss'

export class Team extends Component {
  state = {
    team: {},
    loading: true,
  }
  componentDidMount() {
    axios.get(`/teams/team/${this.props.match.params.id}`).then(response => {
      this.setState({
        team: response.data.api.teams[0],
        loading: false,
      })
    })
  }
  render() {
    const { name, logo, country, founded, venue_address, venue_city } = this.state.team
    return (
      <section className="team">
        <div className="wrapper">
          <Card title={<h1>{name}</h1>} className={styles['ant-card']} loading={this.state.loading}>
            <img alt="Logo team" src={logo} className={styles['team-img']} />
            <p className={styles['team-text']}>Founded: {founded}</p>
            <p className={styles['team-text']}>Country: {country}</p>
            <p className={styles['team-text']}>City: {venue_city}</p>
            <p className={styles['team-text']}>Address: {venue_address}</p>
          </Card>
        </div>
      </section>
    )
  }
}

export default Team
