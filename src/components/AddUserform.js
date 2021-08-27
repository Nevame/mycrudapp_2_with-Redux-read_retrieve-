import React, {Component} from 'react';
import { Form, Button } from 'react-bootstrap';
import {addUser} from '../actions/userActions'
import {connect} from 'react-redux'


class AddUserform extends Component {
    constructor (props) {
        super(props);

        this.state = {
            name: '',
            email:'',
            gen: ''
        }

        
    
    }

    handleChange = (e) => {
        e.preventDefault();
        
        this.setState ({
            
            [e.target.name] : e.target.value
        })

        console.log(this.state)
        


    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.AddNewUser(this.state)
        console.log('submitted', this.state)
        
          
    
    }

  

    render () {

        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control type="name" size='lg' placeholder="Enter name" name='name' onChange= {this.handleChange} value={this.state.name} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="email" size='lg' placeholder="Enter email" name='email' onChange= {this.handleChange} value={this.state.email}/>
                    </Form.Group>
    
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Gen:</Form.Label>
                        <Form.Control type="gen"  size='lg' placeholder="Gen" name='gen' onChange= {this.handleChange} value={this.state.gen}/>
                    </Form.Group>
                   
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );
        
    }
    
}

const mapDispatchToProps = {
    addNewUser: addUser
}

export default connect(null, mapDispatchToProps) (AddUserform);
