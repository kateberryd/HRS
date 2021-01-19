import React from "react"
import { Row, Col } from "reactstrap"
import { connect } from "react-redux"
import Breadcrumbs from "../../../../components/@vuexy/breadCrumbs/BreadCrumb"
import { getGroupList} from "../../../../redux/actions/group/groupActions"
import {getUserList} from "../../../../redux/actions/user/userListActions"
import DepartmentForm from "./departmentForm"
class Add extends React.Component {
  state = {
    groups: null,
    users: null
  }
  async componentDidMount() {
    await this.props.getGroupList();
    await this.props.getUserList();
    let groups = this.props.groups
    let users = this.props.users
    this.setState({ groups, users })
  }
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Department"
          breadCrumbParent="Department"
          breadCrumbActive="Add"
        />
        <Row>
          <Col lg="12" md="12">
            <DepartmentForm  groups={this.state.groups} users={this.state.users}/>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}
const mapStateToProps = state => {
  return {
    groups: state.group.groupList,
    users: state.userList.userList
  }
}
export default connect(mapStateToProps, { getGroupList, getUserList })(Add)
