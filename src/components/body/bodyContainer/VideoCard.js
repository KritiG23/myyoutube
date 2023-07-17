import thumbnail from "../../../assets/images/thumbnail.webp";
import varified from "../../../assets/images/check-circle.svg";

const VideoCard = () => {
  return (
    <div className="videoList flex flex-col gap-4">
      <video className="rounded-[13px]" width="470" height="255" poster={thumbnail}>
        <source src="video.mp4" type="video/mp4" />
      </video>
      <div className="videoDetailMain flex gap-2 ">
        <div className="videoSubscrib">
          <img
            className="w-[32px] h-[32px] rounded-full"
            src={thumbnail}
            alt=""
          />
        </div>
        <div className="videoText flex flex-col gap-2">
          <h2 className="text-primary text-[1.2rem] font-[500]">
            Next JS tutorial in Hindi #39 Integrate Post API Next js 13.4 | API
            Routes
          </h2>
          <div className="flex flex-col">
            <div className="flex gap-1">
              <p className="text-[#606060] font-[500]">Code Step By Step </p>
              <img className="w-[18px]" src={varified} alt="" />
            </div>
            <div className="flex gap-1 items-center">
              <span className="text-[#606060] font-[500]"> 234 Views</span> <div className="w-[8px] bg-[#606060] h-[8px] rounded-full"></div><span className="text-[#606060] font-[500]">13 hours</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
