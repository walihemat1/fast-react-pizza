import { useDispatch } from 'react-redux';
import { deleteItem } from './cartSlice';
import Button from '../../ui/Button';

function DeleteButton({ pizzaId }) {
  const dispatch = useDispatch();

  function deleteItemHandler() {
    dispatch(deleteItem(pizzaId));
  }

  return (
    <Button type="small" onClick={deleteItemHandler}>
      Delete
    </Button>
  );
}

export default DeleteButton;
