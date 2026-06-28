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
import { ArrowLeft, Bell, Globe2, Search } from 'lucide-react';

function App() {
  const [product, setProduct] = useState<ProductForm>(defaultProduct);
  const [loading, setLoading] = useState(false);
  const [generated, setGenerated] = useState(false);
  const [workspaceOpen, setWorkspaceOpen] = useState(false);

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

      {!workspaceOpen ? (
        <Hero tags={platformTags} onEnterWorkspace={() => setWorkspaceOpen(true)} />
      ) : (
        <main className="min-h-screen px-4 py-5 sm:px-6 lg:px-8">
          <section className="mx-auto min-h-[calc(100vh-40px)] max-w-[1380px] overflow-hidden rounded-[38px] border border-slate-900/10 bg-[#07080d] text-white shadow-[0_34px_90px_rgba(8,12,20,0.34)]">
            <div className="flex min-h-[calc(100vh-40px)] flex-col">
              <header className="flex flex-wrap items-center justify-between gap-4 border-b border-white/8 px-5 py-4 sm:px-7">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setWorkspaceOpen(false)}
                    className="grid h-10 w-10 place-items-center rounded-2xl bg-white text-slate-950 transition hover:bg-cyan-50"
                    aria-label="返回首页"
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </button>
                  <div>
                    <div className="flex items-center gap-2">
                      <Globe2 className="h-5 w-5 text-cyan-200" />
                      <span className="font-semibold">GlobalViral Agent</span>
                    </div>
                    <p className="mt-1 text-xs text-slate-500">Growth Workspace</p>
                  </div>
                </div>

                <div className="hidden h-11 min-w-[340px] items-center gap-3 rounded-full bg-white/8 px-4 text-sm text-slate-400 md:flex">
                  <Search className="h-4 w-4" />
                  <span>Search product, platform, creator signal...</span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/8 text-slate-200"
                    aria-label="通知"
                  >
                    <Bell className="h-4 w-4" />
                  </button>
                  <div className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950">
                    AI 出海增长工作台
                  </div>
                </div>
              </header>

              <div className="grid flex-1 gap-0 lg:grid-cols-[380px_1fr]">
                <aside className="border-b border-white/8 bg-white/[0.03] p-5 lg:border-b-0 lg:border-r lg:p-6">
                  <ProductInput
                    product={product}
                    loading={loading}
                    onChange={updateProduct}
                    onGenerate={generateReport}
                  />
                </aside>

                <div className="min-w-0 bg-[#222838] p-5 sm:p-6 lg:p-7">
                  {loading ? (
                    <section className="grid min-h-[620px] place-items-center rounded-[30px] border border-white/10 bg-[#2a3040] p-8 text-center">
                      <div>
                        <div className="mx-auto mb-5 h-20 w-20 animate-pulse rounded-full border border-cyan-300/40 bg-cyan-300/10 shadow-glow" />
                        <p className="mx-auto max-w-xl text-base leading-7 text-cyan-50">
                          AI 正在分析商品卖点、平台用户行为、内容传播性与跨境转化路径...
                        </p>
                      </div>
                    </section>
                  ) : null}

                  {generated ? (
                    <div className="grid gap-5">
                      <GlobalScore report={mockReport} />
                      <PlatformMatrix platforms={mockReport.platforms} />
                      <PlatformStrategy strategies={mockReport.strategies} />
                      <LaunchPath phases={mockReport.launchPath} blockedPlatform={mockReport.blockedPlatform} />
                      <ABTestPanel tests={mockReport.abTests} />
                    </div>
                  ) : null}

                  {!loading && !generated ? (
                    <section className="grid min-h-[620px] place-items-center rounded-[30px] border border-white/10 bg-[#2a3040] p-8 text-center">
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
            </div>
          </section>
        </main>
      )}
    </div>
  );
}

export default App;
