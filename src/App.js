import React, { Component } from 'react';
import './App.css';
import Header from './components/layouts/Header';
import Main from './components/layouts/Main';
import Footer from './components/layouts/Footer';
import ScrollableAnchor from 'react-scrollable-anchor';

const Sections = () => {
  //const anchors = ['About', 'Experience', 'Projects'];
    const anchors = ['About'];
  //const sectionsArray = [<MainPage />, <Experience />, <Projects />];
  const sectionsArray = [<Main />];
  return (anchors.map((item, index) => { return (<ScrollableAnchor id={item} key={index}><div>{sectionsArray[index]}</div></ScrollableAnchor>) }));
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Sections />
        <Footer />
      </div>
    );
  }
}

export default App;
