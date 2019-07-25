
import React, {useEffect, useRef, useState} from 'react'

function Forms({teamMembers, setTeamMembers, membertoedit, indextoedit}){
    // new team member
    const [TeamMember, setUser] = useState({"username": '', "email":'', "role":''})

    const isEditing = useRef(false)
    const firstUpdate = useRef(true);
    useEffect(()=>{
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }
        isEditing.current = true
        setUser(membertoedit)
    }, [membertoedit])

    const handleSubmit = event => {
        if (isEditing.current){
            const newMembersaArray = teamMembers.slice() //copy the array
            newMembersaArray[indextoedit] = TeamMember //change index
            setTeamMembers(newMembersaArray) // set team members to new updated array 
            isEditing.current = false
        }
        else{
            setTeamMembers([...teamMembers, TeamMember])
        }
        setUser({"username": '', "email":'', "role":''})
        event.preventDefault();
    }

    function handleChange(event){
        const updatedUser = { ...TeamMember, [event.target.name]: event.target.value };
        setUser(updatedUser);
    }

    return(
        <div>
            {(isEditing.current === true) ? <h3>Edit a member</h3> : <h3>Add a member</h3>}
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