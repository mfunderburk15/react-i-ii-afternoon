import React, { Component } from 'react';
import Content from './components/Content';
import Header from './components/Header'
import './App.css';

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <Content />
      </div>
    )
  }
}