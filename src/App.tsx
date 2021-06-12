import React from 'react';
import './App.css';
import './styles/style.scss'
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoBoard from './components/TodoBoard';

const App: React.FC = () => {
  return(
      <div>
          <Header/>
          <TodoBoard/>
      </div>
  );
}

export default App;
