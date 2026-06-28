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

const clamp = (value: number, min = 62, max = 96) => Math.min(max, Math.max(min, value));

const hasAny = (text: string, words: string[]) => words.some((word) => text.toLowerCase().includes(word.toLowerCase()));

const pickPrimaryMarket = (markets: string) => markets.split(/[\/,，、]/)[0]?.trim() || '核心目标市场';

export function createGrowthReport(product: ProductForm): ReportData {
  const name = product.name.trim() || '该商品';
  const category = product.category.trim() || '跨境商品';
  const markets = product.markets.trim() || '全球市场';
  const priceRange = product.priceRange.trim() || '待测试价格带';
  const audience = product.audience.trim() || '目标用户';
  const sellingPoints = product.sellingPoints.trim() || '核心卖点';
  const supplyChain = product.supplyChain.trim() || '供应链优势';
  const adGoal = product.adGoal.trim() || '测品 + 转化';

  const signalText = `${name} ${category} ${audience} ${sellingPoints} ${supplyChain}`;
  const isWearable = hasAny(signalText, ['穿戴', '手环', '配件', '饰品', '球星', '运动']);
  const isBeauty = hasAny(signalText, ['好看', '颜值', '设计', '时尚', '潮流', '明星', '球星']);
  const isPortable = hasAny(signalText, ['便携', '轻', '小', '随身', '跨境运输', '配件']);
  const isContentFriendly = hasAny(signalText, ['好看', '对比', '发光', '明星', '球星', '运动', '穿搭', '礼物']);
  const isLowPrice = hasAny(priceRange, ['19', '29', '低价', '$']);
  const isRepeatable = hasAny(signalText, ['配件', '饰品', '耗材', '套装', '颜色', '款式']);

  const visualScore = clamp(78 + (isBeauty ? 10 : 0) + (isContentFriendly ? 4 : 0));
  const searchScore = clamp(74 + (isWearable ? 8 : 0) + (markets.includes('美国') ? 3 : 0));
  const priceScore = clamp(72 + (isLowPrice ? 8 : 0));
  const contentScore = clamp(76 + (isContentFriendly ? 12 : 0) + (isWearable ? 4 : 0));
  const logisticsScore = clamp(72 + (isPortable ? 12 : 0));
  const repeatScore = clamp(64 + (isRepeatable ? 12 : 0));
  const diffScore = clamp(70 + (isBeauty ? 6 : 0) + (isWearable ? 4 : 0));
  const totalScore = Math.round(
    (visualScore + searchScore + priceScore + contentScore + logisticsScore + repeatScore + diffScore) / 7,
  );

  const recommendedPlatforms = isWearable
    ? ['TikTok Shop', 'Instagram Reels', 'Shopee', 'YouTube Shorts']
    : ['TikTok Shop', 'Shopee', 'Lazada', 'Instagram Reels', 'YouTube Shorts'];

  const primaryMarket = pickPrimaryMarket(markets);

  return {
    totalScore,
    dimensions: [
      { label: '视觉展示性', value: visualScore },
      { label: '搜索需求强度', value: searchScore },
      { label: '价格竞争力', value: priceScore },
      { label: '内容传播性', value: contentScore },
      { label: '物流友好度', value: logisticsScore },
      { label: '复购潜力', value: repeatScore },
      { label: '差异化程度', value: diffScore },
    ],
    recommendation: `${name} 属于 ${category}，适合先用短视频和达人内容验证“${sellingPoints}”的传播效率，再用 Amazon、Shopee 等电商平台承接搜索与转化。`,
    platforms: [
      {
        name: 'TikTok Shop',
        score: clamp(contentScore + 2),
        reason: `${name} 的“${sellingPoints}”适合做开箱、上身/使用展示、场景对比和冲动购买内容，适合先测短视频转化。`,
        risk: `内容容易同质化，需要围绕 ${audience} 做不同 Hook、达人类型和场景脚本。`,
        priority: 'S',
        recommended: recommendedPlatforms.includes('TikTok Shop'),
      },
      {
        name: 'Amazon',
        score: clamp(searchScore - 4),
        reason: `${category} 在 ${primaryMarket} 可通过关键词搜索承接需求，适合用清晰 Listing 解释材质、规格、适用人群和礼品属性。`,
        risk: `需要避免标题和图片泛化，Review 关键词要围绕 ${name} 的真实使用体验积累。`,
        priority: searchScore >= 82 ? 'A' : 'B',
      },
      {
        name: 'Shopee',
        score: clamp(priceScore + logisticsScore / 10),
        reason: `${markets} 对轻小件、低决策成本商品更友好，${name} 可通过活动价、套装和直播间优惠提升转化。`,
        risk: `价格敏感，需要测算包邮、平台佣金和赠品后的利润空间。`,
        priority: 'S',
        recommended: recommendedPlatforms.includes('Shopee'),
      },
      {
        name: 'Lazada',
        score: clamp(priceScore + 3),
        reason: `${name} 适合参与平台活动、直播讲解和店铺优惠组合，先用 ${adGoal} 获取首批数据。`,
        risk: `活动依赖度高，库存、发货时效和售后话术要提前准备。`,
        priority: 'A',
      },
      {
        name: 'Temu',
        score: clamp(priceScore + logisticsScore / 12),
        reason: `${supplyChain} 让 ${name} 有机会进入低价爆款池，适合测试基础款和多件组合。`,
        risk: `容易陷入低价竞争，不建议作为第一波主要利润渠道。`,
        priority: 'B',
      },
      {
        name: 'AliExpress',
        score: clamp(searchScore - 6),
        reason: `${name} 可用多语言主图覆盖长尾跨境需求，并通过颜色、款式或套装组合提升点击。`,
        risk: `跨境配送周期会影响评价，需要提前管理用户预期。`,
        priority: 'B',
      },
      {
        name: 'Instagram Reels',
        score: clamp(visualScore + 1),
        reason: `${name} 的视觉和生活方式属性适合做穿搭、礼物、运动或粉丝文化内容，利于种草。`,
        risk: `闭环转化弱于 TikTok Shop，需要用独立站或平台店铺承接点击。`,
        priority: 'A',
        recommended: recommendedPlatforms.includes('Instagram Reels'),
      },
      {
        name: 'YouTube Shorts',
        score: clamp(contentScore - 1),
        reason: `${name} 适合做“为什么值得买”“适合谁”“真实场景测试”等问题解决型短视频。`,
        risk: `冷启动需要更强标题和前 3 秒画面，否则完播率不稳定。`,
        priority: 'A',
        recommended: recommendedPlatforms.includes('YouTube Shorts'),
      },
      {
        name: 'Shopify 独立站',
        score: clamp(diffScore - 4),
        reason: `${name} 可在验证爆点后沉淀品牌资产，用套装、会员和邮件召回做复购。`,
        risk: `冷启动获客成本高，不建议在素材验证前重投独立站广告。`,
        priority: 'B',
      },
    ],
    strategies: [
      {
        title: 'TikTok Shop',
        icon: Clapperboard,
        accent: 'from-fuchsia-400 to-cyan-300',
        items: [
          { label: '内容方向', value: `UGC 测评 + 场景展示，突出 ${name} 的 ${sellingPoints}。` },
          { label: '前 3 秒 Hook', value: `“I found a ${category} that ${audience} will actually want to wear/use every day.”` },
          { label: '30 秒短视频结构', value: `痛点开场 3s → 展示 ${name} 细节 7s → 真实场景 10s → 价格/优惠 5s → CTA 5s。` },
          { label: '英文达人口播', value: `“This ${category} is lightweight, giftable, and made for ${primaryMarket} shoppers.”` },
          { label: 'CTA', value: `“Tap to get the launch deal for ${name} before the first batch sells out.”` },
        ],
      },
      {
        title: 'Amazon',
        icon: Search,
        accent: 'from-amber-300 to-emerald-300',
        items: [
          { label: 'Listing 标题', value: `${name}, ${category} for ${audience}, ${sellingPoints}, Giftable Cross-border Item.` },
          { label: '五点描述 Bullet Points', value: `${sellingPoints}；适合 ${audience}；面向 ${markets}；${supplyChain}；适合 ${adGoal}。` },
          { label: '主图建议', value: `白底展示 ${name} 正面、细节和尺寸；副图展示佩戴/使用场景、材质、包装和礼物属性。` },
          { label: 'Review 关键词', value: `good looking, lightweight, giftable, comfortable, value for money, ${category}.` },
          { label: '搜索关键词建议', value: `${name}, ${category}, sports accessory, fan gift, wearable accessory, gift for fans.` },
        ],
      },
      {
        title: 'Shopee / Lazada',
        icon: Megaphone,
        accent: 'from-cyan-300 to-green-300',
        items: [
          { label: '促销文案', value: `${name} 首发优惠，适合 ${audience}，限时组合价 ${priceRange}。` },
          { label: '直播话术', value: `现场展示 ${name} 的细节、佩戴/使用效果、包装和赠品，引导用户评论想要的款式。` },
          { label: '价格策略', value: `用 ${priceRange} 做基础款测试，再用多件套、颜色套装或赠品提升客单。` },
          { label: '店铺活动建议', value: `参加闪购、包邮券、直播专属券，并设置粉丝专享套装。` },
        ],
      },
      {
        title: 'Temu / AliExpress',
        icon: BadgeDollarSign,
        accent: 'from-lime-300 to-cyan-300',
        items: [
          { label: '低价爆款打法', value: `以 ${name} 基础款做引流，用多款式、多颜色和组合装提升毛利。` },
          { label: '主图卖点', value: `直接突出 ${sellingPoints}、适合 ${audience}、轻小件跨境友好和礼物属性。` },
          { label: '风险提醒', value: `先验证履约成本、退款率和价格底线，避免只靠低价放量。` },
        ],
      },
      {
        title: 'Instagram Reels / YouTube Shorts',
        icon: Globe2,
        accent: 'from-violet-300 to-sky-300',
        items: [
          { label: '内容风格', value: `${name} 可走生活方式、运动粉丝、穿搭配件、礼物推荐和开箱测评。` },
          { label: '拍摄场景', value: `办公室、校园、运动场、球迷聚会、通勤和礼物开箱。` },
          { label: '视频结构', value: `问题字幕开场 → 细节特写 → 上身/使用展示 → 人群匹配 → 引导搜索或进店。` },
        ],
      },
      {
        title: 'Shopify 独立站',
        icon: Mail,
        accent: 'from-emerald-300 to-fuchsia-300',
        items: [
          { label: '落地页首屏文案', value: `${name}: made for ${audience}, designed for global fans.` },
          { label: '品牌故事角度', value: `围绕 ${category} 的情绪价值、身份表达和日常使用场景建立品牌记忆。` },
          { label: '邮件召回文案', value: `Your ${name} launch deal is still waiting. Pick your style before it sells out.` },
        ],
      },
    ],
    launchPath: [
      {
        phase: '第一阶段',
        platforms: 'TikTok Shop + Instagram Reels',
        goal: `验证 ${name} 的视觉吸引力、前 3 秒 Hook 和达人素材点击率。`,
      },
      {
        phase: '第二阶段',
        platforms: 'Amazon + Shopee',
        goal: `承接 ${category} 搜索需求和平台转化，测试 ${priceRange} 的真实成交效率。`,
      },
      {
        phase: '第三阶段',
        platforms: 'Shopify 独立站',
        goal: `沉淀 ${audience} 用户资产，做套装、复购和邮件召回。`,
      },
    ],
    blockedPlatform: {
      platform: 'Temu',
      reason: `${name} 如果过早进入低价池，容易牺牲设计感和利润空间，建议等内容素材验证后再评估。`,
    },
    abTests: [
      `测试不同平台：TikTok Shop、Instagram Reels、Shopee、Amazon 对 ${name} 的转化效率。`,
      `测试不同价格带：围绕 ${priceRange} 做首发价、套装价和限时券。`,
      `测试不同视频 Hook：${audience} 场景、${sellingPoints} 卖点、礼物推荐、粉丝文化。`,
      `测试不同主图：白底图、佩戴/使用场景图、细节材质图、包装礼盒图。`,
      `测试不同 Listing 标题：人群优先、场景优先、卖点优先、礼物属性优先。`,
      `测试不同 CTA：领取首发券、查看同款、加入购物车、限时组合优惠。`,
      `测试达人出镜 vs 纯产品展示，比较完播率、点击率和加购率。`,
    ],
  };
}

export const mockReport = createGrowthReport(defaultProduct);
