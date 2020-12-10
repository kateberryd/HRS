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
import { getSingleCampus } from "../../../../redux/actions/campus/campusActions"
import {Message} from "../../../../components/setAlert/message"


const formSchema = Yup.object().shape({
  name: Yup.string()
    .required("This field required"),
})

const CampusForm = ({error, createCampus, loading, campus})  => {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Update Campus</CardTitle>
          <Message message={error} />
        </CardHeader>
        <CardBody>
        <Formik
            initialValues={{
              name: "",
            }}
            validationSchema={formSchema}
            onSubmit={(values, actions) => {
                createCampus(values);
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
                    value={campus.name}
                    id="nameVertical"
                    placeholder="campus"
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
      error: state.campus.error,
      campus: state.campus.campus,
      loading: state.campus.loading
    }
  }
  export default connect(mapStateToProps, { getSingleCampus })(CampusForm)
