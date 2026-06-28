import { ShieldAlert, Star } from 'lucide-react';
import type { PlatformFit } from '../types';
import { CopyButton } from './CopyButton';

type PlatformMatrixProps = {
  platforms: PlatformFit[];
};

export function PlatformMatrix({ platforms }: PlatformMatrixProps) {
  const copyText = platforms
    .map(
      (platform) =>
        `${platform.name}：${platform.score}\n适合原因：${platform.reason}\n风险提醒：${platform.risk}\n推荐优先级：${platform.priority}`,
    )
    .join('\n\n');

  return (
    <section className="glass-card p-5">
      <div className="mb-5 flex items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-white">平台匹配矩阵</h2>
          <p className="mt-1 text-sm text-slate-400">推荐平台已高亮，按匹配度和启动价值排序。</p>
        </div>
        <CopyButton text={copyText} />
      </div>

      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {platforms.map((platform) => (
          <article
            key={platform.name}
            className={`rounded-lg border p-4 transition ${
              platform.recommended
                ? 'border-cyan-300/45 bg-cyan-300/10 shadow-glow'
                : 'border-white/10 bg-slate-950/35'
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-semibold text-white">{platform.name}</h3>
                  {platform.recommended ? <Star className="h-4 w-4 fill-cyan-200 text-cyan-200" /> : null}
                </div>
                <p className="mt-1 text-xs text-slate-400">推荐优先级 {platform.priority}</p>
              </div>
              <div className="rounded-md bg-white/10 px-2.5 py-1 text-lg font-semibold text-cyan-100">
                {platform.score}
              </div>
            </div>

            <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/8">
              <div
                className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-emerald-300"
                style={{ width: `${platform.score}%` }}
              />
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-200">{platform.reason}</p>
            <div className="mt-3 flex gap-2 rounded-md border border-amber-300/15 bg-amber-300/8 p-3 text-xs leading-5 text-amber-100">
              <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{platform.risk}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
