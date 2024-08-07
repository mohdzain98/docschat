import React from 'react'
import Main from './Main'
import Tasks from './Tasks'
import Footer from './Footer'
import Info from './Info'
import Tools from './Tools/Tools'

const Home = (props) => {
  const {host, login, Logdout, showAlert, llm_host} = props.prop
  return (
    <>
    <Main prop={{login, Logdout}}/>
    <Info/>
    <Tasks prop={{host, showAlert, llm_host}}/>
    <Tools/>
    <Footer prop={{host}}/>
    </>
  )
}

export default Home
