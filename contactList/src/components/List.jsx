import './List.css';
import ContactItem from './ContactItem';

const List = ({ contact, onDelete }) => {
    return (
        <div className="list">
            <div className="title">Contact List</div>
            <div className="contact_wrapper">
                {contact.map((item) => (
                    <ContactItem
                        key={item.id}
                        {...item}
                        onDelete={onDelete}
                    />
                ))}
            </div>
        </div>
    )
};

export default List;