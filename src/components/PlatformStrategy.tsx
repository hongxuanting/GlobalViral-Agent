import type { StrategySection } from '../types';
import { CopyButton } from './CopyButton';

type PlatformStrategyProps = {
  strategies: StrategySection[];
};

export function PlatformStrategy({ strategies }: PlatformStrategyProps) {
  const copyText = strategies
    .map(
      (strategy) =>
        `${strategy.title}\n${strategy.items
          .map((item) => `${item.label}：${item.value}`)
          .join('\n')}`,
    )
    .join('\n\n');

  return (
    <section className="glass-card p-5">
      <div className="mb-5 flex items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-white">各平台增长打法详情</h2>
          <p className="mt-1 text-sm text-slate-400">从内容、Listing、价格和落地页承接拆解打法。</p>
        </div>
        <CopyButton text={copyText} />
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        {strategies.map((strategy) => {
          const Icon = strategy.icon;

          return (
            <article key={strategy.title} className="rounded-lg border border-white/10 bg-slate-950/35 p-4">
              <div className="mb-4 flex items-center gap-3">
                <div className={`grid h-10 w-10 place-items-center rounded-md bg-gradient-to-br ${strategy.accent} text-slate-950`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-white">{strategy.title}</h3>
              </div>

              <div className="grid gap-3">
                {strategy.items.map((item) => (
                  <div key={item.label} className="rounded-md border border-white/8 bg-white/[0.04] p-3">
                    <div className="text-xs font-semibold text-cyan-100">{item.label}</div>
                    <p className="mt-1 text-sm leading-6 text-slate-200">{item.value}</p>
                  </div>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
