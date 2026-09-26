import React from 'react'
import { useState } from 'react'
import Counter from './Components/Counter'
import StudentCard from './Components/StudentCard'
import Skills from './Components/Skills'

const App = () => {
  return (
    <div>
      <Counter />
      <StudentCard />
      <Skills />
    </div>
  )
}

export default App