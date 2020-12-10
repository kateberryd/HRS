import React from "react"
import { Row, Col } from "reactstrap"
import Breadcrumbs from "../../../../components/@vuexy/breadCrumbs/BreadCrumb"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DepartmentForm from "./departmentForm"
import DepartmentTable from "./departmentTable"
class Add extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Department"
          breadCrumbParent="Department"
          breadCrumbActive="Add"
        />
        <Row>
          <Col lg="4" md="12">
            <ToastContainer />
            <DepartmentForm />
          </Col>
          <Col lg="8" md="12">
              <DepartmentTable />
          </Col>
          
        </Row>
      </React.Fragment>
    )
  }
}
export default Add;
