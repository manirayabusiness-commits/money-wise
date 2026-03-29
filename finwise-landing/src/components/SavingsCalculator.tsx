"use client";

import { useState, useEffect, useCallback } from "react";

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

function calcCompoundGrowth(
  principal: number,
  monthly: number,
  rate: number,
  years: number
): number {
  const r = rate / 100 / 12;
  const n = years * 12;
  if (r === 0) return principal + monthly * n;
  const futureValuePrincipal = principal * Math.pow(1 + r, n);
  const futureValueMonthly = monthly * ((Math.pow(1 + r, n) - 1) / r);
  return futureValuePrincipal + futureValueMonthly;
}

export default function SavingsCalculator() {
  const [principal, setPrincipal] = useState(5000);
  const [monthly, setMonthly] = useState(500);
  const [rate, setRate] = useState(7);
  const [years, setYears] = useState(10);
  const [result, setResult] = useState(0);
  const [totalContributed, setTotalContributed] = useState(0);
  const [interestEarned, setInterestEarned] = useState(0);
  const [chartData, setChartData] = useState<number[]>([]);

  const calculate = useCallback(() => {
    const future = calcCompoundGrowth(principal, monthly, rate, years);
    const contributed = principal + monthly * 12 * years;
    const interest = future - contributed;
    setResult(Math.round(future));
    setTotalContributed(Math.round(contributed));
    setInterestEarned(Math.round(interest));

    // Build chart data year by year
    const data = Array.from({ length: years + 1 }, (_, i) =>
      Math.round(calcCompoundGrowth(principal, monthly, rate, i))
    );
    setChartData(data);
  }, [principal, monthly, rate, years]);

  useEffect(() => {
    calculate();
  }, [calculate]);

  const maxChart = Math.max(...chartData, 1);

  const inputClass =
    "w-full bg-[rgba(79,142,247,0.07)] border border-[rgba(79,142,247,0.2)] rounded-xl px-4 py-3 text-white font-semibold text-lg outline-none focus:border-[--accent] focus:bg-[rgba(79,142,247,0.12)] transition-all duration-200 placeholder:text-[--muted]";

  return (
    <section id="calculator" className="relative py-32 overflow-hidden">
      <div className="orb w-[450px] h-[450px] bg-[rgba(79,142,247,0.08)] top-0 left-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(79,142,247,0.25)] bg-[rgba(79,142,247,0.07)] text-sm font-medium text-[--accent-light] mb-5">
            Interactive Tool
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            Savings <span className="gradient-text">Calculator</span>
          </h2>
          <p className="text-[--muted] text-lg max-w-xl mx-auto">
            See the real power of compound interest. Adjust the sliders and watch your future wealth grow in real time.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="glass-card p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Inputs */}
          <div className="flex flex-col gap-8">
            {/* Initial Deposit */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-[--muted] uppercase tracking-wide">
                  Initial Deposit
                </label>
                <span className="text-lg font-bold text-white">{formatCurrency(principal)}</span>
              </div>
              <input
                type="range"
                id="principal-slider"
                min={0}
                max={100000}
                step={500}
                value={principal}
                onChange={(e) => setPrincipal(Number(e.target.value))}
                aria-label="Initial deposit amount"
              />
              <div className="flex justify-between text-xs text-[--muted]">
                <span>$0</span><span>$100K</span>
              </div>
            </div>

            {/* Monthly Contribution */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-[--muted] uppercase tracking-wide">
                  Monthly Contribution
                </label>
                <span className="text-lg font-bold text-white">{formatCurrency(monthly)}</span>
              </div>
              <input
                type="range"
                id="monthly-slider"
                min={0}
                max={5000}
                step={50}
                value={monthly}
                onChange={(e) => setMonthly(Number(e.target.value))}
                aria-label="Monthly contribution amount"
              />
              <div className="flex justify-between text-xs text-[--muted]">
                <span>$0</span><span>$5K/mo</span>
              </div>
            </div>

            {/* Annual Return Rate */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-[--muted] uppercase tracking-wide">
                  Annual Return Rate
                </label>
                <span className="text-lg font-bold text-white">{rate}%</span>
              </div>
              <input
                type="range"
                id="rate-slider"
                min={1}
                max={20}
                step={0.5}
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                aria-label="Annual return rate percentage"
              />
              <div className="flex justify-between text-xs text-[--muted]">
                <span>1%</span><span>20%</span>
              </div>
            </div>

            {/* Time Horizon */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-[--muted] uppercase tracking-wide">
                  Time Horizon
                </label>
                <span className="text-lg font-bold text-white">{years} yrs</span>
              </div>
              <input
                type="range"
                id="years-slider"
                min={1}
                max={40}
                step={1}
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                aria-label="Time horizon in years"
              />
              <div className="flex justify-between text-xs text-[--muted]">
                <span>1 yr</span><span>40 yrs</span>
              </div>
            </div>

            {/* Manual Inputs Row */}
            <div className="grid grid-cols-2 gap-4 pt-2 border-t border-[rgba(79,142,247,0.1)]">
              <div>
                <label className="text-xs text-[--muted] font-medium mb-1.5 block">Initial ($)</label>
                <input
                  id="principal-input"
                  type="number"
                  value={principal}
                  min={0}
                  onChange={(e) => setPrincipal(Math.max(0, Number(e.target.value)))}
                  className={inputClass}
                />
              </div>
              <div>
                <label className="text-xs text-[--muted] font-medium mb-1.5 block">Monthly ($)</label>
                <input
                  id="monthly-input"
                  type="number"
                  value={monthly}
                  min={0}
                  onChange={(e) => setMonthly(Math.max(0, Number(e.target.value)))}
                  className={inputClass}
                />
              </div>
            </div>
          </div>

          {/* Right: Results */}
          <div className="flex flex-col gap-8">
            {/* Big result */}
            <div className="text-center lg:text-left">
              <p className="text-sm font-semibold text-[--muted] uppercase tracking-widest mb-2">
                Projected Balance after {years} years
              </p>
              <div
                className="text-5xl md:text-6xl font-extrabold gradient-text mb-4 transition-all duration-300"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                {formatCurrency(result)}
              </div>
              {/* Break down */}
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card p-4" style={{ background: "rgba(79,142,247,0.08)", border: "1px solid rgba(79,142,247,0.2)" }}>
                  <p className="text-xs text-[--muted] font-medium mb-1">Total Contributed</p>
                  <p className="text-xl font-bold text-white">{formatCurrency(totalContributed)}</p>
                </div>
                <div className="glass-card p-4" style={{ background: "rgba(45,212,160,0.08)", border: "1px solid rgba(45,212,160,0.2)" }}>
                  <p className="text-xs text-[--muted] font-medium mb-1">Interest Earned</p>
                  <p className="text-xl font-bold text-[--success]">{formatCurrency(interestEarned)}</p>
                </div>
              </div>
            </div>

            {/* Mini bar chart */}
            <div>
              <p className="text-sm font-semibold text-[--muted] uppercase tracking-widest mb-4">
                Year-by-Year Growth
              </p>
              <div className="flex items-end gap-1 h-36">
                {chartData.map((val, i) => {
                  const heightPct = (val / maxChart) * 100;
                  const isLast = i === chartData.length - 1;
                  return (
                    <div
                      key={i}
                      title={`Year ${i}: ${formatCurrency(val)}`}
                      className="flex-1 rounded-t-sm transition-all duration-500 cursor-pointer relative group"
                      style={{
                        height: `${heightPct}%`,
                        background: isLast
                          ? "linear-gradient(180deg, #4f8ef7, #2dd4a0)"
                          : `rgba(79,142,247,${0.15 + (i / chartData.length) * 0.35})`,
                        boxShadow: isLast ? "0 0 8px rgba(79,142,247,0.5)" : "none",
                      }}
                    >
                      {/* Tooltip */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 text-[10px] font-bold text-white bg-[rgba(6,13,31,0.9)] px-1.5 py-0.5 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                        Yr {i}
                        <br />
                        {formatCurrency(val)}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-between text-xs text-[--muted] mt-2">
                <span>Year 0</span>
                <span>Year {years}</span>
              </div>
            </div>

            {/* Percentage split bar */}
            <div>
              <p className="text-sm font-semibold text-[--muted] uppercase tracking-widest mb-3">
                Contribution vs. Returns
              </p>
              <div className="h-3 rounded-full overflow-hidden flex">
                <div
                  className="h-full transition-all duration-500"
                  style={{
                    width: `${result > 0 ? (totalContributed / result) * 100 : 100}%`,
                    background: "rgba(79,142,247,0.6)",
                  }}
                />
                <div
                  className="h-full flex-1"
                  style={{ background: "linear-gradient(90deg, #2dd4a0, #4f8ef7)" }}
                />
              </div>
              <div className="flex justify-between text-xs text-[--muted] mt-2">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-sm bg-[rgba(79,142,247,0.6)] inline-block" />
                  Contributions
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-sm bg-[--success] inline-block" />
                  Returns
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-[--muted] mt-6 opacity-60">
          * Results are illustrative estimates assuming consistent monthly contributions and a fixed annual return. Past performance does not guarantee future results.
        </p>
      </div>
    </section>
  );
}
