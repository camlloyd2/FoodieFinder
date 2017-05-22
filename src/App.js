import React from 'react';
import './App.css';
import ContentWrapper from './components/ContentWrapper';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <h1>Foodie Finder</h1>
        <ContentWrapper />
      </div>
    );
  }
}

export default App;
