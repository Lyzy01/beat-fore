// ============================================================
// BEATFORGE - Firebase Configuration
// ============================================================
// Replace the values below with your Firebase project config.
// Get them from: console.firebase.google.com
// → Project Settings → Your apps → </> Web app
//
// If not configured, the app runs in Guest/Demo mode (no cloud save).
// ============================================================

const firebaseConfig = {
  apiKey: "AIzaSyDYgH2UiJmhXx57yB4gK1sY0YvZepivuRI",
  authDomain: "dj-forge-studio.firebaseapp.com",
  projectId: "dj-forge-studio",
  storageBucket: "dj-forge-studio.firebasestorage.app",
  messagingSenderId: "259829427736",
  appId: "1:259829427736:web:fd9cef0f1c4feb3e2e9d6d"
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
