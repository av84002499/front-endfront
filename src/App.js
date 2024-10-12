import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FilterablePokedexTable from './page/FilterablePokedexTable';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<FilterablePokedexTable />} />
      </Routes>
    </Router>
  )
}

export default App