import React from 'react'

const UserList = ({onlineUsers}) => {
  return (
    <div className='text-gray-400'>
      <ul>
        {onlineUsers.filter(user=>user?._id!==location?.state?._id).map(user => (
          <li key={user.id}>{user.fullname}</li>
        ))}
      </ul>
    </div>
  )
}

export default UserList
