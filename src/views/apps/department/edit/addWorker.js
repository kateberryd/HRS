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
import Select from "react-select"
import { connect } from "react-redux"
import { Formik,  Form } from "formik"
import { addWorker } from "../../../../redux/actions/department/departmenentActions"
import {Message} from "../../../../components/setAlert/message"


const departmentForm = ({error, loading, addWorker, users, groups, department, })  => {
    return (
      <Card>
      { console.log(groups)}
        <CardHeader>
          <Message message={error} />
          <CardTitle>Add  Department Workers</CardTitle>
        </CardHeader>
        {department != null ? (

        <CardBody>
        <Formik
            initialValues={{
              worker: "",
              department: department._id
            }}
            enableReinitialize={true}
            onSubmit={(values, actions) => {
                  addWorker(values)
                  console.log(values);
            }}
          >
          {({ errors, touched, setFieldValue, values}) => (
          <Form>
            <Row>
             
              <Col md="12" sm="12"  lg="6">
                <FormGroup>
                  <Label className="mb-1" for="users">Users</Label>
                  <Select
                    options={users ? users : null}
                    isMulti
                    classNamePrefix="select"
                    getOptionLabel={option =>`${option.username}`}
                    getOptionValue={option => `${option}`}
                    onChange={value => setFieldValue('worker', value)}
                    id="users"
                  />
                  {errors.users && touched.users ? (
                    <div className="invalid-tooltip mt-25">{errors.users}</div>
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
         ):(   
          <div className="text-center">
            <Spinner color="primary" size="lg" />
          </div>) }
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
  export default connect(mapStateToProps, {addWorker })(departmentForm)
