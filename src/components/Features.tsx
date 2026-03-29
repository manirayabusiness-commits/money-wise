const features = [
  {
    id: "budgeting-basics",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M2 10H22" stroke="currentColor" strokeWidth="2"/>
        <circle cx="6" cy="15" r="1" fill="currentColor"/>
      </svg>
    ),
    color: "#4f8ef7",
    tag: "Foundation",
    title: "Budgeting Basics",
    description:
      "Learn the 50/30/20 rule, build monthly spending plans, and track every dollar automatically with our guided budgeting system.",
  },
  {
    id: "investment-101",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M3 17L8 12L12 16L17 9L21 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M17 9H21V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    color: "#2dd4a0",
    tag: "Growth",
    title: "Investment 101",
    description:
      "From stocks and ETFs to index funds and bonds — master the fundamentals of growing your wealth with compound interest on your side.",
  },
  {
    id: "debt-management",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    color: "#f6b93b",
    tag: "Freedom",
    title: "Debt Management",
    description:
      "Tackle debt with proven strategies: debt snowball, avalanche method, and consolidation plans tailored to your unique financial situation.",
  },
  {
    id: "emergency-fund",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L13.09 8.26L19 7L15.45 11.73L21 14L15.45 16.27L19 21L13.09 15.74L12 22L10.91 15.74L5 21L8.55 16.27L3 14L8.55 11.73L5 7L10.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    ),
    color: "#e55c5c",
    tag: "Safety Net",
    title: "Emergency Fund",
    description:
      "Build a 3–6 month safety net with step-by-step savings targets, automatic round-ups, and progress tracking to keep you on track.",
  },
  {
    id: "retirement-planning",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    ),
    color: "#9b8ef7",
    tag: "Long-term",
    title: "Retirement Planning",
    description:
      "Understand 401(k), IRA, and Roth accounts. Calculate how much you need and create a roadmap to retire comfortably on your own terms.",
  },
  {
    id: "credit-mastery",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: "#5ce8f7",
    tag: "Score Boost",
    title: "Credit Mastery",
    description:
      "Decode your credit score, dispute errors, optimize utilization ratios, and build a credit history that opens doors to better rates.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-32 overflow-hidden">
      <div className="orb w-[500px] h-[500px] bg-[rgba(79,142,247,0.06)] top-0 right-[-100px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(79,142,247,0.25)] bg-[rgba(79,142,247,0.07)] text-sm font-medium text-[--accent-light] mb-5">
            Everything You Need
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            Your Complete{" "}
            <span className="gradient-text">Financial Toolkit</span>
          </h2>
          <p className="text-[--muted] text-lg max-w-2xl mx-auto">
            Six expertly crafted modules that cover every aspect of personal finance — from first paycheck to financial independence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              id={`feature-${feature.id}`}
              className="feature-card glass-card p-7 flex flex-col gap-5 cursor-pointer group"
            >
              <div className="flex items-start justify-between">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `${feature.color}18`,
                    border: `1px solid ${feature.color}35`,
                    color: feature.color,
                  }}
                >
                  {feature.icon}
                </div>
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full tracking-wide uppercase"
                  style={{ background: `${feature.color}15`, color: feature.color }}
                >
                  {feature.tag}
                </span>
              </div>

              <div>
                <h3
                  className="text-xl font-bold text-white mb-2"
                  style={{ fontFamily: "var(--font-plus-jakarta)" }}
                >
                  {feature.title}
                </h3>
                <p className="text-[--muted] text-sm leading-relaxed">{feature.description}</p>
              </div>

              <div
                className="mt-auto flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 group-hover:gap-3"
                style={{ color: feature.color }}
              >
                Explore Module
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
