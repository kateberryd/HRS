import React from "react"
import { Row, Col } from "reactstrap"
import { connect } from "react-redux"
import Breadcrumbs from "../../../../components/@vuexy/breadCrumbs/BreadCrumb"
import { getCampusList} from "../../../../redux/actions/campus/campusActions"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GroupForm from "./groupForm"
import GroupList from "./groupList"
class Add extends React.Component {
  state = {
    campuses: null,
  }
  async componentDidMount() {
    await this.props.getCampusList();
    let campuses = this.props.campuses
    this.setState({ campuses })
    console.log(this.state.campuses)
  }
  
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Group"
          breadCrumbParent="Group"
          breadCrumbActive="Add"
        />
        <Row>
          <Col lg="4" md="12">
            <ToastContainer />
            <GroupForm campuses={this.state.campuses} />
          </Col>
          <Col lg="8" md="12">
              <GroupList />
          </Col>
          
        </Row>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    campuses: state.campus.campusList,
  }
}
export default connect(mapStateToProps, { getCampusList })(Add)

