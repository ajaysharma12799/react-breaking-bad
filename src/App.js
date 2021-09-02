import React from 'react' 
import Form from './components/Form'
import Output from './components/Output'
import { BreakingBadProvider } from './Context/BreakingBadContext'
import "./App.css";

const App = () => { 
  return (
      <BreakingBadProvider>
        <Form />
        <Output />
      </BreakingBadProvider>
  )
}

export default App
