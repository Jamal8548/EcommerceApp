import { Email, Facebook, Instagram, Room, MobileFriendly, Pinterest, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container= styled.div`
display:flex;
${mobile({flexDirection:"column"})};
`
const Left= styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:20px;
`

const Logo = styled.h1``

const Desc = styled.p`
margin:20px 0px;`

const SocialContainer = styled.div`
display:flex;`

const SocialIcon = styled.div`
width:40px;
height:40px;
border-radius:50%;
color:white;
background-color: #${props=>props.color};
display:flex;
align-items:center;
justify-content:center;
margin-right:20px;
`

const Center= styled.div`
flex:1;
padding:20px;
${mobile({display:"none"})};`

const Title = styled.h3`
margin-bottom:30px;
`
const List = styled.ul`
margin:0;
padding:0;
list-style:none;
display:flex;
flex-wrap:wrap;

`
const ListItem = styled.li`
width:50%;
`;

const Right= styled.div`
flex:1;
padding:20px;
${mobile({backgroundColor:"#fff8f8"})};
`

const ContactItem = styled.div`
display:flex;
align-items:center;
margin-bottom:20px;

`
const Payment = styled.img`
width:100%;`
 const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>JAMAL ASHRAF.</Logo>
            <Desc>I made this project for my learning purposes. It's an ecommerce project and I have used NodeJs/ExpressJs-RESTAPI for backend
                and for front end I have used ReactJs/Redux, for Payment I have used Stripe and databse is MongoDB. 
                I have used styled components for styling. There are few functionalities are missing, I will add them later.
            </Desc>
          <SocialContainer>
              <SocialIcon color="3B5999">
                  <Facebook/>
              </SocialIcon>
              <SocialIcon color="E4405F">
                  <Instagram/>
              </SocialIcon>
              <SocialIcon color="55ACEE">
                  <Twitter/>
              </SocialIcon>
              <SocialIcon color="E60023">
                  <Pinterest/>
              </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem> <Room style={{marginRight:"10px"}}/>Chemnitz, Germany</ContactItem>
            <ContactItem><MobileFriendly  style={{marginRight:"10px"}}/> +491786552247</ContactItem>
            <ContactItem><Email  style={{marginRight:"10px"}}/>jamal8548@gmail.com</ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>
  )
}
export default Footer