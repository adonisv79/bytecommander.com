import { MouseEvent } from "react";

export interface YoutubeVideoProps {
  videoId: string,
}

export default function YoutubeVideo({ videoId }: YoutubeVideoProps) {
  return <iframe className="h-full  w-full" src={`https://www.youtube.com/embed/${videoId}`} allowFullScreen>
  </iframe>
}
