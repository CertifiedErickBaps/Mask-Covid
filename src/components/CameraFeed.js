import React, {Component} from 'react';
import Webcam from "react-webcam";
import axios from 'axios';

const WebcamComponent = () => <Webcam />;



export class CameraFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      status: null
    }

    this.uploadImage = this.uploadImage.bind(this)

  }

  uploadImage = event => {

    try {
      this.setState({
       file: URL.createObjectURL(event.target.files[0])
     })

    } catch (error) {
      console.error(error);
    }

   const fd = new FormData();

  fd.append('Image',event.target.files[0],event.target.files[0].name)


   axios.post("http://127.0.0.1:5000/image",fd)
   .then(res=> {
     const json = res.data
     this.setState({
      status: json.status
    })
      console.log(this.state.status)
   });
  };


  render() {
    return (
      <div className="c-camera-feed">

        <input className="btn waves-effect" type="file" onChange={this.uploadImage}/>
        <div>
          <img src={this.state.file}/>
        </div>

        {this.state.status == 1 && (
        <div className="output">
          <p>
            <span>
              You are not wearing a mask.
            </span>
          </p>
          <p>
            <span className="color-orange">
              Score: 99%
            </span>
          </p>

        </div>
      )}

      {this.state.status == 0 && (
      <div className="output">
        <p>
          <span>
            You are wearing a mask!
          </span>
        </p>
        <p>
          <span className="color-orange">
            Score: 99%
          </span>
        </p>

      </div>
    )}

      </div>
    );
  }
}
