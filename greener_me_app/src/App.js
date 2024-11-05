import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components';
import './pages/Information.css';
import { Information, Products, ListingDetail, NewListing } from './pages';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/information" element={<Information />} />
          <Route path="/products" element={<Products />} />
          <Route path="/newListing" element={<NewListing />} />
          <Route path="/listingDetail" element={<ListingDetail />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
