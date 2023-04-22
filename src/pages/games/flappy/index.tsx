"use client"

import { FlappyBee } from "@/components/games/flappy/FlappyGame";

export default function Flappy() {
  return <div className='flex flex-wrap m-4 justify-center object-center border-t border-b'>
    <div className='p-4 max-w-xs'>
      <h2 className=" text-xl font-bold">Flappy Bird</h2><br />
      Ahh.. the ever so famous Flappy Bird... this is my rendition of it promoting the beautiful Philippine islands and the famous Jollibee brand. Here I utilize the canvas html object and created a simple gameloop to run the entire game logic. Just like the original game, your goal is not to get hit by the obstacles. Unlike the original however, this version provides coins that you need to maneuver towards to. Getting consecutive coins gives you combo points, reach certain thresholds and your next bonus score increases as you get the next coins. Miss 1 and the bonus resets to 0. How far can you go?
    </div>
    <div className='p-4 max-w-sm'>
      <FlappyBee />
    </div>
    <div className='p-4 max-w-xs'>
      <i>Note: This is not a full game at the moment! I recently added a collision detection system and some concept animation engine. These may still eveolve. Missing parts also include sounds, scoring and fancy font styles. Recently I have modified this to pull out the core features into a whole new project which I will use for web game development. This is a fan made game. Jollibee is a registered trademark of Jollibee Foods Corp. and is not in any way connected to this product.</i>
    </div>
  </div >
}