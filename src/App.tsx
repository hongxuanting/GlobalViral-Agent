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
import { ArrowLeft, ArrowRight, Bell, ChevronLeft, Globe2, Search } from 'lucide-react';

const resultPages = [
  { id: 'score', label: 'Viral Score', value: '86', color: 'from-cyan-300 to-sky-500' },
  { id: 'matrix', label: 'Platforms', value: '9', color: 'from-emerald-300 to-teal-500' },
  { id: 'strategy', label: 'Playbooks', value: '6', color: 'from-fuchsia-300 to-rose-500' },
  { id: 'launch', label: 'Launch Path', value: '3', color: 'from-amber-200 to-orange-500' },
  { id: 'tests', label: 'A/B Tests', value: '7', color: 'from-violet-300 to-indigo-500' },
] as const;

type ResultPageId = (typeof resultPages)[number]['id'];

function App() {
  const [product, setProduct] = useState<ProductForm>(defaultProduct);
  const [loading, setLoading] = useState(false);
  const [generated, setGenerated] = useState(false);
  const [workspaceOpen, setWorkspaceOpen] = useState(false);
  const [activeResultPage, setActiveResultPage] = useState<ResultPageId>('score');
  const [workspaceStep, setWorkspaceStep] = useState<'input' | 'results'>('input');

  const updateProduct = (field: keyof ProductForm, value: string) => {
    setProduct((current) => ({ ...current, [field]: value }));
  };

  const generateReport = () => {
    setLoading(true);
    setGenerated(false);

    window.setTimeout(() => {
      setLoading(false);
      setGenerated(true);
      setActiveResultPage('score');
      setWorkspaceStep('results');
    }, 1500);
  };

  const activePageIndex = resultPages.findIndex((page) => page.id === activeResultPage);
  const goToPreviousPage = () => {
    setActiveResultPage(resultPages[Math.max(activePageIndex - 1, 0)].id);
  };
  const goToNextPage = () => {
    setActiveResultPage(resultPages[Math.min(activePageIndex + 1, resultPages.length - 1)].id);
  };

  const renderResultPage = () => {
    if (activeResultPage === 'score') {
      return <GlobalScore report={mockReport} />;
    }
    if (activeResultPage === 'matrix') {
      return <PlatformMatrix platforms={mockReport.platforms} />;
    }
    if (activeResultPage === 'strategy') {
      return <PlatformStrategy strategies={mockReport.strategies} />;
    }
    if (activeResultPage === 'launch') {
      return <LaunchPath phases={mockReport.launchPath} blockedPlatform={mockReport.blockedPlatform} />;
    }
    return <ABTestPanel tests={mockReport.abTests} />;
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#eef3f2] text-slate-100">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(147,213,220,0.65),transparent_28%),radial-gradient(circle_at_80%_8%,rgba(255,255,255,0.95),transparent_30%),linear-gradient(135deg,#f8faf9_0%,#edf5f4_45%,#dbe9e9_100%)]" />
      <div className="fixed inset-x-0 top-0 -z-10 h-72 bg-gradient-to-b from-white/80 to-transparent" />

      {!workspaceOpen ? (
        <Hero tags={platformTags} onEnterWorkspace={() => setWorkspaceOpen(true)} />
      ) : (
        <main className="min-h-screen overflow-hidden px-4 py-5 sm:px-6 lg:px-8">
          <section className="mx-auto h-[calc(100vh-40px)] max-w-[1380px] overflow-hidden rounded-[38px] border border-slate-900/10 bg-[#07080d] text-white shadow-[0_34px_90px_rgba(8,12,20,0.34)]">
            <div className="flex h-full flex-col">
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

              <div className="relative min-h-0 flex-1 overflow-hidden bg-[#0c0f18] p-5 sm:p-6 lg:p-7">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:62px_62px] opacity-45" />
                <div className="absolute left-10 top-14 h-52 w-52 rounded-full bg-cyan-300/10 blur-3xl" />
                <div className="absolute right-20 top-16 h-60 w-60 rounded-full bg-fuchsia-300/10 blur-3xl" />

                {workspaceStep === 'input' ? (
                  <section className="relative z-10 grid h-full min-h-0 gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
                    <div className="hidden h-full min-h-[520px] overflow-hidden rounded-[34px] border border-white/10 bg-gradient-to-br from-[#11131d] via-[#15111c] to-[#24142b] p-7 shadow-2xl lg:block">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-200">Product Setup</p>
                      <h2 className="mt-4 text-5xl font-semibold leading-tight text-white">
                        Build your
                        <br />
                        viral launch
                      </h2>
                      <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
                        Fill in the product signal once. The AI cockpit will generate one focused report page at a time.
                      </p>
                      <div className="mt-12 grid grid-cols-2 gap-4">
                        {resultPages.slice(0, 4).map((page) => (
                          <div key={page.id} className={`rounded-[26px] bg-gradient-to-br ${page.color} p-5 shadow-xl`}>
                            <p className="text-lg font-bold text-white">{page.label}</p>
                            <p className="mt-8 text-3xl font-bold text-white">{page.value}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="h-full min-h-0 overflow-y-auto rounded-[34px] border border-white/10 bg-white/[0.04] p-4 sm:p-6">
                      <ProductInput
                        product={product}
                        loading={loading}
                        onChange={updateProduct}
                        onGenerate={generateReport}
                      />
                      {loading ? (
                        <div className="mt-4 rounded-[26px] border border-cyan-300/20 bg-cyan-300/10 p-5 text-sm leading-6 text-cyan-50">
                          AI 正在分析商品卖点、平台用户行为、内容传播性与跨境转化路径...
                        </div>
                      ) : null}
                    </div>
                  </section>
                ) : null}

                {workspaceStep === 'results' && generated ? (
                  <section className="relative z-10 flex h-full min-h-0 flex-col gap-5">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-200">
                          {activePageIndex + 1} / {resultPages.length} - Free Access
                        </p>
                        <h2 className="mt-2 text-3xl font-semibold text-white lg:text-5xl">Growth Play Console</h2>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => {
                            setWorkspaceStep('input');
                            setGenerated(false);
                            setActiveResultPage('score');
                          }}
                          className="inline-flex h-11 items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 text-sm font-semibold text-white transition hover:bg-white/12"
                        >
                          <ArrowLeft className="h-4 w-4" />
                          返回输入
                        </button>
                        <button
                          type="button"
                          onClick={goToPreviousPage}
                          disabled={activePageIndex === 0}
                          className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/8 text-white transition hover:bg-white/12 disabled:opacity-35"
                          aria-label="上一页"
                        >
                          <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                          type="button"
                          onClick={goToNextPage}
                          disabled={activePageIndex === resultPages.length - 1}
                          className="inline-flex h-11 items-center gap-2 rounded-full bg-white px-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-50 disabled:opacity-35"
                        >
                          下一页
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>

                    <div className="flex gap-3 overflow-x-auto pb-2">
                      {resultPages.map((page, index) => (
                        <button
                          key={page.id}
                          type="button"
                          onClick={() => setActiveResultPage(page.id)}
                          className={`min-w-[138px] rounded-[22px] border p-4 text-left shadow-2xl transition hover:-translate-y-1 ${
                            activeResultPage === page.id
                              ? `border-white/55 bg-gradient-to-br ${page.color}`
                              : 'border-white/10 bg-white/8'
                          }`}
                        >
                          <p className="text-base font-bold text-white">{page.label}</p>
                          <p className="mt-1 text-xs text-white/75">Page {index + 1}</p>
                          <p className="mt-5 text-3xl font-bold text-white">{page.value}</p>
                        </button>
                      ))}
                    </div>

                    <div className="min-h-0 flex-1 overflow-y-auto rounded-[30px]">
                      {renderResultPage()}
                    </div>
                  </section>
                ) : null}
              </div>
            </div>
          </section>
        </main>
      )}
    </div>
  );
}

export default App;
