import { Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Home from './pages/Home';
import { BrowserRouter } from 'react-router-dom';
import { RoleProvider } from './context/RoleContext';

function App() {
  return (
    <BrowserRouter>
      <RoleProvider>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </RoleProvider>
      </BrowserRouter >
  );
}

export default App;
