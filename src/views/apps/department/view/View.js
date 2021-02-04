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
  Spinner
} from "reactstrap"
import { Edit,} from "react-feather"
import { history } from "../../../../history"
import { connect } from "react-redux"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import {getSingleDepartment, } from "../../../.././redux/actions/department/departmenentActions"
import "../../../../assets/scss/pages/users.scss"

class DepartmentView extends React.Component {
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
    await this.props.getSingleDepartment(params.departmentId)
    console.log(this.props);
 }
  render() {
    const {department} = this.props
    console.log(department)
    return (
      <React.Fragment>
       {department == null ? (   
            <div className="text-center">
              <Spinner color="primary" size="lg" />
            </div>) 
         :(
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
                          <Col className="" sm="9" md="12" lg="12">
                            <div className="users-page-view-table">
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                  Name
                                </div>
                                <div>{department.name ? department.name.charAt(0).toUpperCase() + department.name.slice(1) : "No data found"}</div>
                              </div>
                              
                              
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                  Group
                                </div>
                                <div>{department.group ? department.group.name.charAt(0).toUpperCase() + department.group.name.slice(1) : "No data found"}</div>
                              </div>
                              
                           
                            </div>
                          </Col>
                          <Col md="12" lg="12">
                        
                            <div className="users-page-view-table">
                            <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                    State
                                </div>
                                <div>{department.state ? department.state.charAt(0).toUpperCase() + department.state.slice(1) : "No data found"}</div>
                            </div>
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                    Country
                                </div>
                                <div>{department.country ? department.country.charAt(0).toUpperCase() + department.country.slice(1) : "NO data found"}</div>
                              </div>
                              
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                    Address
                                </div>
                                <div>{department.address ? department.address.charAt(0).toUpperCase() + department.address.slice(1) : "no data found"}</div>
                              </div>
                              
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                    Head of Dept.
                                </div>
                                <div>{department.HOD ? department.HOD.charAt(0).toUpperCase() + department.HOD.slice(1) : "No data found"}</div>
                              </div>
                              
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                   ASST. Head of Dept.
                                </div>
                                <div>{department.asst_HOD ? department.asst_HOD.charAt(0).toUpperCase() + department.asst_HOD.slice(1) : "No data found"}</div>
                              </div>
                            
                            </div>
                          </Col>
                          
                          
                       
                        </Row>
                      </Media>
                      
                  </Col>
                  <Col className="mt-1 pl-0" sm="12">
                    <Button.Ripple className="mr-1" color="primary" outline
                       onClick={() => history.push(`/edit-department/${department._id}`)}
                    >
   
                        <Edit size={15}
                          
                         />
                        <span className="align-middle ml-50">Edit</span>
                      
                    </Button.Ripple>
                 
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          
          <Col sm="12" md="6" lg="6">
            <Card>
              <CardHeader>
                <CardTitle>Workers</CardTitle>
              </CardHeader>
              <CardBody>
                <Row className="mx-0" col="12">
                  <Col className="pl-0" sm="12" md="12">
                   
                      <Media className=" mt-0" left>
                        <Row>
                          <Col  sm="9" md="12" lg="12">
                          {department.workers.length !== 0 ?(
                                  <div className="users-page-view-table">
                                  <div className="d-flex user-info">
                                    <div className="user-info-title font-weight-bold">
                                        
                                        {department.workers.map(element => (
                                            element.username ? element.username.charAt(0).toUpperCase() + element.username.slice(1) : "No data found"                                        ))}                            
                                        
                                          </div>
                                  </div>
                                  
                               
                                </div>
                          ): (
                            <div className="users-page-view-table">
                            <div className="d-flex user-info">
                              <div className="user-info-title font-weight-bold">
                              No worker Found
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
         <ToastContainer />
        </Row>
         )}
      </React.Fragment>
    )
  }
}
const mapStateToProps = state => {
  return {
    auth: state.auth.login,
    department: state.department.department
  }
}
export default connect(mapStateToProps, { getSingleDepartment })(DepartmentView)
