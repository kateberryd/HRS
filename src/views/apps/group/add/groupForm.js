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
  Spinner,
} from "reactstrap"
import Select from "react-select"
import { connect } from "react-redux"
import { Formik, Field, Form } from "formik"
import * as Yup from "yup"
import { createGroup } from "../../../../redux/actions/group/groupActions"
import {Message} from "../../../../components/setAlert/message"


const formSchema = Yup.object().shape({
  name: Yup.string()
    .required("Required"),
  country: Yup.string()
    .required("Required"),
  state: Yup.string()
  .required("Required"),
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

const groupForm = ({error, loading, createGroup, campuses})  => {
    return (
      <Card>
        <CardHeader>
          <Message message={error} />
          <CardTitle className="mr-5 ml-5">Add Group</CardTitle>
        </CardHeader>
        <CardBody>
        <Formik
            initialValues={{
              name: "",
              country: "",
              campus: "",
              state: "",
              address: "",
            }}
            validationSchema={formSchema}
            onSubmit={(values, actions) => {
              console.log(values);
              createGroup(values)
            }}
          >
          {({ errors, touched, setFieldValue,}) => (
          <Form className="mr-5 ml-5">
            <Row>
              <Col sm="12" lg="12" md="12">
                <FormGroup>
                  <Label className="mb-1" for="nameVertical">Group Name</Label>
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
              
              <Col sm="12" lg="6" md="6">
                <FormGroup>
                  <Label for="campus" className="mb-1">Campus</Label>
                  <Select
                    options={campuses}
                    className="React"
                    classNamePrefix="select"
                    id="campus"
                    name="campus"
                    getOptionLabel={option =>`${option.name}`}
                    getOptionValue={option => `${option}`}
                    onChange={value => setFieldValue('campus', value._id)}
                  />
                  {errors.campus && touched.campus ? (
                    <div className="invalid-tooltip mt-25">{errors.campus}</div>
                  ) : null}
                </FormGroup>
              </Col>
              
              <Col lg="6" md="6" sm="12">
                <FormGroup>
                  <Label for="country" className="mb-1">Country</Label>
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
            
              <Col lg="6" md="6" sm="12">
                <FormGroup>
                  <Label for="state"className="mb-1">State / Province</Label>
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
            
              
              <Col lg="6" md="6" sm="12">
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
      error: state.group.error,
      group: state.group.group,
      loading: state.group.loading,
    }
  }
  export default connect(mapStateToProps, { createGroup })(groupForm)
