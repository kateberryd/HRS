import React from "react"
import { Row, Col } from "reactstrap"
import { connect } from "react-redux"
import Breadcrumbs from "../../../../components/@vuexy/breadCrumbs/BreadCrumb"
import { getGroupList} from "../../../../redux/actions/group/groupActions"
import DepartmentForm from "./departmentForm"
class Add extends React.Component {
  state = {
    groups: null,
  }
  async componentDidMount() {
    await this.props.getGroupList();
    let groups = this.props.groups
    this.setState({ groups })
    console.log(this.state.groups)
  }
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Department"
          breadCrumbParent="Department"
          breadCrumbActive="Add"
        />
        <Row>
          <Col lg="12" md="12">
            <DepartmentForm  groups={this.state.groups}/>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}
const mapStateToProps = state => {
  return {
    groups: state.group.groupList,
  }
}
export default connect(mapStateToProps, { getGroupList })(Add)
