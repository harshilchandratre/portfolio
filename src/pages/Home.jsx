import React from 'react'
import '../styles/Home.css'
import CTASection from '../components/Home/CTASection'
import Work from '../components/Home/Work'
import Timeline from '../components/Timeline'
import Title from '../components/Title'

const Home = () => {
  return (
    <div className='Home-main'>
      <CTASection />
      <Work />
      <Title title={"Journey so far"}/>
      <Timeline year={2026} heading={"Master of Computer Applications"} description={"Sigma Institute of Engineering, Vadodara"}/>
      <Timeline year={2025} heading={"Smart India Hackathon 2025 (Software Edition)"} description={"WeSchool (PGDM), Mumbai"}/>
      <Timeline year={2025} heading={"ILLUMINATI 2025 | Hackathon"} description={"ITM (SLS) Baroda University, Vadodara"}/>
      <Timeline year={2025} heading={"Bachelor of Science in Information Technology"} sub={"Secured CGPA 9.21/10.00"} description={"Parul Institute of Computer Applications, Vadodara"}/>
      <Timeline year={2022} heading={"Software Conceptual Design"} description={"NPTEL, IIT Bombay"}/>
    </div>
  )
}

export default Home