import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'react-toastify/dist/ReactToastify.min.css';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Books from './pages/Books';
import Authors from './pages/Authors';
import BookForm from './pages/BookForm';
import UserState from './context/UserState';
import { ToastContainer } from 'react-toastify';
import AuthorForm from './pages/AuthorForm';

function App() {
  return (
    <UserState>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Books />} />
          <Route path='/add/book' element={<BookForm />} />
          <Route path='/edit/book/:id' element={<BookForm />} />
          <Route path='/authors' element={<Authors />} />
          <Route path='/add/author' element={<AuthorForm />} />
          <Route path='/edit/author/:id' element={<AuthorForm />} />
        </Routes>
        <ToastContainer />
      </div>
    </UserState>
  );
}

export default App;
