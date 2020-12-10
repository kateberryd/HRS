import React from "react"
import { Row, Col } from "reactstrap"
import Breadcrumbs from "../../../../components/@vuexy/breadCrumbs/BreadCrumb"
import CampusForm from "./campusForm"
import CampusTable from "./campusTable"
class Add extends React.Component {

 
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Campus"
          breadCrumbParent="Campus"
          breadCrumbActive="Add"
        />
        <Row>
          <Col lg="4" md="12">
            <CampusForm />
          </Col>
          <Col lg="8" md="12">
              <CampusTable />
          </Col>
          
        </Row>
      </React.Fragment>
    )
  }
}

export default Add

