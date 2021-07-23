import React, { useState } from 'react';
import { db } from '../firebase/config';

const useFirestore = (collection, condition) => {
  const [documents, setDocuments] = useState([]);

  React.useEffect(() => {
    let collectionRef = db.collection(collection).orderBy('createAt');
    if (condition) {
      if (!condition.compareValue || !condition.compareValue.length) {
        // reset documents data  createdAt
      
        setDocuments([]);
        return;
      }
     
      collectionRef = collectionRef.where(
        condition.fieldName,
        condition.operator,
        condition.compareValue
      );
      
    }
    //console.log({collectionRef});
    const unsubscribe = collectionRef.onSnapshot((snapshot) => {
      const documents = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log({documents});
      setDocuments(documents);
    });
    console.log({documents});
    return unsubscribe;
  }, [collection, condition]);

  return documents;
};

export default useFirestore;
