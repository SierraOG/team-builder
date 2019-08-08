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
  const [indextoedit, setindextoedit] = useState('')

  function editMember(member, index) {
    setmembertoedit(member)
    setindextoedit(index)
  }

  return (
    <div className="App">
      <h2>Team Member List</h2>
      {teamMembers.map((member, index)=>(
        <MemberDiv key={index}>
          <p>Name: {member.username} </p>
          <p>Email: {member.email}</p>
          <p>Role: {member.role}</p>
          <button onClick={() => editMember(member, index)}>edit</button>
        </MemberDiv>
      ))}
      <Forms teamMembers={teamMembers} setTeamMembers = {setTeamMembers} membertoedit={membertoedit} indextoedit={indextoedit}/>
    </div>
  );
}

export default App;