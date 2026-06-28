import {
  Bell,
  Check,
  CircleDollarSign,
  Globe2,
  Package,
  Search,
  ShoppingBag,
  Sparkles,
  TrendingUp,
} from 'lucide-react';

type HeroProps = {
  tags: string[];
};

const launchCards = [
  { name: 'TikTok', value: '92', color: 'from-cyan-300 to-sky-400', tilt: '-rotate-6' },
  { name: 'Shopee', value: '88', color: 'from-emerald-300 to-teal-400', tilt: '-rotate-2' },
  { name: 'Reels', value: '86', color: 'from-fuchsia-300 to-rose-400', tilt: 'rotate-2' },
  { name: 'Amazon', value: '78', color: 'from-amber-200 to-orange-400', tilt: 'rotate-6' },
];

export function Hero({ tags }: HeroProps) {
  return (
    <header className="px-4 pt-5 sm:px-6 lg:px-8">
      <section className="relative mx-auto max-w-[1380px] overflow-hidden rounded-[38px] border border-slate-900/10 bg-[#07080d] px-5 py-6 text-white shadow-[0_34px_90px_rgba(8,12,20,0.34)] sm:px-8 lg:px-10 lg:py-8">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:58px_58px] opacity-35" />
        <div className="absolute left-[8%] top-[16%] h-48 w-48 rounded-full bg-cyan-300/15 blur-3xl" />
        <div className="absolute right-[7%] top-[8%] h-56 w-56 rounded-full bg-emerald-300/12 blur-3xl" />

        <nav className="relative z-10 flex flex-wrap items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-4">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white text-slate-950">
              <Globe2 className="h-5 w-5" />
            </div>
            <span className="font-semibold">GlobalViral Agent</span>
            <span className="hidden text-slate-500 sm:inline">/</span>
            <span className="hidden text-slate-300 sm:inline">Mobile Showcase</span>
          </div>

          <div className="hidden h-11 min-w-[260px] items-center gap-3 rounded-full bg-white/8 px-4 text-slate-400 backdrop-blur md:flex">
            <Search className="h-4 w-4" />
            <span>Search markets, platforms, creators...</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-white/8">
              <Bell className="h-4 w-4" />
            </div>
            <div className="flex h-10 items-center gap-2 rounded-full bg-white/8 px-3">
              <CircleDollarSign className="h-4 w-4 text-amber-300" />
              <span className="font-semibold">1,290</span>
            </div>
          </div>
        </nav>

        <div className="relative z-10 grid gap-10 pt-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:pt-14">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-200/20 bg-amber-200/10 px-3 py-1 text-xs font-semibold text-amber-100">
              <Sparkles className="h-4 w-4" />
              AI Pilot Console
            </div>
            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.04] tracking-normal text-white sm:text-6xl lg:text-7xl">
              GlobalViral Agent
            </h1>
            <p className="mt-5 text-xl font-semibold text-cyan-100 sm:text-2xl">
              跨境电商全平台爆款增长助手
            </p>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              AI Growth Agent for Global E-commerce Sellers
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/8 px-3 py-1.5 text-xs font-medium text-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="relative min-h-[470px] lg:min-h-[540px]">
            <div className="absolute left-0 top-3 hidden h-[420px] w-[230px] rotate-[-5deg] overflow-hidden rounded-[34px] border border-white/40 bg-gradient-to-b from-[#91d6df] via-[#b8dce1] to-white p-5 shadow-[0_28px_70px_rgba(4,18,26,0.42)] sm:block">
              <div className="flex items-center justify-between text-xs font-semibold text-white">
                <span>9:41</span>
                <span>•••</span>
              </div>
              <div className="mt-14 text-4xl font-semibold leading-tight text-white">
                More
                <br />
                markets
                <br />
                More sales
              </div>
              <div className="absolute right-7 top-24 h-28 w-24 rounded-xl border border-sky-300/50 bg-sky-300/30 shadow-inner" />
              <div className="absolute left-10 top-32 h-3 w-20 rounded-full bg-white/70" />
              <div className="absolute bottom-20 left-6 right-6 flex items-center justify-between rounded-full bg-white px-3 py-3 shadow-xl">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-[#003f4c] text-xs font-bold text-white">
                  GO
                </span>
                <span className="text-xl text-slate-300">&gt;&gt;&gt;</span>
              </div>
            </div>

            <div className="absolute right-0 top-0 w-full max-w-[390px] overflow-hidden rounded-[34px] border border-white/45 bg-gradient-to-b from-[#f8fbfb] via-[#eaf6f7] to-[#9eced5] p-5 text-slate-950 shadow-[0_28px_80px_rgba(5,18,28,0.35)] sm:right-8">
              <div className="flex items-center justify-between text-xs font-bold">
                <span>9:41</span>
                <span>•••</span>
              </div>
              <div className="mt-10 flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-white shadow-md">
                  <Package className="h-5 w-5 text-[#003f4c]" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500">Good Morning</p>
                  <h2 className="text-xl font-semibold">Growth Seller</h2>
                </div>
              </div>

              <div className="mt-10 rounded-2xl bg-white p-4 shadow-xl">
                <div className="flex items-center gap-3 text-sm text-slate-500">
                  <Search className="h-5 w-5 text-slate-950" />
                  Enter product signal
                </div>
              </div>

              <div className="mt-7">
                <p className="text-sm font-bold text-white">Menu</p>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-white p-4 shadow-lg">
                    <ShoppingBag className="h-5 w-5 text-[#003f4c]" />
                    <p className="mt-8 text-sm font-bold">Launch plan</p>
                    <p className="mt-1 text-xs text-slate-400">Deliver growth</p>
                  </div>
                  <div className="grid gap-4">
                    <div className="rounded-2xl bg-white p-4 shadow-lg">
                      <TrendingUp className="h-5 w-5 text-emerald-500" />
                      <p className="mt-2 text-sm font-bold">Data statistics</p>
                    </div>
                    <div className="rounded-2xl bg-white p-4 shadow-lg">
                      <Globe2 className="h-5 w-5 text-cyan-500" />
                      <p className="mt-2 text-sm font-bold">Cargo tracking</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-around rounded-[28px] bg-white/95 px-5 py-5 shadow-xl">
                <Package className="h-5 w-5 text-[#003f4c]" />
                <Check className="h-5 w-5 text-slate-300" />
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 mx-auto hidden max-w-[520px] items-end justify-center gap-0 sm:flex">
              <span className="sr-only">Launch Cards</span>
              {launchCards.map((card) => (
                <div
                  key={card.name}
                  className={`-mx-4 h-36 w-32 rounded-[24px] bg-gradient-to-br ${card.color} ${card.tilt} border border-white/35 p-4 shadow-2xl`}
                >
                  <p className="text-lg font-bold text-white">{card.name}</p>
                  <p className="mt-1 text-xs text-white/80">Match score</p>
                  <p className="mt-8 text-2xl font-bold text-white">{card.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}
