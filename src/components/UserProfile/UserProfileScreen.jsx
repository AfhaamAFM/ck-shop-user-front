import React, { useEffect } from 'react'
import { Container,Row,Tabs,Tab } from 'react-bootstrap'
import UserHomeScreen from './UserHomeScreen'
import {useSelector,useDispatch} from 'react-redux'
import { userlogged } from '../../redux/userStore/userAction'








function UserProfileScreen() {



const {users}=useSelector((state)=>state.user)
const dispatch =useDispatch()


useEffect(()=>{

dispatch(userlogged())


},[dispatch])



    return (
      <Container>
<Row>

<Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
  <Tab eventKey="home" title="Home">
    <UserHomeScreen user={users}/>
  </Tab>
  <Tab eventKey="profile" title="Profile">
    {/* <Sonnet /> */}
  </Tab>
  <Tab eventKey="contact" title="Contact" >
    {/* <Sonnet /> */}
  </Tab>
</Tabs>
</Row>

      </Container>
    )
}

export default UserProfileScreen
