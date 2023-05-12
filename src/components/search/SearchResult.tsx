import SearchResultCard from './SearchResultCard';

const defaultPosterURI = "/images/no-image-icon.png";

export interface SearchResultProps {
  result: any,
  onItemSelected: (id: string) => void,
}

export default function SearchResult({ result, onItemSelected }: SearchResultProps) {

  function onCardClicked(id: string) {
    onItemSelected(id);
  }

  let cards: JSX.Element[] = []
  if (result?.length > 0) {
    cards = result.map((m: any) => {
      return <SearchResultCard key={m.imdbID}
        imgSource={m.Poster != "N/A" ? m.Poster : defaultPosterURI}
        title={m.Title}
        type={m.Type}
        year={m.Year}
        id={m.imdbID}
        onClick={onCardClicked} />
    })
    return <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {cards}
    </div>
  }

  return (<>
    <div className='p-5'>
      <h3>No results found</h3>
      <p>Use the search bar above and look for exact words like &apos;batman&apos; instead of &apos;batma&apos;</p>
    </div>
  </>);
}
