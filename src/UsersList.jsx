import React from 'react';

const UsersList = ({ usersList, selectUser }) => {
    return (
        <div>
            {usersList.map((user) => (
                    <ul key={user.id}>
                        <li>
                            <h3><b>Name: </b>{user.first_name}</h3>
                            <h3><b>Surname: </b>{user.last_name}</h3>
                            <h3><b>Email: </b>{user.email}</h3>
                            <h3><b>Date of Birth: </b>{user.birthday}</h3>
                            <button onClick={selectUser}>Select</button>
                        </li>
                    </ul>

                ))
            }
        </div>
    );
};

export default UsersList;
