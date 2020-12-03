import React, { Component } from "react";
import axios from "axios";

export class CameraFeedCanvas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image_jpg: null,
      status: null,
    };
  }

  processDevices(devices) {
    devices.forEach((device) => {
      console.log(device.label);
      this.setDevice(device);
    });
  }

  async setDevice(device) {
    const { deviceId } = device;
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: { deviceId },
    });
    this.videoPlayer.srcObject = stream;
    this.videoPlayer.play();
  }

  async componentDidMount() {
    const cameras = await navigator.mediaDevices.enumerateDevices();
    this.processDevices(cameras);
  }

  takePhoto = () => {
    const { sendFile } = this.props;
    const context = this.canvas.getContext("2d");
    context.drawImage(this.videoPlayer, 0, 0, 680, 360);
    this.canvas.toBlob(sendFile);

    let dataURL = this.canvas.toDataURL();
    var blobBin = atob(dataURL.split(",")[1]);
    var array = [];
    for (var i = 0; i < blobBin.length; i++) {
      array.push(blobBin.charCodeAt(i));
    }
    
    var file = new Blob([new Uint8Array(array)], { type: "image/png" });

    var formdata = new FormData();
    formdata.append("Image", file);

    axios.post("http://127.0.0.1:5000/image", formdata).then((res) => {
      const json = res.data;
      this.setState({
        status: json.status,
      });
      console.log(this.state.status);
    });
  };

  render() {
    console.log(this.state.image_jpg);
    return (
      <div className="c-camera-feed">
        <div className="c-camera-feed__viewer">
          <video
            ref={(ref) => (this.videoPlayer = ref)}
            width="680"
            heigh="360"
          />
        </div>
        <button
          className="btn waves-effect waves-light"
          onClick={this.takePhoto}
        >
          Take photo
        </button>
        <div className="c-camera-feed__stage">
          <canvas width="680" height="360" ref={(ref) => (this.canvas = ref)} />
        </div>
        {this.state.status == 1 && (
          <div className="output">
            <p>
              <span>You are not wearing a mask.</span>
            </p>
          </div>
        )}

        {this.state.status == 0 && (
          <div className="output">
            <p>
              <span>You are wearing a mask!</span>
            </p>
          </div>
        )}
      </div>
    );
  }
}
