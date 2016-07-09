import React from 'react';
import {mount} from 'react-mounter';
import MainLayout from '../ui/containers/MainLayout.jsx';
import Home from '../ui/pages/Home.jsx';
import App from '../ui/components/App.jsx';
import About from '../ui/pages/About.jsx';
import NotFound from '../ui/pages/NotFound.jsx';

/*
   const routes = [
   {
path: '/',
component: MainLayout
},
{
path: '/about',
component: About
}, {
path: '*',
component: NotFound
}
];

export default routes;
*/ 
FlowRouter.route('/', {
  name: 'Index',
  action() {
    mount(MainLayout, {
      children: <App /> 
    })
  }
});

