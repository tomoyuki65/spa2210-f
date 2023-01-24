/* FirebaseAuthの状態管理用フック */

import { useState, useEffect } from "react"
import {
  User,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth"
import { useRouter } from "next/router"
import { auth } from "../initFirebase"
import { toast } from "react-toastify"

// useFirebaseAuth関数
export default function useFirebaseAuth() {
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // ログイン成功アラート表示関数
  async function loginSuccess() {
    toast.success("Successfully logged in !");
    await new Promise(resolve => setTimeout(resolve, 1));
  }

  // ログイン関数の作成
  const loginWithEmailAndPassword = async (email: string, password: string) => {
    
    // ログイン処理を実行
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      
      if (result) {
        const user = result.user;
        await loginSuccess();
        router.push("/");
        return user;
      }
    } catch (e) {
      toast.error("ログインできませんでした。");
    } 
  }

  // ログアウト関数の作成
  const clear = () => {
    setCurrentUser(null);
    setLoading(false);
  };

  const logout = () => signOut(auth).then(clear);

  // onAuthStateChanged関数における、
  // ユーザーの状態管理用パラメータの設定
  const nextOrObserver = async (user: User | null) => {
    if (!user) {
      setLoading(false);
      return;
    }

    setLoading(true);
    setCurrentUser(user);
    setLoading(false);
  };

  // useEffectの設定
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, nextOrObserver);
    return unsubscribe;
  }, []);

  // useFirebaseAuth関数の戻り値
  return {
    currentUser,
    loading,
    loginWithEmailAndPassword,
    logout,
  };
}