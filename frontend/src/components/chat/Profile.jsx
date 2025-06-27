
const Profile = ({user, currentUser}) => {
    return (
        <div className='sidebar h-[calc(100vh-80px)] bg-white text-white max-w-full w-1/5'>
            <div className="mt-3">
{user && (
                <div className="flex items-center justify-center flex-col">
                    <img src={user?.profilePicture??"https://i0.wp.com/fdlc.org/wp-content/uploads/2021/01/157-1578186_user-profile-default-image-png-clipart.png.jpeg?fit=880%2C769&ssl=1"} alt="Profile" className="w-24 h-24 rounded-full mb-2" />
                    <h2 className="text-lg text-gray-500 font-semibold">{user?.fullname ?? 'Sandeep Kamra'}</h2>
                    <p className="text-sm text-gray-500">{user?.email}</p>
                </div>
            )}
            </div>
        </div>
    )
}

export default Profile
