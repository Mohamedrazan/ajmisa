import React from 'react'
import Navbar from './components/Navbar'
import Iptvsection from './components/Iptvsection'
import Channel from './components/Channel'
import Footer from './components/Footer'
import Iptvfeatures from './components/Iptvfeatures'
import Iptvapp from './components/Iptvapp'
import Splashscreen from './components/Splashscreen'

function App() {
  return (
    <div>
      <Splashscreen/>
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