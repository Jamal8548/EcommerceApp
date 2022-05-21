import styled from "styled-components"
import { GitHub } from '@material-ui/icons';

const Container = styled.div`
height:30px;
background-color:teal;
color:white;
font-size:14px;
font-weight:500;
`
const Wrapper = styled.div`
display:flex;
align-items:center;
justify-content:space-around;
`
const Left = styled.div`
display:flex;
flex:1;`
const Center = styled.div`
display:flex;
flex:1;
align-items:right;
justify-content:right;
color:white;
`
const Right = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex:1;`


const Announcement = () => {
  return (<>

    <Container>
      <Wrapper>
        <Left></Left>
        <Right> <p>Super Deal! Free Shipping Orders Over $50</p></Right>
        <Center> 
          <div style={{ display:"flex", justifyContent:"center",alignItems:"center",marginRight:"30px", fontWeight:"900"}}>
                      <GitHub style={{ color: "black",marginRight:"5px"}} />
                      <p >
                          <a style={{ color: "black"}} href="https://github.com/Jamal8548/EcommerceApp">
                          GitHub Link!
                          </a>
                      </p>
            </div> 
        </Center>
      </Wrapper>
    </Container>
   
   
    </>
  )
}

export default Announcement