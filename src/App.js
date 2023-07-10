
import './App.css';
import TodoList from './component/TodoList';
import Counter from './component/Counter';
import { useEffect } from 'react';
import { useUserStore } from './store/useUsersStore';

function App() {
  const {fetch, user} =useUserStore();

  useEffect(() => {
  fetch(1);  
   
  }, [fetch])
  
  return (
    <div className="App">
      <header className='App-header'>
        <Counter />
        <TodoList />
        <p>
          {user.name}
        </p>
        <p>
          {user.phone}
        </p>

      </header>

    </div>
  );
}

export default App;
