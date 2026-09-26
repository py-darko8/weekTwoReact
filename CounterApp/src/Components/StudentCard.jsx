import React, { useState } from 'react'

const StudentCard = () => {
    const [student, setStudent]=useState({name: "John", age: 25})


function updateAge() {
    setStudent({...student, age: student.age + 1})
}
 
 
    return (
    <div>
        <h1>Name:{student.name}</h1>
        <p>Age:{student.age}</p>
        <button onClick={updateAge}>Update Your Birtday</button>
    </div>
  )
}

export default StudentCard