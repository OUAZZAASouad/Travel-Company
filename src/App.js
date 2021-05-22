import './App.css';
import Navbar from './components/Navbar/Navbar'
import Title from './components/Title'
import Introduction from './components/Introduction'
import React from 'react'
import Footer from './components/Footer'
import Info from './components/Info'
import Destination from './components/Destination'
import Services from './components/Services'
import {values, items, elements, cards} from './Vars'

function App() {
  return (
    <div className = 'wrapper'>
      <Navbar/>
      <Title/>
      <Introduction/>
      <Services values = {values}/>
      <Info items = {items} elements = {elements}/>
      <Destination cards = {cards}/>
      <hr style = {{gridColumn : '2 / span 3', borderTop : '1px solid red'}}/>
      <Footer/>
    </div>
  );
}

export default App;
