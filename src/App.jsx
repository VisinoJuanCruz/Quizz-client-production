
import { Routes ,Route} from 'react-router-dom';
import "./app.css"
import Game from "./components/Game/Game"
import Header from "./components/Header/Header"
import Listado from "./components/Listado/Listado"
import QuestionForm from './components/Forms/QuestionForm';
import ThemeForm from './components/Forms/ThemeForm'
import Footer from "./components/Footer/Footer"

function App() {
  
  return (
    <div className="container app">
      <Header />
      <Routes>
        <Route path="/Quizz-client-production/" element={<Listado />} />
        <Route path="/Quizz-client-production/game/:gameId" element={<Game />} />
        <Route path="/Quizz-client-production/game/:gameId/add-question" element={<QuestionForm />} />
        <Route path="/Quizz-client-production/add-theme" element={<ThemeForm />} />
      </Routes>
      <Footer />
    </div>
  );  
}

export default App
