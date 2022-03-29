import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAdHtX34jThCVHH4LisSWCy-ygmgI27Tho",
  authDomain: "kindradesignecommerce.firebaseapp.com",
  projectId: "kindradesignecommerce",
  storageBucket: "kindradesignecommerce.appspot.com",
  messagingSenderId: "639710983361",
  appId: "1:639710983361:web:ca1fb2060e56bf3c4d1040"
};


const app = initializeApp(firebaseConfig);

export default function getFirestoreApp (){
    return app
}