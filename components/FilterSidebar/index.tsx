import React, {useState, useCallback} from 'react'
import { FilterSidebarTag, PriceOptions } from './style'
import { useSelector, useDispatch } from 'react-redux'
import { Actions } from 'store'

const FilterSidebar: React.FC = () => {
  const dispatch = useDispatch();
  const {app} = useSelector((state) => state);

  const [filterPrices, setFilterPrices] = useState([
    {
      price: 'até R$40',
      id: 'price1',
      selected: false,
    },
    {
      price: 'R$40 a R$50',
      id: 'price2',
      selected: false,

    },
    {
      price: 'R$60 a R$100',
      id: 'price3',
      selected: false,

    },
    {
      price: 'R$100 a R$200',
      id: 'price4',
      selected: false,

    },
    {
      price: 'R$200 a R$500',
      id: 'price5',
      selected: false,

    },
  ]);

  const selectRadio = useCallback((id) => {
    const newArr: { price: string; id: string; selected: boolean; }[] = [...filterPrices]
    newArr.map(value => {
      return value.selected = false;
    })
    const newElem = newArr.find((element) => element.id == id)
    const itemToChange = newArr.indexOf(newElem)
    newArr[itemToChange].selected = true;
    setFilterPrices(newArr)
  }, [filterPrices, setFilterPrices])

  

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
        <ul className="price-options" >
        { filterPrices.map(item => {
          return (
            <PriceOptions key={item.id} active={item.selected}>
              <label className={"container"} htmlFor={item.id}>{item.price}
                <input type="radio" id={item.id} onChange={(event) => selectRadio(item.id)} checked={item.selected}/>
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
export default FilterSidebar