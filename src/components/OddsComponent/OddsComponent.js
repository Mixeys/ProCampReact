import React, { Component } from 'react'
import { Row, Table } from 'antd'
import { connect } from 'react-redux'

import './OddsComponent.scss'

import * as Type from '../../actions/constants'

export class OddsComponent extends Component {
    componentDidMount() {
        this.props.getOdds()
    }
    
    columns = [
        {
          title: 'Value',
          dataIndex: 'value',
          key: 'value',
        },
        {
          title: 'Odd',
          dataIndex: 'odd',
          key: 'odd',
        },
      ]
    render() {
        return (
            <section className="odds">
              <Row className="odds-row">
                <h2 className="odds-title">Odds</h2>
                <Table
                  columns={this.columns}
                  dataSource={this.props.odds}
                  loading={this.props.isFetchingEvents}
                />
              </Row>
            </section>
          )
    }
}

const mapStateToProps = ({odds}) => {
    return {
      odds: odds.odds
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      getOdds: () => dispatch({ type: Type.FETCHED_ODDS }),
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(OddsComponent)
