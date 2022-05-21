import { Add, Remove } from '@material-ui/icons'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import { mobile } from '../responsive'
import { useLocation } from 'react-router-dom'
import {   publicRequest } from '../requestMethods'
import { addProduct } from '../redux/cartRedux'
import {useDispatch} from 'react-redux'

const Container = styled.div``

const Wrapper = styled.div`
padding:50px;
display:flex;
${mobile({flexDirection:"column",padding:"10px"})};

`
const ImgContainer = styled.div`
flex:1;`

const Image = styled.img`
width:100%;
height:90vh;
${mobile({height:"40vh"})};
object-fit:cover;

`

const InfoContainer = styled.div`
flex:1;
padding:0px 50px;
${mobile({padding:"0px 10px"})};
`

const Title = styled.h1`
font-weight:200;
`

const Desc = styled.p`
margin:20px 0px;
`

const Price = styled.span`
font-weight:100;
font-size:40px;
`
const FilterContainer=styled.div`
width:50%;
margin:30px 0px;
display:flex;
justify-content:space-between;
${mobile({width:"100%"})};
`
const Filter=styled.div`
display:flex;
align-items:center;
`
const FilterTitle=styled.span`
font-size:20px;
font-weight:200;
`

const FilterSize=styled.select`
display:flex;
align-items:center;
padding:5px;
justify-content:center;
margin-Left:10px;
`
const FilterColor=styled.div`
width:20px;
height:20px;
border-radius:50%;
background-color:${props=>props.color};
margin:0px 5px;
cursor:pointer;
`
const FilterSizeOption=styled.option``;

const AddContainer=styled.div`
width:50%;
display:flex;
align-items:center;
justify-content:space-between;
${mobile({width:"100%"})};
`;
const AmountContainer=styled.div`

display:flex;
align-items:center;
font-weight:700;
`;
const Amount=styled.span`
font-size:25px;
width:30px;
height:30px;
border-radius:10px;
border:1px solid teal;
display:flex;
align-items:center;
justify-content:center;
margin: 0 5px;
`;
const Button=styled.button`
padding:15px;
border:2px Solid teal;
background-color:white;
cursor:pointer;
font-weight:900;
&:hover{
    background-color:#f8f4f4;
}
`;




const Product = () => {
    const location = useLocation()
    const id = location.pathname.split("/")[2]

    const [product,setProduct] = React.useState({})
    const [quantity,setQuantity] = React.useState(0)
    const [color,setColor] = React.useState("")
    const [size,setSize] = React.useState("")

    const dispatch = useDispatch()
   
    useEffect(()=>{
        const getProduct = async ()=>{
            try{
                const res = await publicRequest.get("/products/find/"+id)
                setProduct(res.data)
              
            }catch(err){
                console.log(err)
            }
        }
        getProduct()
       
    },[id])
    
    function calculateQuantity(type){
     
        if(type==="inc"){
            setQuantity(quantity+1)
        }
        else{
            quantity>0 && setQuantity(quantity-1)
        }
    }

    const handleClick = () =>{
       
       dispatch(addProduct({...product,quantity,color,size}));
    
    }

  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImgContainer>
            <Image src={product.img}/>
            </ImgContainer>
            <InfoContainer>
                <Title>{product.title}</Title>
                <Desc> {product.desc} </Desc>
                <Price>{product.price}</Price>  
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        {product.color?.map((c)=>(
                          <FilterColor color={c} key={c} onClick={()=>setColor(c)}/>   
                        ))}
                         
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize onChange={(e)=>setSize(e.target.value)}>
                        {product.size?.map((s)=>(
                        <FilterSizeOption key={s}>{s}</FilterSizeOption>
                        ))}

                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                <AmountContainer>
                    <Remove style={{cursor:"pointer"}} onClick={()=>calculateQuantity("dec")}/>
                    <Amount>{quantity}</Amount>
                    <Add style={{cursor:"pointer"}} onClick={()=>calculateQuantity("inc")}/>
                </AmountContainer>
                <Button onClick={handleClick}>ADD TO CART</Button>

                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product