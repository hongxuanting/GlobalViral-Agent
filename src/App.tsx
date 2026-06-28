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

      <main className="mx-auto grid max-w-[1380px] gap-5 px-4 py-6 sm:px-6 lg:grid-cols-[380px_1fr] lg:px-8">
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
            <section className="glass-card grid min-h-[280px] place-items-center p-8 text-center">
              <div>
                <div className="mx-auto mb-5 h-16 w-16 animate-pulse rounded-full border border-cyan-300/40 bg-cyan-300/10 shadow-glow" />
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
            <section className="glass-card grid min-h-[280px] place-items-center p-8 text-center">
              <div>
                <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-full border border-emerald-300/25 bg-emerald-300/10 text-2xl text-emerald-200">
                  86
                </div>
                <h2 className="text-xl font-semibold text-white">等待生成全球增长方案</h2>
                <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400">
                  当前示例商品已填好。点击左侧按钮后，将生成评分、平台矩阵、内容打法、首发路径和实验建议。
                </p>
              </div>
            </section>
          ) : null}
        </div>
      </main>
    </div>
  );
}

export default App;
