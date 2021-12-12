import React, { useEffect, useState } from "react";
import {
  ListGroup,
  Row,
  Col,
  Modal,
  Button,
  Form,
  Image,
  Spinner,
} from "react-bootstrap";
import { Space } from "antd";
import validator from "../../simple-react-form-validation-helper/validationHelpers";
import Text from "antd/lib/typography/Text";
import axios from "axios";
import Swal from "sweetalert2";
import { useSelector, useDispatch } from "react-redux";
import { userlogged } from "../../redux/userStore/userAction";
import ImageEditModal from "./ImageEditModal";

function UserHomeScreen({ user }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [passwordshow, setPasswordShow] = useState(false);

  const passwordhandleClose = () => setPasswordShow(false);
  const passwordhandleShow = () => setPasswordShow(true);

  // useStates
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  const [oldPassword, setOldPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // edit modal constroll(er
  const [profilePreview, setProfilePreview] = useState();
  const [editImageShow, seteditImageShow] = useState(false);
  const [cropData, setCropData] = useState("#");
  const [cropper, setCropper] = useState();
  const [loading, setLoading] = useState(false);
  const [saveMode, setSaveMode] = useState(false);

  const { users } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const getCropData = () => {
    if (typeof cropper !== "undefined") {
      setCropData(cropper.getCroppedCanvas().toDataURL());
      setProfilePreview(cropper.getCroppedCanvas().toDataURL());
    }
  };

  // crop image uploader

  async function ShowImageHandler() {
    getCropData();
    setSaveMode(true);
    seteditImageShow(false);
  }
  const image = cropData;
  function uploadImageHandler() {
    setLoading(true);
    const oldImage = user.image;
    axios.post("/user/imageUpload", { image, oldImage }).then((res) => {
      if (res.data) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Image Upload",
          showConfirmButton: false,
          timer: 1500,
        });
        setSaveMode(false);
        setLoading(false);
      }
    });
  }
  // Local function

  function editHandler() {
    axios
      .post("/user/edit", { name, email })
      .then((res) => {
        if (res.data) {
          dispatch(userlogged());
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Edit user",
            showConfirmButton: false,
            timer: 1500,
          });
        }

        handleClose();
      })
      .catch((err) => {
        console.log("this is user detail error  " + err);
      });
  }

  // Change password

  function passwordEditHandler() {
    console.log(oldPassword, password, confirmPassword);

    if (!oldPassword || !password || !confirmPassword) {
      return setPasswordError("Fill all");
    }

    if (password !== confirmPassword) {
      return setPasswordError("Password donot match");
    }
    if (password.length < 5 || confirmPassword.length < 5) {
      return setPasswordError("Password length must be more than 5 ");
    }

    axios
      .post("/user/changePassword", { oldPassword, password })
      .then((res) => {
        if (res.data.response) {
          return setPasswordError("Incorrect Password");
        }

        if (res.data) {
          dispatch(userlogged());

          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Password Changed Succesfully",
            showConfirmButton: false,
            timer: 1500,
          });
          passwordhandleClose();
        }
      });
  }

  useEffect(() => {
    setEmail(user.email);
    setName(user.name);
    user.image?.url
      ? setProfilePreview(user.image?.url)
      : setProfilePreview(
          "https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png"
        );
  }, []);
  console.log(cropData);
  return (
    <>
      <Row>
        <Col md={6}>
          <Row className="d-flex" className="">
            <Space direction="horizontal">
              <h2 as={Col} md={8}>
                User details
              </h2>
              <h2 as={Col} md={4} className="editHandler" onClick={handleShow}>
                <i className="far fa-edit"></i>{" "}
              </h2>
            </Space>
          </Row>
          <ListGroup>
            <ListGroup.Item>
              {" "}
              <b> Name</b>
            </ListGroup.Item>
            <ListGroup.Item>{user.name}</ListGroup.Item>
            <ListGroup.Item>
              <b> email</b>
            </ListGroup.Item>
            <ListGroup.Item>{user.email}</ListGroup.Item>
            <ListGroup.Item>
              <b> Referal Code</b>
            </ListGroup.Item>
            {!user.refCode || user.wallet ? (
              <>
                <ListGroup.Item>
                  {user.refCode ? user.refCode : "no referal Code"}
                </ListGroup.Item>
                <ListGroup.Item>
                  <b>Wallet Money</b>
                </ListGroup.Item>
               
                <ListGroup.Item>
                  {user.wallet>0 ? <p style={{color:'green',fontSize:'1rem',fontWeight:"bold"}} >₹{user.wallet}</p>: <span>no money in your wallet &#128534;</span>}
                </ListGroup.Item>
              </>
            ) : (
              <ListGroup.Item>
                <b>You have no wallet or referal code</b>
              </ListGroup.Item>
            )}
          </ListGroup>
          <ListGroup className="p-4">
            {/* <ListGroup.Item > <b> Edit user</b> </ListGroup.Item> */}
            <Button variant="danger" onClick={passwordhandleShow}>
              Change password
            </Button>
          </ListGroup>
        </Col>
        <Col md={6} className="d-flex">
          <div className="profileImageContainer">
            <Image src={profilePreview} fluid />
          </div>

          {loading ? (
            <Spinner animation="grow" variant="danger" />
          ) : saveMode ? (
            <h4>
              <i
                className="far fa-save deleteIcon"
                onClick={uploadImageHandler}
              ></i>
            </h4>
          ) : (
            <h4>
              <i
                className="fas fa-pen  deleteIcon"
                onClick={seteditImageShow}
              ></i>
            </h4>
          )}

          {/* <Button onClick={seteditImageShow}>Edit Image</Button> */}
        </Col>
      </Row>

      <>
        <ImageEditModal
          editImageShow={editImageShow}
          seteditImageShow={seteditImageShow}
          ShowImageHandler={ShowImageHandler}
          setCropper={setCropper}
        />
        {/* Eddit username start */}
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit user details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Form.Group as={Col} md="12" className="mb-2">
                <Form.Label>name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="First name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    validator.nameInputChangeHandler(
                      e.target.value,
                      setNameError
                    );
                  }}
                  onBlur={(e) => {
                    validator.nameInputBlurHandler(
                      e.target.value,
                      setNameError
                    );
                  }}
                />
                <Text className="my-1" type="danger">
                  {nameError}
                </Text>
              </Form.Group>
              <Form.Group as={Col} md="12" className="mb-2">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    validator.emailInputChangeHandler(
                      e.target.value,
                      setEmailError
                    );
                  }}
                  onBlur={(e) => {
                    validator.emailInputBlurHandler(
                      e.target.value,
                      setEmailError
                    );
                  }}
                />
                <Text className="my-1" type="danger">
                  {emailError}
                </Text>
              </Form.Group>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={editHandler}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </>
      {/* Eddit username start */}
      {/* change password Modall start */}

      <Modal
        show={passwordshow}
        onHide={passwordhandleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Change password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Form.Group as={Col} md="12" className="mb-2">
              <Form.Label> Old Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="First name"
                onChange={(e) => {
                  setOldPassword(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group as={Col} md="12" className="mb-2">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="New password"
                onChange={(e) => {
                  setPassword(e.target.value);
                  validator.passwordInputChangeHandler(
                    e.target.value,
                    setPasswordError
                  );
                }}
                onBlur={(e) => {
                  validator.passwordInputBlurHandler(
                    e.target.value,
                    setPasswordError
                  );
                }}
              />
            </Form.Group>
            <Form.Group as={Col} md="12" className="mb-2">
              <Form.Label>Confirm New Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="confirm New password"
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  validator.passwordInputChangeHandler(
                    e.target.value,
                    setPasswordError
                  );
                }}
                onBlur={(e) => {
                  validator.passwordInputBlurHandler(
                    e.target.value,
                    setPasswordError
                  );
                }}
              />
            </Form.Group>
            <Text className="my-1" type="danger">
              {passwordError}
            </Text>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={passwordhandleClose}>
            Close
          </Button>
          <Button variant="info" onClick={passwordEditHandler}>
            Change Password
          </Button>
        </Modal.Footer>
      </Modal>

      {/* edit password modall end */}
    </>
  );
}

export default UserHomeScreen;
