import React from 'react'

import './compare.scss'

const Compare = ({ children }) => {
  return (
    <div className='compare'>
      {children}
    </div>
  )
}

export const Item = ({ children }) => {
  const resizeObserverElement = React.useRef(null)

  var ro = new ResizeObserver(entries => {
    var defaultBreakpoints = { SM: 320, MD: 576, LG: 768, XL: 960 }

    for (let entry of entries) {
      var breakpoints = entry.target.dataset.breakpoints
        ? JSON.parse(entry.target.dataset.breakpoints)
        : defaultBreakpoints

      Object.keys(breakpoints).forEach(function (breakpoint) {
        var minWidth = breakpoints[breakpoint]
        console.log(entry.contentRect.width)
        if (entry.contentRect.width >= minWidth) {
          entry.target.classList.add(breakpoint)
        } else {
          entry.target.classList.remove(breakpoint)
        }
      })
    }
  })

  React.useEffect(() => {
    // Observe one or multiple elements
    ro.observe(resizeObserverElement.current)
  }, [])

  return (
    <div ref={resizeObserverElement} data-observe-resizes className='compare__content'>
      {children}
    </div>
  )
}

export default Compare
