import React from "react"
import {
  Card,
  CardBody,
  Row,
  Col,

} from "reactstrap"
import EventAddForm from "./eventAddForm"
import "../../../../assets/scss/pages/users.scss"
class Add extends React.Component {
  state = {
    activeTab: "1",
    humanFriendly:  new Date(),

  }

  toggle = tab => {
    this.setState({
      activeTab: tab
    })
  }
  render() {
    return (
      <Row>
        <Col sm="12">
          <Card>
            <CardBody className="pt-2">
                <EventAddForm />
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  }
}
export default Add
