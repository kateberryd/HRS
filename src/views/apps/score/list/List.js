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
import { connect } from "react-redux"
import { Formik, Field, Form } from "formik"
import {getSingleScore, editSingleScore} from "../../../../redux/actions/score/scoreActions"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../../../../assets/scss/plugins/tables/_agGridStyleOverride.scss"
import "../../../../assets/scss/pages/users.scss"

import {Message} from "../../../../components/setAlert/message"



class Score extends React.Component {
  state={
    score:null,
    scoreId: null
  }
  async componentDidMount() {
    await this.props.getSingleScore();
    const {scoremark, _id} = this.props.score.score[0]
    this.setState({
      score:scoremark,
      scoreId: _id
      
    })
  }

  render() {
   const {score, scoreId} = this.state
   const {loading, editSingleScore, error} = this.props
    return (
      <Card>
        <CardHeader>
          <Message message={error} />
          <CardTitle>Edit Score Point</CardTitle>
        </CardHeader>
        <CardBody>
        <Formik
            initialValues={{
              score:score,
              id: scoreId
            }}
            enableReinitialize={true}
            onSubmit={(values, actions) => {
                editSingleScore(values);
            }}
          >
          {({ errors, touched, values }) => (
          <Form>
            <Row>
              <Col sm="12" md="6">
                <FormGroup>
                  <Label className="mb-1" for="nameVertical">Score Point</Label>
                  <Field
                    type="text"
                    name="score"
                    id="nameVertical"
                    value={values.score}
                    className={`form-control ${errors.score &&
                      touched.score &&
                      "is-invalid"}`}
                  />
                  {errors.score && touched.score ? (
                    <div className="invalid-tooltip mt-25">{errors.score}</div>
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
            <ToastContainer />
          </Form>
            )}
          </Formik>
        </CardBody>
      </Card>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth.login,
    score: state.score,
    error: state.score.error,
    loading: state.score.loading
  }
}
export default connect(mapStateToProps, { getSingleScore, editSingleScore})(Score)
