import { TimelineItem } from './TimelineItem';
import { useState, useEffect } from "react";
import { CloseRounded } from '@mui/icons-material';

const vff = window.vff;
function Timeline() {
  const [vffState, setVffState] = useState({});
  const [events, setEvents] = useState([]);
  const [isController, setIsController] = useState();
  const [visibility, setVisibility] = useState(false);

  const goToTime = (time)=>{
    vff.video.goTo(time);
    vff.video.play();
    setVisibility(false);
  }

  const togglePlayback = () =>{
    vff.video.paused ? vff.video.play() : vff.video.pause();
  }

  useEffect(()=>{

    vff.onModeChange(() => {
      console.log('Mode change');
      setIsController(vff.isController());
      
    });

    vff.video.getInfo().then((video) => {
        
      if(video.timelines.length){
        setEvents(video.timelines[0].events || []);
      }
    });
  },[]);
    return (
      <div className="realtive w-screen h-screen overflow-hidden flex portrait:pt-16/9 sm:p-0">
        <div className={`backdrop absolute flex portrait:hidden w-screen h-screen top-0 left-0 from-black/90 to-transparent bg-gradient-to-r transition-opacity duration-500 ${visibility ? 'landscape:opacity-100':'landscape:opacity-0 pointer-events-none'}`} onClick={()=>setVisibility(false)}></div>
        {!visibility && <div className='absolute flex w-screen h-screen top-0 left-0' onClick={togglePlayback}></div>}
        <div className={`timeline h-full w-full landscape:w-1/2 sm:w-1/2 flex items-center transition-all duration-500 ease-in-out ${visibility ? '':'landscape:-translate-x-full landscape:opacity-0 landscape:pointer-events-none'}`}>
          <div className={`events-wrap flex-col px-[2vw] pb-[10vw] h-full w-full sm:w-[25vw] overflow-y-auto relative z-10 scrollbar-thin scrollbar-track-gray-900 scrollbar-thumb-gray-700`} dir="rtl" style={{WebkitMaskImage: 'linear-gradient(rgb(0, 0, 0) 75vh, transparent 95vh)'}}>
            {events.map((event) => (
              <TimelineItem key={event.timestamp}  goToTime={goToTime} event={event}  />
            ))}
          </div>
          <div onClick={()=>setVisibility(false)} className={`btn-close bg-[#007AC2] text-white portrait:hidden flex rounded-[2vw] cursor-pointer px-[1vw] py-[0.65vw] hover:bg-[#2e95d0] ml-[1vw] flex-shrink-0 flex-grow-0 flex-auto justify-center items-center z-10`}>
            <CloseRounded style={{width:'1.5vw', height:'1.5vw'}} />
            <div className="select-none font-bold text-[10px] md:text-[1vw]">HIDE</div>
          </div>
        </div>
        {events.length && <div onClick={()=>setVisibility(true)} className={`btn-open absolute portrait:hidden left-2 top-1/2 -translate-y-1/2 bg-[#007AC2] text-white flex rounded-xl cursor-pointer px-3 py-2 hover:bg-[#2e95d0]  justify-center items-center z-10 transition-all duration-700 ease-in-out ${!visibility ? '':'-translate-x-full opacity-0 pointer-events-none'}`}>
          <span className="select-none font-bold text-[10px] md:text-[1vw]">TIMELINE</span>
        </div>}
      </div>
    );
}

export default Timeline;
