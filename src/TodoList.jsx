// TodoList.js
import { useDispatch, useSelector } from 'react-redux';
import TodoItem from './components/TodoItem';
import { fetchTodos } from './store/todoSlice';
import { useEffect } from 'react';

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  const { status, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <ul>
      {todos.posts?.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};

export default TodoList;
