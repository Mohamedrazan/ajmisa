import React from 'react'
import Navbar from './components/Navbar'
import Iptvsection from './components/Iptvsection'
import Channel from './components/Channel'
import Footer from './components/Footer'
import Iptvfeatures from './components/Iptvfeatures'
import Iptvapp from './components/Iptvapp'

function App() {
  return (
    <div>
        <Navbar/>
        <Iptvsection/>
        <Iptvfeatures/>
        <Channel/>
        <Iptvapp/>
        <Footer/>
    </div>
  )
}

export default App;