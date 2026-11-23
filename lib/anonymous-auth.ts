import { signInAnonymously, signOut, type User } from "firebase/auth";
import { auth } from "./firebase";

/**
 * Creates or resumes an anonymous Firebase session.
 * This identifies a Firebase session, not a verified employee.
 * Do not grant admin privileges or trust employee identity based on this UID alone.
 */
export async function startAnonymousSession(): Promise<User> {
  if (!auth) {
    throw new Error("Firebase belum dikonfigurasi. Periksa variabel NEXT_PUBLIC_FIREBASE_*.");
  }

  const credential = await signInAnonymously(auth);
  return credential.user;
}

export async function endAnonymousSession(): Promise<void> {
  if (!auth) return;
  await signOut(auth);
}
