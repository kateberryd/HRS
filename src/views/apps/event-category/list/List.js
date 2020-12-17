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
  Trash2,
} from "react-feather"
import { AgGridReact } from "ag-grid-react"
import { ContextLayout } from "../../../../utility/context/Layout"
import { ChevronDown } from "react-feather"
import {store} from "../../../../redux/storeConfig/store"
import { connect } from "react-redux"
import {getEventCategoryList, deleteEventCategory} from "../../../../redux/actions/event-category/event-categoryActions"
import "../../../../assets/scss/plugins/tables/_agGridStyleOverride.scss"

class CategoryList extends React.Component {
  state = {
    rowData: null,
    deleteEventCategoryId: null,
    paginationPageSize: 20,
    currenPageSize: "",
    modal: false,
    getPageSize: "",
    defaultColDef: {
      sortable: true,
      editable: true,
      resizable: true,
      suppressMenu: true
    },
    columnDefs: [
      
      {
        headerName: "Category",
        field: "name",
        width: 300
      },
     
      {
        headerName: "Icon Link",
        field: "icon",
        width: 300
      },
     
      {
        headerName: "Actions",
        field: "_id",
        width: 300,
        cellRendererFramework: params => {
            return (
                <div className="actions cursor-pointer">
                
                  <Button.Ripple color="danger"
                    onClick={() => this.toggleModal(params.value)}
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

  async componentDidMount() {
    await this.props.getEventCategoryList();
    const data = this.props.categories
    this.setState({rowData: data})
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
  
  async componentWillReceiveProps(nextProps){ 
    if(nextProps.category != null){
      await this.props.getEventCategoryList();
      this.setState({rowData: this.props.categories})
      store.dispatch({
        type:"CREATE_CATEGORY_SUCCESS",
        payload: null
     })
    }
  }
  
  toggleModal = (id) => {
    this.setState(prevState => ({
      modal: !prevState.modal,
      deleteEventCategoryId: id
    }))
  }
  
  
  
  deleteEventCategory = async () => {
    const {deleteEventCategoryId} = this.state
    const {deleteEventCategory} = this.props
    await deleteEventCategory(deleteEventCategoryId)
    await this.props.getEventCategoryList()
    const data = this.props.categories;
    this.setState({rowData: data})
    this.toggleModal();
  }

  render() {
    const { rowData, columnDefs, defaultColDef } = this.state
    return (
      <React.Fragment>
       
        <Card className="overflow-hidden agGrid-card">
          <CardBody className="py-0">
            {this.state.rowData === null ? null : (
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
            )}
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
                <h5>Are you sure you want to delete this category?</h5>
              </ModalBody>
              <ModalFooter>
                <Button color="danger"onClick={this.deleteEventCategory} >
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
    category: state.category.category,
    categories: state.category.categoryList
  }
}
export default connect(mapStateToProps, { getEventCategoryList, deleteEventCategory })(CategoryList)

