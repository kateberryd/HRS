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
} from "reactstrap"
import {
  Edit,
  Trash2,
} from "react-feather"
import { AgGridReact } from "ag-grid-react"
import { ContextLayout } from "../../../../utility/context/Layout"
import { history } from "../../../../history"
import { connect } from "react-redux"
import {store} from "../../../../redux/storeConfig/store"
import { getGroupList, deleteGroup } from "../../../../redux/actions/group/groupActions"
import { ChevronDown } from "react-feather"


import "../../../../assets/scss/plugins/tables/_agGridStyleOverride.scss"

class GroupList extends React.Component {
  state = {
    rowData: null,
    paginationPageSize: 20,
    modal: false,
    deleteGroupId: null,
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
        headerName: "Group",
        field: "name",
        width: 200,
        cellRendererFramework: params => {
          return this.capitilizeText(params.value)
       }
      },
      
      {
        headerName: "campus",
        field: "campus.name",
        width: 200,
        cellRendererFramework: params => {
          return this.capitilizeText(params.value)
       }
      },
     
      {
        headerName: "Address",
        field: "address",
        width: 200,
        cellRendererFramework: params => {
          return this.capitilizeText(params.value)
       }
      },
     
     
      {
        headerName: "Actions",
        field: "_id",
        width: 500,
        cellRendererFramework: params => {
          return (
            <div className="actions cursor-pointer">
            <Button.Ripple className="mr-1" color="primary" 
               onClick={() => history.push(`/group/${params.value}`)}
              >
              <Edit
                className="mr-50"
                size={15}
              />
                 <span className="align-middle ml-50">View More</span>
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
  
  async componentWillReceiveProps(nextProps){ 
    if(nextProps.group != null){
      await this.props.getGroupList();
      this.setState({rowData: this.props.groups})
      store.dispatch({
        type:"CREATE_GROUP_SUCCESS",
        payload: null
    })
    }
  }

 async componentDidMount() {
    await this.props.getGroupList();
    let rowData = this.props.groups
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
  
  
  capitilizeText = (text) => {
    return text !== null ? text.charAt(0).toUpperCase() + text.slice(1) : null;
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
  
  toggleModal = id => {
    this.setState(prevState => ({
      modal: !prevState.modal,
      deleteGroupId: id
    }))
  }
  

  deleteGroup = async () => {
    const {deleteGroupId} = this.state;
    const {deleteGroup} = this.props;
    await deleteGroup(deleteGroupId);
    await this.props.getGroupList();
    console.log(this.props.groups);
    this.setState({rowData: this.props.groups})
    this.toggleModal();
  }
  

  render() {
    const { rowData, columnDefs, defaultColDef } = this.state
    return (
      <React.Fragment>
       
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
                <h5>Are you sure you want to delete this group?</h5>
              </ModalBody>
              <ModalFooter>
                <Button color="danger"onClick={this.deleteGroup} >
                  Accept
                </Button>{" "}
              </ModalFooter>
            </Modal>
            </Col>
        </Card>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth.login,
    error: state.group.error,
    group: state.group.group,
    groups: state.group.groupList,
    loading: state.group.loading,
  }
}
export default connect(mapStateToProps, { getGroupList, deleteGroup })(GroupList)

