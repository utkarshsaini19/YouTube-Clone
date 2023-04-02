import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import CategoriesBar from './components/categoriesBar/CategoriesBar'
import HomeScreen from './screens/homescreen/HomeScreen'
import './_app.scss'
import LoginScreen from './screens/loginScreen/LoginScreen'
import { Routes, Route,Navigate, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import WatchScreen from './screens/watchScreen/WatchScreen'
import SearchScreen from './screens/SearchScreen'
import Subscription from './screens/subscriptionsScreen/Subscription'
import ChannelScreen from './screens/channelScreen/ChannelScreen'

const Layout = ({ children }) => {
  const [sidebar, toggleSidebar] = useState(false)

  const handleToggleSidebar = () => {
    toggleSidebar(prev => !prev)
  }
  return <>
    <Header handleToggleSidebar={handleToggleSidebar} />
    <div className="app_container " >
      <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
      <Container fluid className='app_main '>
        {/* <HomeScreen /> */}
        {children}
      </Container>

    </div>
  </>
}

const App = () => {
  console.log(process.env.REACT_APP_VARIABLES || "SAMPLE")
  const {accessToken , loading} = useSelector(state=> state.auth);
  const navigate = useNavigate();
  useEffect(()=>{
    if(!loading && !accessToken)
    {
      navigate('/auth');
    }
  },[accessToken,loading,navigate])

  return (
    
      <Routes>
        <Route exact path='/' element={<><Layout><HomeScreen /></Layout></>} />
        <Route exact path='/auth' element={<LoginScreen />} />
        <Route exact path='/feed/subscriptions' element={<><Layout><Subscription/></Layout></>} />
        <Route exact path='/channel/:channelId' element={<><Layout><ChannelScreen/></Layout></>} />
        <Route exact path='/search/:query' element={<><Layout><SearchScreen/></Layout></>} />
        <Route exact path='/watch/:id' element={<><Layout><WatchScreen/></Layout></>} />
        <Route path='/:id/:id' element={<Navigate replace to={`/`} />} />
        <Route path='/:id' element={<Navigate replace to={`/`} />} />
          
      </Routes>
    
  )
}

export default App
