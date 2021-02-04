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
import { connect } from "react-redux"
import { history } from "../../../../history"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import {getSingleGroup, } from "../../../.././redux/actions/group/groupActions"
import "../../../../assets/scss/pages/users.scss"

class GroupView extends React.Component {
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
    await this.props.getSingleGroup(params.groupId)
    console.log(this.props);
 }
  render() {
    const {group} = this.props
    console.log(group)
    return (
      <React.Fragment>
       {group == null ? (   
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
                                  Title
                                </div>
                                <div>{group.name ? group.name.charAt(0).toUpperCase() + group.name.slice(1) : "No data found"}</div>
                              </div>
                              
                           
                            </div>
                          </Col>
                          <Col md="12" lg="12">
                        
                            <div className="users-page-view-table">
                            <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                    State
                                </div>
                                <div>{group.state ? group.state.charAt(0).toUpperCase() + group.state.slice(1) : "No data found"}</div>
                            </div>
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                    Country
                                </div>
                                <div>{group.country ? group.country.charAt(0).toUpperCase() + group.country.slice(1) : "NO data found"}</div>
                              </div>
                              
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                    Address
                                </div>
                                <div>{group.address ? group.address.charAt(0).toUpperCase() + group.address.slice(1) : "no data found"}</div>
                              </div>
                              
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                    Campus
                                </div>
                                <div>{group.campus.name ? group.campus.name.charAt(0).toUpperCase() + group.campus.name.slice(1) : "no data found"}</div>
                              </div>
                              
                             
                            
                            </div>
                          </Col>
                        </Row>
                      </Media>
                      
                  </Col>
                  <Col className="mt-1 pl-0" sm="12">
                    <Button.Ripple color="primary" outline
                          onClick={() => history.push(`/edit-group/${group._id}`)}
                        >
                          <span className="align-middle ml-50">Edit</span>
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
                <CardTitle>Departments</CardTitle>
              </CardHeader>
              <CardBody>
                <Row className="mx-0" col="12">
                  <Col className="pl-0" sm="12" md="12">
                   
                      <Media  left>
                        <Row>
                          <Col className="mt-" sm="9" md="12" lg="12">
                          {group.department.length !== 0 ?(
                                  <div className="users-page-view-table">
                                  <div className="d-flex user-info">
                                    <div className="user-info-title font-weight-bold">
                                        
                                        {group.department.map(element => (
                                            element.title ? element.title.charAt(0).toUpperCase() + element.title.slice(1) : "No data found"                                        ))}                            
                                        
                                          </div>
                                  </div>
                                  
                               
                                </div>
                          ): (
                            <div className="users-page-view-table">
                            <div className="d-flex user-info">
                              <div className="user-info-title font-weight-bold">
                                No data found
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
         )}
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
export default connect(mapStateToProps, {getSingleGroup })(GroupView)
