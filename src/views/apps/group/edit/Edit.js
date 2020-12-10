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
import {getSingleGroup} from "../../../../redux/actions/group/groupActions"
import {getUserList} from "../../../../redux/actions/user/userListActions"
import GroupForm from "./groupForm"
import GroupWorkers from "../worker/addGroupWorkers"
import WorkersList from "../worker/workersList"

import "../../../../assets/scss/pages/users.scss"
class GroupEdit extends React.Component {
  state = {
    activeTab: "1",
    group: null,
    users: null
  }

  toggle = tab => {
    this.setState({
      activeTab: tab
    })
  }
  async componentDidMount (){
    const {getSingleGroup,getUserList,  match: { params: {groupId} }} = this.props;
    await getSingleGroup(groupId);
    await getUserList();
    this.setState({group: this.props.group, users: this.props.users})
  }
  render() {
      const {group, users, activeTab} = this.state;
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
                    <span className="align-middle ml-50">Group</span>
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
                    <span className="align-middle ml-50">Group Workers</span>
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
                    <Col lg="7">
                      <GroupForm group={group} /> 
                    </Col>
                </TabPane>
                
                <TabPane tabId="2">
                    <Row>
                    <Col lg="5">
                      <GroupWorkers users={users} group={group}/> 
                    </Col>
                    <Col lg="7">
                      <WorkersList /> 
                    </Col>
                    </Row>
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
        error: state.group.error,
        group: state.group.group,
        users: state.userList.userList,
        loading: state.group.loading,
      }
  }
  export default connect(mapStateToProps, { getSingleGroup, getUserList })(GroupEdit)
