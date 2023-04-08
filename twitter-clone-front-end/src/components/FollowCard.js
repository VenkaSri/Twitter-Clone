import React from 'react'
import ProfilePicture from './ProfilePicture';
import DefaultAvatar from "../assets/images/avatars/default_avi.png"
import UserProfileInfo from './UserProfileInfo';
import FollowButton from './UI/button/FollowButton';



const FollowCard = ({ user }) => {

  return (
    <div className='h-[4.5rem] flex items-center'>
      <ProfilePicture source={DefaultAvatar} size={48}/>
      <UserProfileInfo name={user.name} username={user.username}/>
      <div className='ml-auto'>
        <FollowButton />
      </div>
    </div>
  )
}

export default  FollowCard;


