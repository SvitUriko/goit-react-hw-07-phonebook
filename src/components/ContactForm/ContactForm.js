import { Formik } from 'formik';
import {
  Btn,
  Input,
  Label,
  LabelValue,
  StyledForm,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={(values, actions) => {
        if (!values.name || !values.number) {
          alert('Please enter a name and number.');
          return;
        }

        const doesContactExist = contacts.some(
          ({ name }) => name.toLowerCase() === values.name.toLowerCase()
        );

        if (doesContactExist) {
          alert(`${values.name} is already in contacts.`);
          actions.resetForm();
          return;
        }

        dispatch(addContact(values));

        actions.resetForm();
      }}
    >
      <StyledForm>
        <Label>
          <LabelValue>Name</LabelValue>
          <Input
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>

        <Label>
          <LabelValue>Number</LabelValue>
          <Input
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>

        <Btn type="submit">Add contact</Btn>
      </StyledForm>
    </Formik>
  );
};
