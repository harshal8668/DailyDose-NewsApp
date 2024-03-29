import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';

export default function App ()  {
  const apikey="d4926a1cedaa4efdbc413c089606dd85";

    return (
      <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path="/"  element={<News api={apikey} key='general' pageSize={12} country="in" category='general'/>}></Route>
          <Route exact path="/about" element={<About api={apikey} key='about' />}></Route>
          <Route exact path="/entertainment" element={<News  api={apikey} key='entertainment' pageSize={12} country="in" category='entertainment'/>}></Route>
          <Route exact path="/general"  element={<News  api={apikey}key='general' pageSize={12} country="in" category='general'/>}></Route>
          <Route exact path="/business"   element={<News  api={apikey} key='business' pageSize={12} country="in" category='business'/>}></Route>
          <Route exact path="/health"  element={<News api={apikey}  key='health' pageSize={12} country="in" category='health'/>}></Route>
          <Route exact path="/science" element={<News api={apikey}  key='science' pageSize={12} country="in" category='science'/>}></Route>
          <Route exact path="/sport"  element={<News api={apikey} key='sport' pageSize={12} country="in" category='sport'/>}></Route>
          <Route exact path="/technology"  element={<News  api={apikey}key='technology' pageSize={12} country="in" category='technology'/>}></Route>
        </Routes>
      </BrowserRouter>
      </div>
    )
  
}

