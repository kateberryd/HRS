import React from "react"
import { Row, Col } from "reactstrap"
import SalesCard from "./SalesCard"
import SuberscribersGained from "../../ui-elements/cards/statistics/SubscriberGained"
import OrdersReceived from "../../ui-elements/cards/statistics/OrdersReceived"

import "../../../assets/scss/pages/dashboard-analytics.scss"


class AnalyticsDashboard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Row className="match-height">
          <Col lg="12" md="12">
            <SalesCard />
          </Col>
          <Col lg="12" md="12" sm="12">
            <SuberscribersGained />
          </Col>
          <Col lg="12" md="12" sm="12">
            <OrdersReceived />
          </Col>
        </Row>
       
      </React.Fragment>
    )
  }
}

export default AnalyticsDashboard
