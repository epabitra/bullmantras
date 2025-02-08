import { useEffect } from "react";
import Plyr from 'plyr';
import { toAbsoluteUrl } from "../../../helper/HelperConstants";

const LessonVideo = () => {

   useEffect(() => {
      const player = new Plyr('#player');
      return () => {
         player.destroy();
      };
   }, []);

   return (
      <video id="player" playsInline controls data-poster={toAbsoluteUrl("/assets/img/bg/video_bg.webp")}>
         <source src={toAbsoluteUrl("/assets/video/video.mp4")} type="video/mp4" />
         <source src={toAbsoluteUrl("/path/to/video.webm")} type="video/webm" />
      </video>
   )
}

export default LessonVideo
