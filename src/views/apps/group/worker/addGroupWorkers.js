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
import { Formik, Form,  } from "formik"
import * as Yup from "yup"
import { addGroupWorker } from "../../../../redux/actions/group/groupActions"
import {Message} from "../../../../components/setAlert/message"


const formSchema = Yup.object().shape({
  worker: Yup.string()
    .required("Required"),

})


const groupWorkers = ({error, loading, group, addGroupWorker, users, })  => {
    return (
      <Card>
     
        <CardHeader>
          <Message message={error} />
          <CardTitle>Add Group Workers</CardTitle>
        </CardHeader>
        <CardBody>
        <Formik
            initialValues={{
              worker: "",
              group: group ? group._id : null
            }}
            validationSchema={formSchema}
            enableReinitialize={true}
            onSubmit={(values, actions) => {
              console.log(values);
              addGroupWorker(values)
            }}
          >
          {({ errors, touched, setFieldValue, values}) => (
          <Form>
            <Row>
              <Col sm="12">

              <FormGroup>
                  <Label className="mb-1" for="worker">Select Worker</Label>
                  <Select
                    isMulti
                    isClearable={true}
                    isSearchable
                    options={users}
                    className="React"
                    classNamePrefix="select"
                    id="worker"
                    name="worker"
                    getOptionLabel={option =>`${option.username}`}
                    getOptionValue={option => `${option}`}
                    onChange={value => setFieldValue('worker', value)}
                  />
                  
                  {errors.worker && touched.worker ? (
                    <div className="invalid-tooltip mt-25">{errors.worker}</div>
                  ) : null}
                </FormGroup>
              </Col>
              
             <Col>
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
  export default connect(mapStateToProps, { addGroupWorker })(groupWorkers)
