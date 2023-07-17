import logo from "../../assets/images/youtube-logo.png"
import humburg from "../../assets/images/humburg.svg"
import SearchFilter from "./SearchFilter"
import Profile from "./Profile"
const Header = () => {
  return (
    <section className="h-[60px] flex items-center justify-between container gap-3">
        <div className="flex gap-6 items-center">
          <div className="rounded-full bg-transparent p-[0.6rem] hover:bg-graylight">
              <img className=" cursor-pointer" src={humburg} alt="" />
          </div>
          <div>
          <img className="w-[6rem] cursor-pointer" src={logo} alt="" />
          </div>
        </div>
          <SearchFilter />
           <div>
            <Profile />
          </div>
    </section>
  )
}

export default Header