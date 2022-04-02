import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Frinds from './components/Frinds/Frinds';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import FriendDetails from './components/FriendDetails/FriendDetails';
import Posts from './components/Posts/Posts';
import PostDetail from './components/PostDetails/PostDetail';

function App() {
  return (
    <div className="App">
      <Header></Header>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/frinds' element={<Frinds/>}></Route>
      <Route path='/friend/:friendid'  element={<FriendDetails></FriendDetails>}></Route>
      <Route path='/post/' element={<Posts></Posts>}>
        <Route path=':postId/' element={<PostDetail></PostDetail>}></Route>
      </Route>
      <Route path='about/' element={<About/>}></Route>
      <Route path='*' element={<NotFound/>}></Route>
      
     </Routes>
    </div>
  );
}

export default App;
