import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header'
import Main from './components/main'
import Home from './components/Home'
import Projects from './components/Projects'
import Technologies from './components/Technologies'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className='text-amber-50 overflow-x-hidden bg-linear-to-br from-[#1C1829] via-[#1B1828] via-[#191724] via-[#161520] via-[#14131C] via-[#121218] to-[#111117]'>
      <Header />

      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto pt-[60px] md:pt-[80px]">
          <Main />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
