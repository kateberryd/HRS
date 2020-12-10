import React from "react"
import { Row, Col } from "reactstrap"
import { connect } from "react-redux"
import Breadcrumbs from "../../../../components/@vuexy/breadCrumbs/BreadCrumb"
import { getDepartmentList} from "../../../../redux/actions/department/departmenentActions"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GroupForm from "./groupForm"
import GroupList from "./groupList"
class Add extends React.Component {
  state = {
    departments: null,
  }
  async componentDidMount() {
    await this.props.getDepartmentList();
    let departments = this.props.departments
    this.setState({ departments })
    console.log(this.state.departments)
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
            <GroupForm departments={this.state.departments} />
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
    departments: state.department.departmentList,
  }
}
export default connect(mapStateToProps, { getDepartmentList })(Add)

