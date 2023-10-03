// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const  { getStorage, ref, uploadBytes, getDownloadURL } = require ('firebase/storage');
const axios = require("axios");


const firebaseConfig = {
    apiKey: "AIzaSyAG9Bp_eHw4w6iTydQhGywV7ThQOTyi79k",
    authDomain: "lbms-9a297.firebaseapp.com",
    projectId: "lbms-9a297",
    storageBucket: "lbms-9a297.appspot.com",
    messagingSenderId: "610784137774",
    appId: "1:610784137774:web:8bf498aeeefa82a2b605bf"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

module.exports = async function storeImage() {
    try {
      // Download the image from the URL
      const imageUrl =
        "https://upload.wikimedia.org/wikipedia/commons/3/3f/JPEG_example_flower.jpg?20170304154031";
      const response = await axios.get(imageUrl, { responseType: "arraybuffer" });
  
      // Convert the downloaded image data to Uint8Array
      const fileData = new Uint8Array(response.data);
  
      // Reference to the image in Firebase Storage
      const storageRef = ref(storage, "images/image.jpg",{ contentType: "image/jpeg" });
  
      // Upload the file to Firebase Storage
      await uploadBytes(storageRef, fileData);
  
      // Get the download URL of the uploaded image
      const downloadURL = await getDownloadURL(storageRef);
      console.log("Image uploaded and download URL:", downloadURL);
      return downloadURL;
    } catch (err) {
      console.error("Error uploading image:", err);
    }
  }

