import './App.css';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import ThemeContextProvider from './contexts/ThemeContexts';
import AuthContextProvider from './contexts/AuthContext';
import TodoListContext from './contexts/TodoListContext';

function App() {
  return (
    <div className="App">
      <div className="ui raised very padded text container segment">
        <AuthContextProvider>
          <TodoListContext>
          <ThemeContextProvider>
            <Navbar />
            <TodoList />
            </ThemeContextProvider>
            </TodoListContext>
        </AuthContextProvider>
      </div>
    </div>
  );
}

export default App;
