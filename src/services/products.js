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

export const getCartById = async (id) => {
    const collectionRef = firestore.collection("cart");
    const docRef = collectionRef.doc(id);
    const rawDoc = await docRef.get();
    return { id: rawDoc.id, ...rawDoc.data() };
};

export const updateProduct = async (id, record) => {
    const collectionRef = firestore.collection("products");
    const docRef = collectionRef.doc(id);
    await docRef.update(record);
};

export const quantityWatchCount = async (id, quantity) => {
    const collectionRef = firestore.collection("products");

    const docRef = collectionRef.doc(id);

    await docRef.update({ quantity: quantity - 1 });

    return true;
};

export const cartQtyWatchCount = async (id, quantity) => {
    const collectionRef = firestore.collection("cart");

    const docRef = collectionRef.doc(id);

    await docRef.update({ quantity: quantity + 1 });

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

export const createCartItem = async (cartItem) => {
    cartItem.quantity = 1;
    const collectionRef = firestore.collection("cart");
    await collectionRef.doc(cartItem.id).set(cartItem);
};

export const updateCart = async (id, qty) => {
    const collectionRef = firestore.collection("cart");
    const docRef = collectionRef.doc(id);
    await docRef.update({ quantity: qty + 1 });
};

export const deleteCart = async (id) => {
    const collectionRef = firestore.collection();
    const docRef = collectionRef.doc(id);
    await docRef.delete();
};
