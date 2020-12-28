# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.







import React from 'react';

import './style/style.css';

interface TitleProps {
  text: string;
}

function Title(props: TitleProps) {
  return (
    <h1>{props.text}</h1>
  ) 
}

function App() {
  return (
    <div className="App">
      <Title text="title"/>
      <Title text="other title"/>
      <Title text="other other title"/>
      <Title text="potato"/>
    
    
    </div>
  );
}

export default App;




interface ValidationErrors {
  [key:string]: string[];
}

const errorHandler: ErrorRequestHandler = (error, request, response, next) => {
  if (error instanceof ValidationError) {
    let errors: ValidationErrors = {};

      errors.inner.forEach(err => {
        errors[err.] = err.errors;
      })
    
  }

