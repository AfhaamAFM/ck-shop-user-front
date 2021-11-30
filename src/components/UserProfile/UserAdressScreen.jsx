import Text from 'antd/lib/typography/Text';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Row, Col, Card, Button } from 'react-bootstrap'
import Swal from 'sweetalert2'
import { useSelector, useDispatch } from 'react-redux'
import { userlogged } from '../../redux/userStore/userAction';
import AddAddressModal from '../Cart/CartModal/AddAddressModal';
import EditAddressModal from './EditAddressModal';










function UserAdressScreen({ users }) {


    const dispatch = useDispatch()
    const [address, setAddress] = useState('')
    const [user, setUser] = useState('')



    // add address modal states start
    const [addAddressShow, setAddAddressShow] = useState(false);
    const [editAddressShow, setEditAddressShow] = useState(false);

    const [name, setName] = useState("..");
    const [flatNo, setFlatNo] = useState("..");
    const [number, setNumber] = useState("..");
    const [pincode, setPincode] = useState("..");
    const [street, setStreet] = useState("..");
    const [district, setDistrict] = useState("..");
    const [state, setState] = useState("..");
    const [landmark, setLandmark] = useState("..");
    const [warning, setWarning] = useState("..");
    const [loading, setLoading] = useState(false);
    const[addressId,setAddressId]=useState('')
   // Add address modal
    


    //function


    // Modal function
    const addAddressHandleClose = () => setAddAddressShow(false);
    const addAddressHandleShow = () => setAddAddressShow(true);
    const editAddressHandleClose = () => setEditAddressShow(false);
    const editAddressHandleShow = (e) => {
        
        const id =e.target.id
        setAddressId(id)
        let showAddress = users.address.find((p) => p._id === id)
 
       let{ district:d,flatNo:f,landmark:l,name:n,number:no,pincode:pin,state:st,street:str}=showAddress

       setName(n)
       setFlatNo(f)
       setNumber(no)
       setPincode(pin)
       setStreet(str)
       setDistrict(d)
       setState(st)
       setLandmark(l)
        setEditAddressShow(true);
    
    
    }
    // Delete handler
    function addressDeleteHandler(e) {
        const addressId = e.target.id

        axios.get(`/user/address/delete/${addressId}`).then(res => {

            if (res.data) {
                dispatch(userlogged())
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Password Changed Succesfully',
                    showConfirmButton: false,
                    timer: 1500
                })

            }

        })
    }


// Add adreess
function addAddressHandler() {
    setLoading(true);
    if (
      !name ||
      !flatNo ||
      !number ||
      !pincode ||
      !street ||
      !district ||
      !state ||
      !landmark
    ) {
      setLoading(false);
      return setWarning("Please fill all,thisssss");
    }
    axios
      .post("/user/address/add", {
        name,
        flatNo,
        number,
        pincode,
        street,
        district,
        state,
        landmark,
      })
      .then((res) => {
        if (res.data.response) {
          setLoading(false);
          return setWarning(res.data.response);
        }

        if (res.data) {
          setLoading(false);
          dispatch(userlogged());
          addAddressHandleClose();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Address added",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  }
// add address end

function editAddressHandler(){

    setLoading(true);
    if (
      !name ||
      !flatNo ||
      !number ||
      !pincode ||
      !street ||
      !district ||
      !state ||
      !landmark
    ) {
      setLoading(false);
      return setWarning("Please fill all,thisssss");
    }
    axios
      .post("/user/address/edit", {
          addressId,
        name,
        flatNo,
        number,
        pincode,
        street,
        district,
        state,
        landmark,
      })
      .then((res) => {
        if (res.data.response) {
          setLoading(false);
          return setWarning(res.data.response);
        }

        if (res.data) {
          setLoading(false);
          dispatch(userlogged());
          addAddressHandleClose();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Address edited",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });

}

// Edit addres start



// edit address end
    //useEffects


    useEffect(() => {
        if (!users) return;
        if (!users.address) return;
        setAddress(users.address);

        setUser(user);
    }, [user]);


    console.log('Thiss oss', users.address);

    return (

  <>
    
        <AddAddressModal 
        
        name={name}
        flatNo={flatNo}
        number={number}
        pincode={pincode}
        street={street}
        district={district}
        state={state}
        landmark={landmark}
        setName={setName}
        setFlatNo={setFlatNo}
        setNumber={setNumber}
        setPincode={setPincode}
        setStreet={setStreet}
        setDistrict={setDistrict}
        setState={setState}
        setLandmark={setLandmark}
        warning={warning}
        loading={loading}
        addAddressHandler={addAddressHandler}
        addAddressShow={addAddressShow}
        addAddressHandleClose={addAddressHandleClose}
        
        />
  
  <EditAddressModal
  
  name={name}
  flatNo={flatNo}
  number={number}
  pincode={pincode}
  street={street}
  district={district}
  state={state}
  landmark={landmark}
  setName={setName}
  setFlatNo={setFlatNo}
  setNumber={setNumber}
  setPincode={setPincode}
  setStreet={setStreet}
  setDistrict={setDistrict}
  setState={setState}
  setLandmark={setLandmark}
  warning={warning}
  loading={loading}
  editAddressHandler={editAddressHandler}
  editAddressShow={editAddressShow}
  editAddressHandleClose={editAddressHandleClose}
  

  
  />
  
  <Row >
            <Col sm={12} className='d-flex mb-3'>
                <h2>Address </h2>
<Button size='sm' className='ms-4' onClick={addAddressHandleShow}>Add new Address</Button>
            </Col>
            <Col>
            <Row>

                {users.address?.map((value, i) => {
                    return <Card key={value._id} as={Col} sm={12} md={6} className="mb-3 me-1">

                        <Card.Body>
                            <div className='address-Header'>

                                <Card.Title >{`address ${i + 1}`}   </Card.Title>


                                <div className='address-icon'>
                                    <i className="far fa-edit mx-3" onClick={editAddressHandleShow} id={value._id} ></i>
                                    <i className="far fa-trash-alt mx-3" id={value._id} onClick={addressDeleteHandler} ></i>
                                </div>
                            </div>

                            <Card.Subtitle className="mb-2 text-muted">
                                {value?.name}
                            </Card.Subtitle>
                            <Card.Text>
                                <Text>
                                    {value.flatNo} ,{value.landmark} ,
                                    {value.street} ,{value.district} dist ,
                                    {value.state} ,{value.pincode} ,
                                    <b>Ph:</b>
                                    {value.number}
                                </Text>
                            </Card.Text>
                        </Card.Body>

                    </Card>
                })}
            </Row>

</Col>

        </Row>
    </>
    )
}

export default UserAdressScreen
