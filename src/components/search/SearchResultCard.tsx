interface SearchResultCardProps {
  imgSource: string,
  title: string,
  type: string,
  year: string,
  id: string,
  onClick: (id: string) => void,
}

export default function SearchResultCard(props : SearchResultCardProps) {
  return <div className="p-5 text-center" onClick={() => { props.onClick(props.id) }}>
    <div className="border hover:shadow-lg hover:shadow-yellow-500
      rounded-lg overflow-hidden">
      <div className="h-96 bg-black">
        <img className="w-72 min-h-max max-h-96"
          alt={`${props.type}#${props.id}: (${props.year})${props.title}`}
          src={props.imgSource} />
      </div>
      <div className="grid content-center h-16 bg-gray-900 border-t-2">
        <span className="text-yellow-500 px-2">{props.title}</span>
      </div>
      <div className="text-sm bg-gray-950">
        <p>Type: {props.type}</p>
        <p>Released: {props.year}</p>
        <p>IMDB ID: {props.id}</p>
      </div>
    </div>
  </div>
}
