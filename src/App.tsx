import { useState } from 'react';
import { ABTestPanel } from './components/ABTestPanel';
import { GlobalScore } from './components/GlobalScore';
import { Hero } from './components/Hero';
import { LaunchPath } from './components/LaunchPath';
import { PlatformMatrix } from './components/PlatformMatrix';
import { PlatformStrategy } from './components/PlatformStrategy';
import { ProductInput } from './components/ProductInput';
import { defaultProduct, mockReport, platformTags } from './data/mockReport';
import type { ProductForm } from './types';

function App() {
  const [product, setProduct] = useState<ProductForm>(defaultProduct);
  const [loading, setLoading] = useState(false);
  const [generated, setGenerated] = useState(false);

  const updateProduct = (field: keyof ProductForm, value: string) => {
    setProduct((current) => ({ ...current, [field]: value }));
  };

  const generateReport = () => {
    setLoading(true);
    setGenerated(false);

    window.setTimeout(() => {
      setLoading(false);
      setGenerated(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#eef3f2] text-slate-100">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(147,213,220,0.65),transparent_28%),radial-gradient(circle_at_80%_8%,rgba(255,255,255,0.95),transparent_30%),linear-gradient(135deg,#f8faf9_0%,#edf5f4_45%,#dbe9e9_100%)]" />
      <div className="fixed inset-x-0 top-0 -z-10 h-72 bg-gradient-to-b from-white/80 to-transparent" />

      <Hero tags={platformTags} />

      <main id="growth-workspace" className="mx-auto max-w-[1380px] scroll-mt-6 px-4 py-8 sm:px-6 lg:px-8">
        <section className="relative overflow-hidden rounded-[38px] border border-slate-900/10 bg-[#222838] p-4 shadow-[0_30px_80px_rgba(35,50,65,0.24)] sm:p-6 lg:p-7">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(145,214,223,0.18),transparent_28%),radial-gradient(circle_at_85%_0%,rgba(64,217,181,0.16),transparent_24%)]" />

          <div className="relative z-10 mb-5 flex flex-col justify-between gap-4 px-1 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">Growth Workspace</p>
              <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">AI 出海增长工作台</h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                从首页点击入口或继续向下滑动进入，在这里输入商品信息并生成完整爆款增长方案。
              </p>
            </div>
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm font-semibold text-cyan-100">
              点击 / 滑动进入
            </div>
          </div>

          <div className="relative z-10 grid gap-5 lg:grid-cols-[380px_1fr]">
            <aside className="lg:sticky lg:top-6 lg:self-start">
              <ProductInput
                product={product}
                loading={loading}
                onChange={updateProduct}
                onGenerate={generateReport}
              />
            </aside>

            <div className="grid gap-5">
              {loading ? (
                <section className="glass-card grid min-h-[520px] place-items-center p-8 text-center">
                  <div>
                    <div className="mx-auto mb-5 h-20 w-20 animate-pulse rounded-full border border-cyan-300/40 bg-cyan-300/10 shadow-glow" />
                    <p className="mx-auto max-w-xl text-base leading-7 text-cyan-50">
                      AI 正在分析商品卖点、平台用户行为、内容传播性与跨境转化路径...
                    </p>
                  </div>
                </section>
              ) : null}

              {generated ? (
                <>
                  <GlobalScore report={mockReport} />
                  <PlatformMatrix platforms={mockReport.platforms} />
                  <PlatformStrategy strategies={mockReport.strategies} />
                  <LaunchPath phases={mockReport.launchPath} blockedPlatform={mockReport.blockedPlatform} />
                  <ABTestPanel tests={mockReport.abTests} />
                </>
              ) : null}

              {!loading && !generated ? (
                <section className="glass-card grid min-h-[520px] place-items-center p-8 text-center">
                  <div>
                    <div className="mx-auto mb-6 grid h-20 w-20 place-items-center rounded-full border border-emerald-300/30 bg-emerald-300/10 text-3xl font-semibold text-emerald-200">
                      86
                    </div>
                    <h2 className="text-2xl font-semibold text-white">等待生成全球增长方案</h2>
                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400">
                      当前示例商品已填好。点击左侧按钮后，将生成评分、平台矩阵、内容打法、首发路径和实验建议。
                    </p>
                  </div>
                </section>
              ) : null}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
