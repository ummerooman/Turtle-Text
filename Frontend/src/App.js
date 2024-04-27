import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react'; 
import { Nav } from './components/nav';
import { Home } from './components/home'; 
import { BrowserRouter as Router } from 'react-router-dom'; 
function App() {  
  return (
    <ChakraProvider theme={theme}>
    
    <Router>
      
      <Nav /> 
       <Home />  

    </Router>
    </ChakraProvider>
  );
}

export default App;
