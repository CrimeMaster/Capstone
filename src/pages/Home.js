import React from 'react'
import Banner from '../components/Home/Banner'
import SignUpForm from '../components/Home/SignUpForm'

function Home() {
  return (
    <div style = {{display:"flex"}}>
      <Banner/>
      <SignUpForm/>
    </div>
  )
}

export default Home
