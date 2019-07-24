import React, {useState} from 'react'

function Forms(props){
    // new team member
    const teamMembers = props.teamMembers
    const setTeamMembers = props.setTeamMembers
    const [TeamMember, setUser] = useState({"username": '', "email":'', "role":''})

    const handleSubmit = event => {
        setTeamMembers([...teamMembers, TeamMember])
        setUser({"username": '', "email":'', "role":''})
        event.preventDefault();
    }

    function handleChange(event){
        const updatedUser = { ...TeamMember, [event.target.name]: event.target.value };
        setUser(updatedUser);
    }

    return(
        <div>
            <form onSubmit={(event) => handleSubmit(event)}>
            <label>
                Name:
                <input onChange ={handleChange} type="text" name="username" value={TeamMember.username} />
            </label>
            <label>
                Email:
                <input onChange ={handleChange} type="text" name="email" value={TeamMember.email}/>
            </label>
            <label>
                Role:
                <input onChange ={handleChange} type="text" name="role" value={TeamMember.role}/>
            </label>
            <button>Submit!</button>
        </form>
      </div>
    )
}

export default Forms