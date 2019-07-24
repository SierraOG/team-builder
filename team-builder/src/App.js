import React, {useState} from 'react';
import './App.css';

// form component
import Forms from './components/Forms'

function App() {
  // keep track of team members
  const [teamMembers, setTeamMembers] = useState([])

  return (
    <div className="App">
      <h2>Team Member List</h2>
      {teamMembers.map((member)=>(
        <div>
          <p>{member.username} </p>
          <p>{member.email}</p>
          <p>{member.role}</p>
        </div>
      ))}
      <h3>Add team members</h3>
      <Forms teamMembers={teamMembers} setTeamMembers = {setTeamMembers}/>
    </div>
  );
}

export default App;
