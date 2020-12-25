import React from "react"
import { Row, Col } from "reactstrap"
import Breadcrumbs from "../../../../components/@vuexy/breadCrumbs/BreadCrumb"
import { connect } from "react-redux"
import ContentAddForm from "./contentAddForm"
class Add extends React.Component {
    
 
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Content"
          breadCrumbParent="Content"
          breadCrumbActive="Add"
        />
        <Row>
          <Col lg="12" md="12">
            <ContentAddForm  />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
    return {
        content: state.content.content
    }
  }
export default connect(mapStateToProps, { })(Add)


