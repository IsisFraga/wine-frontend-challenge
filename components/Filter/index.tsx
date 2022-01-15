import React, {useState, useCallback} from 'react'
import { FilterTag, PriceOptionsDesk } from './style'
import { useSelector, useDispatch } from 'react-redux'
import { Actions } from 'store'

const Filter: React.FC = () => {
  const dispatch = useDispatch();

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
    <FilterTag>
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
            <PriceOptionsDesk key={item.id} active={item.selected}>
              <label className={"container"} htmlFor={item.id}>{item.price}
                <input type="radio" id={item.id} onChange={(event) => selectRadio(item.id)} checked={item.selected}/>
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