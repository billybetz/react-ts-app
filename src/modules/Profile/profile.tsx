import * as React from 'react'

import './style.css'

export interface ProfileProps {
  name: string,
  lastName: string,
  age: number
}

const Profile: React.FC<ProfileProps> = (props) => {
  return (
    <div className='profile'>
      <div className='profile-title'>
        Architecte informatique
      </div>
      <div className='profile-image'>
        <img
          src='https://scontent.fcdg1-1.fna.fbcdn.net/v/t1.0-1/p320x320/58461812_10216468543859692_1692539073962442752_n.jpg?_nc_cat=103&_nc_sid=dbb9e7&_nc_ohc=8d6T-V6i6bMAX9MZYxm&_nc_ht=scontent.fcdg1-1.fna&_nc_tp=6&oh=8c5bf1c9f5322aada56073163894f26a&oe=5EB8C9B5'
          alt='billy'
        />
      </div>
    </div>
  )
}

export default Profile
