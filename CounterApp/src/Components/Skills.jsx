import React, { useState } from 'react'

const Skills = () => {
    //my skill state
    const[skill, setSkill]=useState(["football","basketball","tennis"])
    
    // function to add a skill
    function addSkill(){
        setSkill([...skill,"volleyball"])
    }

      // function to remove a skill
    function removeSkill(skillToRemove){
        setSkill(skill.filter((s)=> s != skillToRemove))
    }
  
  
    return (
    <div>
        <ul>
            {
              skill.map((s)=>(
                <li key={s}>{s}<button style={{backgroundColor: "red"}} onClick={()=> removeSkill(skill)}>remove skill</button></li>
              ))
            }
        </ul>
        <button onClick={(addSkill)}>add skill</button>
    </div>
  )
}

export default Skills