import React from 'react'
import '../css/Home.css'
import CTASection from '../components/Home/CTASection'
import Work from '../components/Home/Work'

const Home = () => {
  return (
    <div className='Home-main'>
      <CTASection />
      <Work />
    </div>
  )
}

export default Home