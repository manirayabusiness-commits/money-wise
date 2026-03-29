const steps = [
  {
    number: "01",
    title: "Assess Your Finances",
    description:
      "Answer a quick financial health check — income, expenses, debts, and goals. We build your personalized baseline in under 3 minutes.",
    color: "#4f8ef7",
  },
  {
    number: "02",
    title: "Follow Your Learning Path",
    description:
      "Receive a curated curriculum tailored to your goals. Interactive lessons, quizzes, and real-world scenarios keep you engaged.",
    color: "#2dd4a0",
  },
  {
    number: "03",
    title: "Apply With Real Tools",
    description:
      "Use our budgeting planner, savings calculator, and debt tracker to put every lesson into immediate practice.",
    color: "#9b8ef7",
  },
  {
    number: "04",
    title: "Track Your Progress",
    description:
      "Watch your net worth grow with live dashboards, milestone badges, and monthly financial health scores.",
    color: "#f6b93b",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-32 overflow-hidden">
      <div className="orb w-[400px] h-[400px] bg-[rgba(45,212,160,0.07)] bottom-0 left-[-100px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(45,212,160,0.25)] bg-[rgba(45,212,160,0.07)] text-sm font-medium text-[--success] mb-5">
            Simple Process
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            From Zero to{" "}
            <span className="gradient-text">Financially Free</span>
          </h2>
          <p className="text-[--muted] text-lg max-w-xl mx-auto">
            A clear, four-step journey that transforms confusion into confidence — no finance degree required.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[rgba(79,142,247,0.25)] to-transparent z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center lg:items-start lg:text-left gap-5">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-extrabold flex-shrink-0"
                  style={{
                    background: `${step.color}18`,
                    border: `1px solid ${step.color}40`,
                    color: step.color,
                    fontFamily: "var(--font-plus-jakarta)",
                    boxShadow: `0 0 20px ${step.color}25`,
                  }}
                >
                  {step.number}
                </div>

                <div>
                  <h3
                    className="text-xl font-bold text-white mb-2"
                    style={{ fontFamily: "var(--font-plus-jakarta)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[--muted] text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 glass-card p-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3
              className="text-2xl md:text-3xl font-extrabold text-white mb-2"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Ready to rewrite your financial story?
            </h3>
            <p className="text-[--muted]">Join 50,000+ people who changed their financial lives with Money Wise Foundation.</p>
          </div>
          <a
            href="#"
            id="how-it-works-cta"
            className="btn-primary text-white font-semibold text-base px-8 py-4 rounded-2xl flex-shrink-0 whitespace-nowrap"
          >
            Start for Free Today →
          </a>
        </div>
      </div>
    </section>
  );
}
