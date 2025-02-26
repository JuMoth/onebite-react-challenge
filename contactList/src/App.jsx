import './App.css'
import Editor from './components/Editor'
import Header from './components/Header'
import List from './components/List'

import { useState, useRef, useReducer, useCallback } from 'react';

const mockData = [
  {
    id: 0,
    name: "한입스튜디오",
    email: "onebite.fe@gmail.com"
  },
  {
    id: 1,
    name: "홍길동1",
    email: "ghdrlfehd1@gmail.com"
  },
  {
    id: 2,
    name: "홍길동2",
    email: "ghdrlfehd2@gmail.com"
  },
];

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE_EMAIL':
      return [...state, action.payload];
    case 'DELETE_EMAIL':
      return state.filter((email) => email.id !== action.payload);
    default:
      return state;
  }
}

function App() {
  const [contact, setContact] = useState(mockData);
  const [emails, dispatchEmail] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = useCallback((name, email) => {
    const newContact = {
      id: idRef.current++,
      name: name,
      email: email,
    };

    setContact([...contact, newContact]);
    dispatchEmail({
      type: 'CREATE_EMAIL',
      payload: newContact
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    setContact(contact.filter((contact) => contact.id !== targetId));
    dispatchEmail({
      type: 'DELETE_EMAIL',
      payload: targetId
    });
  }, []);
  
  return (
    <div className='app'>
      <Header />
      <Editor onCreate={onCreate} />
      <List contact={emails} onDelete={onDelete} />
    </div>
  )
}

export default App;