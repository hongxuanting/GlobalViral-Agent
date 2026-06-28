import {
  BadgeDollarSign,
  Clapperboard,
  Globe2,
  Mail,
  Megaphone,
  Search,
} from 'lucide-react';
import type { ProductForm, ReportData } from '../types';

export const defaultProduct: ProductForm = {
  name: '便携式迷你榨汁杯',
  category: '厨房小家电',
  markets: '美国 / 东南亚 / 英国',
  priceRange: '$19.99 - $29.99',
  audience: '上班族、学生、健身人群',
  sellingPoints: '便携、无线、易清洗、30秒榨汁',
  supplyChain: '体积小、重量轻、适合跨境运输',
  adGoal: '测品 + 转化',
};

export const platformTags = [
  'Amazon',
  'TikTok Shop',
  'Shopee',
  'Temu',
  'Shopify',
  'YouTube Shorts',
  'Instagram Reels',
];

export const mockReport: ReportData = {
  totalScore: 86,
  dimensions: [
    { label: '视觉展示性', value: 92 },
    { label: '搜索需求强度', value: 84 },
    { label: '价格竞争力', value: 78 },
    { label: '内容传播性', value: 90 },
    { label: '物流友好度', value: 82 },
    { label: '复购潜力', value: 70 },
    { label: '差异化程度', value: 76 },
  ],
  recommendation:
    '该商品适合先通过短视频平台验证内容传播性，再通过电商平台承接搜索和转化。',
  platforms: [
    {
      name: 'TikTok Shop',
      score: 92,
      reason: '便携、30秒出汁和清洗前后对比非常适合短视频演示，冲动购买链路短。',
      risk: '内容素材同质化快，需要持续迭代达人脚本和场景。',
      priority: 'S',
      recommended: true,
    },
    {
      name: 'Amazon',
      score: 78,
      reason: 'Kitchen appliance 搜索需求稳定，可承接短视频种草后的主动搜索。',
      risk: '评论积累和主图质量会显著影响转化，需要避免功能夸大。',
      priority: 'A',
    },
    {
      name: 'Shopee',
      score: 88,
      reason: '东南亚用户对小体积、低客单便携家电接受度高，促销转化弹性强。',
      risk: '价格敏感，活动节奏和包邮门槛需要精细测算。',
      priority: 'S',
      recommended: true,
    },
    {
      name: 'Lazada',
      score: 84,
      reason: '适合与直播、店铺活动和平台补贴组合打爆首批销量。',
      risk: '平台活动依赖度高，库存和履约稳定性要跟上。',
      priority: 'A',
      recommended: true,
    },
    {
      name: 'Temu',
      score: 81,
      reason: '低价爆款机制有机会快速放量，轻小件物流友好。',
      risk: '容易陷入低价竞争，利润空间可能被压缩。',
      priority: 'B',
    },
    {
      name: 'AliExpress',
      score: 76,
      reason: '跨境长尾市场覆盖广，适合用多语言主图和组合优惠获取订单。',
      risk: '配送时效预期差异大，售后沟通成本较高。',
      priority: 'B',
    },
    {
      name: 'Instagram Reels',
      score: 86,
      reason: '健康生活、宿舍和办公场景有视觉吸引力，适合生活方式内容。',
      risk: '闭环转化弱于 TikTok Shop，需要清晰落地页承接。',
      priority: 'A',
      recommended: true,
    },
    {
      name: 'YouTube Shorts',
      score: 85,
      reason: '适合做问题解决型短视频，带动搜索和 Amazon 转化。',
      risk: '冷启动素材需要更强 Hook，否则完播率不稳定。',
      priority: 'A',
      recommended: true,
    },
    {
      name: 'Shopify 独立站',
      score: 72,
      reason: '适合后期沉淀品牌用户、邮件召回和套装复购。',
      risk: '冷启动获客成本高，不建议作为第一波主要渠道。',
      priority: 'B',
    },
  ],
  strategies: [
    {
      title: 'TikTok Shop',
      icon: Clapperboard,
      accent: 'from-fuchsia-400 to-cyan-300',
      items: [
        { label: '内容方向', value: 'UGC 测评 + 前后对比，突出通勤、宿舍、健身后快速补给。' },
        { label: '前 3 秒 Hook', value: '“I made a fresh smoothie at my desk in 30 seconds.”' },
        { label: '30 秒短视频结构', value: '痛点开场 3s → 放入水果 7s → 一键榨汁 8s → 冲洗展示 5s → 价格与下单 7s。' },
        { label: '英文达人口播', value: '“No blender, no kitchen, no mess. This cup does everything on the go.”' },
        { label: 'CTA', value: '“Tap to grab the launch deal before it sells out.”' },
      ],
    },
    {
      title: 'Amazon',
      icon: Search,
      accent: 'from-amber-300 to-emerald-300',
      items: [
        { label: 'Listing 标题', value: 'Portable Mini Blender Cup, USB Rechargeable Personal Juicer for Smoothies, Travel and Gym.' },
        { label: '五点描述 Bullet Points', value: '30秒快速榨汁；无线便携；一冲即净；轻量杯身；适合办公室、宿舍、旅行和健身。' },
        { label: '主图建议', value: '白底展示杯体、切开的水果和容量刻度；副图用使用场景和清洗对比。' },
        { label: 'Review 关键词', value: 'easy to clean, portable, powerful enough, perfect for travel, great for protein shakes.' },
        { label: '搜索关键词建议', value: 'portable blender, mini juicer, personal smoothie blender, USB blender cup, travel blender.' },
      ],
    },
    {
      title: 'Shopee / Lazada',
      icon: Megaphone,
      accent: 'from-cyan-300 to-green-300',
      items: [
        { label: '促销文案', value: '随身鲜榨不排队，限时首发价，买即送清洁刷。' },
        { label: '直播话术', value: '现场放水果、加水、30秒成汁，再直接冲洗给用户看。' },
        { label: '价格策略', value: '用 $19.99 入门价测试转化，套装款拉到 $29.99 提升客单。' },
        { label: '店铺活动建议', value: '参与闪购、包邮券、直播专属券，并设置两件折扣。' },
      ],
    },
    {
      title: 'Temu / AliExpress',
      icon: BadgeDollarSign,
      accent: 'from-lime-300 to-cyan-300',
      items: [
        { label: '低价爆款打法', value: '以轻小件和基础色做引流款，用配件组合提升毛利。' },
        { label: '主图卖点', value: '30s juice、USB rechargeable、portable、easy clean 四个卖点直接上图。' },
        { label: '风险提醒', value: '避免无底线压价，先测履约成本、退款率和平台扣点后的真实利润。' },
      ],
    },
    {
      title: 'Instagram Reels / YouTube Shorts',
      icon: Globe2,
      accent: 'from-violet-300 to-sky-300',
      items: [
        { label: '内容风格', value: '健康生活方式、桌面效率、宿舍好物、健身包必备。' },
        { label: '拍摄场景', value: '办公室工位、校园宿舍、健身房、更衣室、旅行酒店。' },
        { label: '视频结构', value: '痛点字幕开场 → 快速操作 → 成品展示 → 清洗镜头 → 引导搜索或进站。' },
      ],
    },
    {
      title: 'Shopify 独立站',
      icon: Mail,
      accent: 'from-emerald-300 to-fuchsia-300',
      items: [
        { label: '落地页首屏文案', value: 'Fresh smoothies anywhere in 30 seconds.' },
        { label: '品牌故事角度', value: '为忙碌生活设计的小型健康补给工具，让好习惯更容易坚持。' },
        { label: '邮件召回文案', value: 'Your 30-second smoothie routine is waiting. Come back for the launch bundle.' },
      ],
    },
  ],
  launchPath: [
    {
      phase: '第一阶段',
      platforms: 'TikTok Shop + YouTube Shorts',
      goal: '验证内容传播性和用户兴趣。',
    },
    {
      phase: '第二阶段',
      platforms: 'Amazon + Shopee',
      goal: '承接搜索需求和平台转化。',
    },
    {
      phase: '第三阶段',
      platforms: 'Shopify 独立站',
      goal: '沉淀品牌用户和复购资产。',
    },
  ],
  blockedPlatform: {
    platform: 'Temu',
    reason: '容易陷入低价竞争，利润空间可能被压缩。',
  },
  abTests: [
    '测试不同平台：TikTok Shop、YouTube Shorts、Shopee、Amazon 的首发组合。',
    '测试不同价格带：$19.99、$24.99、$29.99 的点击率和转化率。',
    '测试不同视频 Hook：办公室 30 秒鲜榨、健身后蛋白奶昔、宿舍无厨房场景。',
    '测试不同主图：产品白底图、场景图、功能对比图、清洗前后图。',
    '测试不同 Listing 标题：便携属性优先、榨汁速度优先、旅行场景优先。',
    '测试不同 CTA：限时首发价、领取优惠券、加入购物车、查看达人同款。',
    '测试达人出镜 vs 纯产品展示，比较完播率、点击率和加购率。',
  ],
};
