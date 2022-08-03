import { firestore } from "../firestore";

export const getProducts = async () => {
    const collectionRef = firestore.collection("products");
    const data = await collectionRef.get();
    const rawDocuments = data.docs;
    const cleanedDocuments = rawDocuments.map((rawDoc) => ({
        ...rawDoc.data(),
        id: rawDoc.id,
    }));
    console.log(cleanedDocuments);
    return cleanedDocuments;
};
