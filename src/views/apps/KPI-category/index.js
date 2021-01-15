import React from "react"
import { Row, Col } from "reactstrap"
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import KPICategoryForm from "./add/KPICategoryForm"
import KPICategoryList from "./list/List"
class Add extends React.Component {

 
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="KPI Category"
          breadCrumbParent="KPI Category"
          breadCrumbActive="Add"
        />
        <Row>
          <Col lg="4" md="12">
            <KPICategoryForm />
          </Col>
          <Col lg="8" md="12">
              <KPICategoryList />
          </Col>
          <ToastContainer />
        </Row>
      </React.Fragment>
    )
  }
}

export default Add

