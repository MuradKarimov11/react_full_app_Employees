import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { ConfigProvider, theme } from "antd";

import { store } from "./app/store";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Paths } from "./paths";

import reportWebVitals from "./reportWebVitals";

import "./index.css";
import { Header } from "./components/header";

const router = createBrowserRouter([
  {
    path: Paths.home,
    element: <Header />,
  },
  {
    path: Paths.login,
    element: <Login />,
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
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
        }}
      >
        <RouterProvider router={router} />
      </ConfigProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
