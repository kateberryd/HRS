import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Row,
  Col,
  Button,
  Label
} from "reactstrap"

import { Formik, Field, Form } from "formik"
import { createRole } from "../../../../redux/actions/role/roleActions"
import { connect } from "react-redux"


import {Message} from "../../../../components/setAlert/message"



class RoleForm extends React.Component {
  render() {
       const {loading, createRole, error} = this.props
    return (
      <Card>
      <CardHeader>
        <Message message={error.message} />
        <CardTitle className="">Add Role</CardTitle>
      </CardHeader>
      <CardBody>
      <Formik
          initialValues={{
            name: "",
          }}
          // validationSchema={formSchema}
          onSubmit={(values, actions) => {
            createRole(values)
          }}
        >
        {({ errors, touched}) => (
        <Form >
          <Row>
            <Col sm="12" lg="12" md="12">
              <FormGroup>
                <Label className="mb-1" for="nameVertical">Role Name</Label>
                <Field
                  type="text"
                  name="name"
                  id="nameVertical"
                  placeholder="Role "
                  className={`form-control ${errors.name &&
                    touched.name &&
                    "is-invalid"}`}
                />
                {errors.name && touched.name ? (
                  <div className="invalid-tooltip mt-25">{errors.name}</div>
                ) : null}
                
                
              </FormGroup>
            </Col>
            <Col sm="12" lg="12" md="12">
                <FormGroup>
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="  mb-1"
                  >
                   {loading ? "Loading..." : "Submit"}
                
                  </Button.Ripple>
                  </FormGroup >
                   </Col>
          </Row>
        </Form>
          )}
        </Formik>
      </CardBody>
    </Card>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth.login,
    error: state.role.error,
    role: state.role.role,
    loading: state.role.loading,
  }
}
export default connect(mapStateToProps, { createRole })(RoleForm)

