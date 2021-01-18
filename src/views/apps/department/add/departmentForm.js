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
} from "reactstrap"
import Select from "react-select"
import { connect } from "react-redux"
import { Formik, Field, Form } from "formik"
import * as Yup from "yup"
import { createDepartment } from "../../../../redux/actions/department/departmenentActions"
import {Message} from "../../../../components/setAlert/message"


const formSchema = Yup.object().shape({
  name: Yup.string()
    .required("Required"),
  // country: Yup.string()
  //   .required("Required"),
  // state: Yup.string()
  // .required("Required"),
  address: Yup.string()
  .required("Required")
})

const countries = [
  { value: "nigeria", label: "Nigeria", color: "#7367f0" },
  { value: "ghana", label: "Ghana", color: "#7367f0" },
  { value: "usa", label: "USA", color: "#7367f0" },
  { value: "rwanda", label: "Rwanda", color: "#7367f0" },
  { value: "egypt", label: "Egypt", color: "#7367f0" }
]


const states = [
  { value: "plateau", label: "Plateau", color: "#7367f0" },
  { value: "imo", label: "Imo", color: "#7367f0" },
  { value: "lagos", label: "Lagos", color: "#7367f0" },
  { value: "kano", label: "Kano", color: "#7367f0" },
  { value: "kaduna", label: "Kaduna", color: "#7367f0" }
]

const departmentForm = ({error, loading, createDepartment, groups, users})  => {
    return (
      <Card>
        <CardHeader>
          <Message message={error} />
          <CardTitle className="mr-5 ml-5">Add Department</CardTitle>
        </CardHeader>
        <CardBody className="mr-5 ml-5">
        <Formik
            initialValues={{
              name: "",
              country: "",
              state: "",
              group: "",
              address: "",
              HOD: "",
              asst_HOD: "",
            }}
            validationSchema={formSchema}
            onSubmit={(values, actions) => {
              createDepartment(values)
            }}
          >
          {({ errors, touched, setFieldValue,}) => (
          <Form>
            <Row >
            {console.log(users)}
              <Col lg="12" md="12" sm="12">
                <FormGroup>
                  <Label className="mb-1" for="nameVertical">Department Name</Label>
                  <Field
                    type="text"
                    name="name"
                    id="nameVertical"
                    placeholder="department"
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
                  <Label className="mb-1" for="group" >Group</Label>
                  <Select
                    options={groups}
                    className="React"
                    classNamePrefix="select"
                    id="group"
                    name="group"
                    getOptionLabel={option =>`${option.name}`}
                    getOptionValue={option => `${option}`}
                    onChange={value => setFieldValue('group', value._id)}
                  />
                  {errors.group && touched.group ? (
                    <div className="invalid-tooltip mt-25">{errors.group}</div>
                  ) : null}
                </FormGroup>
              </Col>
              <Col md="6" sm="12">
                <FormGroup>
                  <Label for="HOD">HOD</Label>
                  <Select
                    options={users}
                    className="React"
                    classNamePrefix="select"
                    getOptionLabel={option =>`${option.username}`}
                    getOptionValue={option => `${option}`}
                    onChange={value => setFieldValue('HOD', value._id)}
                    id="HOD"
                  />
                  {errors.HOD && touched.HOD ? (
                    <div className="invalid-tooltip mt-25">{errors.HOD}</div>
                  ) : null}
                </FormGroup>
              </Col>
              
              <Col md="6" sm="12">
                <FormGroup>
                  <Label for="state">ASST HOD</Label>
                  <Select
                    options={users}
                    className="React"
                    classNamePrefix="select"
                    getOptionLabel={option =>`${option.username}`}
                    getOptionValue={option => `${option}`}
                    onChange={value => setFieldValue('Asst_HOD', value._id)}
                    id="asst_HOD"
                  />
                  {errors.asst_HOD && touched.asst_HOD ? (
                    <div className="invalid-tooltip mt-25">{errors.asst_HOD}</div>
                  ) : null}
                </FormGroup>
              </Col>
              
              <Col md="6" lg="6" sm="12">
                <FormGroup>
                  <Label className="mb-1" for="country">Country</Label>
                  <Select
                    options={countries}
                    className="React"
                    classNamePrefix="select"
                    id="country"
                    onChange={value => setFieldValue('country', value.value)}
                  />
                  {errors.country && touched.country ? (
                    <div className="invalid-tooltip mt-25">{errors.country}</div>
                  ) : null}
                </FormGroup>
              </Col>
            
              <Col md="6" lg="6" sm="12">
                <FormGroup>
                  <Label className="mb-1" for="state">State / Province</Label>
                  <Select
                    options={states}
                    className="React"
                    classNamePrefix="select"
                    onChange={value => setFieldValue('state', value.value)}
                    id="state"
                  />
                  {errors.state && touched.state ? (
                    <div className="invalid-tooltip mt-25">{errors.state}</div>
                  ) : null}
                </FormGroup>
              </Col>
            
              
              <Col md="6" lg="6" sm="12">
                <FormGroup>
                  <Label className="mb-1" for="addressVertical"> Address</Label>
                  <Field
                    type="text"
                    name="address"
                    id="addressVertical"
                    placeholder="address"
                    className={`form-control ${errors.address &&
                      touched.address &&
                      "is-invalid"}`}
                  />
                  {errors.address && touched.address ? (
                    <div className="invalid-tooltip mt-25">{errors.address}</div>
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
      error: state.department.error,
      department: state.department.department,
      loading: state.department.loading,
    }
  }
  export default connect(mapStateToProps, { createDepartment,  })(departmentForm)
