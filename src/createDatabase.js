import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

export async function createFirstDocument() {
  try {
    const docRef = await addDoc(collection(db, "vendors"), {
      name: "Test Vendor",
      createdAt: Date.now(),
    });
    console.log("Document created with ID:", docRef.id);
  } catch (error) {
    console.error("Error creating vendor document:", error);
  }
}