import React, { Component } from 'react';
import './App.css';
import Header from './components/layouts/Header';

const Sections = () => {
  const anchors = ['About', 'Experience', 'Projects'];
  //const sectionsArray = [<MainPage />, <Experience />, <Projects />];
  //return (anchors.map((item, index) => { return (<ScrollableAnchor id={item} key={index}><div>{sectionsArray[index]}</div></ScrollableAnchor>) }));
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
