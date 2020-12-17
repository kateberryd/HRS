import React from "react"
import { Row, Col } from "reactstrap"
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EventCategoryAdd from "./add/eventCategoryForm"
import EventCategoryList from "./list/List"
class Add extends React.Component {

 
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Category"
          breadCrumbParent="Category"
          breadCrumbActive="Add"
        />
        <Row>
          <Col lg="4" md="12">
            <EventCategoryAdd />
          </Col>
          <Col lg="8" md="12">
              <EventCategoryList />
          </Col>
          <ToastContainer />
        </Row>
      </React.Fragment>
    )
  }
}

export default Add

