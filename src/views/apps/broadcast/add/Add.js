import React from "react"
import { Row, Col } from "reactstrap"
import Breadcrumbs from "../../../../components/@vuexy/breadCrumbs/BreadCrumb"
import { connect } from "react-redux"
import BroadcastAddForm from "./broadcastAddForm"
class Add extends React.Component {
    
 
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Broadcast"
          breadCrumbParent="Broadcast"
          breadCrumbActive="Add"
        />
        <Row>
          <Col lg="12" md="12">
            <BroadcastAddForm  />
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


