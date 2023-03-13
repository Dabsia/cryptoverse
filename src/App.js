import { Routes, Route, Link } from 'react-router-dom'
import { Layout, Typography, space } from 'antd'
import './App.css';
// use this pattern for better imports
import { Navbar, Footer } from './components'
// import Navbar from './components/Navbar/Navbar';
import './App.css'

import News from './Pages/News/News';
import HomePage from './Pages/HomePage/HomePage';
import Cryptocurrency from './Pages/Cryptocurrency/Cryptocurrency';
import Exchanges from './Pages/Exchanges/Exchanges';
import CryptoDetails from './Pages/CrytoDetail/CryptoDetails';

function App() {
  return (
    <div className="app">
      <div className='navbar'>
        <Navbar />

      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/exchanges' element={<Exchanges />} />
              <Route path='/cryptocurrencies' element={<Cryptocurrency />} />
              <Route path='/news' element={<News />} />
              <Route path='/crypto/:coinId' element={<CryptoDetails />} />

            </Routes>
          </div>
        </Layout>
        <div className='footer'>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
