import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
import { BrowserRouter,Route } from 'react-router-dom';
import {createContext, useState} from 'react';

export const TestContext = createContext('');

function App() {
  const [value, setValue] = useState('Teste')

  return (
    <BrowserRouter>
      <TestContext.Provider value = {value}>
        <Route path='/' exact={true} component={Home}/>
        <Route path='/rooms/new' component={NewRoom}/>
      </TestContext.Provider>
    </BrowserRouter>
  );
}

export default App;
