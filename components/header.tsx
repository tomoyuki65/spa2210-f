import { memo } from "react"
import Link from 'next/link'
import { useAuthContext } from "../context/AuthContext"

const Header = memo( function HeaderMemo() {
  // ログイン状況を取得
  const { currentUser, logout } = useAuthContext();

  return (
    <header>
      <nav className="flex items-center justify-between flex-wrap bg-slate-800 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-2xl tracking-tight">
            <Link href="/"><a>SPA2210 APP</a></Link>
          </span>
        </div>
        <div className="flex items-center flex-shrink-0 text-slate-400">
          <span className="text-base tracking-tight mr-5">
            <Link href="/"><a>Home</a></Link>
          </span>
          <span className="text-base tracking-tight mr-5">
            <Link href="/about"><a>About</a></Link>
          </span>
          <span className="text-base tracking-tight">
            {!currentUser && <Link href="/login"><a>Log in</a></Link>}
            {currentUser && <button onClick={logout}>Log out</button>}
          </span>
        </div>
      </nav>
    </header>
  );
});

export default Header;
