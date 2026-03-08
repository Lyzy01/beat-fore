// ============================================================
// BEATFORGE - Firebase Configuration
// ============================================================
// Replace the values below with your Firebase project config.
// Get them from: console.firebase.google.com
// → Project Settings → Your apps → </> Web app
//
// If not configured, the app runs in Guest/Demo mode (no cloud save).
// ============================================================

const FIREBASE_CONFIG = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// ── Safe init — won't crash if config is placeholder ──────────
let db = null;
let auth = null;
let FIREBASE_READY = false;

(function initFirebase() {
  const isConfigured = FIREBASE_CONFIG.apiKey && FIREBASE_CONFIG.apiKey !== "YOUR_API_KEY";
  if (!isConfigured) {
    console.info('BeatForge: Firebase not configured — running in Guest mode.');
    return;
  }
  try {
    firebase.initializeApp(FIREBASE_CONFIG);
    db   = firebase.firestore();
    auth = firebase.auth();
    FIREBASE_READY = true;
    console.info('BeatForge: Firebase initialized ✓');
  } catch(e) {
    console.warn('BeatForge: Firebase init failed —', e.message);
  }
})();
