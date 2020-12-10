import React from "react"
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Media,
  Row,
  Col,
  Button,
} from "reactstrap"
import { Edit, Trash,} from "react-feather"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import {getSingleUser, suspendUser, activateUser, deleteUser} from "../../../.././redux/actions/user/singleUserAction"
import userImg from "../../../../assets/img/portrait/small/avatar-s-18.jpg"
import "../../../../assets/scss/pages/users.scss"

class UserView extends React.Component {
  state = {
    activeTab: "1",
    modal: false,
    modal2: false,
    modal3: false,
  }

  toggleTab = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab })
    }
  }

  toggleModal = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }
  
  toggleModalTwo = () => {
    this.setState(prevState => ({
      modal2: !prevState.modal2
    }))
  }
  
  
  suspendUser = async () => {
   await this.toggleModal();
   const { match: { params } } = this.props;
    this.props.suspendUser(params.userId)
  }
  
  activateUser = async () => {
    await this.toggleModalTwo();
    const { match: { params } } = this.props;
     this.props.activateUser(params.userId)
 }
  
  
 toggleModalThree = () => {
  this.setState(prevState => ({
    modal3: !prevState.modal3
  }))
}
 
 
deleteUser = async () => {
  await this.toggleModalThree();
  const { match: { params } } = this.props;
   this.props.deleteUser(params.userId)
 }
  
 async componentDidMount(){
    const { match: { params } } = this.props;
    await this.props.getSingleUser(params.userId)
    console.log(this.props);
  }
  render() {
    const {user} = this.props
    console.log(user)
    return (
      <React.Fragment>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <CardTitle>Account</CardTitle>
              </CardHeader>
              <CardBody>
                <Row className="mx-0" col="12">
                  <Col className="pl-0" sm="12">
                    <Media className="d-sm-flex d-block">
                      <Media className="mt-md-1 mt-0" left>
                        <Media
                          className="rounded mr-2"
                          object
                          src={userImg}
                          alt="Generic placeholder image"
                          height="112"
                          width="112"
                        />
                      </Media>
                      <Media body>
                        <Row>
                          <Col sm="9" md="6" lg="5">
                            <div className="users-page-view-table">
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                  Username
                                </div>
                                 <div>{user.username}</div>
                              </div>
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                  Name
                                </div>
                                <div>Crystal Hamilton</div>
                              </div>
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                  Email
                                </div>
                                <div className="text-truncate">
                                  <span>{user.email}</span>
                                </div>
                              </div>
                            </div>
                          </Col>
                          <Col md="12" lg="5">
                            <div className="users-page-view-table">
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                  Status
                                </div>
                                <div>{user.active ? "Active" : "Inactive"}</div>
                              </div>
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                  Role
                                </div>
                                <div>{user.role}</div>
                              </div>
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                  isOnline
                                </div>
                                <div>
                                  <span>{user.isOnline ? "Yes" : "No"}</span>
                                </div>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Media>
                    </Media>
                  </Col>
                  <Col className="mt-1 pl-0" sm="12">
                    <Button.Ripple className="mr-1" color="primary" outline>
                      <Link to="/app/user/edit">
                        <Edit size={15} />
                        <span className="align-middle ml-50">Edit</span>
                      </Link>
                    </Button.Ripple>
                    <Button.Ripple className="mr-1" color="danger" outline
                        onClick={this.toggleModalThree}
                    >
                      <Trash size={15} />
                      <span className="align-middle ml-50">Delete</span>
                    </Button.Ripple>
                    
                    <Button.Ripple className="mr-1" color="danger" outline
                     onClick={this.toggleModal}
                    >
                      <Edit size={15} />
                      <span className="align-middle ml-50">Suspend</span>
                    </Button.Ripple>
                    
                    <Button.Ripple className="mr-1" color="danger" outline 
                       onClick={this.toggleModalTwo}
                    >
                      <Trash size={15} />
                      <span className="align-middle ml-50">Activate</span>
                    </Button.Ripple>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" md="6">
            <Card>
              <CardHeader>
                <CardTitle>Information</CardTitle>
              </CardHeader>
              <CardBody>
                <div className="users-page-view-table">
                  <div className="d-flex user-info">
                    <div className="user-info-title font-weight-bold">
                      Date of Birth
                    </div>
                    <div> {user.dateOfBirthday}</div>
                  </div>
                  <div className="d-flex user-info">
                    <div className="user-info-title font-weight-bold">
                      Mobile
                    </div>
                    <div>{user.phoneNumber}</div>
                  </div>
                 
                  <div className="d-flex user-info">
                    <div className="user-info-title font-weight-bold">
                     Department
                    </div>
                    <div className="text-truncate">
                      <span>{user.department}</span>
                    </div>
                  </div>
                  <div className="d-flex user-info">
                    <div className="user-info-title font-weight-bold">
                      Gender
                    </div>
                    <div className="text-truncate">
                      <span>{user.sex}</span>
                    </div>
                  </div>
                  <div className="d-flex user-info">
                    <div className="user-info-title font-weight-bold">
                      Marital Status
                    </div>
                    <div className="text-truncate">
                      <span>{user.maritalStatus}</span>
                    </div>
                  </div>
                  <div className="d-flex user-info">
                    <div className="user-info-title font-weight-bold">
                      Notification counter
                    </div>
                    <div className="text-truncate">
                      <span>{user.notificationCounter}</span>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" md="6">
            <Card>
              <CardHeader>
                <CardTitle>Information</CardTitle>
              </CardHeader>
              <CardBody>
                <div className="users-page-view-table">
                  <div className="d-flex user-info">
                    <div className="user-info-title font-weight-bold">
                      Secret Token
                    </div>
                    <div className="text-truncate">
                      <span>{user.secretToken}</span>
                    </div>
                  </div>
                  <div className="d-flex user-info">
                    <div className="user-info-title font-weight-bold">
                      Device Token
                    </div>
                    <div className="text-truncate">
                        <span>{user.deviceToken}</span>
                    </div>
                  </div>
                  <div className="d-flex user-info">
                    <div className="user-info-title font-weight-bold">
                        Device Registered
                    </div>
                    <div className="text-truncate">
                      <span>{user.deviceRegistered}</span>
                    </div>
                  </div>
                  <div className="d-flex user-info">
                    <div className="user-info-title font-weight-bold">
                        Profile Status
                    </div>
                    <div className="text-truncate">
                        <span>{user.profileStatus}</span>
                    </div>
                  </div>
                  <div className="d-flex user-info">
                    <div className="user-info-title font-weight-bold">
                        Registration Date
                    </div>
                    <div className="text-truncate">
                      <span>{user.date}</span>
                    </div>
                  </div>
                  <div className="d-flex user-info">
                    <div className="user-info-title font-weight-bold">
                      Slack
                    </div>
                    <div className="text-truncate">
                      <span>@crystal</span>
                    </div>
                  </div>
                </div>
                <ToastContainer />
              </CardBody>
            </Card>
            
          </Col>
          <Col>
              <Modal
                  isOpen={this.state.modal}
                  toggle={this.toggleModal}
                  className={this.props.className}
                >
                  <ModalHeader toggle={this.toggleModal}>
                    Suspend
                  </ModalHeader>
                  <ModalBody>
                    <h5>Are you sure you want to suspend this user?</h5>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary"onClick={this.suspendUser} >
                      Accept
                    </Button>{" "}
                  </ModalFooter>
                </Modal>
                
                
                <Modal
                  isOpen={this.state.modal2}
                  toggle={this.toggleModalTwo}
                  className={this.props.className}
                >
                  <ModalHeader toggle={this.toggleModalTwo}>
                    Activate
                  </ModalHeader>
                  <ModalBody>
                    <h5>Are you sure you want to active this user?</h5>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary"onClick={this.activateUser} >
                      Accept
                    </Button>{" "}
                  </ModalFooter>
                </Modal>
                
                
                <Modal
                  isOpen={this.state.modal3}
                  toggle={this.toggleModalThree}
                  className={this.props.className}
                >
                  <ModalHeader toggle={this.toggleModalThree}>
                    Delete
                  </ModalHeader>
                  <ModalBody>
                    <h5>Are you sure you want to delete this user?</h5>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary"onClick={this.deleteUser} >
                      Accept
                    </Button>{" "}
                  </ModalFooter>
                </Modal>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}
const mapStateToProps = state => {
  return {
    auth: state.auth.login,
    user: state.userList.user
  }
}
export default connect(mapStateToProps, { getSingleUser, suspendUser, activateUser, deleteUser })(UserView)
