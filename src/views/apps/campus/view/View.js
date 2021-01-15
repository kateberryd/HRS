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
import {getSingleCampus, } from "../../../.././redux/actions/campus/campusActions"
import "../../../../assets/scss/pages/users.scss"

class CampusView extends React.Component {
  state = {
    activeTab: "1",
  }

  toggleTab = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab })
    }
  }


 formatDate = (string) => {
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(string).toLocaleDateString([],options);
}
 
formatTime = (string) => {
    var options = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return new Date(string).toLocaleTimeString([],options);
}
 
 

  
 async componentDidMount(){
    const { match: { params } } = this.props;
    await this.props.getSingleCampus(params.campusId)
    console.log(this.props);
 }
  render() {
    const {campus} = this.props
    console.log(campus)
    return (
      <React.Fragment>
       {campus ? (
        <Row>
          <Col sm="12" md="6" lg="6">
            <Card>
              <CardHeader>
                <CardTitle>Information</CardTitle>
              </CardHeader>
              <CardBody>
                <Row className="mx-0" col="12">
                  <Col className="pl-0" sm="12" md="12">
                   
                      <Media className="mt-md-1 mt-0" left>
                      
                    
                      
                        <Row>
                          <Col className="mt-2" sm="9" md="12" lg="12">
                            <div className="users-page-view-table">
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                  Name
                                </div>
                                <div>{campus ? campus.name.charAt(0).toUpperCase() + campus.name.slice(1) : null}</div>
                              </div>
                              
                           
                            </div>
                          </Col>
                          <Col md="12" lg="12">
                        
                            <div className="users-page-view-table">
                            <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                    Global Senoir Pastor
                                </div>
                                <div>{campus.global_senior_pastor ? campus.global_senior_pastor : "No data found"}</div>
                            </div>
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                    SPMO
                                </div>
                                <div>{campus.SPMO ? campus.SPMO : "No data found"}</div>
                              </div>
                              
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                    Campus Pastor
                                </div>
                                <div>{
                                    campus.campus_pastor ? campus.campus_pastor : "No data found"}</div>
                              </div>
                              
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                    Campus Coordinator
                                </div>
                                <div>{campus.campus_coordinator ? campus.campus_coordinator : "No data found"}</div>
                              </div>
                              
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                    Group Head
                                </div>
                                <div>{campus.group_head ? campus.group_head : "No data found"}</div>
                              </div>
                              
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                    HOD
                                </div>
                                <div>{campus.HOD ? campus.HOD : "No data found"}</div>
                              </div>
                              
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                    ASST HOD
                                </div>
                                <div>{campus.asst_HOD ? campus.asst_HOD : "No data found"}</div>
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
          
          <Col sm="12" md="6" lg="6">
            <Row>
            <Col lg="12" md="12">
            <Card>
              <CardHeader>
                <CardTitle>Groups</CardTitle>
              </CardHeader>
              <CardBody>
                <Row className="mx-0" col="12">
                  <Col className="pl-0" sm="12" md="12">
                   
                      <Media className="mt-md-1 mt-0" left>
                        <Row>
                          <Col className="mt-2" sm="9" md="12" lg="12">
                          {campus.group.length !== 0 ?(
                                  <div className="users-page-view-table">
                                  <div className="d-flex user-info">
                                    <div className="user-info-title font-weight-bold">
                                        
                                        {campus.group}                            
                                        
                                          </div>
                                  </div>
                                  
                               
                                </div>
                          ): (
                            <div className="users-page-view-table">
                            <div className="d-flex user-info">
                              <div className="user-info-title font-weight-bold">
                              No Group Found
                            </div>
                         
                          </div>
                          </div>
                          )}
                          </Col>
                        </Row>
                      </Media>
                      
                  </Col>
                </Row>
              </CardBody>
            </Card>                    
            </Col>

            </Row>
                            
            <Row>
            <Col lg="12" md="12">
            <Card>
              <CardHeader>
                <CardTitle>Departments</CardTitle>
              </CardHeader>
              <CardBody>
                <Row className="mx-0" col="12">
                  <Col className="pl-0" sm="12" md="12">
                   
                      <Media className="mt-md-1 mt-0" left>
                        <Row>
                          <Col className="mt-2" sm="9" md="12" lg="12">
                          {campus.department.length !== 0 ?(
                                  <div className="users-page-view-table">
                                  <div className="d-flex user-info">
                                    <div className="user-info-title font-weight-bold">
                                        
                                        {campus.department}                            
                                        
                                          </div>
                                  </div>
                                  
                               
                                </div>
                          ): (
                            <div className="users-page-view-table">
                            <div className="d-flex user-info">
                              <div className="user-info-title font-weight-bold">
                              No Department Found
                            </div>
                         
                          </div>
                          </div>
                          )}
                          </Col>
                        </Row>
                      </Media>
                      
                  </Col>
                    </Row>
                </CardBody>
                </Card>
                </Col>
            </Row>
            
            <Row lg="12" md="12">
            <Col lg="12" md="12">
                <Card>
                <CardHeader>
                    <CardTitle>Workers</CardTitle>
                </CardHeader>
                <CardBody>
                 <Row className="mx-0" col="12">
                  <Col className="pl-0" sm="12" md="12">
                   
                      <Media className="mt-md-1 mt-0" left>
                        <Row>
                          <Col className="mt-2" sm="9" md="12" lg="12">
                          {campus.workers.length !== 0 ?(
                                  <div className="users-page-view-table">
                                  <div className="d-flex user-info">
                                    <div className="user-info-title font-weight-bold">
                                        
                                        {campus.workers}                            
                                        
                                          </div>
                                  </div>
                                  
                               
                                </div>
                          ): (
                            <div className="users-page-view-table">
                            <div className="d-flex user-info">
                              <div className="user-info-title font-weight-bold">
                              No Worker Found
                            </div>
                         
                          </div>
                          </div>
                          )}
                            </Col>
                            </Row>
                        </Media>
                        
                    </Col>
                    </Row>
                </CardBody>
                </Card>
                </Col>
            </Row>
          </Col>
         <ToastContainer />
        </Row>
         ):null}
      </React.Fragment>
    )
  }
}
const mapStateToProps = state => {
  return {
    auth: state.auth.login,
    campus: state.campus.campus
  }
}
export default connect(mapStateToProps, { getSingleCampus })(CampusView)
