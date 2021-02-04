import React from "react"
import { Card, CardBody } from "reactstrap"
import { User } from "react-feather"



class SalesCard extends React.Component {
  render() {
    return (
      <Card className="bg-analytics text-white sales-card">
        <CardBody className="text-center">
      
          <div className="avatar avatar-xl bg-primary shadow avatar-dashboard mt-0">
            <div className="avatar-content">
              <User className="text-white" size={28} />
            </div>
          </div>
          <div className="award-info text-center">
            <h1 className="mb-2 text-white">Welcome Super  Admin,</h1>
          </div>
        </CardBody>
      </Card>
    )
  }
}
export default SalesCard
