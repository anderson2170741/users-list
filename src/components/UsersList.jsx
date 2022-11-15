import React from 'react';

const UsersList = ({ usersList, selectUser, deselectUser }) => {
    return (
        <ul>
            {
                usersList.map(user => (
                    <li key={user.id}>
                        <h3>{user.first_name}</h3>
                        <div><b>Surname: </b>{user.last_name}</div>
                        <div><b>Email: </b>{user.email}</div>
                        <div><b>Date of Birth: </b>{user.birthday}</div>
                        <i onClick={() => selectUser(user)} class="fa-solid fa-user-pen"></i>
                        <i onClick={() => deselectUser(user)} class="fa-solid fa-user-xmark"></i>
                        <i class="fa-solid fa-trash"></i>
                        
                    </li>

                ))
            }
        </ul>
    );
};

export default UsersList;
