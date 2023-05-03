import ModalDialog from '../ui/ModalDialog';

export interface Rating {
  Source: string,
  Value: string,
}

export interface MovieData {
  Actors: string,
  Awards: string,
  BoxOffice: string,
  Country: string,
  DVD: string,
  Director: string,
  Genre: string,
  Language: string,
  Metascore: string,
  Plot: string,
  Poster: string,
  Production: string,
  Rated: string,
  Ratings: Rating[],
  Released: string,
  Response: string,
  Runtime: string,
  Title: string,
  Type: string,
  Website: string,
  Writer: string,
  Year: string,
  imdbID: string,
  imdbRating: string,
  imdbVotes: string,
}

export interface MovieInfoPopupProps {
  visible: boolean,
  onDialogClose: () => void
  data: MovieData,
}

export default function MovieInfoPopup({ data, visible, onDialogClose }: MovieInfoPopupProps) {
  return <ModalDialog visible={visible} onDialogClose={onDialogClose}>
    <div id="modal-container" className={`${!data.Title && 'hidden'}
      border m-2 inline-grid p-3 max-w-5xl
      rounded-2xl shadow-lg shadow-white bg-slate-900 opacity-90
      grid-cols-1 sm:grid-cols-2 md:grid-cols-3`}>
      <div className=' bg-indigo-950
        col-span-1 sm:col-span-2 md:col-span-3'>
        <h2 className='p-1 text-yellow-500'>{data.Title}</h2>
      </div>
      <div className='text-sm p-2 col-span-1 sm:col-span-2 md:col-span-1'>
        {data.Year} - {data.Rated} - {data.Runtime}<br />
        {data.Genre}
      </div>
      <div className='flex justify-center md:justify-end p-2 text-yellow-400 text-xs
          col-span-1 sm:col-span-2'>
        <div className='mx-2'>
          <div>IMDB Rating</div>
          <div className='text-sm text-white'>{data.imdbRating}<br/>({data.imdbVotes})</div>
        </div>
        <div className='mx-2'>
          <div>Metascore</div>
          <div className='text-sm text-white'>{data.Metascore}</div>
        </div>
        {data.Ratings?.map(r => {
          return (
            <div className='mx-2' key={r.Source}>
              <div>{r.Source}</div>
              <div className='text-sm text-white'>{r.Value}</div>
            </div>
          )
        })}
      </div>

 
      <div className='m-1 bg-black justify-self-center align-middle 
        col-span-1'>
        <img className='rounded-md' alt={""} src={data.Poster} />
      </div>
      <div className='border m-1 p-2 col-span-1 md:col-span-2 text-left'>
        <p>{data.Plot}</p>
        <h5 className='mt-2' >Country:</h5>
        <p>{data.Country}</p>
        <h5 className='mt-2' >Language(s):</h5>
        <p>{data.Language}</p>
        <h5 className='mt-2' >Starring:</h5>
        <p>{data.Actors}</p>
        <h5 className='mt-2' >Directed by:</h5>
        <p>{data.Director}</p>
        <h5 className='mt-2' >Written by:</h5>
        <p>{data.Writer}</p>
      </div> 
      <div className='col-span-1 sm:col-span-2 md:col-span-3'>Awards: {data.Awards} - Box Office: {data.BoxOffice}</div>

    </div>
  </ModalDialog>
}