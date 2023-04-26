import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Components/Login/Login'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Services from './Components/Services/Services'
import Profile from './Components/Profile/Profile'
import Feedback from './Components/Feedback/Feedback'

const App = () => {
	return (
		<div className="App">
			
		<BrowserRouter>
			<Routes>
				<Route path='/' element={ [ <Navbar />, <Home />] } />
				<Route path='/services' element={ [ <Navbar />, <Services />] } />
				<Route path='/profile' element={ [ <Navbar />, <Profile />] } />
				<Route path='/feedback' element={ [ <Navbar />, <Feedback />] } />
				<Route path='/login' element={ <Login /> } />
			</Routes>
		</BrowserRouter>

		</div>
	)
}

export default App
