import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Media,
  Row,
  Col,
  Button,
} from "reactstrap"
import { Edit,} from "react-feather"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
// import WorkerList from "../worker/workersList"
import DepartmentList  from "../department/departmentList"
import {getSingleGroup, editSingleGroup} from "../../../.././redux/actions/group/groupActions"
import "../../../../assets/scss/pages/users.scss"

class EventView extends React.Component {
  state = {
    activeTab: "1",
    group: null,
  }

  toggleTab = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab })
    }
  }


 
editSingleGroup = async () => {
  await this.toggleModalThree();
  const { match: { params } } = this.props;
   this.props.editSingleGroup(params.userId)
 }
  
 async componentDidMount(){
    const { match: { params } } = this.props;
    await this.props.getSingleGroup(params.groupId)
 }
  render() {
    const {group} = this.props
    console.log(group)
    return (
      <React.Fragment>
        <Row>
          <Col sm="12" md="12">
            <Card>
              <CardHeader>
                <CardTitle>Group Details</CardTitle>
              </CardHeader>
              <CardBody>
                <Row className="mx-0" col="6">
                  <Col className="pl-0" sm="12" md="12">
                   
                      <Media className="mt-md-1 mt-0" left>
                        <Row>
                          <Col className="mt-2" sm="9" md="12" lg="12">
                            <div className="users-page-view-table">
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                    Name
                                </div>
                                <div>{group ? group.name.charAt(0).toUpperCase() + group.name.slice(1) : null}</div>
                              </div>
                              
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                    Campus
                                </div>
                                <div>{group ? group.campus.name.charAt(0).toUpperCase() + group.campus.name.slice(1) : null}</div>
                              </div>
                              
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                    Address
                                </div>
                                <div>{group ? group.address.charAt(0).toUpperCase() + group.address.slice(1) : null}</div>
                              </div>
                            </div>
                          </Col>
                          <Col md="12" lg="5">
                        
                            <div className="users-page-view-table">                           
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                  State  
                                </div>
                                <div>{group ? group.state.charAt(0).toUpperCase() + group.state.slice(1) : null}</div>
                              </div>
                              
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                  Country
                                </div>
                                <div>{group ? group.country.charAt(0).toUpperCase() + group.country.slice(1) : null}</div>
                              </div>
                            
                            </div>
                          </Col>
                        </Row>
                      </Media>
                  </Col>
                  <Col className="mt-1 pl-0" sm="12">
                    <Button.Ripple className="mr-1" color="primary" outline>
                      <Link to="/app/user/edit">
                        <Edit size={15} />
                        <span className="align-middle ml-50">Edit</span>
                      </Link>
                    </Button.Ripple>
                 
                  </Col>
                  
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" md="12">
            <Card>
              <CardHeader>
                <CardTitle>Departments</CardTitle>
              </CardHeader>
                    <CardBody>
                        <DepartmentList />
                    </CardBody>
                    </Card>
                </Col>
                <Col sm="12" md="12">
            <Card>
              <CardHeader>
                <CardTitle>Workers</CardTitle>
                </CardHeader>
                    <CardBody>
                        {/* <WorkerList rowData={group.workers} /> */}
                    </CardBody>
                    </Card>
                </Col>
         <ToastContainer />
        </Row>
      </React.Fragment>
    )
  }
}
const mapStateToProps = state => {
  return {
    auth: state.auth.login,
    group: state.group.group
  }
}
export default connect(mapStateToProps, { getSingleGroup, editSingleGroup })(EventView)
