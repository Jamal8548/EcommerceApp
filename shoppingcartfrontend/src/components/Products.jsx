import React, { useEffect } from 'react'
import styled from "styled-components"
import { popularProducts } from "../data"
import { Product } from "./Product"
import axios from 'axios'

const Container = styled.div`
  padding:20px;
  display:flex;
  flex-wrap:wrap;
`

const Products = ({cat,filters,sort}) => {
const[products,setProducts]= React.useState([])
const[filteredProducts,setFilteredProducts]= React.useState([])

useEffect(()=>{
const getProducts =async() =>{
  try{
    const response= await axios.get( cat? `http://localhost:5000/api/products?category=${cat}`: "http://localhost:5000/api/products");
    setProducts(response.data)
    console.log(response)
  }catch(err){
    console.log(err)
  }
}
getProducts()
},[cat])

useEffect(()=>{
  cat && setFilteredProducts(
    products.filter((item)=>Object.entries(filters).every(([key,value])=>
    item[key].includes(value)
    ))
  )
  console.log(filteredProducts)
},[products,cat,filters])


useEffect(()=>{
if(sort==="newest"){
  setFilteredProducts((prev)=>
    [...prev].sort((a,b)=> a.createdAt - b.createdAt)
    )
}else if(sort==="asc"){
  setFilteredProducts((prev)=>
    [...prev].sort((a,b)=> a.price - b.price)
    )
}else{
  setFilteredProducts((prev)=>
    [...prev].sort((a,b)=> b.price - a.price)
  )
 }
},[sort])



  return (
    <Container>
        { cat
        ? filteredProducts.map((product)=> <Product product={product} key={product.id}/>)
        : products.slice(0,10).map((product)=>  <Product product={product} key={product.id}/> )}
    </Container>
  )
}

export default Products