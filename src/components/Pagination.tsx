import React from 'react'

interface propsPanigations{
      active: number,
      size: number,
      step: number,
      onClickHandler: Function,
      position: string
}
export default function Pagination(props: propsPanigations) {
  const { active, size, step, onClickHandler,position } = props;
  const showingNumbers = step * 2 + 1;
  let startNumber = 2;
  let startArrayNumber = props.step;
  let needStartDots = false;
  let needEndDots = false;
  
  if (active > step) {
    startArrayNumber = active - step;

    needStartDots = active > step + startNumber ? true : false;
  }

  if (size > showingNumbers) {

    needEndDots = size > active + step + 1 ? true : false;

    if (size < active + step + 1) {
      startArrayNumber = size - showingNumbers;
    }
  }
  let contentNumber;
  const arrayShowingnumbers = [];
  const arraySize = [];
  for (let i = 0; i < showingNumbers; i++) {
    arrayShowingnumbers.push(++i);
  }
  for (let i = 0; i < size; i++) {
    arraySize.push(++i);
  }
  return <>
    <ul className="pagination" style={{justifyContent: `flex-${position}` }}>
      {active > 1 ? (
        <li
          className="page-item prev arrow-icon"
          onClick={() => onClickHandler(active - 1)}
        >
          &#x2039;
        </li>
      ) : (
        <li className="page-item prev arrow-icon disabled">&#x2039;</li>
      )}
      {size > showingNumbers + startNumber ? (
        <React.Fragment>
          <li
            onClick={(e) => onClickHandler(e.currentTarget.textContent)}
            className={`page-item ${active === 1 && "active"}`}
          >
            1
          </li>

          {needStartDots && <span>...</span>}
          {
            arrayShowingnumbers.map((item, index) => {
              return <li
                key={index}
                {...(contentNumber = needStartDots
                  ? startArrayNumber
                  : startNumber)}
                {...startNumber++}
                {...startArrayNumber++}
                className={`page-item ${active === contentNumber && "active"}`}
                onClick={(e) => onClickHandler(e.currentTarget.textContent)}
              >
                {contentNumber}
              </li>
            })
          }
          {needEndDots && <span>...</span>}
          <li
            className={`page-item ${active === size && "active"}`}
            onClick={(e) => onClickHandler(e.currentTarget.textContent)}
          >
            {size}
          </li>
        </React.Fragment>
      ) : (
        ((startArrayNumber = 1),
          arraySize.map((item, index) => {
            return <li
              key={index}
              className={`page-item ${active === startArrayNumber && "active"}`}
              onClick={(e) => onClickHandler(e.currentTarget.textContent)}
            >
              {startArrayNumber++}
            </li>
          })
        ))}
      {active < size ? (
        <li
          className="page-item next arrow-icon"
          onClick={() => onClickHandler(active + 1)}
        >
          &#8250;
        </li>
      ) : (
        <li className="page-item next arrow-icon disabled">&#8250;</li>
      )}
    </ul>
  </>
}


