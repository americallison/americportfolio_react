import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Projects from './routes/projects';
import CV from './routes/CV';
import Contact from './routes/contact';
import Skills from './routes/skills';
import About from './routes/about';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/projects",
    element: <Projects />,
  },

  {
    path: "/cv",
    element: <CV />,
  },

  {
    path: "/contact",
    element: <Contact />,
  },

  {
    path: "/skills",
    element: <Skills />,
  },

  {
    path: "/about",
    element: <About />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



