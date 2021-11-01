import React from 'react'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import {BrowserRouter as Router, Route} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Header />
      <Route path='/movies/:keyword' component={HomeScreen} exact/>
      <Route path='/' component={HomeScreen} exact/>
    </Router>
  )
}

export default App
