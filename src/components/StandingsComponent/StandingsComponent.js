import React, { Component } from 'react'
import { Row, Col, Button, Table } from 'antd'
import { connect } from 'react-redux'

import './StandingsComponent.scss'

import * as Type from '../../actions/constants'

export class StandingsComponent extends Component {
  componentDidMount() {
    this.props.getStandings('1')
  }

  handleClick = e => {
    this.props.getStandings(e.target.value)
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
      render: (text, record) => {
        return <img src={record.logo} alt="logo" width={50} />
      },
    },
  ]

  render() {
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
          <h2 className="fixtures-title">Standings</h2>
          <Table
            columns={this.columns}
            dataSource={
              this.props.standings &&
              this.props.standings.map(item => {
                return {
                  rank: item.rank,
                  team_id: item.team_id,
                  teamName: item.teamName,
                  forme: item.forme,
                  logo: item.logo,
                }
              })
            }
          />
        </Row>
      </section>
    )
  }
}

const mapStateToProps = ({ standings }) => {
  return {
    standings: standings.standings[0],
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getStandings: id => dispatch({ type: Type.FETCHED_STANDINGS, payload: id }),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StandingsComponent)
