import React from "react"
import { Row, Col } from "reactstrap"
import Breadcrumbs from "../../../../components/@vuexy/breadCrumbs/BreadCrumb"
import { getUserList} from "../../../../redux/actions/user/userListActions"
import { connect } from "react-redux"
import CampusForm from "./campusForm"
import CampusList from "../list/List"
class Add extends React.Component {
  state = {
    users: null,
  }
  async componentDidMount() {
    await this.props.getUserList();
    let users = this.props.users
    this.setState({ users })
    console.log(this.state.users)
  }
  render() {
   const {users} = this.state;
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Campus"
          breadCrumbParent="Campus"
          breadCrumbActive="Add"
        />
        <Row>
          <Col lg="4" md="12">
            <CampusForm users={users} />
          </Col>
          <Col lg="8" md="12">
              <CampusList />
          </Col>
          
        </Row>
      </React.Fragment>
    )
  }
}


const mapStateToProps = state => {
  return {
    users: state.userList.userList,
  }
}
export default connect(mapStateToProps, { getUserList })(Add)

