import ModalDialog from '../ui/ModalDialog';
import { toHTMLText } from '../../libs/utils/HTML'
import { useEffect, useState } from 'react';

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
  data: MovieData | null,
}

export default function MovieInfoPopup({ data, visible, onDialogClose }: MovieInfoPopupProps) {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(false);
    if (data) {
      console.log('fading in')
      setFadeIn(true);
    }
  },[data]);

  function onMovieDialogClose() {
    setFadeIn(false);
    onDialogClose();
  }

  return <ModalDialog visible={visible} onDialogClose={onMovieDialogClose}>
    <div className={`${data && 'hidden'} opacity-1 grid justify-center`}>
      <img src="/images/loading2.gif" />
    </div>
    <div id="modal-container" className={`transition-opacity duration-[2000ms] ease-out 
      ${ fadeIn ? 'visible opacity-100' : 'invisible opacity-0'}
      border m-2 inline-grid p-3 max-w-5xl
      rounded-2xl shadow-lg shadow-white bg-slate-900
      grid-cols-1 sm:grid-cols-2 md:grid-cols-3`}>
      <div className=' bg-indigo-950
        col-span-1 sm:col-span-2 md:col-span-3'>
        <h2 className='p-1 text-yellow-500'>{toHTMLText(data?.Title)}</h2>
      </div>
      <div className='text-sm p-2 col-span-1 sm:col-span-2 md:col-span-1'>
        {toHTMLText(data?.Year)} - {toHTMLText(data?.Rated)} - {toHTMLText(data?.Runtime)}<br />
        {data?.Genre}
      </div>
      <div className='flex justify-center md:justify-end p-2 text-yellow-400 text-xs
          col-span-1 sm:col-span-2'>
        <div className='mx-2'>
          <div>IMDB Rating</div>
          <div className='text-sm text-white'>{toHTMLText(data?.imdbRating)}<br/>({toHTMLText(data?.imdbVotes)})</div>
        </div>
        <div className='mx-2'>
          <div>Metascore</div>
          <div className='text-sm text-white'>{toHTMLText(data?.Metascore)}</div>
        </div>
        {data?.Ratings?.map(r => {
          return (
            <div className='mx-2' key={r.Source}>
              <div>{toHTMLText(r.Source)}</div>
              <div className='text-sm text-white'>{toHTMLText(r.Value)}</div>
            </div>
          )
        })}
      </div>

 
      <div className='m-1 bg-black justify-self-center align-middle 
        col-span-1'>
        <img className='rounded-md' alt={""} src={data?.Poster} />
      </div>
      <div className='border m-1 p-2 col-span-1 md:col-span-2 text-left'>
        <p>{toHTMLText(data?.Plot)}</p>
        <h5 className='mt-2' >Country:</h5>
        <p>{toHTMLText(data?.Country)}</p>
        <h5 className='mt-2' >Language(s):</h5>
        <p>{toHTMLText(data?.Language)}</p>
        <h5 className='mt-2' >Starring:</h5>
        <p>{toHTMLText(data?.Actors)}</p>
        <h5 className='mt-2' >Directed by:</h5>
        <p>{toHTMLText(data?.Director)}</p>
        <h5 className='mt-2' >Written by:</h5>
        <p>{toHTMLText(data?.Writer)}</p>
      </div> 
      <div className='col-span-1 sm:col-span-2 md:col-span-3'>
        Awards: {toHTMLText(data?.Awards)} - Box Office: {toHTMLText(data?.BoxOffice)}
      </div>

    </div>
  </ModalDialog>
}