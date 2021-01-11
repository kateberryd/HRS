import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Row,
  Col,
  Input,
  Form,
  Button,
  Label
} from "reactstrap"

import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy";
import { Check } from "react-feather"

class RoleForm extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Create Role</CardTitle>
        </CardHeader>
        <CardBody>
          <Form>
            <Row>
              <Col sm="12">
                <FormGroup>
                  <Label className="mb-2" for="nameVertical">Role Name</Label>
                  <Input
                    type="text"
                    name="name"
                    id="nameVertical"
                    placeholder="Role Name"
                  />
                </FormGroup>
              </Col>
              <Col sm="12">
                <FormGroup>
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                    onClick={e => e.preventDefault()}
                  >
                    Submit
                  </Button.Ripple>
                  
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    )
  }
}
export default RoleForm
