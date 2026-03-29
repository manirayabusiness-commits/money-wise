export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-mesh pt-20">
      {/* Background Orbs */}
      <div className="orb w-[600px] h-[600px] bg-[rgba(79,142,247,0.18)] top-[-150px] left-[-200px]" />
      <div className="orb w-[500px] h-[500px] bg-[rgba(45,212,160,0.1)] top-[-100px] right-[-150px]" />
      <div className="orb w-[400px] h-[400px] bg-[rgba(79,142,247,0.08)] bottom-[0px] left-[30%]" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(79,142,247,1) 1px, transparent 1px), linear-gradient(90deg, rgba(79,142,247,1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 text-center py-24">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(79,142,247,0.3)] bg-[rgba(79,142,247,0.08)] text-sm font-medium text-[--accent-light] mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-[--success] animate-pulse" />
          Trusted by 50,000+ learners worldwide
        </div>

        {/* Headline */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight mb-6 animate-fade-in-up-delay-1"
          style={{ fontFamily: "var(--font-plus-jakarta)" }}
        >
          Money Wise Foundation
          <br />
          <span className="gradient-text">Your Financial Future.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-[--muted] max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-in-up-delay-2">
          Money Wise Foundation turns complex money concepts into simple, actionable steps.
          Budget smarter, invest confidently, and eliminate debt — all in one place.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 animate-fade-in-up-delay-3">
          <a
            href="#features"
            id="hero-cta-primary"
            className="btn-primary text-white font-semibold text-base px-8 py-4 rounded-2xl w-full sm:w-auto"
          >
            Start Learning Free →
          </a>
          <a
            href="#calculator"
            id="hero-cta-secondary"
            className="btn-ghost text-white font-semibold text-base px-8 py-4 rounded-2xl w-full sm:w-auto"
          >
            Try Savings Calculator
          </a>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto animate-fade-in-up-delay-4">
          {[
            { value: "50K+", label: "Active Learners" },
            { value: "94%", label: "Improved Savings" },
            { value: "12+", label: "Finance Modules" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <div
                className="text-3xl md:text-4xl font-extrabold gradient-text mb-1"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-[--muted] font-medium tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Floating dashboard preview */}
        <div className="mt-20 relative animate-float">
          <div className="glass-card max-w-3xl mx-auto p-6 relative overflow-hidden">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-3 h-3 rounded-full bg-[#e55c5c]" />
              <div className="w-3 h-3 rounded-full bg-[#f6b93b]" />
              <div className="w-3 h-3 rounded-full bg-[#2dd4a0]" />
              <div className="flex-1 h-0.5 bg-[rgba(79,142,247,0.1)] rounded ml-4" />
            </div>
            <div className="flex items-end justify-between gap-2 h-28 px-2">
              {[40, 65, 50, 80, 60, 90, 75, 95, 70, 88, 62, 100].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-md"
                  style={{
                    height: `${h}%`,
                    background:
                      i === 11
                        ? "linear-gradient(180deg, #4f8ef7, #2dd4a0)"
                        : `rgba(79,142,247,${0.2 + i * 0.02})`,
                    boxShadow: i === 11 ? "0 0 12px rgba(79,142,247,0.5)" : "none",
                  }}
                />
              ))}
            </div>
            <div className="flex items-center justify-between mt-4">
              <span className="text-xs text-[--muted]">Jan — Dec 2024</span>
              <span className="text-sm font-semibold text-[--success]">↑ +32% savings growth</span>
            </div>
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-8 bg-[rgba(79,142,247,0.25)] blur-3xl rounded-full" />
        </div>
      </div>
    </section>
  );
}
