import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import Alert from './components/layout/Alert'
import About from './pages/About'
import Home from './pages/Home'
import User from './pages/User'
import NotFound from './pages/NotFound'
import { GithubProvider } from './context/github/GithubContext'
import { AlertProvider } from './context/alert/AlertContext'

function App() {
	return (
		<GithubProvider>
			<AlertProvider>
				<Router>
					<div className='flex flex-col justify-between h-screen'>
						<Navbar />
						<main className='container mx-auto px-3 pb-12 pt-12 flex-grow'>
							<Alert />
							<Routes>
								<Route exact path='/' element={<Home /> }/>
								<Route path='/about' element={<About />} />
								<Route path='/user/:login'  element={<User />} />
								<Route path='/notfound' element={<NotFound />} />
								<Route exact path='/*' element={<NotFound /> }/>
							</Routes>
						</main>
						<Footer />
					</div>
				</Router>
			</AlertProvider>
		</GithubProvider>
)
}

export default App