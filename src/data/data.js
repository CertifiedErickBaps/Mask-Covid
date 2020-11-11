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
      "first": "Why? Using our facial recognition software for the use of masks and thus prevent infection.",
      "second": "How? Just click on the button to use the demo and contact us.",
      "btn": "Use demo"
    }
  },
  {
    "phrase": "“What you don’t do determines what you can do.”\n Tim Ferriss",
    "information": {
      "first": "Machine learning is a subarea of Artificial Intelligence that has shown high efficiency in such situations\n            to understand, visualize and understand information appropriately.",
      "second": "Due to the current situation, one of the rules is to wear a mask as a protection and hygiene measure. Due to\n            this situation, there is a need to be able to recognize whether people are wearing face masks, since it is\n            currently a mandatory measure in most centers or institutions."
    }
  },
  {
    "phrase": "FACE"
  },
  {
    "title": {
      "first": "How facial",
      "second": "recognition",
      "third": "works?"
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
        info: "We use \"OpenCV\" for the deep learning of the photos and the detection of the masks."
      },
      {
        icon: qrcode,
        title: "Detect face and mask in the image",
        info: "Extract the data frames in the image in real time and detected faces, along with the predictions computed by our model."
      }
    ]
  },
  {
    "title": "Do you have any doubts about how it was done?",
    "btn": "Send"
  }
];

export default data;