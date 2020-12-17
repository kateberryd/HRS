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
import { connect } from "react-redux"
import { Formik, Field, Form } from "formik"
import * as Yup from "yup"
import { createEventCategory } from "../../../../redux/actions/event-category/event-categoryActions"
import {Message} from "../../../../components/setAlert/message"


const formSchema = Yup.object().shape({
  name: Yup.string()
    .required("This field required"),
})

const EventCategoryForm = ({error, createEventCategory, loading})  => {
    return (
      <Card>
        <CardHeader>
          <Message message={error} />
          <CardTitle>Add Category</CardTitle>
        </CardHeader>
        <CardBody>
        <Formik
            initialValues={{
              name: "",
              icon_link: "",
            }}
            validationSchema={formSchema}
            onSubmit={(values, actions) => {
                createEventCategory(values);
            }}
          >
          {({ errors, touched }) => (
          <Form>
            <Row>
              <Col sm="12">
                <FormGroup>
                  <Label className="mb-1" for="nameVertical"> Name</Label>
                  <Field
                    type="text"
                    name="name"
                    id="nameVertical"
                    placeholder="Category"
                    className={`form-control ${errors.name &&
                      touched.name &&
                      "is-invalid"}`}
                  />
                  {errors.name && touched.name ? (
                    <div className="invalid-tooltip mt-25">{errors.name}</div>
                  ) : null}
                </FormGroup>
              </Col>
              
              <Col sm="12">
                <FormGroup>
                  <Label className="mb-1" for="nameVertical">Icon Link</Label>
                  <Field
                    type="text"
                    name="icon_link"
                    id="nameVertical"
                    placeholder="Icon Link"
                    className={`form-control ${errors.icon_link &&
                      touched.icon_link &&
                      "is-invalid"}`}
                  />
                  {errors.icon_link && touched.icon_link ? (
                    <div className="invalid-tooltip mt-25">{errors.icon_link}</div>
                  ) : null}
                </FormGroup>
              </Col>
           
              <Col sm="12">
                <FormGroup>
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  >
                   {loading ? "Loading..." : "Submit"}
                  </Button.Ripple>
                
                </FormGroup>
              </Col>
            </Row>
          </Form>
            )}
          </Formik>
        </CardBody>
      </Card>
    )
  }
  const mapStateToProps = state => {
    return {
      auth: state.auth.login,
      error: state.auth.login.error,
      category: state.category.category,
      loading: state.category.loading
    }
  }
  export default connect(mapStateToProps, { createEventCategory })(EventCategoryForm)
