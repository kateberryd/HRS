import React from "react"
import {
  Card,
  CardBody,
  Row,
  Col,

} from "reactstrap"
import { connect } from "react-redux"
import EventAddForm from "./eventAddForm"
import { getEventCategoryList } from "../../../../redux/actions/event-category/event-categoryActions"
import "../../../../assets/scss/pages/users.scss"
class Add extends React.Component {
  state = {
    activeTab: "1",
    categories: null,
    humanFriendly:  new Date(),

  }
  
  async componentDidMount() {
    await this.props.getEventCategoryList();
    const categories = this.props.categories
    this.setState({categories})
  }
  

  toggle = tab => {
    this.setState({
      activeTab: tab
    })
  }
  render() {
    const {categories} = this.state;
    return (
      <Row>
        <Col sm="12">
          <Card>
            <CardBody className="pt-2">
                <EventAddForm categories={categories}/>
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = state => {
  return {
    categories: state.category.categoryList
  }
}
export default connect(mapStateToProps, { getEventCategoryList })(Add)
