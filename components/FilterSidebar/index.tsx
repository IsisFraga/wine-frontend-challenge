import React, {useState, useCallback} from 'react'
import { FilterSidebarTag, PriceOptions } from './style'
import { useSelector, useDispatch } from 'react-redux'
import { Actions , wrapper } from 'store'
import { FilterCodes } from 'types'
const FilterSidebar: React.FC = () => {
  const dispatch = useDispatch();
  const {products, app} = useSelector((state) => state);

  return (
    <FilterSidebarTag style={{ transform: app.filterSidebar ? "translate3d(0px, 0px, 0px)" : "translate3d(-100%, 0px, 0px)" }}>
      <button className={"close"} onClick={() => dispatch({type: Actions.TOGGLE_FILTER_SIDEBAR})}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 20 15">
        <g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 7.5H.576M7.945 1L.575 7.5l7.37 6.5"/>
        </g>
        </svg>
      </button>
      <form>
        <h3 className={"title"}>
          Refine sua busca
        </h3>
        <h4>
          Por preço
        </h4>
        <ul className={'price-options'} >
        { products.priceFilters.map(item => {
          return (
            <PriceOptions key={item.id} active={item.selected}>
              <label className={"container"} htmlFor={item.id}>{item.price}
                <input 
                type="radio" 
                id={item.id} 
                onClick={() => item.selected ? window.location.search = '' : window.location.search = '?filter=' + item.queryString} 
                onChange={() => {}}
                checked={item.selected}/>
            <span className={"checkmark"}></span>
              </label>
            </PriceOptions>
          )
        })
        }
        </ul>
      </form>
    </FilterSidebarTag>
  )
}


export default wrapper.withRedux(FilterSidebar)