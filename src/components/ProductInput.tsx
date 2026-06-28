import { Loader2, Sparkles } from 'lucide-react';
import type { ProductForm } from '../types';

type ProductInputProps = {
  product: ProductForm;
  loading: boolean;
  onChange: (field: keyof ProductForm, value: string) => void;
  onGenerate: () => void;
};

const fields: {
  key: keyof ProductForm;
  label: string;
  multiline?: boolean;
}[] = [
  { key: 'name', label: '商品名称' },
  { key: 'category', label: '商品类目' },
  { key: 'markets', label: '目标市场' },
  { key: 'priceRange', label: '价格区间' },
  { key: 'audience', label: '目标用户', multiline: true },
  { key: 'sellingPoints', label: '商品卖点', multiline: true },
  { key: 'supplyChain', label: '供应链优势', multiline: true },
  { key: 'adGoal', label: '广告目标' },
];

export function ProductInput({ product, loading, onChange, onGenerate }: ProductInputProps) {
  return (
    <section className="glass-card rounded-[30px] p-6">
      <div className="mb-6 flex items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-semibold text-white">商品输入区</h2>
          <p className="mt-2 text-sm text-slate-400">输入商品基础信息，生成跨平台增长方案。</p>
        </div>
      </div>

      <div className="grid gap-5">
        {fields.map((field) => (
          <label key={field.key} className="grid gap-2">
            <span className="text-xs font-medium text-slate-300">{field.label}</span>
            {field.multiline ? (
              <textarea
                value={product[field.key]}
                onChange={(event) => onChange(field.key, event.target.value)}
                rows={3}
                className="field min-h-[92px] resize-none"
              />
            ) : (
              <input
                value={product[field.key]}
                onChange={(event) => onChange(field.key, event.target.value)}
                className="field h-11"
              />
            )}
          </label>
        ))}
      </div>

      <button
        type="button"
        onClick={onGenerate}
        disabled={loading}
        className="mt-6 inline-flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400 px-4 text-sm font-semibold text-slate-950 shadow-glow transition hover:-translate-y-0.5 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Sparkles className="h-5 w-5" />}
        {loading ? '生成中...' : '生成全球增长方案'}
      </button>
    </section>
  );
}
