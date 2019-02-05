import React, { Component } from 'react';

// Styling
import MyNavBar from './MyNavBar';
import { Button } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
      <MyNavBar />
       <Button>LOG IN</Button>
      </div>
    );
  }
}

export default App;
