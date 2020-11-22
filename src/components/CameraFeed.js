import React, {Component} from 'react';
import Webcam from "react-webcam";
import axios from 'axios';

const WebcamComponent = () => <Webcam />;
const facts = ["To wear a face mask effectively, you must cover your nose. This is because germs and viruses likely to escape and spread to others is just as likely to escape from your nose as it is from your mouth! It never hurts to be careful.",
"You must also ensure that you securely wear a face mask. It is simply not enough to wear one loosely over your face. This means that you can make sure there’s no chance of any viruses escaping.",
"It’s thought that while cloth face masks could cut your chance of spreading and breathing in viruses from droplets while out and about, there are not yet enough studies or research results to suggest that they will outright prevent you from contracting COVID-19 at all. At the time of publication, it is still much too early to be dealing in any kind of uncertainties.",
"More and more countries are starting to adopt masks as necessary in public situations. However, the UK has been one of the last to adopt these measures – with it being one of several territories choosing to focus on social distancing instead. However, at the time of writing, British people are advised to wear masks if social distancing cannot be adhered to at all.",
"If you are using a non-disposable face mask, you must make sure to wash it after each time you use it. However, there are disposable masks out there which you should safely throw away in a closed bin wherever possible.",
"A cloth mask is worn to help protect others in case you have the virus. Countries that required face masks, testing, isolation and social distancing early in the pandemic have had success slowing the disease's spread. Common sense also suggests that some protection is better than none.",
];


export class CameraFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      status: null,
      message: "Hello"
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

  const random = Math.floor(Math.random() * facts.length);
  this.setState({
    message:facts[random]
  })

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
              {this.state.message}
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
            {this.state.message}
          </span>
        </p>

      </div>
    )}

      </div>
    );
  }
}
