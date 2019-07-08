import React, { Component } from 'react'
import { Card, Spin } from 'antd'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import styles from './Team.module.scss'

export class Team extends Component {
  render() {
    return (
      <section className="team">
        <div className="wrapper">
          {this.props.isFetching ? (
            <div className="example">
              <Spin />
            </div>
          ) : (
            this.props.team.map(item => {
              return (
                <Card
                  key={item.team_id}
                  title={<h1>{item.name}</h1>}
                  className={styles['ant-card']}
                  loading={this.props.isFetching}
                >
                  <img alt="Logo team" src={item.logo} className={styles['team-img']} />
                  <p className={styles['team-text']}>Founded: {item.founded}</p>
                  <p className={styles['team-text']}>Country: {item.country}</p>
                  <p className={styles['team-text']}>City: {item.venue_city}</p>
                  <p className={styles['team-text']}>Address: {item.venue_address}</p>
                </Card>
              )
            })
          )}
        </div>
      </section>
    )
  }
}

Team.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  team: PropTypes.array.isRequired,
  error: PropTypes.string,
}

const mapStateToProps = ({ team }) => {
  return {
    isFetching: team.isFetching,
    team: team.team,
    error: team.error,
  }
}

export default connect(mapStateToProps)(Team)
