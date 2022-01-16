import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Actions } from 'store'
import Image from 'next/image'
import carrinho from 'assets/Carrinho.png'
import { Container, HeaderTag, NavTag, UserArea, SearchBar } from './style'
import Cart from 'components/Cart'

const Pagination: React.FC = () => {
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>teste</div>
  )
}
export default Pagination