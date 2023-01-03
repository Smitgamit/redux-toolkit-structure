import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { appRoutes, protectedRoutes } from './routes/Routes';
import PageNotFound from './pages/PageNotFound';
import Login from './pages/Login';
import { useSelector } from 'react-redux';

function App() {
  const { userToken } = useSelector((state) => state.auth)
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          {
            appRoutes.map((route, idx) => {
              return route.element ? (
                <Route
                  key={idx}
                  path={route.path}
                  name={route.name}
                  element={<route.element />}
                />
              ) : null;
            })
          }
          {
            userToken !== null ?
              protectedRoutes.map((route, idx) => {
                return route.element ? (
                  <Route
                    key={idx}
                    path={route.path}
                    name={route.name}
                    element={<route.element />}
                  />
                ) : null;
              })
              : <Route path="*" element={<Login />} />
          }
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
