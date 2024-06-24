
import "./app.css"
import Game from "./components/Game/Game"
import Header from "./components/Header/Header"
import Listado from "./components/Listado/Listado"
import QuestionForm from './components/Forms/QuestionForm';
import ThemeForm from './components/Forms/ThemeForm'
import Footer from "./components/Footer/Footer"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router basename="/Quizz-client-production">
      <div className="container app">
        <Header />
        <Routes>
          <Route path="/" element={<Listado />} />
          <Route path="/game/:gameId" element={<Game />} />
          <Route path="/game/:gameId/add-question" element={<QuestionForm />} />
          <Route path="/add-theme" element={<ThemeForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;