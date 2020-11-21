import React, {Component} from 'react';

export class CameraFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image_jpg: null
    }
  }

  /**
   * Processes available devices and identifies one by the label
   * @memberof CameraFeed
   * @instance
   */
  processDevices(devices) {
    devices.forEach(device => {
      console.log(device.label);
      this.setDevice(device);
    });
  }

  /**
   * Sets the active device and starts playing the feed
   * @memberof CameraFeed
   * @instance
   */
  async setDevice(device) {
    const {deviceId} = device;
    const stream = await navigator.mediaDevices.getUserMedia({audio: false, video: {deviceId}});
    this.videoPlayer.srcObject = stream;
    this.videoPlayer.play();
  }

  /**
   * On mount, grab the users connected devices and process them
   * @memberof CameraFeed
   * @instance
   * @override
   */
  async componentDidMount() {
    const cameras = await navigator.mediaDevices.enumerateDevices();
    this.processDevices(cameras);
  }

  /**
   * Handles taking a still image from the video feed on the camera
   * @memberof CameraFeed
   * @instance
   */
  takePhoto = () => {
    const {sendFile} = this.props;
    const context = this.canvas.getContext('2d');
    context.drawImage(this.videoPlayer, 0, 0, 680, 360);
    this.canvas.toBlob(sendFile);

    // Useful for image
    // this.canvas.toBlob(function(blob) {
    //   let newImg = document.createElement("img"),
    //     url = URL.createObjectURL(blob);
    //
    //   newImg.onload = function() {
    //     // no longer need to read the blob so it's revoked
    //     URL.revokeObjectURL(url);
    //   };
    //
    //   newImg.src = url;
    //   document.body.appendChild(newImg);
    // });
    // this.setState({image_jpg: this.canvas.toDataURL("image/jpeg", 1.0)});
  };

  render() {
    console.log(this.state.image_jpg);
    return (
      <div className="c-camera-feed">
        <div className="c-camera-feed__viewer">
          <video ref={ref => (this.videoPlayer = ref)} width="680" heigh="360"/>
        </div>
        <button className="btn waves-effect waves-light" onClick={this.takePhoto}>Take photo</button>
        <form action="#">
          <div className="file-field input-field">
            <div className="btn">
              <span>Load a image</span>
              <input type="file"/>
            </div>
            <div className="file-path-wrapper">
              <input className="file-path validate" type="text"/>
            </div>
          </div>
        </form>
        
        <div className="c-camera-feed__stage">
          <canvas width="680" height="360" ref={ref => (this.canvas = ref)}/>
        </div>

        <div>
          <img src={this.state.image_jpg} alt=""/>
        </div>
        <div className="output">
          <p>
            <span>
              You are not using mask
            </span>
          </p>
          <p>
            <span className="color-orange">
              Score: 99%
            </span>
          </p>
        </div>
      </div>
    );
  }
}
