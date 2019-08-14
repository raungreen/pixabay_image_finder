import React from 'react';
import './App.css';
import NavBar from './components/navBar/NavBar';
import { MuiThemeProvider } from 'material-ui/styles';
import Search from './components/search/Search';

function App() {
  return (
    <MuiThemeProvider>
      <div className="App">
        <NavBar />
        <Search />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
