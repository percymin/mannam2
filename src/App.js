import './App.css';
import Landing from './Landing';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateRoom from './CreateRoom';
import CreateRoom2 from './CreateRoom2';
import CalendarPage from './CalendarPage';
function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Landing />}></Route>
                    <Route path="/CreateRoom" element={<CreateRoom />}></Route>
                    <Route path="/CreateRoom2" element={<CreateRoom2 />}></Route>
                    <Route path="/CalanderPage" element={<CalendarPage />}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
