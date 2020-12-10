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
import DepartmentForm from "./departmentForm"

import "../../../../assets/scss/pages/users.scss"
class DepartmentEdit extends React.Component {
  state = {
    activeTab: "1",
    department: null
  }

  toggle = tab => {
    this.setState({
      activeTab: tab
    })
  }
  async componentDidMount (){
    const {getSingleDepartment,  match: { params: {departmentId} }} = this.props;
    await getSingleDepartment(departmentId);
    this.setState({department: this.props.department})
  }
  render() {
      const {department, activeTab} = this.state;
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
                    <Col lg="7">
                      <DepartmentForm department={department}/> 
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
      }
  }
  export default connect(mapStateToProps, { getSingleDepartment })(DepartmentEdit)
