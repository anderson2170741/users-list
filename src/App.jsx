import { useEffect, useState } from 'react'
import axios from 'axios';
import UsersList from './UsersList';
import UsersForm from './UsersForm';
import './App.css'

function App() {

  const [usersList, setUsersList] = useState([]);
  const [userSelected, setUserSelected] = useState(null);

  useEffect(() => {
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setUsersList(res.data));
  }, [])

  const getUsers = () => {
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setUsersList(res.data));
  }

  const selectUser = (user) => {
    setUserSelected(user);
  }

  const deselectUser = () => setUserSelected(null);

  console.log(usersList);

  return (
    <div className="App">
      <UsersForm
        getUsers={getUsers}
        userSelected={userSelected}
        deselectUser={deselectUser}
      />
      <UsersList
        usersList={usersList}
        selectUser={selectUser} 
      />
    </div>
  )
}

export default App
