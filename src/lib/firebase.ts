import { firebaseConfig } from "@/config/firebaseConfig";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
