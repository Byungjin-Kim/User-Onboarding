import React, { useState } from 'react';
import axios from 'axios';
import Form from './Components/Form';

import schema from './Validation/formSchema';
import * as yup from 'yup';

import './App.css';


const initialFormValues = {
  username: '',
  password: '',
  email: '',
  TOS: false
}

const initialFormErrors = {
  username: '',
  password: '',
  email: '',
  TOS: ''
}

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [users, setUsers] = useState([]);

  const handleSubmit = () => {
    axios.post('https://reqres.in/api/users', formValues)
    .then(res => {
      // console.log(res);
      setUsers( [res.data, ...users ])


    })
    .catch(err => console.error(err))

  }

  const validate = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({ ...formErrors, [name]: ''}))
    .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const handleChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value });
  }
  
  return (
    <div className="App">
     <Form values={formValues} change={handleChange} errors={formErrors} submit={handleSubmit} />
     {users.map(user => (
      <div key={user.id}>
        <p>{user.createdAt}</p>
        <p>{user.email}</p>
      </div>
     ))}
    </div>
  );
}

export default App;
