import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Home from './Home';
import NavBar from './NavBar';


const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
  }
`;

  const StyledApp = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

class App extends React.Component {
    state = {
      currentArea: {
        type: 'HOME'
      }
    };
  
    getContentComponent = () => {
      const { currentArea } = this.state;
      if (currentArea.type === 'HOME') {
        return <Home />;
      }
    };
  
    render() {
      return (
        <StyledApp>
          <GlobalStyle />
  
          <NavBar />
          {this.getContentComponent()}
        </StyledApp>
      );
    }
  }
  
  export default App;