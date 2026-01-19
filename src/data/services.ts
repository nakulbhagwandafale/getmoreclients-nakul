import {
    Share2,
    Search,
    MousePointerClick,
    FileText,
    Smartphone,
    BarChart3,
    ShoppingCart,
    Play,
    Palette,
    Zap,
    Globe,
    TrendingUp,
    ShieldCheck,
    Cpu,
    Target
} from 'lucide-react';
import React from 'react';

export interface ServiceStep {
    title: string;
    description: string;
    icon: React.ElementType;
}

export interface ComparisonPoint {
    metric: string;
    traditional: string;
    aiDriven: string;
}

interface HeroMetric {
    label: string;
    value: string;
    icon: React.ElementType;
}

export interface ServiceDetail {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    shortDescription: string;
    icon: React.ElementType;

    // Hero Redesign Props
    impactWord: string;
    heroVisualType: 'dashboard' | 'comparative' | 'abstract';
    gradientMap: { from: string; via: string; to: string; };
    heroMetrics: HeroMetric[];

    // Section 1: Hero
    heroImage: string;

    // Section 2: Performance
    accuracy: number;
    performanceMetric: string;
    performanceLabel: string;

    // Section 3: Workflow
    workflowSteps: ServiceStep[];

    // Section 4: Comparison
    comparison: ComparisonPoint[];

    // Section 5: Trust
    trustMetric: string;
    trustLabel: string;

    // Section 6: Showcase
    showcaseImage: string;
}

export const servicesData: ServiceDetail[] = [
    {
        id: 'social-media',
        title: 'Social Media',
        impactWord: 'Intelligence',
        subtitle: 'AI-Powered Strategy',
        description: 'Successful social media marketing starts with a well-defined strategy enhanced by AI-driven insights.',
        shortDescription: 'AI-powered trend analysis & auto-scheduling.',
        icon: Share2,
        heroVisualType: 'dashboard',
        gradientMap: { from: '#a855f7', via: '#ec4899', to: '#f43f5e' }, // Purple -> Pink -> Rose
        heroMetrics: [
            { label: 'Engagement', value: '+300%', icon: TrendingUp },
            { label: 'Time Saved', value: '20hrs/wk', icon: Zap },
            { label: 'Reach', value: 'global', icon: Globe },
        ],
        heroImage: '/assets/social-hero.png',
        accuracy: 98,
        performanceMetric: '98%',
        performanceLabel: 'Sentiment Analysis Accuracy',
        workflowSteps: [
            { title: 'Trend Detection', description: 'AI scans millions of posts to find rising trends.', icon: Search },
            { title: 'Content Generation', description: 'Auto-generate high-engagement captions and visuals.', icon: FileText },
            { title: 'Smart Scheduling', description: 'Post exactly when your audience is most active.', icon: Smartphone },
            { title: 'Performance Loop', description: 'Real-time learning to optimize future posts.', icon: BarChart3 },
        ],
        comparison: [
            { metric: 'Content Relevance', traditional: 'Based on intuition', aiDriven: 'Data-backed trend matching' },
            { metric: 'Response Time', traditional: 'Hours or Days', aiDriven: 'Instant (24/7)' },
            { metric: 'Audience Targeting', traditional: 'Broad demographics', aiDriven: 'Micro-behavioral segmentation' },
        ],
        trustMetric: '300%',
        trustLabel: 'Increase in Engagement',
        showcaseImage: '/assets/social-showcase.png',
    },
    {
        id: 'seo',
        title: 'SEO',
        impactWord: 'Dominance',
        subtitle: 'AI-Enhanced Optimization',
        description: 'Improve the quality and quantity of organic traffic to your website with AI-powered optimization.',
        shortDescription: 'Predictive keyword modeling & SERP dominance.',
        icon: Search,
        heroVisualType: 'comparative',
        gradientMap: { from: '#3b82f6', via: '#06b6d4', to: '#22d3ee' }, // Blue -> Cyan -> Teal
        heroMetrics: [
            { label: 'Ranking Speed', value: '4x Faster', icon: Zap },
            { label: 'Traffic', value: '+150%', icon: TrendingUp },
            { label: 'Accuracy', value: '99.9%', icon: Target },
        ],
        heroImage: '/assets/seo-hero.png',
        accuracy: 95,
        performanceMetric: '95%',
        performanceLabel: 'Keyword Intent Matching',
        workflowSteps: [
            { title: 'Deep Audit', description: 'AI crawls sitewide for technical health scores.', icon: Search },
            { title: 'Keyword Clustering', description: 'Group semantically related search terms.', icon: FileText },
            { title: 'Content Optimization', description: 'Real-time suggestions for ranking improvements.', icon: Palette },
            { title: 'Backlink Analysis', description: 'Identify high-value authority opportunities.', icon: Share2 },
        ],
        comparison: [
            { metric: 'Keyword Research', traditional: 'Manual lists', aiDriven: 'Predictive intent modeling' },
            { metric: 'Content Updates', traditional: 'Quarterly', aiDriven: 'Real-time based on SERP changes' },
            { metric: 'Link Building', traditional: 'Cold outreach', aiDriven: 'AI-matched relevance scoring' },
        ],
        trustMetric: '4x',
        trustLabel: 'Faster Ranking Improvements',
        showcaseImage: '/assets/seo-showcase.png',
    },
    {
        id: 'ppc',
        title: 'PPC',
        impactWord: 'Precision',
        subtitle: 'Smart Advertising',
        description: 'Pay-per-click marketing with AI-based bidding strategies for maximum ROI and conversions.',
        shortDescription: 'Real-time bidding & algorithmic audience targeting.',
        icon: MousePointerClick,
        heroVisualType: 'dashboard',
        gradientMap: { from: '#f59e0b', via: '#ef4444', to: '#b91c1c' }, // Amber -> Red -> Dark Red
        heroMetrics: [
            { label: 'ROI', value: '+210%', icon: TrendingUp },
            { label: 'Cost', value: '-40%', icon: ShieldCheck }, // ShieldCheck as placeholder for 'secure/verified' savings
            { label: 'Conversions', value: 'Auto', icon: Zap },
        ],
        heroImage: '/assets/ppc-hero.png',
        accuracy: 99,
        performanceMetric: '99%',
        performanceLabel: 'Bid Efficiency',
        workflowSteps: [
            { title: 'Audience Modeling', description: 'Create lookalike audiences from high-value data.', icon: ShoppingCart },
            { title: 'Smart Bidding', description: 'Micro-adjust bids 24/7 for optimal CPA.', icon: MousePointerClick },
            { title: 'Ad Variations', description: 'Test hundreds of copy/visual variants instantly.', icon: Palette },
            { title: 'Fraud Prevention', description: 'Block bot traffic before it costs you.', icon: Search },
        ],
        comparison: [
            { metric: 'Bid Adjustments', traditional: 'Daily/Weekly', aiDriven: 'Real-time (Every Auction)' },
            { metric: 'A/B Testing', traditional: 'Slow manual setup', aiDriven: 'Automated multivariate testing' },
            { metric: 'ROI Scaling', traditional: 'Linear', aiDriven: 'Exponential via learning' },
        ],
        trustMetric: '-40%',
        trustLabel: 'Reduction in CPA',
        showcaseImage: '/assets/ppc-showcase.png',
    },
    {
        id: 'content-strategy',
        title: 'Content',
        impactWord: 'Velocity',
        subtitle: 'AI-Driven Planning',
        description: 'Strategic content planning across platforms using AI insights for trending topics and formats.',
        shortDescription: 'Trend-jacking & automated format adaptation.',
        icon: FileText,
        heroVisualType: 'abstract',
        gradientMap: { from: '#8b5cf6', via: '#d946ef', to: '#c026d3' }, // Violet -> Fuchsia
        heroMetrics: [
            { label: 'Volume', value: '10x', icon: Zap },
            { label: 'Relevance', value: '100%', icon: Target },
            { label: 'Platforms', value: 'All', icon: Globe },
        ],
        heroImage: '/assets/content-hero.png',
        accuracy: 92,
        performanceMetric: '92%',
        performanceLabel: 'Trend Prediction',
        workflowSteps: [
            { title: 'Topic Discovery', description: 'Scan web/social for emerging conversations.', icon: Search },
            { title: 'Format Matching', description: 'Match topics to best-performing formats.', icon: Palette },
            { title: 'Distribution Plan', description: 'Optimize timing and platform selection.', icon: Share2 },
            { title: 'Feedback Loop', description: 'Refine strategy based on engagement data.', icon: BarChart3 },
        ],
        comparison: [
            { metric: 'Topic Selection', traditional: 'Gut feeling', aiDriven: 'Real-time data' },
            { metric: 'Adaptability', traditional: 'Monthly', aiDriven: 'Daily pivots' },
            { metric: 'Consistency', traditional: 'Human-dependent', aiDriven: 'Guaranteed volume' },
        ],
        trustMetric: '2.5x',
        trustLabel: 'More Organic Reach',
        showcaseImage: '/assets/content-showcase.png',
    },
    {
        id: 'app-web-design',
        title: 'Design',
        impactWord: 'Alchemy',
        subtitle: 'AI-Assisted UX',
        description: 'Combine creativity with AI-assisted user behavior analysis for impressive, converting websites.',
        shortDescription: 'Generative UI & predictive UX modeling.',
        icon: Smartphone,
        heroVisualType: 'dashboard',
        gradientMap: { from: '#ec4899', via: '#a855f7', to: '#6366f1' }, // Pink -> Purple -> Indigo
        heroMetrics: [
            { label: 'Conversion', value: '+60%', icon: TrendingUp },
            { label: 'Speed', value: 'Days', icon: Zap },
            { label: 'Testing', value: 'Auto', icon: Cpu },
        ],
        heroImage: '/assets/design-hero.png',
        accuracy: 96,
        performanceMetric: '96%',
        performanceLabel: 'UX Issue Detection',
        workflowSteps: [
            { title: 'Heatmap Analysis', description: 'Predict user gaze and click patterns.', icon: Search },
            { title: 'Wireframe Gen', description: 'Rapidly prototype layout options.', icon: Palette },
            { title: 'Style Transfer', description: 'Apply brand guidelines instantly.', icon: Palette },
            { title: 'A/B Sim', description: 'Simulate user journeys before code.', icon: Play },
        ],
        comparison: [
            { metric: 'Design Cycle', traditional: 'Weeks/Months', aiDriven: 'Days' },
            { metric: 'Usability Testing', traditional: 'Post-launch', aiDriven: 'Pre-launch predictive' },
            { metric: 'Personalization', traditional: 'Static', aiDriven: 'Dynamic blocks' },
        ],
        trustMetric: '60%',
        trustLabel: 'Higher Conversion Rates',
        showcaseImage: '/assets/design-showcase.png',
    },
    // Adding defaults for others to avoid type errors, though less customized for brevity
    {
        id: 'infographics',
        title: 'Infographics',
        impactWord: 'Clarity',
        subtitle: 'Visual Storytelling',
        description: 'Transform complex information into visually engaging content optimized by AI.',
        shortDescription: 'Data-to-visuals in seconds.',
        icon: BarChart3,
        heroVisualType: 'abstract',
        gradientMap: { from: '#10b981', via: '#3b82f6', to: '#6366f1' }, // Emerald -> Blue -> Indigo
        heroMetrics: [{ label: 'Speed', value: 'mins', icon: Zap }, { label: 'Shares', value: '3x', icon: Share2 }, { label: 'Data', value: '100%', icon: ShieldCheck }],
        heroImage: '/assets/infographic-hero.png',
        accuracy: 94,
        performanceMetric: '94%',
        performanceLabel: 'Retention',
        workflowSteps: [],
        comparison: [
            { metric: 'Production Time', traditional: 'Days or Weeks', aiDriven: 'Minutes' },
            { metric: 'Data Accuracy', traditional: 'Manual entry errors', aiDriven: 'Automated live-sync' },
            { metric: 'Virality Potential', traditional: 'Standard templates', aiDriven: 'Trend-optimized visual formats' },
        ],
        trustMetric: '3x',
        trustLabel: 'Social Shares',
        showcaseImage: '/assets/infographic-showcase.png',
    },
    {
        id: 'ecommerce-assets',
        title: 'E-Commerce',
        impactWord: 'Scale',
        subtitle: 'AI-Optimized Assets',
        description: 'Persuasive digital assets that drive conversions with AI-based consumer behavior analysis.',
        shortDescription: 'Generative product scenes & copy.',
        icon: ShoppingCart,
        heroVisualType: 'comparative',
        gradientMap: { from: '#f97316', via: '#ec4899', to: '#db2777' }, // Orange -> Pink
        heroMetrics: [{ label: 'Sales', value: '+45%', icon: TrendingUp }, { label: 'Cost', value: 'Low', icon: ShieldCheck }, { label: 'Speed', value: 'Fast', icon: Zap }],
        heroImage: '/assets/ecom-hero.png',
        accuracy: 97,
        performanceMetric: '97%',
        performanceLabel: 'Purchase Intent',
        workflowSteps: [],
        comparison: [
            { metric: 'Product Photography', traditional: 'Expensive studio shoots', aiDriven: 'Photorealistic AI generation' },
            { metric: 'Description Copy', traditional: 'Generic text', aiDriven: 'SEO & conversion-optimized' },
            { metric: 'Variation Testing', traditional: 'Limited manual A/B', aiDriven: 'Infinite multivariate testing' },
        ],
        trustMetric: '45%',
        trustLabel: 'Cart Additions',
        showcaseImage: '/assets/ecom-showcase.png',
    },
    {
        id: 'animations',
        title: 'Animation',
        impactWord: 'Life',
        subtitle: 'AI-Enhanced Motion',
        description: 'Interactive and engaging animations with AI-assisted scripting and visual flow optimization.',
        shortDescription: 'Physics-based motion & auto-sync.',
        icon: Play,
        heroVisualType: 'abstract',
        gradientMap: { from: '#0ea5e9', via: '#8b5cf6', to: '#d946ef' }, // Sky -> Violet -> Fuchsia
        heroMetrics: [{ label: 'Retention', value: '80%', icon: TrendingUp }, { label: 'Time', value: '-70%', icon: Zap }, { label: 'Quality', value: 'High', icon: Target }],
        heroImage: '/assets/animation-hero.png',
        accuracy: 93,
        performanceMetric: '93%',
        performanceLabel: 'Viewer Retention',
        workflowSteps: [],
        comparison: [
            { metric: 'Rendering Speed', traditional: 'Hours per frame', aiDriven: 'Real-time neural rendering' },
            { metric: 'Fluidity', traditional: 'Keyframe gaps', aiDriven: 'Physics-based interpolation' },
            { metric: 'Iteration Cost', traditional: 'High (Re-renders)', aiDriven: 'Instant style transfer' },
        ],
        trustMetric: '80%',
        trustLabel: 'Completion Rate',
        showcaseImage: '/assets/animation-showcase.png',
    },
    {
        id: 'brand-assets',
        title: 'Brand',
        impactWord: 'Identity',
        subtitle: 'AI-Driven Identity',
        description: 'Cohesive, memorable brand assets using AI-powered design consistency tools.',
        shortDescription: 'Automated consistency & asset scaling.',
        icon: Palette,
        heroVisualType: 'dashboard',
        gradientMap: { from: '#6366f1', via: '#8b5cf6', to: '#ec4899' }, // Indigo -> Violet -> Pink
        heroMetrics: [{ label: 'Recall', value: '2x', icon: TrendingUp }, { label: 'Consistent', value: '100%', icon: ShieldCheck }, { label: 'Scale', value: 'Inf', icon: Globe }],
        heroImage: '/assets/brand-hero.png',
        accuracy: 99,
        performanceMetric: '99%',
        performanceLabel: 'Consistency',
        workflowSteps: [],
        comparison: [
            { metric: 'Consistency Check', traditional: 'Manual visual review', aiDriven: 'Automated style enforcement' },
            { metric: 'Asset Adaptation', traditional: 'Manual resizing/tweaking', aiDriven: 'One-click multi-format gen' },
            { metric: 'Rebranding Speed', traditional: 'Months', aiDriven: 'Days (Global update)' },
        ],
        trustMetric: '2x',
        trustLabel: 'Brand Recall',
        showcaseImage: '/assets/brand-showcase.png',
    },
];

export const getServiceById = (id: string): ServiceDetail | undefined => {
    return servicesData.find(service => service.id === id);
};
