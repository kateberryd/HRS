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

const groupForm = ({error, loading, createGroup, group, departments})  => {
    return (
      <Card>
      {console.log(group)}
        <CardHeader>
          <Message message={error} />
          <CardTitle>Edit Group</CardTitle>
        </CardHeader>
        <CardBody>
        <Formik
            initialValues={{
              name: "",
              country: "",
              department: "",
              state: "",
              address: "",
            }}
            enableReinitialize={true}
            validationSchema={formSchema}
            onSubmit={(values, actions) => {
              console.log(values);
              createGroup(values)
            }}
          >
          {({ errors, touched, setFieldValue,}) => (
          <Form>
            <Row>
              <Col sm="12">
                <FormGroup>
                  <Label className="mb-1" for="nameVertical">Group Name</Label>
                  <Field
                    type="text"
                    name="name"
                    id="nameVertical"
                    placeholder="group"
                    value={group ? group.name : null}
                    className={`form-control ${errors.name &&
                      touched.name &&
                      "is-invalid"}`}
                  />
                  {errors.name && touched.name ? (
                    <div className="invalid-tooltip mt-25">{errors.name}</div>
                  ) : null}
                </FormGroup>
              </Col>
              
              <Col md="12" sm="12">
                <FormGroup>
                  <Label for="department">Department</Label>
                  <Select
                    options={departments}
                    className="React"
                    classNamePrefix="select"
                    id="department"
                    name="department"
                    getOptionLabel={option =>`${option.name}`}
                    getOptionValue={option => `${option}`}
                    onChange={value => setFieldValue('department', value._id)}
                  />
                  {errors.department && touched.department ? (
                    <div className="invalid-tooltip mt-25">{errors.department}</div>
                  ) : null}
                </FormGroup>
              </Col>
              
              <Col md="12" sm="12">
                <FormGroup>
                  <Label for="country">Country</Label>
                  <Select
                    options={countries}
                    className="React"
                    value={group ? group.country : null}
                    classNamePrefix="select"
                    id="country"
                    onChange={value => setFieldValue('country', value.value)}
                  />
                  {errors.country && touched.country ? (
                    <div className="invalid-tooltip mt-25">{errors.country}</div>
                  ) : null}
                </FormGroup>
              </Col>
            
              <Col md="12" sm="12">
                <FormGroup>
                  <Label for="state">State / Province</Label>
                  <Select
                    options={states}
                    className="React"
                    classNamePrefix="select"
                    value={group ? group.state : null}
                    onChange={value => setFieldValue('state', value.value)}
                    id="state"
                  />
                  {errors.state && touched.state ? (
                    <div className="invalid-tooltip mt-25">{errors.state}</div>
                  ) : null}
                </FormGroup>
              </Col>
            
              
              <Col sm="12">
                <FormGroup>
                  <Label className="mb-1" for="addressVertical"> Address</Label>
                  <Field
                    type="text"
                    name="address"
                    id="addressVertical"
                    placeholder="address"
                    value={group ? group : null}
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
      error: state.group.error,
      group: state.group.group,
      loading: state.group.loading,
    }
  }
  export default connect(mapStateToProps, { createGroup })(groupForm)
