import axios from 'axios';
import { useEffect, useState } from 'react'
import UsersList from './components/UsersList';
import UsersForm from './components/UsersForm';
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
        deselectUser={deselectUser} 
      />
    </div>
  )
}

export default App
