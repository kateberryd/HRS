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
import { connect } from "react-redux"
import { Formik, Field, Form } from "formik"
import Select from "react-select"
import * as Yup from "yup"
import { createBroadcast } from "../../../../redux/actions/broadcast/broadcastActions"
import {Message} from "../../../../components/setAlert/message"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "flatpickr/dist/themes/light.css";
import "../../../../assets/scss/plugins/forms/flatpickr/flatpickr.scss"  

const formSchema = Yup.object().shape({
  title: Yup.string()
    .required("Required"),
  description: Yup.string()
  .required("Required")
  
})

const categories = [
    {value: "public", label: "public"},
    {value: "private", label: "private"}
]

const ContentAddForm = ({error, loading, createBroadcast,})  => {
    return (
      <Card>

        <CardHeader>
          <Message message={error} />
          <CardTitle>Add Broadcast</CardTitle>
        </CardHeader>
        <CardBody>
        <Formik
            initialValues={{
              title: "",
              description: "",
              attachment: "",
             
              
            }}
            validationSchema={formSchema}
            onSubmit={(values, actions) => {
              createBroadcast(values)
            }}
          >
          {({values, errors, setFieldValue, touched, handleChange}) => (
          <Form>
           <Row>
              <Col sm="12" md="6">
                <Label className="mb-1 mt-1" for="descriptionVertical">Message</Label>
                <Input
                  type="textarea"
                  name="message"
                  id="exampleText"
                  rows="3"
                  placeholder="Type a message"
                  onChange={handleChange}
                  value={values.message}
                />
               
               {errors.message && touched.message ? (
                    <div class="invalid-tooltip mt-25">{errors.message}</div>
                ) : null}

              </Col>
              
              </Row>
            <Row>
              <Col sm="12" md="6">
                <FormGroup>
                  <Label className="mb-1 mt-1" for="nameVertical">Link</Label>
                  <Field
                    type="text"
                    name="link"
                    id="nameVertical"
                    placeholder="link"
                    className={`form-control ${errors.link &&
                      touched.link &&
                      "is-invalid"}`}
                  />
                  {errors.link && touched.link ? (
                    <div class="invalid-tooltip mt-25">{errors.link}</div>
                  ) : null}
                </FormGroup>
              </Col>
            </Row>
            
              <Row>
              <Col md="6" sm="12">
                <FormGroup>
                  <Label for="category" className="mb-1 ">Category</Label>
                  <Select
                    options={categories}
                    className="React"
                    classNamePrefix="select"
                    id="category"
                  />
                  {errors.category && touched.category ? (
                    <div className="invalid-tooltip mt-25">{errors.category}</div>
                  ) : null}
                </FormGroup>
              </Col>
              </Row>
              <Row>

              
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
      error: state.content.error,
      content: state.content.content,
      loading: state.content.loading,
    }
  }
  export default connect(mapStateToProps, { createBroadcast })(ContentAddForm)

