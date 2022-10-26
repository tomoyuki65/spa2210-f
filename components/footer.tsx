import { memo } from "react"

const Footer = memo( function FooterMemo() {
  return (
    <footer>
      <nav className="flex items-center justify-center flex-wrap p-6 mt-3">
        <div className="flex border-t-2">
          <div className="flex items-center text-slate-400">
            <span className="text-sm">
              SPA App with Next.js by <a
                href="https://github.com/tomoyuki65/spa2210-f"
                target="_blank"
                rel="noopener noreferrer">
                  Tomoyuki</a>
            </span>
          </div>
          <div className="flex items-center text-slate-400 ml-[45em]">
            {/* <span className="text-sm tracking-tight">
              <a href="#">Home</a>
            </span> */}
          </div>
        </div>
      </nav>
    </footer>
  )
});

export default Footer;
