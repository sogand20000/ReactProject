import './App.css'
import Movies from './screen/Movies'
import Customers from './screen/Customers'
import NotFound from './screen/NotFound'
import MovieForm from './screen/MovieForm'
import Rentals from './screen/Rentals'
import Login from './screen/Login'
import Register from './screen/Register'
import New from './screen/movies/New'
import PostList from './screen/Post/List'
import PostNew from './screen/Post/Add'

import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Redirect,
  Navigate,
} from 'react-router-dom'
import NavBar from './component/NavBar'

function App() {
  return (
    <>
      <NavBar></NavBar>

      <main className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/Movies" element={<Movies></Movies>}></Route>
            <Route path="/Customers" element={<Customers></Customers>}></Route>
            <Route path="Movies/:id" element={<New></New>}></Route>

            <Route path="/Rentals" element={<Rentals></Rentals>}></Route>

            <Route path="/Login" element={<Login></Login>}></Route>
            <Route path="/Register" element={<Register></Register>}></Route>
            <Route path="/NotFound" element={<NotFound></NotFound>}></Route>
            <Route path="movies/New" element={<New></New>}></Route>
            <Route path="Post/List" element={<PostList></PostList>}></Route>
            <Route path="Post/Add" element={<PostNew></PostNew>}></Route>

            <Route
              path="/"
              element={<Navigate to="/Movies" replace></Navigate>}
            ></Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  )
}

export default App
