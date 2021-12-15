import React from 'react'
import { Container,Row,Tabs,Tab } from 'react-bootstrap'
import UserHomeScreen from './UserHomeScreen'
import {useSelector} from 'react-redux'
import UserAdressScreen from './UserAdressScreen'
import MyordersScreen from './MyordersScreen'








function UserProfileScreen() {



const {users}=useSelector((state)=>state.user)


    return (
      <Container>
<Row>

<Tabs  id="uncontrolled-tab-example" className="mb-3">
  <Tab eventKey="home" title="Home">
    <UserHomeScreen user={users}/>
  </Tab>
  <Tab eventKey="Address" title="Address">
   <UserAdressScreen users={users} />
  </Tab>
  <Tab eventKey="contact" title="My Orders" >
    <MyordersScreen />
  </Tab>
</Tabs>
</Row>

      </Container>
    )
}

export default UserProfileScreen
