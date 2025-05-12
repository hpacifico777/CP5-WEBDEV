import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Error from '../routes/Error'
import Home from '../routes/Home'
import Contato from '../routes/Contato'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="*" element={<Error />} />
            <Route path="/" element={<Home />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}
export default App