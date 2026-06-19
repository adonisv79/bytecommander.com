import YTVideo from "../../components/ui/YoutubeVideo";

const videoIds = [
  "nllZrOoxpzc",
  "o6UXRZ2XwgU",
  "PHe0bXAIuk0",
  "PZ7lDrwYdZc",
  "dcYKtZ7heEQ",
  "09maaUaRT4M",
  "5jjdErDkDZE",
  "IlKaB1etrik",
];

export default function Videos() {
  return (
    <div className="flex flex-wrap justify-evenly">
      {videoIds.map(id => (<div key={id} className="border m-4 shadow-lg w-96 h-52">
        <YTVideo videoId={id} />
      </div>))}
    </div>
  );
}
