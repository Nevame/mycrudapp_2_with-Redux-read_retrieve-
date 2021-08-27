import React, {useState} from 'react';
import {Card, Button, Modal} from 'react-bootstrap'
import EditUserform from './EditUserForm';

const User = (props) => {

    
        const [show, setShow] = useState(false);
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

   const handleDelete = (e) => {
       e.preventDefault();
       console.log("itemdeleted")
       props.deleteUser(props.userInfo.id)

    }
    return (
        <>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body><EditUserform userInfo={props.userInfo} editUser={props.editUser}  closeModal={handleClose}/></Modal.Body>
        
      </Modal>

        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Crud APP USER</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Name:{props.userInfo.name}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Email:{props.userInfo.email}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Gen:{props.userInfo.gen}</Card.Subtitle>
                    
                    <Card.Link href="#"><Button onClick={handleDelete}>DELETE</Button></Card.Link>
                    <Card.Link href="#"><Button onClick={handleShow}>EDIT</Button></Card.Link>
                </Card.Body>
            </Card>

        </div>
        </>
    );
}

export default User;
