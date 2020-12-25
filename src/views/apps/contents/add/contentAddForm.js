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
import * as Yup from "yup"
import { createContent } from "../../../../redux/actions/content/contentActions"
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


const ContentAddForm = ({error, loading, createContent,})  => {
    return (
      <Card>

        <CardHeader>
          <Message message={error} />
          <CardTitle>Add Content</CardTitle>
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
              createContent(values)
            }}
          >
          {({values, errors, setFieldValue, touched, handleChange}) => (
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
                    <div class="invalid-tooltip mt-25">{errors.title}</div>
                  ) : null}
                </FormGroup>
              </Col>
            </Row>
            
            <Row>
              <Col sm="12" md="6">
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
               
               {errors.description && touched.description ? (
                    <div class="invalid-tooltip mt-25">{errors.description}</div>
                ) : null}

              </Col>
              
              </Row>
              <Row>
              <Col sm="12" md="6">
                <Label className="mb-1 mt-1" for="ImageVertical"> Image</Label>
                <Input
                  type="file"
                  name="image"
                  className="form-control"
                  onChange={(event) => {
                    setFieldValue("attachment", event.currentTarget.files[0])  
                  }}
                  
                  
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
      error: state.content.error,
      content: state.content.content,
      loading: state.content.loading,
    }
  }
  export default connect(mapStateToProps, { createContent })(ContentAddForm)

