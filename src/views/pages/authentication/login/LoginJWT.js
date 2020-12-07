import React from "react"
import { Link } from "react-router-dom"
import { CardBody, FormGroup, Button, Label } from "reactstrap"
import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy"
import { Mail, Lock, Check } from "react-feather"
import { Formik, Field, Form } from "formik"
import * as Yup from "yup"
import { loginWithJWT } from "../../../../redux/actions/auth/loginActions"
import {Message} from "../../../../components/setAlert/message"
import { connect } from "react-redux"



const formSchema = Yup.object().shape({
  username: Yup.string()
    .required("Required"),
  password: Yup.string()
    .required("Required")
})

const LoginJWT = ({loginWithJWT, error, auth}) => {
    return (
      <React.Fragment>
        <CardBody className="pt-1">
         <Message message={error} />
         <Formik
            initialValues={{
              username: "",
              password: "",
            }}
            validationSchema={formSchema}
            onSubmit={(values, actions) => {
              loginWithJWT(values)
            }}
          >
            {({ errors, touched }) => (
          <Form action="/" name="myForm">
            <FormGroup className="form-label-group position-relative has-icon-left">
                <Field
                    name="username"
                    id="username"
                    className={`form-control ${errors.username &&
                      touched.username &&
                      "is-invalid"}`}
                  />
                  {errors.username && touched.username ? (
                    <div className="invalid-tooltip mt-25">{errors.username}</div>
                  ) : null}
              <div className="form-control-position">
                <Mail size={15} />
              </div>
              <Label>Username</Label>
            </FormGroup>
            <FormGroup className="form-label-group position-relative has-icon-left">
               <Field
                    name="password"
                    id="password"
                    type="password"
                    className={`form-control ${errors.password &&
                      touched.password &&
                      "is-invalid"}`}
                  />
                  {errors.password && touched.password ? (
                    <div className="invalid-tooltip mt-25">{errors.password}</div>
                  ) : null}
              <div className="form-control-position">
                <Lock size={15} />
              </div>
              <Label>Password</Label>
            </FormGroup>
            <FormGroup className="d-flex justify-content-between align-items-center">
              <Checkbox
                color="primary"
                icon={<Check className="vx-icon" size={16} />}
                label="Remember me"
                defaultChecked={false}
                onChange={""}
              />
              <div className="float-right">
                <Link to="/pages/forgot-password">Forgot Password?</Link>
              </div>
            </FormGroup>
            <div className="d-flex justify-content-between">
              <Button.Ripple color="primary" type="submit">
                 {auth.loading ? "Loading..." : "Login"}
              </Button.Ripple>
            </div>
          </Form>
          )}
         </Formik>
        </CardBody>
      </React.Fragment>
    )
}
const mapStateToProps = state => {
  return {
    auth: state.auth.login,
    error: state.auth.login.error
  }
}
export default connect(mapStateToProps, { loginWithJWT })(LoginJWT)
