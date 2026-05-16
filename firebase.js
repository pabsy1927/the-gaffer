import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, remove } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCBSfQ4N9DMfSS5UHSRAHhd2kTWaCYeIzQ",
  authDomain: "the-gaffer-7ba1f.firebaseapp.com",
  projectId: "the-gaffer-7ba1f",
  storageBucket: "the-gaffer-7ba1f.firebasestorage.app",
  messagingSenderId: "64406560723",
  appId: "1:64406560723:web:b1c0b56cdebc1419d75926",
  databaseURL: "https://the-gaffer-7ba1f-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);
const db  = getDatabase(app);

// Private data (your gaffer app data)
export async function dbGet(key, fallback) {
  try {
    const snap = await get(ref(db, "private/" + key));
    return snap.exists() ? snap.val() : fallback;
  } catch { return fallback; }
}
export async function dbSet(key, val) {
  try { await set(ref(db, "private/" + key), val); } catch {}
}

// Shared data (poll data visible to all players)
export async function dbGetShared(key, fallback) {
  try {
    const snap = await get(ref(db, "shared/" + key));
    return snap.exists() ? snap.val() : fallback;
  } catch { return fallback; }
}
export async function dbSetShared(key, val) {
  try { await set(ref(db, "shared/" + key), val); } catch {}
}
export async function dbDelShared(key) {
  try { await remove(ref(db, "shared/" + key)); } catch {}
}
