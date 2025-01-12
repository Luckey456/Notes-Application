import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import NotesPage from './pages/NotesPage';
import './styles/App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <NotesPage />
      </div>
    </Provider>
  );
};

export default App;