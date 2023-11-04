import { useDispatch } from 'react-redux';
import {toggleComplete, removeTodo} from '../store/todoSlice';

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <span>{title}</span>
      <span onClick={() => dispatch(removeTodo({id}))}>&times;</span>
    </li>
  );
};

export default TodoItem;