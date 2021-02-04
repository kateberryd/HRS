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
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import {getSingleEvent, editEvent} from "../../../.././redux/actions/event/eventActions"
import "../../../../assets/scss/pages/users.scss"

class EventView extends React.Component {
  state = {
    activeTab: "1",
    event: null
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
 
 
editEvent = async () => {
  await this.toggleModalThree();
  const { match: { params } } = this.props;
   this.props.editEvent(params.userId)
 }
  
 async componentDidMount(){
    const { match: { params } } = this.props;
    await this.props.getSingleEvent(params.eventId)
    this.setState({event: this.props.event})
 }
  render() {
    const {event} = this.state
    console.log(event)
    return (
      <React.Fragment>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <CardTitle> Event</CardTitle>
              </CardHeader>
              <CardBody>
              {event == null ? (   
                    <div className="text-center">
                      <Spinner color="primary" size="lg" />
                    </div>) 
               :(
                <Row className="mx-0" col="6">
                  <Col className="pl-0" sm="12" md="12">
                   
                      <Media className="mt-md-1 mt-0" left>
                        <Media
                          className="rounded mr-2"
                          object
                          src={event? event.coverImage : null}
                          alt="Generic placeholder image"
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
                                <div>{event ? event.title.charAt(0).toUpperCase() + event.title.slice(1) : null}</div>
                              </div>
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                   Event Date
                                </div>
                                <div>{event ? this.formatDate(event.date) : null}</div>
                              </div>
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                    Event Start Time
                                </div>
                                <div className="text-truncate">
                                  <span>{event ? this.formatTime(event.startTime) : null}</span>
                                </div>
                              </div>
                              
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                    Event End Time
                                </div>
                                <div className="text-truncate">
                                  <span>{event ? this.formatTime(event.endTime) : null}</span>
                                </div>
                              </div>
                            </div>
                          </Col>
                          <Col md="12" lg="5">
                        
                            <div className="users-page-view-table">
                            <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                    Category
                                </div>
                                <div>{event ? event.category.name.charAt(0).toUpperCase() + event.category.name.slice(1) : null}</div>
                            </div>
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                    Location
                                </div>
                                <div>{event ? event.location.charAt(0).toUpperCase() + event.location.slice(1) : null}</div>
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
                )}
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
    event: state.event.event,
    loading: state.event.loading
  }
}
export default connect(mapStateToProps, { getSingleEvent, editEvent })(EventView)
