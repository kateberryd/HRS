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
import {getSingleSickness, } from "../../../.././redux/actions/sickness/sicknessActions"
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
    await this.props.getSingleSickness(params.sicknessId)
    console.log(this.props);
 }
  render() {
    const {sickness} = this.props
    console.log(sickness)
    return (
      <React.Fragment>
       {sickness ? (
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
                                  Title
                                </div>
                                <div>{sickness ? sickness.title.charAt(0).toUpperCase() + sickness.title.slice(1) : null}</div>
                              </div>
                              
                           
                            </div>
                          </Col>
                          <Col md="12" lg="12">
                        
                            <div className="users-page-view-table">
                            <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                    Description
                                </div>
                                <div>{sickness ? sickness.description.charAt(0).toUpperCase() + sickness.description.slice(1) : null}</div>
                            </div>
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                    User
                                </div>
                                {/* <div>{sickness ? sickness.refer[0].username.charAt(0).toUpperCase() + sickness.refer[0].username.slice(1) : null}</div> */}
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
            <Card>
              <CardHeader>
                <CardTitle>Comments</CardTitle>
              </CardHeader>
              <CardBody>
                <Row className="mx-0" col="12">
                  <Col className="pl-0" sm="12" md="12">
                   
                      <Media className="mt-md-1 mt-0" left>
                        <Row>
                          <Col className="mt-2" sm="9" md="12" lg="12">
                          {sickness.comments.length !== 0 ?(
                                  <div className="users-page-view-table">
                                  <div className="d-flex user-info">
                                    <div className="user-info-title font-weight-bold">
                                        
                                        {sickness.comments}                            
                                        
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
    sickness: state.sickness.sickness
  }
}
export default connect(mapStateToProps, { getSingleSickness })(SicknessView)
