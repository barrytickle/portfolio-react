import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import HomePage from './components/pages/homePage/template.jsx';

import './assets/style/base/base.scss';
import './assets/style/components/components.scss';

/*
* https://themes.getbootstrap.com/preview/?theme_id=67539
*/


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path:"/contact-me",
    element: <ContactMe/>,
  }
]);

console.log('Router', router);


import Navigation from './components/header/navigation.jsx';
import ContactMe from './components/pages/contactMe.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navigation />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
