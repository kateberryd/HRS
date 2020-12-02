import React from "react"
import { Row, Col, Button, Form, Input, Label, FormGroup } from "reactstrap"
import Radio from "../../../../components/@vuexy/radio/RadioVuexy"
import {  User, MapPin } from "react-feather"
import Select from "react-select"
import chroma from "chroma-js"
import Flatpickr from "react-flatpickr";

import "flatpickr/dist/themes/light.css";
import "../../../../assets/scss/plugins/forms/flatpickr/flatpickr.scss"


const languages = [
  { value: "usher", label: "Usher", color: "#7367f0" },
  { value: "french", label: "Choir", color: "#7367f0" },
  { value: "spanish", label: "Prayer Band", color: "#7367f0" },
  { value: "russian", label: "Counciling", color: "#7367f0" },
  { value: "italian", label: "Marriage", color: "#7367f0" }
]

const colourStyles = {
  control: styles => ({ ...styles, backgroundColor: "white" }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = data.color ? chroma(data.color) : "#7367f0"
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : null,
      color: isDisabled
        ? "#ccc"
        : isSelected
        ? chroma.contrast(color, "white") > 2
          ? "white"
          : "black"
        : data.color,
      cursor: isDisabled ? "not-allowed" : "default",

      ":active": {
        ...styles[":active"],
        backgroundColor: !isDisabled && (isSelected ? data.color : "#7367f0")
      }
    }
  },
  multiValue: (styles, { data }) => {
    const color = data.color ? chroma(data.color) : "#7367f0"
    return {
      ...styles,
      backgroundColor: color.alpha(0.1).css()
    }
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color ? data.color : "#7367f0"
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ":hover": {
      backgroundColor: data.color ? data.color : "#7367f0",
      color: "white"
    }
  })
}
class UserInfoTab extends React.Component {
  state = {
    dob: new Date("1995-05-22")
  }
  handledob = date => {
    this.setState({
      dob: date
    })
  }
  render() {
    return (
      <Form onSubmit={e => e.preventDefault()}>
        <Row className="mt-1">
          <Col className="mt-1" md="6" sm="12">
            <h5 className="mb-1">
              <User className="mr-50" size={16} />
              <span className="align-middle">Personal Info</span>
            </h5>
            <FormGroup>
              <Label className="d-block" for="dob">
                Date of birth
              </Label>
              <Flatpickr
                id="dob"
                className="form-control"
                options={{ dateFormat: "Y-m-d" }}
                value={this.state.dob}
                onChange={date => this.handledob(date)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="contactnumber">Contact Number</Label>
              <Input
                type="number"
                id="contactnumber"
                placeholder="Contact Number"
              />
            </FormGroup>
            <FormGroup>
              <Label for="languages">Department</Label>
              <Select
                isMulti
                defaultValue={[languages[0], languages[1], languages[2]]}
                isClearable={true}
                styles={colourStyles}
                options={languages}
                className="React"
                classNamePrefix="select"
                id="languages"
              />
            </FormGroup>
            <FormGroup>
              <Label for="languages">Designations</Label>
              <Select
                isMulti
                defaultValue={[languages[0], languages[1], languages[2]]}
                isClearable={true}
                styles={colourStyles}
                options={languages}
                className="React"
                classNamePrefix="select"
                id="languages"
              />
            </FormGroup>
            <FormGroup>
              <Label className="d-block mb-50">Gender</Label>
              <div className="d-inline-block mr-1">
                <Radio
                  label="Male"
                  color="primary"
                  defaultChecked={false}
                  name="gender"
                />
              </div>
              <div className="d-inline-block mr-1">
                <Radio
                  label="Female"
                  color="primary"
                  defaultChecked={true}
                  name="gender"
                />
              </div>
              <div className="d-inline-block">
                <Radio
                  label="Others"
                  color="primary"
                  defaultChecked={false}
                  name="gender"
                />
              </div>
            </FormGroup>
            <FormGroup>
                  <Label for="campus">Campus</Label>
                  <Input type="select" name="campus" id="campus">
                    <option>Admin</option>
                    <option>Usher</option>
                    <option>Group Lead</option>
                    <option>Pastor</option>
                    <option>Overseer</option>
                    <option>Memeber</option>
                  </Input>
            </FormGroup>
            <FormGroup>
                  <Label for="branch">Branch</Label>
                  <Input type="select" name="branch" id="branch">
                    <option>Jos Branch</option>
                    <option>Abuja Branch</option>
                    <option>UK Branch</option>
                  </Input>
                </FormGroup>
          </Col>
          <Col className="mt-1" md="6" sm="12">
            <h5 className="mb-1">
              <MapPin className="mr-50" size={16} />
              <span className="align-middle">Address</span>
            </h5>
            <FormGroup>
              <Label for="address1">Address Line 1</Label>
              <Input type="text" id="address1" placeholder="Last Name Here" />
            </FormGroup>
            <FormGroup>
              <Label for="address1">Address Line 2</Label>
              <Input type="text" id="address1" placeholder="Address Line 2" />
            </FormGroup>
            <FormGroup>
              <Label for="pincode">Pincode</Label>
              <Input type="text" id="pincode" placeholder="Pincode" />
            </FormGroup>
            <FormGroup>
              <Label for="city">City</Label>
              <Input
                type="text"
                defaultValue="Camden Town"
                id="city"
                placeholder="City"
              />
            </FormGroup>
            <FormGroup>
              <Label for="State">State</Label>
              <Input
                type="text"
                defaultValue="London"
                id="State"
                placeholder="State"
              />
            </FormGroup>
            <FormGroup>
              <Label for="Country">Country</Label>
              <Input
                type="text"
                defaultValue="UK"
                id="Country"
                placeholder="Country"
              />
            </FormGroup>
          </Col>
          <Col className="d-flex justify-content-end flex-wrap" sm="12">
            <Button.Ripple className="mr-1" color="primary">
              Save Changes
            </Button.Ripple>
            <Button.Ripple color="flat-warning">Reset</Button.Ripple>
          </Col>
        </Row>
      </Form>
    )
  }
}
export default UserInfoTab
