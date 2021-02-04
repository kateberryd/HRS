import React from "react"
import {
  Card,
  CardBody,
  Input,
  Button,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Spinner
} from "reactstrap"
import {
  Trash2,
} from "react-feather"
import { AgGridReact } from "ag-grid-react"
import { ContextLayout } from "../../../../utility/context/Layout"
import { history } from "../../../../history"
import { connect } from "react-redux"
import { getAbsenteeList, deleteAbsentee, closeIncident } from "../../../../redux/actions/absent/absenteeActions"
import { ChevronDown } from "react-feather"


import "../../../../assets/scss/plugins/tables/_agGridStyleOverride.scss"

class AbsenteeList extends React.Component {
  state = {
    rowData: null,
    paginationPageSize: 20,
    modal: false,
    modal2: false,
    absenteeId: null,
    currenPageSize: "",
    getPageSize: "",
    defaultColDef: {
      sortable: true,
      editable: true,
      resizable: true,
      suppressMenu: true
    },
    columnDefs: [
      
      {
        headerName: "Title",
        field: "title",
        width: 200
      },
      
     
      {
        headerName: "Description",
        field: "description",
        width: 100
      },
      
      
      {
        headerName: "Event",
        field: "event.title",
        width: 150
      },
      
     
      {
        headerName: "Absentee",
        field: "user.username",
        width: 200
      },
     
      {
        headerName: "Actions",
        field: "_id",
        width: 500,
        cellRendererFramework: params => {
            return (
                <div className="actions cursor-pointer">
                <Button.Ripple className="mr-1" color="primary" 
                   onClick={() => history.push(`/single-absentee/${params.value}`)}
                  >
                     <span className="align-middle ml-50">View More</span>
                  </Button.Ripple>
                  
                  <Button.Ripple className="mr-1" color="primary" disabled={params.data.status === false ? "disabled" : null}
                   onClick={() => this.toggleCloseIncidentModal(params.value)}
                  >
                     <span className="align-middle ml-50">{params.data.status === false ? "Incident Closed" : "Close Incident"}</span>
                  </Button.Ripple>
                 
                  <Button.Ripple color="danger"
                    onClick={ () => this.toggleModal(params.value)}
                  >
                  <Trash2
                    className="mr-50"
                    size={15}
                  />
                     <span className="align-middle ml-50">Delete</span>
                  </Button.Ripple>
                 
                </div>
              )
        }
      }
    
    ]
  }
  
  
formatDate = (string) => {
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(string).toLocaleDateString([],options);
}

 async componentDidMount() {
     console.log("hjhjshj")
    await this.props.getAbsenteeList();
    let rowData = this.props.absentees
    console.log(this.props)
    this.setState({ rowData })
  }
 

  onGridReady = params => {
    this.gridApi = params.api
    this.gridColumnApi = params.columnApi
    this.setState({
      currenPageSize: this.gridApi.paginationGetCurrentPage() + 1,
      getPageSize: this.gridApi.paginationGetPageSize(),
      totalPages: this.gridApi.paginationGetTotalPages()
    })
  }
  
  

  updateSearchQuery = val => {
    this.gridApi.setQuickFilter(val)
  }

  filterSize = val => {
    if (this.gridApi) {
      this.gridApi.paginationSetPageSize(Number(val))
      this.setState({
        currenPageSize: val,
        getPageSize: val
      })
    }
  }
  
  
  toggleCloseIncidentModal = id => {
    this.setState(prevState => ({
      modal2: !prevState.modal2,
      absenteeId: id
    }))
  }
  
  closeIncident = async () => {
    const {absenteeId} = this.state;
    console.log(absenteeId)
    const {closeIncident} = this.props;
    await closeIncident(absenteeId);
    await this.props.getAbsenteeList();
    this.setState({rowData: this.props.absentees})
    this.toggleCloseIncidentModal();
  }
  
  toggleModal = id => {
    this.setState(prevState => ({
      modal: !prevState.modal,
      absenteeId: id
    }))
  }
  

  deleteAbsentee = async () => {
    
    const {absenteeId} = this.state;
    const {deleteAbsentee} = this.props;
    await deleteAbsentee(absenteeId);
    await this.props.getAbsenteeList();
    console.log(this.props.absentees);
    this.setState({rowData: this.props.absentees})
    this.toggleModal();
  }
  

  render() {
    const { rowData, columnDefs, defaultColDef } = this.state
    return (
      <React.Fragment>
          {rowData != null ? (
        <Card className="overflow-hidden agGrid-card">
          <CardBody className="py-0">
            {this.state.rowData !== null ? (
              <div className="ag-theme-material w-100 my-2 ag-grid-table">
                <div className="d-flex flex-wrap justify-content-between align-items-center">
                  <div className="mb-1">
                    <UncontrolledDropdown className="p-1 ag-dropdown">
                      <DropdownToggle tag="div">
                        {this.gridApi
                          ? this.state.currenPageSize
                          : "" * this.state.getPageSize -
                            (this.state.getPageSize - 1)}{" "}
                        -{" "}
                        {this.state.rowData.length -
                          this.state.currenPageSize * this.state.getPageSize >
                        0
                          ? this.state.currenPageSize * this.state.getPageSize
                          : this.state.rowData.length}{" "}
                        of {this.state.rowData.length}
                        <ChevronDown className="ml-50" size={15} />
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem
                          tag="div"
                          onClick={() => this.filterSize(20)}
                        >
                          20
                        </DropdownItem>
                        <DropdownItem
                          tag="div"
                          onClick={() => this.filterSize(50)}
                        >
                          50
                        </DropdownItem>
                        <DropdownItem
                          tag="div"
                          onClick={() => this.filterSize(100)}
                        >
                          100
                        </DropdownItem>
                        <DropdownItem
                          tag="div"
                          onClick={() => this.filterSize(134)}
                        >
                          134
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </div>
                  <div className="d-flex flex-wrap justify-content-between mb-1">
                    <div className="table-input mr-1">
                      <Input
                        placeholder="search..."
                        onChange={e => this.updateSearchQuery(e.target.value)}
                        value={this.state.value}
                      />
                    </div>
                    <div className="export-btn">
                      <Button.Ripple
                        color="primary"
                        onClick={() => this.gridApi.exportDataAsCsv()}
                      >
                        Export as CSV
                      </Button.Ripple>
                    </div>
                  </div>
                </div>
                <ContextLayout.Consumer>
                  {context => (
                    <AgGridReact
                      gridOptions={{}}
                      rowSelection="multiple"
                      defaultColDef={defaultColDef}
                      columnDefs={columnDefs}
                      rowData={rowData}
                      onGridReady={this.onGridReady}
                      colResizeDefault={"shift"}
                      animateRows={true}
                      floatingFilter={true}
                      pagination={true}
                      paginationPageSize={this.state.paginationPageSize}
                      pivotPanelShow="always"
                      enableRtl={context.state.direction === "rtl"}
                    />
                  )}
                </ContextLayout.Consumer>
              </div>
            ): (
              <div>
                  Data loading
              </div>
            ) }
          </CardBody>
          <Col>
            <Modal
              isOpen={this.state.modal}
              toggle={this.toggleModal}
              className={this.props.className}
            >
              <ModalHeader toggle={this.toggleModal}>
                Delete
              </ModalHeader>
              <ModalBody>
                <h5>Are you sure you want to delete this incident?</h5>
              </ModalBody>
              <ModalFooter>
                <Button color="danger"onClick={this.deleteAbsentee} >
                  Accept
                </Button>{" "}
              </ModalFooter>
            </Modal>
            
            <Modal
              isOpen={this.state.modal2}
              toggle={this.toggleModal}
              className={this.props.className}
            >
            <ModalHeader toggle={this.toggleCloseIncidentModal}>
                Close Incident
              </ModalHeader>
              <ModalBody>
                <h5>Are you sure you want to close this incident ?</h5>
              </ModalBody>
              <ModalFooter>
                <Button color="danger"onClick={this.closeIncident} >
                  Accept
                </Button>{" "}
              </ModalFooter>
            </Modal>
            </Col>
        </Card>
          ):(   
            <div className="text-center">
              <Spinner color="primary" size="lg" />
            </div>) }
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth.login,
    error: state.absentee.error,
    absentee: state.absentee.absentee,
    absentees: state.absentee.absenteeList,
    loading: state.absentee.loading,
  }
}
export default connect(mapStateToProps, { getAbsenteeList, deleteAbsentee, closeIncident })(AbsenteeList)

