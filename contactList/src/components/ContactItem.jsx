import "./ContactItem.css";
import { memo } from 'react';

function ContactItem({ id, email, name, onDelete }) {
    const onClickDeleteBtn = () => {
        onDelete(id);
    }

  return (
    <div className="ContactItem">
      <div className="name">{name}</div>
      <div className="contact">{email}</div>
      <button onClick={onClickDeleteBtn}>🗑️ Remove</button>
    </div>
  );
}

export default memo(ContactItem);