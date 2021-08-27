import React from 'react';
import User from './User'
import {connect} from 'react-redux';

const Users = (props) => {
    return (
        <div>
            {props.UsersData.map((user) =>  
              <User userInfo={user} key={user.id} deleteUser={props.deleteUser} editUser={props.editUser} />  )}
            
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
      users: state.users,
    }
  }
export default connect(mapStateToProps)(Users);
