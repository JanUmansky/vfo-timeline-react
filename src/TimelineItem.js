import React from "react";
import { PlayArrowRounded } from '@mui/icons-material';
export function TimelineItem({ goToTime, event, isMobile }) {
  return (
    <div dir="ltr" className="my-[2vw] group cursor-pointer" onClick={() => goToTime(event.timestamp)}>
      <div className={`font-bold text-white/80 group-hover:text-white select-none text-base md:text-[1.25vw] md:leading-[2vw] portrait:text-xl`}>
        {event.name}
      </div>
      {event.thumbnail && (
        <div className="relative">
          <img className="event-thumbnail select-none" src={event.thumbnail} alt={event.name} />
          <div className="absolute hidden group-hover:flex w-full h-full top-0 left-0 bg-black/50  justify-center items-center">
            <PlayArrowRounded style={{width:'40%', height:'40%', color:'#fff'}} />
          </div>
        </div>
      )}
      {event.description && (
        <div className={`text-white/80 group-hover:text-white select-none text-xs md:text-[0.9vw] md:leading-[1.2vw] portrait:text-base`}>
          {event.description}
        </div>
      )}
    </div>
  );
}
