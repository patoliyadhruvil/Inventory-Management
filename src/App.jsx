import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import PageWrapper from './components/Page-wrapper/Page-wrapper';
import { Route, Routes } from 'react-router';
import CreateProducts from './components/CreateProducts/CreateProducts';
import EditProducts from './components/EditProducts/EditProducts';
import ViewProducts from './components/ViewProducts/ViewProducts';
import { Provider, useSelector } from 'react-redux';
import { store } from './store';
import Login from './components/Login/Login';

function App() {
  const isLoggedIn = useSelector((state) => state.authReducer.isLogin);

  return (
    <Provider store={store}>
      <>
        {isLoggedIn ? (
          <>
            <Header />
            <Sidebar />
            <Routes>
              <Route path='/' element={<PageWrapper />} />
              <Route path='/CreateProducts' element={<CreateProducts />} />
              <Route path='/ViewProducts' element={<ViewProducts />} />
              <Route path='/EditProducts' element={<EditProducts />} />
            </Routes>
          </>
        ) : (
          <Routes>
            <Route path='/' element={<Login />} />
          </Routes>
        )}
      </>
    </Provider>
  );
}

export default App;
