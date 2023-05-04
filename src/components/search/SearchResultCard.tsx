import { toHTMLText } from '../../libs/utils/HTML'

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
      <div className="grid bg-black h-96 xl:h-80 2xl:h-96">
        <img className="m-auto object-cover h-[inherit] "
          alt={`${props.type}#${props.id}: (${props.year})${props.title}`}
          src={props.imgSource} />
      </div>
      <div className="grid content-center h-16 bg-gray-900 border-t-2">
        <span className="text-yellow-500 px-2">{toHTMLText(props.title)}</span>
      </div>
      <div className="text-sm bg-gray-950">
        <p>Type: {toHTMLText(props.type)}</p>
        <p>Released: {toHTMLText(props.year)}</p>
        <p>IMDB ID: {toHTMLText(props.id)}</p>
      </div>
    </div>
  </div>
}
