import React, { useState } from 'react'
import { Button } from './ui/button';

const Profile = () => {
    const [userDetails,setUserDetails] = useState(null);
  return (
    <div>
        {userDetails ? (
            <>
             <h3>Welcome {userDetails.firstname}</h3>
             <div>
                <p>Email: {userDetails.email}</p>
                <p>First Name: {userDetails.firstname}</p>
                <p>Last Name: {userDetails.lastname}</p>
             </div>
             <Button>Logout</Button>
            </>
        ):(
            <p>Loading...</p>
        )}
    </div>
  )
}

export default Profile