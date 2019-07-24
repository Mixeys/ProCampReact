import React, { Component } from 'react'
import { Row, Col, Button, Menu, Dropdown, Table } from 'antd'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import moment from 'moment'
import { Link } from '@reach/router'

import './OddsComponent.scss'

import * as Type from '../../actions/constants'

export class OddsComponent extends Component {
    componentDidMount() {
        this.props.getOdds()
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
          title: 'Draw',
          dataIndex: 'draw',
          key: 'draw',
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
        return (
            <section className="fixtures">
              <Row className="fixtures-row">
                <h2 className="fixtures-title">Odds</h2>
                <Table
                  columns={this.columns}
                //   dataSource={this.event}
                  loading={this.props.isFetchingEvents}
                />
              </Row>
            </section>
          )
    }
}

const mapStateToProps = ({ fixtures }) => {
    return {
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      getFixtures: () => dispatch({ type: Type.FETCHED_FIXTURES }),
      getOdds: () => dispatch({ type: Type.FETCHED_ODDS }),
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(OddsComponent)
