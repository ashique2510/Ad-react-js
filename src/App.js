import React, { lazy , Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import { createBrowserRouter ,RouterProvider, Outlet } from 'react-router-dom'
import Contact from './components/Contact.js'
import Error from './components/Error'
import RestaurantMenu from './components/RestaurantMenu.js';
import Test from './components/Test.js';
// import Grocery from './components/Grocery.js';


const Grocery = lazy(()=> import('./components/Grocery.js'));

const AppLayout = ()=> {

  return (
    <div className='app'>
      <Header />
      <Outlet />
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path:'/test',
        element:<Test />
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/grocery',
        element: <Suspense fallback={<h1>Loading...</h1>} ><Grocery /></Suspense>,
      },
      {
        path: '/restaurant/:resId',
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'))

      root.render(<RouterProvider router={appRouter} />);


