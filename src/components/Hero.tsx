import Link from "next/link";

export function Hero() {
  return (
    <section className="px-8 pb-28 pt-36">
      <div className="mx-auto max-w-[1100px]">
        <h1 className="mb-7 max-w-[18ch] text-[clamp(2.5rem,5.5vw,4rem)] font-medium leading-[1.1] tracking-[-0.025em] text-[var(--color-text-primary)]">
          Quantitative on-chain analysis, open by design.
        </h1>
        <p className="mb-10 max-w-[55ch] text-lg leading-[1.6] text-[var(--color-text-secondary)]">
          Open methodology you can verify.
        </p>
        <div className="flex flex-wrap gap-3.5">
          <Link
            href="/#research"
            className="inline-flex items-center justify-center rounded-md bg-[var(--color-accent)] px-6 py-3 text-[0.9375rem] font-medium text-[var(--color-bg-base)] transition-colors hover:bg-[var(--color-accent-hover)]"
          >
            See the research
          </Link>
        </div>
      </div>
    </section>
  );
}
