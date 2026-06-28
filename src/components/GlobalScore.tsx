import { TrendingUp } from 'lucide-react';
import type { ReportData } from '../types';
import { CopyButton } from './CopyButton';

type GlobalScoreProps = {
  report: ReportData;
};

export function GlobalScore({ report }: GlobalScoreProps) {
  const copyText = [
    `全球爆款潜力总分：${report.totalScore} / 100`,
    ...report.dimensions.map((dimension) => `${dimension.label}：${dimension.value}`),
    `推荐结论：${report.recommendation}`,
  ].join('\n');

  return (
    <section className="glass-card p-5">
      <div className="mb-5 flex items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-white">全球爆款潜力评分</h2>
          <p className="mt-1 text-sm text-slate-400">综合商品表现、内容传播与跨境转化路径。</p>
        </div>
        <CopyButton text={copyText} />
      </div>

      <div className="grid gap-5 lg:grid-cols-[220px_1fr]">
        <div className="flex flex-col items-center justify-center rounded-lg border border-cyan-300/15 bg-slate-950/45 p-5">
          <div
            className="grid h-40 w-40 place-items-center rounded-full"
            style={{
              background: `conic-gradient(#22d3ee ${report.totalScore * 3.6}deg, rgba(255,255,255,0.08) 0deg)`,
            }}
          >
            <div className="grid h-32 w-32 place-items-center rounded-full bg-slate-950 text-center">
              <div>
                <div className="text-3xl font-semibold text-white">{report.totalScore} / 100</div>
                <div className="mt-1 flex items-center justify-center gap-1 text-xs text-emerald-300">
                  <TrendingUp className="h-4 w-4" />
                  High Potential
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-3">
          {report.dimensions.map((dimension) => (
            <div key={dimension.label}>
              <div className="mb-1.5 flex items-center justify-between text-sm">
                <span className="text-slate-300">{dimension.label}</span>
                <span className="font-semibold text-cyan-100">{dimension.value}</span>
              </div>
              <div className="h-2.5 overflow-hidden rounded-full bg-white/8">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-emerald-300"
                  style={{ width: `${dimension.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 rounded-lg border border-emerald-300/20 bg-emerald-300/10 p-4 text-sm leading-6 text-emerald-50">
        {report.recommendation}
      </div>
    </section>
  );
}
