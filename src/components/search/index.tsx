import SearchResult from './SearchResult';
import MovieInfo from "./MovieInfoPopup"
import { MutableRefObject, useEffect, useRef, useState } from "react"
import PageNavigation from "../ui/PageNavigation";

const API_URL = 'https://www.omdbapi.com/?apikey=2a2afd81'

export default function Movies() {
  const [results, setResults] = useState();
  const [infoDialogVisibility, setInfoDialogVisibility] = useState(false);
  const [searchText, setSearchText] = useState("dragon ball");
  const [currentPage, setCurrentPage] = useState(1);
  const [resultCount, setResultCount] = useState(0);
  const [movieData, setMovieData] = useState(null);
  const searchBox: MutableRefObject<HTMLInputElement | null> = useRef(null);


  const searchMovies = async ({ title, pageNumber, isCleanup }: any) => {
    console.log(`searching for title ${title} in page ${pageNumber}`)
    const response = await fetch(`${API_URL}&s=${title}&page=${pageNumber}`);
    const data = await response.json();
    console.log(`Search result for ${title} on page ${pageNumber}`)
    console.log(data);
    setResultCount(data.totalResults || 0);
    setResults(data.Search || []);
  }

  const searchOMDBAPI = async (id: string) => {
    const response = await fetch(`${API_URL}&i=${id}`);
    const data = await response.json();
    return data;
  }

  function onNavigation(pageNumber: number) {
    setCurrentPage(pageNumber);
    searchMovies({ title: searchText, pageNumber });
  }

  function onCardSelected(id: string) {
    setMovieData(null);
    setInfoDialogVisibility(true);
    searchOMDBAPI(id).then((result) => {
      console.log(result);
      setMovieData(result);
    })
  }

  useEffect(() => {
    const config = { title: searchText, pageNumber: currentPage, isCleanup: false }
    searchMovies(config);
    return () => { //cleanup
    }
  }, [searchText, currentPage]);

  function startNewSearch() {
    setCurrentPage(1);
    setSearchText((searchBox.current?.value || ""));
  }

  return (
    <div className="justify-center text-center ">
      <h1 >BoreDon™ Search Engine</h1>
      <p>Welcome to the BoreDon™ search engine. A place to look for your contents to satisfy your boring life...</p>
      <p>In this app, we will feature a react based pagination, card components and modal dialogs.</p>
      <div>
        <div className="flex flex-wrap justify-center m-4">
          <h5 className="mr-4">Enter a keyword or content title</h5>
          <span className="flex w-96">
            <input type="text"
              className="w-80 px-2 bg-yellow-200 text-purple-800"
              ref={searchBox}
              placeholder="Search for movie titles"
              onKeyDown={e => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  startNewSearch();
                }
              }}
            />
            <span onClick={startNewSearch}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </span>
          </span>
        </div>
        <PageNavigation itemsPerPage={10}
          currentPage={currentPage} resultCount={resultCount}
          onNavigation={onNavigation}/>
        <SearchResult result={results}
          onItemSelected={onCardSelected} />
        <PageNavigation itemsPerPage={10}
          currentPage={currentPage} resultCount={resultCount}
          onNavigation={onNavigation}/>
      </div>
      <MovieInfo visible={infoDialogVisibility} data={movieData}
        onDialogClose={() => { setInfoDialogVisibility(false) }} />
    </div>
  )
} 