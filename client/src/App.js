import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css';
import Header from './components/global/Header.js'
import ListView from './components/listview/ListView.js'
import TaskView from './components/taskview/TaskView.js'

function App() {
    document.body.style.backgroundColor = "#ffffff";
    return (
        <div className='appDiv'>
            <Router>
                <Header/>
                <Routes>
                    <Route path='/' element={<ListView/>}/>
                    <Route path='/task/:id' element={<TaskView/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
