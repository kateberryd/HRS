import React from "react"
import {
  Card,
  CardBody,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane
} from "reactstrap"
import classnames from "classnames"
import { User, Info} from "react-feather"
import { connect } from "react-redux"
import {getSingleDepartment} from "../../../../redux/actions/department/departmenentActions"
import { getGroupList} from "../../../../redux/actions/group/groupActions"
import {getUserList} from "../../../../redux/actions/user/userListActions"
import DepartmentForm from "./departmentForm"
import AddWorker from "./addWorker"
import "../../../../assets/scss/pages/users.scss"
class DepartmentEdit extends React.Component {
  state = {
    activeTab: "1",
    department: null,
    groups: null,
    users: null,
  }

  toggle = tab => {
    this.setState({
      activeTab: tab
    })
  }
  async componentDidMount (){
    const {getSingleDepartment, getGroupList, getUserList,  match: { params: {departmentId} }} = this.props;
    await getSingleDepartment(departmentId);
    await getUserList();
    await getGroupList();
    this.setState({department: this.props.department, users: this.props.users, groups: this.props.groups})
  }
  render() {
      const {department, activeTab, groups, users} = this.state;
    return (
      <Row>
        <Col sm="12">
          <Card>
            <CardBody className="pt-2">
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.activeTab === "1"
                    })}
                    onClick={() => {
                      this.toggle("1")
                    }}
                  >
                    <Info size={16} />
                    <span className="align-middle ml-50">Account</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.activeTab === "2"
                    })}
                    onClick={() => {
                      this.toggle("2")
                    }}
                  >
                    <User size={16} />
                    <span className="align-middle ml-50">Workers</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.activeTab === "3"
                    })}
                    onClick={() => {
                      this.toggle("3")
                    }}
                  >
                  
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Col lg="12">
                      <DepartmentForm department={department} users={users} groups={groups}/> 
                    </Col>
                </TabPane>
                
                <TabPane tabId="2">
                    <Col lg="12">
                      <AddWorker department={department} users={users} groups={groups}/> 
                    </Col>
                </TabPane>
              </TabContent>
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  }
}


const mapStateToProps = state => {
    return {
        auth: state.auth.login,
        error: state.department.error,
        department: state.department.department,
        loading: state.department.loading,
        groups: state.group.groupList,
        users: state.userList.userList
      }
  }
  export default connect(mapStateToProps, { getSingleDepartment, getUserList, getGroupList })(DepartmentEdit)
