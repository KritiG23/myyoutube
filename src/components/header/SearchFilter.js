import searchIcon from "../../assets/images/search.svg"

const SearchFilter = () => {
  return (
    <div className="flex-[0_1_45rem]">
        <div className="h-[44px] flex items-center">
            <input className="h-[100%] text-lg p-[1rem] font-[500] w-[90%] border border-[#ccc] rounded-tl-[40px] rounded-tr-[0px] rounded-bl-[40px] rounded-br-[00px] focus:outline-none" type='text' placeholder='Searches' />
            <button className="bg-[#f8f8f8] flex items-center  justify-center relative h-[100%] w-[4rem] border border-[#ccc] rounded-tl-[0] rounded-tr-[40px] rounded-bl-[0px] rounded-br-[40px] hover:bg-[#f0f0f0]">
                <img className="w-[1rem] h-[1rem]" src={searchIcon} alt="" />
            </button>
        </div>
    </div>
  )
}

export default SearchFilter