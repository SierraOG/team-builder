import React, {useState} from 'react';
import './App.css';
import styled from 'styled-components'

// form component
import Forms from './components/Forms'


const MemberDiv = styled.div`
  display:flex;
  width:80%;
  margin: auto;
  justify-content: space-around;
`

function App() {
  // keep track of team members
  const [teamMembers, setTeamMembers] = useState([])

  const [membertoedit, setmembertoedit] = useState({})

  function editMember(member) {
    setmembertoedit(member)
  }

  return (
    <div className="App">
      <h2>Team Member List</h2>
      {teamMembers.map((member, index)=>(
        <MemberDiv key={index}>
          <p>Name: {member.username} </p>
          <p>Email: {member.email}</p>
          <p>Role: {member.role}</p>
          <button onClick={() => editMember(member)}>edit</button>
        </MemberDiv>
      ))}
      <h3>Add team members</h3>
      <Forms teamMembers={teamMembers} setTeamMembers = {setTeamMembers} membertoedit={membertoedit}/>
    </div>
  );
}

export default App;
