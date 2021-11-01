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
      {/* <div className='App'>
        
        <main className='py-3'>
          <Container>
            
            <Route path='/product/:id' component={ProductScreen}/>
            <Route path='/cart/:id?' component={CartScreen}/>
            <Route path='/login' component={LoginScreen}/>
            <Route path='/register' component={RegisterScreen}/>
            <Route path='/profile' component={ProfileScreen}/>
            <Route path='/shipping' component={ShippingScreen}/>
            <Route path='/payment' component={PaymentScreen}/>
            <Route path='/placeorder' component={PlaceOrderScreen}/>
            <Route path='/order/:id' component={OrderScreen}/>
            <Route path='/admin/userList' component={AdminUsersScreen}/>
            <Route path='/admin/user/:id/edit' component={UserEditScreen}/>
          </Container>
        </main>
        <Footer />
      </div> */}
    </Router>
  )
}

export default App
