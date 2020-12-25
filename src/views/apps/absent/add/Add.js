import React from "react"
import { Row, Col } from "reactstrap"
import Breadcrumbs from "../../../../components/@vuexy/breadCrumbs/BreadCrumb"
import { connect } from "react-redux"
import { getEventList } from "../../../../redux/actions/event/eventActions"
import {getUserList} from "../../../.././redux/actions/user/userListActions"
import AbsenteeForm from "./absentAddForm"
class Add extends React.Component {
    
state ={
    events: null,
    users: null,
}
async componentDidMount() {
    await this.props.getEventList();
    await this.props.getUserList();
    let events = this.props.events
    let users = this.props.users
    this.setState({ events, users })
}
 
  render() {
    const {events, users} = this.state;
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Absentee"
          breadCrumbParent="Absentee"
          breadCrumbActive="Add"
        />
        <Row>
          <Col lg="12" md="12">
            <AbsenteeForm events={events} users={users} />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
    return {
        events: state.event.eventList,
        users: state.userList.userList

    }
  }
export default connect(mapStateToProps, { getEventList, getUserList })(Add)


