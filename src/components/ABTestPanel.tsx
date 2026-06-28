import { FlaskConical } from 'lucide-react';
import { CopyButton } from './CopyButton';

type ABTestPanelProps = {
  tests: string[];
};

export function ABTestPanel({ tests }: ABTestPanelProps) {
  const copyText = tests.join('\n');

  return (
    <section className="glass-card p-5">
      <div className="mb-5 flex items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-white">A/B Test 实验建议</h2>
          <p className="mt-1 text-sm text-slate-400">用低成本实验快速识别平台、价格、内容和素材胜率。</p>
        </div>
        <CopyButton text={copyText} />
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        {tests.map((test, index) => (
          <div key={test} className="flex gap-3 rounded-lg border border-white/10 bg-slate-950/35 p-4">
            <div className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-fuchsia-300/15 text-fuchsia-100">
              <FlaskConical className="h-4 w-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-cyan-100">Experiment {String(index + 1).padStart(2, '0')}</div>
              <p className="mt-1 text-sm leading-6 text-slate-200">{test}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
