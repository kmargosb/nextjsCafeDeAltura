import { initializeApp, getApps, cert } from "firebase-admin/app";

const firebaseAdminConfig = {
  credential: cert({
    projectId: "nextcafedealtura",
    clientEmail:
      "firebase-adminsdk-nfi0o@nextcafedealtura.iam.gserviceaccount.com",
    privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY,
  }),
};

export function customInitApp() {
  if (getApps().length <= 0) {
    initializeApp(firebaseAdminConfig);
  }
}
// Leverage admin SDK functions as needed