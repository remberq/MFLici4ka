import React from 'react';
import ReactDOM from 'react-dom';
import { MFText } from './MFText';

const App = () => {
  return (
    <>
      <h1>Hello, React!</h1>
      <MFText text="textTest" />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
