import UserPreference from '@/_module/user/userPref';
import React from 'react'

const User = async ({params}) => {
  const id = (await params)?.id;
  return (
    <main>
      {/* <h1>User {id}</h1> */}
      <UserPreference />
    </main>
  )
}

export default User;
