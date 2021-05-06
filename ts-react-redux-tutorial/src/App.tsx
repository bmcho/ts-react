import React from 'react';
import logo from './logo.svg';
import './App.css';
import CounterContainer from './container/CounterContainer';
import TodoApp from './container/TodoApp';
import GithubProfileLoader from './container/GithubProfileLoader';

function App() {
  return (
    <>
      {/* <CounterContainer />
      <TodoApp/> */}
      <GithubProfileLoader />
    </>
  );
}

export default App;
