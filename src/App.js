
import { Component } from 'react';
import './App.css';
import Users from './components/Users'
import AddUserform from './components/AddUserform'
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component {

  constructor(){
    super()
    this.state ={
      users: [
        {name:'Kokosu',
        email:'kokosu@gmail.com',
        gen:12,
        id:'12kdkfkg'},

        {name:'Mary Kwabi',
        email:'k@gmail.com',
        gen:32,
        id:'55jfkfkld'
      },

      ]
    }
  }

  AddNewUser = (user) => { 
    user.id =Math.random().toString()
    this.setState({
      users: [...this.state.users, user]
    })

  }

  deleteUser = (id)=> {
    let UndeletedUsers = this.state.users.filter(user => user.id !== id);
    this.setState(
    {users: UndeletedUsers}
    )
  }

  editUser = (id, updatedUser) => {
    this.setState({
      users:this.state.users.map(user => user.id === id ? updatedUser : user)
    })
  }

  render () {
    return (
      <div className="App">

        <Container>
          <Row>
            <Col md='4'>
            <AddUserform  AddNewUser= {this.AddNewUser}/>
            </Col>

            <Col md='8'>
            <Users  UsersData={this.state.users} deleteUser={this.deleteUser}  editUser={this.editUser}/>
            </Col>

          </Row>
        </Container>

        

        

        
      </div>
    );

  }
 
}

export default App;
