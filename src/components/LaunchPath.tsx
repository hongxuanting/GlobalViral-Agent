import { AlertTriangle, ArrowRight, Rocket } from 'lucide-react';
import type { LaunchPhase, ReportData } from '../types';
import { CopyButton } from './CopyButton';

type LaunchPathProps = {
  phases: LaunchPhase[];
  blockedPlatform: ReportData['blockedPlatform'];
};

export function LaunchPath({ phases, blockedPlatform }: LaunchPathProps) {
  const copyText = [
    ...phases.map((phase) => `${phase.phase}：${phase.platforms}\n目标：${phase.goal}`),
    `不建议优先平台：${blockedPlatform.platform}\n原因：${blockedPlatform.reason}`,
  ].join('\n\n');

  return (
    <section className="glass-card p-5">
      <div className="mb-5 flex items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-white">出海首发路径</h2>
          <p className="mt-1 text-sm text-slate-400">先验证传播，再承接转化，最后沉淀品牌资产。</p>
        </div>
        <CopyButton text={copyText} />
      </div>

      <div className="grid gap-3 lg:grid-cols-3">
        {phases.map((phase, index) => (
          <article key={phase.phase} className="relative rounded-lg border border-white/10 bg-slate-950/35 p-4">
            <div className="mb-3 flex items-center justify-between">
              <div className="grid h-9 w-9 place-items-center rounded-md bg-emerald-300/15 text-emerald-200">
                <Rocket className="h-5 w-5" />
              </div>
              {index < phases.length - 1 ? (
                <ArrowRight className="hidden h-5 w-5 text-cyan-200 lg:block" />
              ) : null}
            </div>
            <div className="text-xs font-semibold text-cyan-100">{phase.phase}</div>
            <h3 className="mt-1 text-base font-semibold text-white">{phase.platforms}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">目标：{phase.goal}</p>
          </article>
        ))}
      </div>

      <div className="mt-4 flex gap-3 rounded-lg border border-rose-300/20 bg-rose-300/10 p-4 text-sm leading-6 text-rose-50">
        <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0" />
        <div>
          <span className="font-semibold">不建议优先平台：{blockedPlatform.platform}</span>
          <p className="mt-1">{blockedPlatform.reason}</p>
        </div>
      </div>
    </section>
  );
}
