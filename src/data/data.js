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
      "first": "Machine learning is a subarea of Artificial Intelligence that has shown high efficiency in such situations\n            to understand, visualize and understand information appropriately.",
      "second": "Due to the current situation, one of the rules is to wear a mask as a protection and hygiene measure. Due to\n            this situation, there is a need to be able to recognize whether people are wearing face masks, since it is\n            currently a mandatory measure in most centers or institutions."
    }
  },
  {
    "phrase": "PUT YOUR\n MASK ON"
  },
  {
    "title": {
      "first": "How does facial",
      "second": "recognition",
      "third": "work?"
    },
    "items": [
      {
        icon: database,
        title: "Data extraction",
        info: "We train a deep learning model to classify whether a person is wearing a mask or not and we find a good dataset with a fair amount of images for both classes."
      },
      {
        icon: dataset,
        title: "Building the dataset class",
        info: "We build the Dataset class which will be used for querying samples by batches in a way interpretable by PyTorch."
      },
      {
        icon: user,
        title: "Building our face mask detector model",
        info: "Thanks to obtaining multiple photos we can detect the differences between having and not having a mask."
      },
      {
        icon: training,
        title: "Training our model",
        info: "We use machine learning to train our model and have it ready to predict the next photo."
      },
      {
        icon: globe,
        title: "Testing our model on real data",
        info: "We use \"PyTorch\" for the deep learning of the photos and the detection of the masks."
      },
      {
        icon: qrcode,
        title: "Detect face and mask in the image",
        info: "Extract the data frames in the image in real time and detected faces, along with the predictions computed by our model."
      }
    ]
  },
  {
    "title": "Want to learn more? Send us an email.",
    "btn": "Send"
  }
];

export default data;
