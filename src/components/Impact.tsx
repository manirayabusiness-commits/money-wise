export default function Impact() {
  const impacts = [
    {
      value: "100K+",
      label: "Students Reached",
      description: "Across over 200 underserved communities nationwide.",
      color: "#4f8ef7",
    },
    {
      value: "$5M+",
      label: "Debt Cleared",
      description: "Our programs helped families pay down harmful high-interest debt.",
      color: "#2dd4a0",
    },
    {
      value: "50+",
      label: "Community Partners",
      description: "Working alongside local schools, libraries, and shelters.",
      color: "#f6b93b",
    },
  ];

  return (
    <section id="impact" className="relative py-32 overflow-hidden bg-[rgba(15,25,50,0.3)]">
      <div className="orb w-[500px] h-[500px] bg-[rgba(45,212,160,0.06)] top-0 left-[-100px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(45,212,160,0.25)] bg-[rgba(45,212,160,0.07)] text-sm font-medium text-[--success] mb-5">
            Our Impact
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            Making a <span className="gradient-text">Real Difference</span>
          </h2>
          <p className="text-[--muted] text-lg max-w-2xl mx-auto">
            We believe that financial literacy is a fundamental right. See how your support is directly transforming lives and building generational wealth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {impacts.map((impact, i) => (
            <div key={i} className="glass-card p-8 text-center flex flex-col items-center">
              <div
                className="text-5xl font-extrabold mb-4"
                style={{
                  fontFamily: "var(--font-plus-jakarta)",
                  color: impact.color,
                  textShadow: `0 0 20px ${impact.color}40`,
                }}
              >
                {impact.value}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{impact.label}</h3>
              <p className="text-[--muted] text-sm leading-relaxed">{impact.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
