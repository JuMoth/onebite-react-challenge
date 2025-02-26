import './Editor.css';
import { useState, useRef, memo } from 'react';

const Editor = ({ onCreate }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const emailRef = useRef();

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    if(name === "name") {
      setName(value);
    } else if(name === "email") {
      setEmail(value);
    }
  };

  const onKeydown = (e) => {
    if(e.keyCode === 13) {
      onClickAddBtn();
    }
  }

  const onClickAddBtn = () => {
    if(email === "") {
      emailRef.current.focus();
      return;
    }
    console.log(name, email);
    onCreate(name, email);
    setName("");
    setEmail("");
  }

  return (
    <div className='editor'>
      <div className='title'>Add Contact</div>
      <div className='input_wrapper'>
        <input
          name='name'
          value={name}
          onKeyDown={onKeydown}
          onChange={onChangeInput}
          type="text"
          className='name'
          placeholder='이름 ...'
        />
        <input
          name='email'
          ref={emailRef}
          value={email}
          onKeyDown={onKeydown}
          onChange={onChangeInput}
          type="email"
          className='email'
          placeholder='연락처(이메일) ...'
        />
      </div>
      <button className='addBtn' onClick={onClickAddBtn}>Add</button>
    </div>
  );
};

export default memo(Editor);
