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
  Input
} from "reactstrap"
import Flatpickr from "react-flatpickr";
import Select from "react-select"
import { connect } from "react-redux"
import { Formik, Field, Form } from "formik"
import * as Yup from "yup"
import { createEvent } from "../../../../redux/actions/event/eventActions"
import {Message} from "../../../../components/setAlert/message"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "flatpickr/dist/themes/light.css";
import "../../../../assets/scss/plugins/forms/flatpickr/flatpickr.scss"



const formSchema = Yup.object().shape({
  name: Yup.string()
    .required("Required"),
  // country: Yup.string()
  //   .required("Required"),
  // state: Yup.string()
  // .required("Required"),
  location: Yup.string()
  .required("Required")
})

const categories = [
  { value: "first", label: "First", color: "#7367f0" },
  { value: "last", label: "Last", color: "#7367f0" },
  { value: "second", label: "Second", color: "#7367f0" },
  { value: "third", label: "Third", color: "#7367f0" },
  { value: "fourth", label: "Fourth", color: "#7367f0" }
]




const EventForm = ({error, loading, createEvent})  => {
    return (
      <Card>
        <CardHeader>
          <Message message={error} />
          <CardTitle>Add Event</CardTitle>
        </CardHeader>
        <CardBody>
        <Formik
            initialValues={{
              name: "",
              category: "",
              description: "",
              image: null,
              location: "",
              date: new Date(),
              dateTime: new Date(),
              
            }}
            validationSchema={formSchema}
            onSubmit={(values, actions) => {
              createEvent(values)
              // console.log(values)
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
                    name="name"
                    id="nameVertical"
                    placeholder="Event Title"
                    className={`form-control ${errors.name &&
                      touched.name &&
                      "is-invalid"}`}
                  />
                  {errors.name && touched.name ? (
                    <div className="invalid-tooltip mt-25">{errors.name}</div>
                  ) : null}
                </FormGroup>
              </Col>
              
              
              <Col md="6" sm="12">
                <FormGroup>
                  <Label className="mb-1" for="country">Category</Label>
                  <Select
                    options={categories}
                    className="React"
                    classNamePrefix="select"
                    id="category"
                    onChange={value => setFieldValue('category', value.value)}
                  />
                  {errors.category && touched.category ? (
                    <div className="invalid-tooltip mt-25">{errors.category}</div>
                  ) : null}
                </FormGroup>
              </Col>
            
            <Col className="mb-3" md="6" sm="12">
             <Label className="mb-1" for="date">Date</Label>
                <Flatpickr
                className="form-control"
                value={values.date}
                options={{ altInput: true, altFormat: "F j, Y", dateFormat: "Y-m-d", }}
                onChange={value => setFieldValue('date', value)}
                />
            </Col>
            
            <Col className="mb-3" md="6" sm="12">
              <Label className="mb-1">Time</Label>
              <Flatpickr
                className="form-control"
                name="dateTime"
                value={values.dateTime}
                options={{
                  enableTime: true,
                  noCalendar: true,
                  dateFormat: "H:i",
                }}
                onChange={value => setFieldValue('dateTime', value)}
              />
            </Col>
                
              <Col sm="6">
                <FormGroup>
                  <Label className="mb-1" for="addressVertical">Location</Label>
                  <Field
                    type="text"
                    name="location"
                    id="addressVertical"
                    placeholder="address"
                    className={`form-control ${errors.address &&
                      touched.address &&
                      "is-invalid"}`}
                  />
                  {errors.location && touched.location ? (
                    <div className="invalid-tooltip mt-25">{errors.location}</div>
                  ) : null}
                </FormGroup>
              </Col>
              
              <Col sm="12" md="6">
                <Label className="mb-1" for="ImageVertical">Cover Image</Label>
                <Input
                  type="file"
                  name="image"
                  className="form-control"
                  onChange={(event) => {
                    setFieldValue("image", event.currentTarget.files[0].name)  
                  }}
                  
                  
                />
                
              </Col>
              
              <Col sm="12" md="6">
                <Label className="mb-1" for="descriptionVertical">Description</Label>
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
                    {loading ? "Loading..." : "Submit"}
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
  export default connect(mapStateToProps, { createEvent })(EventForm)

