import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Media,
  Row,
  Col,
} from "reactstrap"
import { connect } from "react-redux"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import {getSingleQaulityAssurance, } from "../../../../redux/actions/qaulity-assurance/qualityAssuranceActions"
import "../../../../assets/scss/pages/users.scss"

class SicknessView extends React.Component {
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
    await this.props.getSingleQaulityAssurance(params.qualityAssuranceId)
    console.log(this.props);
 }
  render() {
    const {qaulityAssurance} = this.props
    console.log(qaulityAssurance)
    return (
      <React.Fragment>
       {qaulityAssurance ? (
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
                                <div>{qaulityAssurance ? qaulityAssurance.title.charAt(0).toUpperCase() + qaulityAssurance.title.slice(1) : null}</div>
                              </div>
                              
                           
                            </div>
                          </Col>
                          <Col md="12" lg="12">
                        
                            <div className="users-page-view-table">
                            <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                    Description
                                </div>
                                <div>{qaulityAssurance ? qaulityAssurance.description.charAt(0).toUpperCase() + qaulityAssurance.description.slice(1) : null}</div>
                            </div>
                            <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                    Department
                                </div>
                                <div>{qaulityAssurance.department ? qaulityAssurance.department.name.charAt(0).toUpperCase() + qaulityAssurance.department.name.slice(1) : null}</div>
                            </div>
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                    User
                                </div>
                                <div>{qaulityAssurance ? qaulityAssurance.user.username.charAt(0).toUpperCase() + qaulityAssurance.user.username.slice(1) : null}</div>
                              </div>
                            
                            </div>
                          </Col>
                          
                          
                       
                        </Row>
                      </Media>
                      
                  </Col>
                 
                </Row>
              </CardBody>
            </Card>
          </Col>
          
          <Col sm="12" md="6" lg="6">
            <Card>
              <CardHeader>
                <CardTitle>Comments</CardTitle>
              </CardHeader>
              <CardBody>
                <Row className="mx-0" col="12">
                  <Col className="pl-0" sm="12" md="12">
                   
                      <Media className="mt-md-1 mt-0" left>
                        <Row>
                          <Col className="" sm="9" md="12" lg="12">
                          {qaulityAssurance.comments.length !== 0 ?(
                                  <div className="users-page-view-table">
                                  <div className="d-flex user-info">
                                    <div className="user-info-title font-weight-bold">
                                        
                                        {qaulityAssurance.comments}                            
                                        
                                          </div>
                                  </div>
                                  
                               
                                </div>
                          ): (
                            <div className="users-page-view-table">
                            <div className="d-flex user-info">
                              <div className="user-info-title font-weight-bold">
                              No Comments Found
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
         ):null}
      </React.Fragment>
    )
  }
}
const mapStateToProps = state => {
  return {
    auth: state.auth.login,
    qaulityAssurance: state.qualityAssurance.qualityAssurance
  }
} 
export default connect(mapStateToProps, { getSingleQaulityAssurance })(SicknessView)
