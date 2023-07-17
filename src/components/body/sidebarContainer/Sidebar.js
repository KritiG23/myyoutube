import {ReactComponent as Home} from "../../../assets/images/home.svg"
import {ReactComponent as Shorts} from "../../../assets/images/shorts.svg"
import {ReactComponent as Subscription} from "../../../assets/images/subscriptions.svg"
import {ReactComponent as Library} from "../../../assets/images/library.svg"
import {ReactComponent as History} from "../../../assets/images/history.svg"
import {ReactComponent as Videos} from "../../../assets/images/videos.svg"
import {ReactComponent as Linked} from "../../../assets/images/hand.svg"
import {ReactComponent as Watch} from "../../../assets/images/watch.svg"

const sideTop =[
  {
    img : <Home />,
    title: "Home",
  },
  {
    img : <Shorts />,
    title: "Shorts",
  },
  {
    img : <Subscription />,
    title: "Subscription",
  }
]
const sideMid =[
  {
    img : <Library />,
    title: "Library",
  },
  {
    img : <History />,
    title: "History",
  },
  {
    img : <Watch />,
    title: "Watch Later",
  },
  {
    img : <Videos />,
    title: "Your Videos",
  },
  {
    img : <Linked />,
    title: "Linked Videos",
  }
]
const Sidebar = () => {
  return (
    <section className="w-[240px] p-4">
      <div className="flex flex-col gap-2">
        {sideTop?.map ((item,i)=>{
          return(
              <div key={i} className="flex gap-2 text-[1.1rem] cursor-pointer p-3 hover:bg-[#0000000d] hover:rounded-[9px] ">
              {item?.img}
              {item?.title}
          </div>
          )
        })}   
      </div>
      <div className="mt-4 mb-4 border border-[#0000001a]"></div>
      <div className="flex flex-col gap-2">
        {sideMid?.map ((item,i)=>{
          return(
              <div key={i} className="flex gap-2 text-[1.1rem] cursor-pointer p-3 hover:bg-[#0000000d] hover:rounded-[9px] ">
              {item?.img}
              {item?.title}
          </div>
          )
        })}   
      </div>

    </section>
  )
}

export default Sidebar