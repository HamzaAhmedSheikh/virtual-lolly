import React from 'react';
import Home from '../pages/index';
import '../styles/main.css'

export default {
    title: 'Lolly/Lollies',
    component: Home,
  };


  const Template = (args) => <Home {...args} />;

  export const Default = Template.bind({});
  
  export const Error = Template.bind({});
  Error.args = {
    error: 'Something',
 };