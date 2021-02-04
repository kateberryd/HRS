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
  Input,
  Spinner
} from "reactstrap"
import Select from "react-select"
import { connect } from "react-redux"
import { Formik, Field, Form } from "formik"
import { createAbsentee } from "../../../../redux/actions/absent/absenteeActions"
import {Message} from "../../../../components/setAlert/message"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "flatpickr/dist/themes/light.css";
import "../../../../assets/scss/plugins/forms/flatpickr/flatpickr.scss"  




const AbsenteeForm = ({error, loading, createAbsentee, events, users})  => {
    return (
      <Card>
      {console.log(users)}
        <CardHeader>
          <Message message={error} />
          <CardTitle>Add Absentee</CardTitle>
        </CardHeader>
        <CardBody>
        <Formik
            initialValues={{
              title: "",
              event: "",
              absentee: "",
              description: "",
             
              
            }}
            // validationSchema={formSchema}
            onSubmit={(values, actions) => {
              createAbsentee(values)
            }}
          >
          {({values, errors, touched, setFieldValue, handleChange}) => (
          <Form>
            <Row>
              <Col sm="12" md="6">
                <FormGroup>
                  <Label className="mb-1" for="nameVertical">Title</Label>
                  <Field
                    type="text"
                    name="title"
                    id="nameVertical"
                    placeholder="Title"
                    className={`form-control ${errors.title &&
                      touched.title &&
                      "is-invalid"}`}
                  />
                  {errors.title && touched.title ? (
                    <div classtitle="invalid-tooltip mt-25">{errors.title}</div>
                  ) : null}
                </FormGroup>
              </Col>
              
              
              <Col md="6" sm="12">
                <FormGroup>
                  <Label className="mb-1" for="event">Event</Label>
                  <Select
                    name="event"
                    options={events}
                    className="React"
                    classNamePrefix="select"
                    id="event"
                    getOptionLabel={option =>`${option.title}`}
                    getOptionValue={option => `${option}`}
                    onChange={value => setFieldValue('event', value._id)}
                  />
                  {errors.event && touched.event ? (
                    <div className="invalid-tooltip mt-25">{errors.event}</div>
                  ) : null}
                </FormGroup>
              </Col>
              
              <Col md="12" sm="12">
              <label className=" mb-1">Absentee</label>
              <Select
                // defaultValue={[events[2], events[3]]}
                isMulti
                name="absentee"
                options={users}
                getOptionLabel={option =>`${option.username}`}
                getOptionValue={option => `${option}`}
                onChange={value => setFieldValue('absentee', value)}
                className="React"
                classNamePrefix="select"
              />
            </Col>
              
              <Col sm="12" md="12">
                <Label className="mb-1 mt-1" for="descriptionVertical">Description</Label>
                <Input
                  type="textarea"
                  name="description"
                  id="exampleText"
                  rows="3"
                  placeholder="Type a message"
                  onChange={handleChange}
                  value={values.description}
                />
               
              </Col>
              <Col sm="12" className="mt-2" >
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
            <ToastContainer />
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
      error: state.event.error,
      event: state.event.event,
      loading: state.event.loading,
    }
  }
  export default connect(mapStateToProps, { createAbsentee })(AbsenteeForm)

