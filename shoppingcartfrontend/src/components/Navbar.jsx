import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import {Badge} from '@material-ui/core';
import {mobile} from '../responsive'
import {useSelector} from "react-redux"
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/userRedux';
import { GitHub } from '@material-ui/icons';
const Container = styled.div`
height:60px;
@media only screen and (max-width:380px){
   ${mobile({height:"50px"})}
}
`
const Wrapper = styled.div`
padding:10px 20px;
display:flex;
align-items:center;
justify-content:space-between;
${mobile({padding:"10px 0px"})}

`

const Left = styled.div`
flex:1;
display:flex;
align-items:center;
`

const Language = styled.span`
font-size:14px;
cursor:pointer;
${mobile({display:"none"})}
`

const SearchContainer =styled.div`
border:0.5px solid grey;
display:flex;
align-items:center;
margin-left:25px;
padding:5px;
`
const Input = styled.input`
border:none;
${mobile({width:"50px"})}
`

const Center = styled.div`
flex:1;
text-align:center;
${mobile({marginLeft:"5px"})};
`

const Logo =styled.h1`
font-weight:bold;
${mobile({fontSize:"24px"})}
`

const Right = styled.div`
flex:1;
display:flex;
justify-content:right;
${mobile({justifyContent:"center"})};
`

const MenuItem=styled.div`
font-size:14px;
cursor:pointer;
padding:0px 15px;
${mobile({fontSize:"12px" , marginLeft:"1px"})};
`


const Navbar = () => {
    const user = useSelector(state=>state.user.currentUser)
    const quantity = useSelector(state=>state.cart.quantity)
    const dispatch = useDispatch()



    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Search style={{color:"gray", fontSize:16, cursor:"pointer"}}/>
                        <Input placeholder='Search'/>
                    </SearchContainer>
                </Left>

                <Center>
                    <Logo>JAMAL ASHRAF.
                   
                    </Logo>
                </Center>

                <Right>
                     <Link to={"/register"}>
                    <MenuItem>REGISTER</MenuItem>
                    </Link>
                    <Link to={"/login"}>
                   {user? <MenuItem onClick={()=>dispatch(logout()) }>SIGN OUT</MenuItem>:<MenuItem onClick={()=>dispatch(logout())}>SIGN IN</MenuItem>}
                    </Link>
                    <Link to={`/Cart`}>
                    <MenuItem>
                        <Badge badgeContent={quantity} color="primary">
                        <ShoppingCartOutlined/>
                        </Badge>
                    </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar