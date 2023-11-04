import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, fetchTodos } from './store/todoSlice';
import NewPostForm from './NewTodoForm';
import TodoList from './TodoList';
import Layout from './components/Layout';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {


  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/createForm" element={<NewPostForm/>} />
          <Route path="/postList" element={<TodoList />} />
          <Route path="/" element={<div>Welcome!</div>} />

        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
