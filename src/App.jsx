import './assets/css/app.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from "./pages/HomePage";

export default function App() {
 
  return (
    <>
      <div>
        <div className="App">
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </Router>
        </div>
      </div>
    </>
  )
}
