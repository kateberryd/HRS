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
import { User, Info, Share } from "react-feather"
import { connect } from "react-redux"
import {getSingleCampus} from "../../../../redux/actions/campus/campusActions"
import CampusForm from "./campusForm"

import "../../../../assets/scss/pages/users.scss"
class CampusEdit extends React.Component {
  state = {
    activeTab: "1",
    campus: null
  }

  toggle = tab => {
    this.setState({
      activeTab: tab
    })
  }
  async componentDidMount (){
    const {getSingleCampus,  match: { params: {campusId} }} = this.props;
    await getSingleCampus(campusId);
    this.setState({campus: this.props.campus})
  }
  render() {
      const {campus, activeTab} = this.state;
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
                    <User size={16} />
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
                    <Info size={16} />
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
                    <Share size={16} />
                    <span className="align-middle ml-50">Department</span>
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Col lg="7">
                        <CampusForm campus={campus}/> 
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
      error: state.campus.error,
      campus: state.campus.campus,
      loading: state.campus.loading
    }
  }
  export default connect(mapStateToProps, { getSingleCampus })(CampusEdit)
