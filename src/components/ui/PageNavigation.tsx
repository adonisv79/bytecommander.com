export function NavigationButton({ isCurrent, value, text, tooltip, onNavigation }: any) {
  return <span title={onNavigation ? tooltip : null} className={`inline-block border m-1 p-1 h-8 w-8 min-w-fit cursor-pointer
    ${onNavigation && "hover:bg-yellow-600"} 
    ${!onNavigation && !isCurrent && "bg-gray-600 text-gray-500"}
    ${isCurrent && "bg-red-600 text-yellow-300"}`}
    onClick={() => { if (onNavigation) onNavigation(value) }
    }>
    {text ? text : value}
  </span>
}

export interface PageNavigationProps {
  itemsPerPage: number,
  currentPage: number,
  resultCount: number,
  onNavigation: (pageNumber: number) => void
}

export default function PageNavigation({ itemsPerPage, currentPage, resultCount, onNavigation }: PageNavigationProps) {
  const MAX_PAGE_LINKS = 5;
  const links: JSX.Element[] = []
  const maxPages: number = Math.ceil(resultCount / itemsPerPage)

  function getToolTipText(targetPage: number) {
    if (targetPage < 1) return "";
    let tooltip = `View results ${((targetPage - 1) * itemsPerPage) + 1} to `;
    const tooltipMaxRange = targetPage * itemsPerPage;
    tooltip += tooltipMaxRange > resultCount ? resultCount : tooltipMaxRange;
    return tooltip;
  }

  // correct the current page
  if (currentPage > maxPages) {
    currentPage = maxPages
  }

  // we want to start from the current page spreading left and right
  // to show a max of MAX_PAGE_LINKS pages (if possible)
  // plus 1 of each edges plus the mid current page
  // in cases we are near the edge, expand the links opposite
  if (currentPage > 0) {
    links.push(<NavigationButton key={`pagnav${currentPage}`} isCurrent={true} value={currentPage} />);
  }
  let leftPage = currentPage;
  let rightPage = currentPage;
  let linksCount = 1;
  for (let i = 1; i <= MAX_PAGE_LINKS; i++) {
    if (currentPage - i > 0 && linksCount < MAX_PAGE_LINKS) {
      leftPage = currentPage - i;
      linksCount++;
      links.unshift(<NavigationButton key={`pagnav${leftPage}`}
        value={leftPage} onNavigation={onNavigation}
        tooltip={getToolTipText(leftPage)} />);
    }
    if (currentPage + i <= maxPages && linksCount < MAX_PAGE_LINKS) {
      rightPage = currentPage + i;
      linksCount++;
      links.push(<NavigationButton key={`pagnav${rightPage}`}
        value={rightPage} onNavigation={onNavigation}
        tooltip={getToolTipText(rightPage)} />);
    }
  }

  // add the links for PREV, NEXT, FIRST and LAST
  links.unshift(<NavigationButton key={`pagnavPrev`} value={currentPage - 1} text="< PREV"
    onNavigation={currentPage > 1 ? onNavigation : null}
    tooltip={getToolTipText(currentPage - 1)} />);
  links.push(<NavigationButton key={`pagnavNext`} value={currentPage + 1} text="NEXT >"
    onNavigation={currentPage < maxPages ? onNavigation : null}
    tooltip={getToolTipText(currentPage + 1)} />);
  links.unshift(<NavigationButton key={`pagnavFirst`} value={1} text="<< FIRST"
    onNavigation={currentPage > 1 ? onNavigation : null} 
    tooltip={getToolTipText(1)} />);
  links.push(<NavigationButton key={`pagnavLast`} value={maxPages} text="LAST >>"
    onNavigation={currentPage < maxPages ? onNavigation : null}
    tooltip={getToolTipText(maxPages)} />);

  let currentPageInfoText = 'Showing';
  if (currentPage >= 1) {
    currentPageInfoText += ` items ${((currentPage -1) * itemsPerPage) + 1}-`;
    const currentPageMaxItems = currentPage * itemsPerPage;
    currentPageInfoText += currentPageMaxItems > resultCount ? resultCount : currentPageMaxItems;
    currentPageInfoText += ' from';
  }
  currentPageInfoText += ` ${resultCount} results`;

  return <nav className="text-center select-none">
    {links}
    <div className="pb-2">{currentPageInfoText}</div>
  </nav>
}