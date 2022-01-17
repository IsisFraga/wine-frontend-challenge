import React, {useState, useCallback} from 'react'
import { FilterTag, PriceOptionsDesk } from './style'
import { useSelector, useDispatch } from 'react-redux'
import { Actions } from 'store'

const Filter: React.FC = () => {
  const dispatch = useDispatch();
  const {products, app} = useSelector((state) => state);
  

  return (
    <FilterTag>
      <form>
        <h3 className={"title"}>
          Refine sua busca
        </h3>
        <h4>
          Por preço
        </h4>
        <ul className={"price-options"} >
        { products.priceFilters.map(item => {
          return (
            <PriceOptionsDesk key={item.id} active={item.selected}>
              <label className={"container"} htmlFor={item.id}>{item.price}
                <input 
                  type="radio" 
                  id={item.id} 
                  onClick={() => item.selected ? window.location.search = '' : window.location.search = '?page=1&limit=10&filter=' + item.queryString} 
                  onChange={() => {}}
                  checked={item.selected}/>
                <span className={"checkmark"}></span>
              </label>
            </PriceOptionsDesk>
          )
        })
        }
        </ul>
      </form>
    </FilterTag>
  )
}
export default Filter