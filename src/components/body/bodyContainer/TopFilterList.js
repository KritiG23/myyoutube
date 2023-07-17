import React from 'react'
const filtBtn =[
  {
    title:"All",
    active: true
  },
  {
    title:"Javascript",
    active: false
  },
  {
    title:"Mixes",
    active: false
  },
  {
    title:"System Design",
    active: false
  },
  {
    title:"Music",
    active: false
  },
  {
    title:"Live",
    active: false
  },
  {
    title:"News",
    active: false
  },
  {
    title:"Dramedy",
    active: false
  }

]

const TopFilterList = () => {
  return (
    <div className="flex gap-4 p-4">
      {filtBtn?.map((item,i)=>{
        return(
          <button key={i} className='rounded-[9px] bg-[#0000000d] pt-2 pb-2 pl-4 pr-4 font-[500] text-primary text-[1em]'>{item?.title}</button>
        )
      })}
     
    </div>
  )
}

export default TopFilterList