"use client";

import { onAuthStateChanged, signInAnonymously, type User } from "firebase/auth";
import { auth } from "./firebase";

/**
 * Sign in without email/password.
 * Anonymous users receive a Firebase UID that can identify their session.
 */
export async function signInGuest() {
  if (!auth) {
    throw new Error("Firebase belum dikonfigurasi. Periksa environment variables.");
  }

  const credential = await signInAnonymously(auth);
  return credential.user;
}

/** Subscribe to the current Firebase authentication state. */
export function observeAuth(callback: (user: User | null) => void) {
  if (!auth) {
    callback(null);
    return () => undefined;
  }

  return onAuthStateChanged(auth, callback);
}
