import React from "react"
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,

} from "reactstrap"
const userModal = ({modal, toggleModal, onClick, className, text, title}) => ( <Modal
isOpen={modal}
toggle={toggleModal}
className={className}
>
<ModalHeader toggle={toggleModal}>
  {title}
</ModalHeader>
<ModalBody>
  <h5>{text}</h5>
</ModalBody>
<ModalFooter>
  <Button color="primary"onClick={onClick} >
    Accept
  </Button>{" "}
</ModalFooter>
</Modal>
)

export default userModal
