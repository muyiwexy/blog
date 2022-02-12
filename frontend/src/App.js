import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

//Page and layout imports
import Homepage from './pages/Homepage'
import Contents from './pages/Contents'

function App() {
  return (
    <Router>
      <div className="App">
        <Siteheader />
        <Routes>
          <Route exact path="/" element={<Homepage />}>
          </Route>
          <Route path="/contents/:id" element={<Contents />}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;