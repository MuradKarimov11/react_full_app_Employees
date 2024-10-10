import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { Provider } from 'react-redux';

import { store } from './app/store';
import { Login } from './pages/login';
import { Register } from './pages/register';
import { Paths } from './paths';

import reportWebVitals from './reportWebVitals';

import './index.css';


const router = createBrowserRouter([
  {
    path: Paths.home,
    element: <h2>Employees</h2>,
  },
  {
    path: Paths.login,
    element: <Login/>,
  },
   {
    path: Paths.register,
    element: <Register />,
   },
  // {
  //   path: Paths.employeeAdd,
  //   element: <AddEmployee />,
  // },
  // {
  //   path: `${Paths.employee}/:id`,
  //   element: <Employee />,
  // },
  // {
  //   path: `${Paths.employeeEdit}/:id`,
  //   element: <EditEmployee />,
  // },
  // {
  //   path: `${Paths.status}/:status`,
  //   element: <Status />,
  // },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
