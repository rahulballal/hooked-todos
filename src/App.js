import React from 'react';
import { TodosProvider } from './todos-provider'
import Todos from './todos'

function App() {
  return (
    <div className="App">
    <TodosProvider>
      <Todos />
    </TodosProvider>
    </div>
  );
}

export default App;
