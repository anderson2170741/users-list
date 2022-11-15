import React from 'react';

const UsersList = ({ usersList, selectUser }) => {
    return (
        <ul>
            {
                usersList.map(user => (
                    <li key={user.id}>
                        <h3>{user.first_name}</h3>
                        <div><b>Surname: </b>{user.last_name}</div>
                        <div><b>Email: </b>{user.email}</div>
                        <div><b>Date of Birth: </b>{user.birthday}</div>
                        <button onClick={() => selectUser(user)}>
                            Select
                        </button>
                    </li>

                ))
            }
        </ul>
    );
};

export default UsersList;
