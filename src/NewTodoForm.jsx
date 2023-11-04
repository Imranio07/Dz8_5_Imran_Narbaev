// NewTodoForm.js
import { useDispatch } from 'react-redux';
import { addTodo } from './store/todoSlice';
import { useState } from 'react';

const NewTodoForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      dispatch(addTodo(title));
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter post title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Create Post</button>
    </form>
  );
};

export default NewTodoForm;
