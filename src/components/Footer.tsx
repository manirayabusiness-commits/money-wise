const footerLinks = {
  Learn: [
    { label: "Budgeting Basics", href: "#features" },
    { label: "Investment 101", href: "#features" },
    { label: "Debt Management", href: "#features" },
    { label: "Retirement Planning", href: "#features" },
    { label: "Credit Mastery", href: "#features" },
  ],
  Tools: [
    { label: "Savings Calculator", href: "#calculator" },
    { label: "Debt Payoff Planner", href: "#" },
    { label: "Budget Builder", href: "#" },
    { label: "Net Worth Tracker", href: "#" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-[rgba(79,142,247,0.1)] pt-20 pb-10 overflow-hidden">
      <div className="orb w-[350px] h-[350px] bg-[rgba(79,142,247,0.05)] bottom-0 right-[-50px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-2 flex flex-col gap-5">
            <a href="#" className="flex items-center gap-2.5 group w-fit">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#4f8ef7] to-[#2dd4a0] flex items-center justify-center shadow-[0_0_12px_rgba(79,142,247,0.4)]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M2 17L7 12L11 16L17 9L22 14" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18 9H22V13" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-base font-bold text-white tracking-tight" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                Money Wise <span className="gradient-text">Foundation</span>
              </span>
            </a>

            <p className="text-[--muted] text-sm leading-relaxed max-w-xs">
              Your trusted partner in financial education. Build the skills, habits, and mindset to achieve lasting financial freedom.
            </p>

            <div className="flex items-center gap-3 mt-2">
              {[
                { label: "Twitter", path: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" },
                { label: "LinkedIn", path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z" },
                { label: "YouTube", path: "M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z M10 15l5-3-5-3v6z" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center border border-[rgba(79,142,247,0.2)] text-[--muted] hover:text-[--accent] hover:border-[rgba(79,142,247,0.5)] hover:bg-[rgba(79,142,247,0.08)] transition-all duration-200"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="flex flex-col gap-4">
              <h4 className="text-sm font-bold text-white tracking-widest uppercase" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                {title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-[--muted] hover:text-white transition-colors duration-200">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Row */}
        <div
          className="glass-card p-8 flex flex-col sm:flex-row items-center gap-6 mb-16"
          style={{ background: "rgba(79,142,247,0.06)", border: "1px solid rgba(79,142,247,0.15)" }}
        >
          <div className="flex-1">
            <h4 className="text-lg font-bold text-white mb-1" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
              Stay in the know
            </h4>
            <p className="text-sm text-[--muted]">Weekly tips on saving, investing, and building wealth — straight to your inbox.</p>
          </div>
          <div className="flex gap-3 w-full sm:w-auto">
            <input
              id="newsletter-email"
              type="email"
              placeholder="your@email.com"
              className="flex-1 sm:w-64 bg-[rgba(79,142,247,0.08)] border border-[rgba(79,142,247,0.2)] rounded-xl px-4 py-3 text-sm text-white placeholder:text-[--muted] outline-none focus:border-[--accent] transition-all duration-200"
            />
            <button id="newsletter-submit" className="btn-primary text-white text-sm font-semibold px-6 py-3 rounded-xl whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[rgba(79,142,247,0.08)]">
          <p className="text-xs text-[--muted] opacity-70">
            © {new Date().getFullYear()} Money Wise Foundation. All rights reserved. For educational purposes only. Not financial advice.
          </p>
          <div className="flex items-center gap-1 text-xs text-[--muted] opacity-60">
            <span>Made with</span>
            <span className="text-[--danger]">♥</span>
            <span>for your financial freedom</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
