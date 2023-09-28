import { useDispatch } from 'react-redux';
import { Input } from './Filter.styled';
import { setFilter } from 'redux/filtersSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <>
      <h3>Find contact by name</h3>
      <Input
        type="text"
        name="filter"
        onChange={evt => {
          dispatch(setFilter(evt.target.value));
        }}
      />
    </>
  );
};
