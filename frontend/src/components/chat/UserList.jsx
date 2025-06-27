
const UserList = ({onlineUsers}) => {
  const currentUser = JSON.parse(sessionStorage.getItem('user'));
  return (
    <div className='text-gray-400'>
      <ul>
        {onlineUsers?.filter(user=>user?.id!==currentUser?._id).map(user => (
          <li key={user.id}>{user.fullname}</li>
        ))}
      </ul>
    </div>
  )
}

export default UserList
