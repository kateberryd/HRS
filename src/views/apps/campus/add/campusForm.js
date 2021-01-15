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
import Select from "react-select"
import { Formik, Field, Form } from "formik"
import * as Yup from "yup"
import { createCampus } from "../../../../redux/actions/campus/campusActions"
import {Message} from "../../../../components/setAlert/message"


const formSchema = Yup.object().shape({
  name: Yup.string()
    .required("This field required"),
})

const CampusForm = ({error, createCampus, setFieldValue, loading, users})  => {
    return (
      <Card>
        <CardHeader>
          <Message message={error} />
          <CardTitle>Add Campus</CardTitle>
        </CardHeader>
        <CardBody>
        <Formik
            initialValues={{
              name: "",
              senior_pastor:"",
              spmo: "",
              campus_pastor: "",
              group_head: "",
              hod: "",
              asst_hod:""
            }}
            validationSchema={formSchema}
            onSubmit={(values, actions) => {
                // createCampus(values);
                console.log(values);
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
              
              
              <Col md="6" lg="6" sm="12">
                <FormGroup>
                  <Label className="mb-1" for="senior_pastoe" >Global Senior Pastor</Label>
                  <Select
                    options={users}
                    className="React"
                    classNamePrefix="select"
                    id="senior_pastor"
                    name="senior_pastor"
                    getOptionLabel={option =>`${option.username}`}
                    getOptionValue={option => `${option}`}
                    onChange={value => setFieldValue('senior_pastor', value._id)}
                  />
                  {errors.senior_pastor && touched.senior_pastor ? (
                    <div className="invalid-tooltip mt-25">{errors.senior_pastor}</div>
                  ) : null}
                </FormGroup>
              </Col>
              
              <Col md="6" lg="6" sm="12">
                <FormGroup>
                  <Label className="mb-1" for="spmo" >SPMO</Label>
                  <Select
                    options={users}
                    className="React"
                    classNamePrefix="select"
                    id="spmo"
                    name="spmo"
                    getOptionLabel={option =>`${option.username}`}
                    getOptionValue={option => `${option}`}
                    onChange={value => setFieldValue('spmo', value._id)}
                  />
                  {errors.spmo && touched.spmo ? (
                    <div className="invalid-tooltip mt-25">{errors.spmo}</div>
                  ) : null}
                </FormGroup>
              </Col>
              
              <Col md="6" lg="6" sm="12">
                <FormGroup>
                  <Label className="mb-1" for="campus_coordinator" >Campus Pastor</Label>
                  <Select
                    options={users}
                    className="React"
                    classNamePrefix="select"
                    id="campus_pastor"
                    name="campus_pastor"
                    getOptionLabel={option =>`${option.username}`}
                    getOptionValue={option => `${option}`}
                    onChange={value => setFieldValue('campus_pastor', value._id)}
                  />
                  {errors.campus_pastor && touched.campus_pastor ? (
                    <div className="invalid-tooltip mt-25">{errors.campus_pastor}</div>
                  ) : null}
                </FormGroup>
              </Col>
              
              <Col md="6" lg="6" sm="12">
                <FormGroup>
                  <Label className="mb-1" for="group" >Group Head</Label>
                  <Select
                    options={users}
                    className="React"
                    classNamePrefix="select"
                    id="group_head"
                    name="group_head"
                    getOptionLabel={option =>`${option.username}`}
                    getOptionValue={option => `${option}`}
                    onChange={value => setFieldValue('group_head', value._id)}
                  />
                  {errors.group_head && touched.group_head ? (
                    <div className="invalid-tooltip mt-25">{errors.group_head}</div>
                  ) : null}
                </FormGroup>
              </Col>
              
              <Col md="6" lg="6" sm="12">
                <FormGroup>
                  <Label className="mb-1" for="group" >HOD</Label>
                  <Select
                    options={users}
                    className="React"
                    classNamePrefix="select"
                    id="hod"
                    name="hod"
                    getOptionLabel={option =>`${option.username}`}
                    getOptionValue={option => `${option}`}
                    onChange={value => setFieldValue('hod', value._id)}
                  />
                  {errors.hod && touched.hod ? (
                    <div className="invalid-tooltip mt-25">{errors.hod}</div>
                  ) : null}
                </FormGroup>
              </Col>
              
              <Col md="6" lg="6" sm="12">
                <FormGroup>
                  <Label className="mb-1" for="group" >ASST HOD</Label>
                  <Select
                    options={users}
                    className="React"
                    classNamePrefix="select"
                    id="asst_hod"
                    name="asst_hod"
                    getOptionLabel={option =>`${option.username}`}
                    getOptionValue={option => `${option}`}
                    onChange={value => setFieldValue('asst_hod', value._id)}
                  />
                  {errors.asst_hod && touched.asst_hod ? (
                    <div className="invalid-tooltip mt-25">{errors.asst_hod}</div>
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
      campus: state.campus.campus,
      loading: state.campus.loading
    }
  }
  export default connect(mapStateToProps, { createCampus })(CampusForm)
