import { db } from "./firebase";
import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
  } from "firebase/firestore";
  
  const CollectionRef = collection(db, "subjects");
  const CollectionResultsRef = collection(db, "results");
  class PatientDataService{
    
    addPatients = (newPatient) => {
      return addDoc(CollectionRef, newPatient);
    };

    addResults = (newResult) => {
        return addDoc(CollectionResultsRef, newResult);
      };
  
    updatePatient = (id, updatedPatient) => {
      const patient = doc(db, "subjects", id);
      return updateDoc(patient, updatedPatient);
    };
  
    deletePatient = (id) => {
      const patient = doc(db, "subjects", id);
      return deleteDoc(patient);
    };
  
    getAllPatients = () => {
      return getDocs(CollectionRef);
    };
  
    getPatient = (id) => {
      const patient = doc(db, "subjects", id);
      return getDoc(patient);
    };
  }
  
  export default new PatientDataService();