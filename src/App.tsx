import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Emissions from './pages/Emissions';
import Streaming from './pages/Streaming';
import VOD from './pages/VOD';
import About from './pages/About';
import Contact from './pages/Contact';
import DonnationPage from './pages/Don';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />,
//   },
// ]);

function App() {
  return (
    <div className="App">
      {/* <RouterProvider router={router} /> */}
      <Router>
        <Routes>
          <Route Component={Home} path="/" />
          <Route Component={Emissions} path='/emissions/:name' />
          <Route Component={Streaming} path='/live' />
          <Route Component={VOD} path='/vod' />
          <Route Component={About} path='/about' />
          <Route Component={Contact} path='/contact' />
          <Route Component={DonnationPage} path='/give-a-coffee' />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
