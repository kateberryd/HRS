import React from "react"
import { Row, Col } from "reactstrap"
import Breadcrumbs from "../../../../components/@vuexy/breadCrumbs/BreadCrumb"
import RoleForm from "./roleForm"
import RoleList from "../list/List"
class Add extends React.Component {
  
  
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Role"
          breadCrumbParent="Roles"
          breadCrumbActive="Add"
        />
        <Row>
          <Col lg="4" md="12">
            <RoleForm />
          </Col>
          <Col lg="8" md="12">
              <RoleList  />
          </Col>
          
        </Row>
      </React.Fragment>
    )
  }
}

export default Add

