import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(
  () => import('@/components/games/flappy/FlappyGame'),
  { ssr: false }
)

export default function Flappy() {
  return <div className='flex flex-wrap m-4 justify-center object-center border-t border-b'>
    <div className='p-4 xl:w-[250px]'>
      <h2 className=" text-xl font-bold">Flappy Bird</h2><br />
      Ahh.. the ever so famous Flappy Bird... this is my rendition of it promoting the beautiful Philippine islands and the famous Jollibee brand. Here I utilize the canvas html object and created a simple gameloop to run the entire game logic. Just like the original game, your goal is not to get hit by the obstacles. Unlike the original however, this version provides coins that you need to maneuver towards to. Getting consecutive coins gives you combo points, reach certain thresholds and your next bonus score increases as you get the next coins. Miss 1 and the bonus resets to 0. How far can you go?
    </div>
    <div className='p-4 w-[800px]'>
      <DynamicComponentWithNoSSR />
    </div>
  </div >
}
