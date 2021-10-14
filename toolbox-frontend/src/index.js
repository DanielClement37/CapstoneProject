import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './Components/App/App';
import LoginPage from './Pages/LoginPage';
import SignInPage from './Pages/SignInPage';

const routs = (
   <BrowserRouter>
      <div>
         <Route path="/" component={App} />
         <Route path="/loginpage" component={LoginPage} />
         <Route path="/signinpage" component={SignInPage} />
      </div>
   </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<LoginPage />, document.getElementById('root'));
//ReactDOM.render(<SignInPage />, document.getElementById('root'));