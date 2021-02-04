import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Media,
  Row,
  Col,
  Spinner
} from "reactstrap"
import { connect } from "react-redux"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import {getSingleContent, editContent} from "../../../.././redux/actions/content/contentActions"
import "../../../../assets/scss/pages/users.scss"

class ContentView extends React.Component {
  state = {
    activeTab: "1",
  }

  toggleTab = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab })
    }
  }


 
editContent = async () => {
  await this.toggleModalThree();
  const { match: { params } } = this.props;
   this.props.editContent(params.userId)
 }
  
 async componentDidMount(){
    const { match: { params } } = this.props;
    await this.props.getSingleContent(params.contentId)
    console.log(this.props);
 }
  render() {
    const {content} = this.props
    console.log(content)
    return (
      <React.Fragment>
      {content == null ? (   
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
                      
                      <Media
                          className="rounded mr-2"
                          object
                          src={content? content.attachment : null}
                          alt="No Image found"
                          height="300"
                          width="300"
                        />
                    
                      
                        <Row>
                          <Col className="mt-2" sm="9" md="12" lg="12">
                            <div className="users-page-view-table">
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                  Title
                                </div>
                                <div>{content ? content.title.charAt(0).toUpperCase() + content.title.slice(1) : null}</div>
                              </div>
                              
                           
                            </div>
                          </Col>
                          <Col md="12" lg="12">
                        
                            <div className="users-page-view-table">
                            <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                    Description
                                </div>
                                <div>{content ? content.description.charAt(0).toUpperCase() + content.description.slice(1) : null}</div>
                            </div>
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                    User
                                </div>
                                <div>{content ? content.user.username.charAt(0).toUpperCase() + content.user.username.slice(1) : null}</div>
                              </div>
                            
                            </div>
                          </Col>
                          
                          
                       
                        </Row>
                      </Media>
                      
                  </Col>
                  <Col className="mt-1 pl-0" sm="12">
                   
                 
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
                          {content.comments.length !== 0 ?(
                                  <div className="users-page-view-table">
                                  <div className="d-flex user-info">
                                    <div className="user-info-title font-weight-bold">
                                        
                                        {content.comments}                            
                                        
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
         )}
      </React.Fragment>
    )
  }
}
const mapStateToProps = state => {
  return {
    auth: state.auth.login,
    content: state.content.content
  }
}
export default connect(mapStateToProps, { getSingleContent, editContent })(ContentView)
