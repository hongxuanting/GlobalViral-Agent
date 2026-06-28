import type { LucideIcon } from 'lucide-react';

export type ProductForm = {
  name: string;
  category: string;
  markets: string;
  priceRange: string;
  audience: string;
  sellingPoints: string;
  supplyChain: string;
  adGoal: string;
};

export type ScoreDimension = {
  label: string;
  value: number;
};

export type PlatformFit = {
  name: string;
  score: number;
  reason: string;
  risk: string;
  priority: 'S' | 'A' | 'B';
  recommended?: boolean;
};

export type StrategySection = {
  title: string;
  icon: LucideIcon;
  accent: string;
  items: {
    label: string;
    value: string;
  }[];
};

export type LaunchPhase = {
  phase: string;
  platforms: string;
  goal: string;
};

export type ReportData = {
  totalScore: number;
  dimensions: ScoreDimension[];
  recommendation: string;
  platforms: PlatformFit[];
  strategies: StrategySection[];
  launchPath: LaunchPhase[];
  blockedPlatform: {
    platform: string;
    reason: string;
  };
  abTests: string[];
};
