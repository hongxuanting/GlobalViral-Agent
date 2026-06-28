import { Check, Copy } from 'lucide-react';
import { useState } from 'react';

type CopyButtonProps = {
  text: string;
  label?: string;
};

export function CopyButton({ text, label = '复制' }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard?.writeText(text);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  };

  const Icon = copied ? Check : Copy;

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex h-9 items-center gap-2 rounded-md border border-white/10 bg-white/8 px-3 text-xs font-medium text-slate-100 transition hover:border-cyan-300/60 hover:bg-cyan-300/10 focus:outline-none focus:ring-2 focus:ring-cyan-300/50"
      aria-label={copied ? '已复制' : label}
      title={copied ? '已复制' : label}
    >
      <Icon className="h-4 w-4" />
      <span>{copied ? '已复制' : label}</span>
    </button>
  );
}
