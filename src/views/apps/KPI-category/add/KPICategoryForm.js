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
  Label, 
  Spinner
} from "reactstrap"
import { connect } from "react-redux"
import { Formik, Field, Form } from "formik"
import * as Yup from "yup"
import { createKPICategory } from "../../../../redux/actions/KPI-category/KPI-categryActions"
import {Message} from "../../../../components/setAlert/message"


const formSchema = Yup.object().shape({
  name: Yup.string()
    .required("This field required"),
})

const EventCategoryForm = ({error, createKPICategory, loading})  => {
    return (
      <Card>
        <CardHeader>
          <Message message={error} />
          <CardTitle>Add KPI Category</CardTitle>
        </CardHeader>
        <CardBody>
        <Formik
            initialValues={{
              name: "",
            }}
            validationSchema={formSchema}
            onSubmit={(values, actions) => {
                createKPICategory(values);
            }}
          >
          {({ errors, touched }) => (
          <Form>
            <Row>
              <Col sm="12">
                <FormGroup>
                  <Label className="mb-1" for="nameVertical">Title</Label>
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
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  >
                                      {
                      loading ?  
                    <div>
                     <Spinner color="white" size="sm" type="grow" />  
                     <span className="ml-50">Loading...</span>
                    </div>
                     : "Submit"
                
                    }
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
      category: state.KPICategory.category,
      loading: state.KPICategory.loading
    }
  }
  export default connect(mapStateToProps, { createKPICategory })(EventCategoryForm)
