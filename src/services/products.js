import { firestore } from "../firestore";

export const getProducts = async () => {
    const collectionRef = firestore.collection("products");
    const data = await collectionRef.get();
    const rawDocuments = data.docs;

    const cleanedDocuments = rawDocuments.map((rawDoc) => ({
        ...rawDoc.data(),
        id: rawDoc.id,
    }));
    return cleanedDocuments;
};

export const getProductsById = async (id) => {
    const collectionRef = firestore.collection("products");
    const docRef = collectionRef.doc(id);
    const rawDoc = await docRef.get();
    return { id: rawDoc.id, ...rawDoc.data() };
};

export const updateProduct = async (id, record) => {
    const collectionRef = firestore.collection("products");
    const docRef = collectionRef.doc(id);
    await docRef.update(record);
};

// Cart

export const quantityWatchCount = async (id, quantity) => {
    const collectionRef = firestore.collection("products");

    const docRef = collectionRef.doc(id);

    await docRef.update({ quantity: quantity - 1 });

    return true;
};

export const getCart = async () => {
    const collectionRef = firestore.collection("cart");
    const data = await collectionRef.get();
    const rawDocuments = data.docs;
    const cleanedDocuments = rawDocuments.map((rawDoc) => ({
        ...rawDoc.data(),
        id: rawDoc.id,
    }));

    return cleanedDocuments;
};

export const createCartItem = async (record) => {
    const collectionRef = firestore.collection("cart");
    await collectionRef.add(record);
};

export const updateCart = async (id, record) => {
    const collectionRef = firestore.collection("cart");
    const docRef = collectionRef.doc(id);
    await docRef.update(record);
};

export const deleteCart = async (id) => {
    const collectionRef = firestore.collection();
    const docRef = collectionRef.doc(id);
    await docRef.delete();
};
