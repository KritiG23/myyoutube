import profile from "../../assets/images/profile.png"

const Profile = () => {
  return (
    <div className="cursor-pointer w-[2rem] h-[2rem] rounded-full">
        <img src={profile} alt='' />
    </div>
  )
}

export default Profile