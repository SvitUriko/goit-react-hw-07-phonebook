import { useDispatch } from 'react-redux';
import { Item, Text, Btn } from './ContactItem.styled';
import { deleteContact } from 'redux/operations';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <Item id={id}>
      <Text>
        {name}: {number}
      </Text>
      <Btn
        type="button"
        name="delete"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </Btn>
    </Item>
  );
};
