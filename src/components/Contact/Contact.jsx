import { useDispatch } from 'react-redux';
import css from './Contact.module.css';
import { BsFillTelephoneFill, BsPersonFill } from 'react-icons/bs';
import { deleteContact } from '../../redux/contactsSlice';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const onClickDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <div>
        <p className={css.contactData}>
          <BsPersonFill className={css.icon} />
          {contact.name}
        </p>
        <p className={css.contactData}>
          <BsFillTelephoneFill className={css.icon} />
          {contact.number}
        </p>
      </div>

      <button
        className={css.btnDelete}
        type="click"
        onClick={() => onClickDelete(contact.id)}
      >
        Delete
      </button>
    </>
  );
};
export default Contact;
