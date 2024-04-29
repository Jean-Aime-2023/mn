import React from 'react'
import { Button } from '../components/ui/button';
import { UserAuth } from '../context/AuthContext';

const GoogleAccount = () => {
  const {logOut,user} = UserAuth();

  const handleSignOut=async()=>{
    try {
      await logOut()
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <p>welcome {user?.displayName}</p>
      <Button onClick={handleSignOut}>Logout</Button>
    </div>
  )
}

export default GoogleAccount