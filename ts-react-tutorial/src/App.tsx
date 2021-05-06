import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greetings from './Greetings';
import Counter from './Counter';
import MyForm from './MyForm';
import ReducerSamople from './ReducerSample';
import SampleProvider from './SampleContext';

function App() {
  const onClick =  (name:string) => {
    console.log(name);
  }
  const onSubmit = (form: {name: string; description: string;}) => {
    console.log(form);
  }
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    // <Greetings name='리액트' onClick={onClick}/>
    <>
      {/* <Counter></Counter> */}
      {/* <MyForm onSubmit={onSubmit}/> */}
      <SampleProvider>
        <ReducerSamople/>
      </SampleProvider>
    </>
  );
}

export default App;
