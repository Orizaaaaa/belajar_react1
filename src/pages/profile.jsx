import React from 'react'
import { useLogin } from '../hooks/useLogin'

const ProfilePage = () => {
    const username = useLogin()
    return (
        <div>
            <h1>Hallo ini adalah halaman profile</h1>
            username : {username}
        </div>
    )
}

export default ProfilePage