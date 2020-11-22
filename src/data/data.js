import database from "../icons/database.svg";
import dataset from "../icons/dataset.svg";
import globe from "../icons/globe.svg";
import qrcode from "../icons/qrcode.svg";
import training from "../icons/training.svg";
import user from "../icons/user.svg";

const data = [
  {
    "title": {
      "first": "Save",
      "second": "lives",
      "third": "Stay",
      "fourth": "safe"
    },
    "subtitle": {
      "first": "How? By using our facial recognition software, powered by machine learning for the detection of face masks.",
      "second": "Just click the button to try the demo and see for yourself.",
      "btn": "Try our demo."
    }
  },
  {
    "phrase": "“I wear my mask to protect you. \nYou wear your mask to protect me.”\n Dr. Jay C. Butler, CDC",
    "information": {
      "first": "Machine learning is an application of Artificial Intelligence that provides systems the ability\n            to understand, visualize and improve from experience without programming.",
      "second": "Due to the current pandemic, one of the guidelines is to wear a facial covering as a protective measure. Given\n            this situation, there is a need to be able to recognize whether people are wearing face masks or not, since it is\n            currently a mandatory measure in most public places or institutions.",
      "third":"With our ML model, we can monitor crowded places and count the number of mask wearers, information that can then be used in different types of analysis."
    }
  },
  {
    "phrase": "PUT YOUR\n MASK ON"
  },
  {
    "title": {
      "first": "How does our",
      "second": "facial recognition model",
      "third": "work?"
    },
    "items": [
      {
        icon: database,
        title: "1. Data Understanding",
        info: "We obtain a dataset of many different people in situations where they are both wearing and not wearing masks."
      },
      {
        icon: dataset,
        title: "2. Preparing our Data",
        info: "We alter, distort and modify our dataset images in order to improve the robustness of our ML model."
      },
      {
        icon: user,
        title: "3. Connecting our Data with the ML algoritm",
        info: "We connect our dataset to our ML algorithm in Google Colab with the use of a CSV file directory. Additionally, we split our dataset into two groups: 'Predict' and 'Valid'."
      },
      {
        icon: training,
        title: "4. Training our model",
        info: "We use Pytorch Machine Learning to train our model, which learns from the images in our 'Predict' category."
      },
      {
        icon: globe,
        title: "5. Testing our model",
        info: "We evaluate the accuracy of our model by having it predict whether or not people are wearing face masks in our 'Valid' category."
      },
      {
        icon: qrcode,
        title: "6. Deploy and Improve",
        info: "Our model is exported deployed in a Python Flask server, Try it out: Mask Detection Demo. This is our initial version of our algorithm, which can then be improved in subsequent iterations."
      }
    ]
  },
  {
    "title": "Want to learn more? Send us an email.",
    "btn": "Send"
  }
];

export default data;
