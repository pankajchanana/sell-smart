import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Home from './pages/Home';
import AppBar from './components/AppBar';
import Login from './components/Login';
import CreatePost from './components/CreatePosts';
import PostDetails from './components/PostDetails';
import PostList from './components/PostList/PostList';
import { AppContextProvider } from './context/AppContext';
import Signup from './pages/Signup';

const theme = createTheme({
  palette: {
    primary: {
      main: '#008060',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppContextProvider>
          <AppBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/create-post' element={<CreatePost />} />
            <Route path='/posts' element={<PostList />} />
            <Route path='/post/:postId' element={<PostDetails />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='*' element={<div>404 Page Not Found</div>} />
          </Routes>
        </AppContextProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
