import React, { useState } from "react";
import {Modal,Form,Button} from 'react-bootstrap'
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";





function ImageEditModal({editImageShow,
    seteditImageShow}) {


// Image cropper js controller start

  const [image, setImage] = useState('');
  const [cropData, setCropData] = useState("#");
  const [cropper, setCropper] = useState();
  const[previewSrc,setPreviewSrc]=useState()
  const onChange = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };

  const getCropData = () => {
    if (typeof cropper !== "undefined") {
      setCropData(cropper.getCroppedCanvas().toDataURL());
    }
  };

// Image cropper jd controllwe end
    return (
        <Modal
        size="lg"
        show={editImageShow}
        onHide={() => seteditImageShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Select your image
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
        <div>
      <div style={{ width: "100%" }}>


      <Form.Group className="position-relative mb-3">
            <Form.Label>File</Form.Label>
            <Form.Control
              type="file"
              required
              name="file"
              onChange={onChange}
            />
          </Form.Group>

        <Cropper
          style={{ height: 400, width: "100%" }}
          zoomTo={0.5}
          initialAspectRatio={1}
          preview=".img-preview"
          src={image}
          viewMode={1}
          minCropBoxHeight={10}
          minCropBoxWidth={10}
          background={false}
          responsive={true}
          autoCropArea={1}
          checkOrientation={false} 
          onInitialized={(instance) => {
            setCropper(instance);
          }}
          guides={true}
        />
      </div>
      <div>
      <Button style={{ float: "right" }} onClick={getCropData}>
              Save
            </Button>

      </div>
      <br style={{ clear: "both" }} />
    </div>


        </Modal.Body>
      </Modal>
    )
}

export default ImageEditModal
