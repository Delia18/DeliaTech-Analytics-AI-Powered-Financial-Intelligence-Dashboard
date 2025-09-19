// AI & FinTech Intelligence Dashboard
// September 19, 2025, 2:39 PM EDT - Live Intelligence
// Professional Intelligence by DeliaTech

class IntelligenceDashboard {
    constructor() {
        this.currentRegion = 'all';
        this.searchQuery = '';
        this.charts = {};
        
        // Intelligence data with full source citations and verified spelling
        this.intelligenceData = {
            peru: [
                {
                    id: "peru_ai_finance_2025",
                    title: "Complete AI Finance Guide for Peru Professionals 2025",
                    source: "Nucamp Peru AI Finance Report",
                    sourceUrl: "https://www.nucamp.co/blog/coding-bootcamp-peru-per-finance-the-complete-guide-to-using-ai-as-a-finance-professional-in-peru-in-2025",
                    impactLevel: "Very High",
                    implementationStatus: "Active",
                    daysSince: 8,
                    keyPoints: "Peru's fintech landscape demonstrates 237 active fintechs (EY) and 346 total firms (Finnovista). Market size: USD 1.03B with 18.8% projected CAGR. Law 31814 establishes comprehensive AI governance framework for financial services.",
                    aiInsight: "Peru positions itself as LATAM's AI governance leader with comprehensive regulatory framework",
                    tags: ["AI Regulation", "Governance", "Market Growth"],
                    region: "Peru"
                },
                {
                    id: "peru_upi_partnership",
                    title: "Peru-India UPI Partnership Expansion Phase 2",
                    source: "Financial Express India & CoinGeek",
                    sourceUrl: "https://www.financialexpress.com/business/defence-peru-adopts-indias-upi-technology-for-real-time-payments-3515938/",
                    impactLevel: "Very High",
                    implementationStatus: "Planning",
                    daysSince: 472,
                    keyPoints: "Peru becomes first South American country to adopt India's UPI technology for real-time payments via BCRP partnership. Implementation targeting 5M+ unbanked citizens with mobile money integration.",
                    aiInsight: "Revolutionary payment infrastructure adoption enabling massive financial inclusion across Peru",
                    tags: ["Payment Infrastructure", "Financial Inclusion", "International Partnership"],
                    region: "Peru"
                },
                {
                    id: "peru_ecosystem_growth",
                    title: "Peru Fintech Ecosystem Growth Analytics 2025",
                    source: "EY Peru FinTech Index & Finnovista Radar",
                    sourceUrl: "https://www.nucamp.co/blog/coding-bootcamp-peru-per-finance-the-complete-guide-to-using-ai-as-a-finance-professional-in-peru-in-2025",
                    impactLevel: "High",
                    implementationStatus: "Active",
                    daysSince: 8,
                    keyPoints: "EY reports 237 active fintechs, Finnovista counts 346 total (193 local, 153 foreign). Adult bank account adoption reaches 59% by end-2024. QR payments expanding beyond Lima to regional markets.",
                    aiInsight: "Strong ecosystem growth with measurable adoption metrics expanding beyond urban centers",
                    tags: ["Ecosystem Growth", "Adoption Metrics", "Geographic Expansion"],
                    region: "Peru"
                }
            ],
            latam: [
                {
                    id: "latam_finance_forum_2025",
                    title: "LATAM Finance Forum 2025 São Paulo Digital Infrastructure",
                    source: "FF News LATAM Finance Forum",
                    sourceUrl: "https://ffnews.com/event_listing/latam-finance-forum-2025/",
                    impactLevel: "High",
                    implementationStatus: "Active",
                    daysSince: 102,
                    keyPoints: "Inaugural LATAM Finance Forum in São Paulo unites regional digital infrastructure leaders. Focus on evolving financial models, cloud/AI ecosystems, and strategic capital deployment across the region.",
                    aiInsight: "Major regional forum driving coordinated digital infrastructure investment and collaboration",
                    tags: ["Industry Events", "Digital Infrastructure", "Regional Collaboration"],
                    region: "LATAM"
                },
                {
                    id: "latam_b2b_saas_growth",
                    title: "AI-Driven FinTech B2B SaaS Platforms Explosive Growth",
                    source: "AI Invest Analysis",
                    sourceUrl: "https://www.ainvest.com/news/ai-driven-fintech-innovation-2025-uncovering-undervalued-b2b-saas-platforms-explosive-growth-2509/",
                    impactLevel: "Very High",
                    implementationStatus: "Active",
                    daysSince: 1,
                    keyPoints: "69% of public fintechs now profitable with EBITDA margins at 16%. AI reducing compliance costs by 50%. Platforms like FundGuard, FlowFi, CredoLab leading innovation with agentic AI production deployments.",
                    aiInsight: "B2B SaaS fintech sector demonstrating strong profitability through AI-driven operational improvements",
                    tags: ["B2B SaaS", "Profitability", "AI Automation"],
                    region: "LATAM"
                },
                {
                    id: "latam_embedded_finance",
                    title: "90% SMBs Consider Embedded Finance Essential 2025",
                    source: "PYMNTS SMB Embedded Finance Report",
                    sourceUrl: "https://www.pymnts.com/smbs/2025/90percent-of-smbs-say-embedded-finance-is-now-essential/",
                    impactLevel: "High",
                    implementationStatus: "Active",
                    daysSince: 1,
                    keyPoints: "Small businesses rapidly adopting embedded finance solutions. FinTech IPO Index surges 3.6% as rate cuts boost lending platforms. SMBs switching software providers faster to access financial services.",
                    aiInsight: "SMB sector embracing embedded finance as essential business infrastructure",
                    tags: ["Embedded Finance", "SMB Adoption", "Market Growth"],
                    region: "LATAM"
                }
            ],
            usa: [
                {
                    id: "usa_sibos_ai_native",
                    title: "Sibos 2025: AI-Native Finance Transformation",
                    source: "FinTech Futures Sibos 2025 Coverage",
                    sourceUrl: "https://www.fintechfutures.com/ai-in-fintech/sibos-2025-from-ai-assisted-to-ai-native-finance",
                    impactLevel: "Very High",
                    implementationStatus: "Active",
                    daysSince: 1,
                    keyPoints: "Financial industry transitioning from AI-assisted to AI-native systems. AI agents will autonomously negotiate, optimize portfolios, and manage risk in real-time. FCA launching comprehensive AI sandbox program.",
                    aiInsight: "Fundamental paradigm shift towards autonomous AI-driven financial operations",
                    tags: ["AI-Native Finance", "Autonomous Systems", "Industry Transformation"],
                    region: "USA"
                },
                {
                    id: "usa_fss_ai_workforce",
                    title: "FSS Achieves 100% AI-Literate Workforce in FinTech",
                    source: "FF News FSS Achievement Report",
                    sourceUrl: "https://ffnews.com/newsarticle/fintech/generative-ai-and-fraud-analytics-emerge-as-top-priorities-for-92-employees-reveals-fss-data/",
                    impactLevel: "High",
                    implementationStatus: "Active",
                    daysSince: 2,
                    keyPoints: "Financial Software Systems becomes first industry player with 100% AI-literate workforce (1,500+ employees). Generative AI and fraud analytics emerge as top priorities for 92% of staff members.",
                    aiInsight: "Complete workforce transformation achieved in major financial technology company",
                    tags: ["Workforce Training", "AI Literacy", "Industry Leadership"],
                    region: "USA"
                },
                {
                    id: "usa_sandbox_bill",
                    title: "U.S. Senate 'Sandbox' Bill for AI Innovation Acceleration",
                    source: "PYMNTS AI Innovation Coverage",
                    sourceUrl: "https://www.pymnts.com/artificial-intelligence-2/2025/the-sandbox-bill-bets-on-faster-ai-innovation/",
                    impactLevel: "High",
                    implementationStatus: "Proposed",
                    daysSince: 2,
                    keyPoints: "Senator Ted Cruz introduces SANDBOX Act providing AI firms 10-year regulatory waivers. Creates regulatory sandbox for faster AI development and testing in financial services sector.",
                    aiInsight: "Legislative initiative to accelerate AI innovation through regulatory flexibility",
                    tags: ["Regulatory Innovation", "Legislative Action", "AI Acceleration"],
                    region: "USA"
                }
            ]
        };

        this.init();
    }

    init() {
        console.log('📊 Initializing AI & FinTech Intelligence Dashboard...');
        console.log('🎯 Professional Intelligence by DeliaTech');
        
        this.setupEventListeners();
        this.renderCurrentView();
        this.initializeCharts();
        this.updateLiveTimestamp();
        this.startLiveUpdates();
        
        console.log('✅ Intelligence Dashboard initialized successfully!');
    }

    setupEventListeners() {
        // Region selection
        document.querySelectorAll('.region-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const region = e.currentTarget.dataset.region;
                this.switchRegion(region);
            });
        });

        // Search functionality
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.searchQuery = e.target.value.toLowerCase();
                this.renderCurrentView();
            });
        }

        // Export functionality
        document.getElementById('export-btn')?.addEventListener('click', () => this.exportIntelligenceReport());

        console.log('🎛️ Event listeners configured for intelligence dashboard');
    }

    switchRegion(region) {
        this.currentRegion = region;
        
        // Update active region button
        document.querySelectorAll('.region-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.region === region);
        });

        this.renderCurrentView();
        console.log(`🌍 Switched to ${region.toUpperCase()} intelligence view`);
    }

    renderCurrentView() {
        const container = document.getElementById('trends-container');
        const trends = this.getFilteredTrends();
        
        if (trends.length === 0) {
            container.innerHTML = `
                <div class="loading">
                    <div class="loading-spinner"></div>
                    <h3>📊 Analyzing Intelligence Data...</h3>
                    <p>Processing latest developments from verified sources.</p>
                </div>
            `;
            return;
        }

        container.innerHTML = '';
        trends.forEach(trend => {
            const trendCard = this.createTrendCard(trend);
            container.appendChild(trendCard);
        });

        console.log(`📊 Rendered ${trends.length} intelligence trends for ${this.currentRegion.toUpperCase()}`);
    }

    getFilteredTrends() {
        let trends;
        if (this.currentRegion === 'all') {
            trends = [...this.intelligenceData.peru, ...this.intelligenceData.latam, ...this.intelligenceData.usa];
        } else {
            trends = this.intelligenceData[this.currentRegion] || [];
        }

        // Apply search filter
        if (this.searchQuery) {
            trends = trends.filter(trend => 
                trend.title.toLowerCase().includes(this.searchQuery) ||
                trend.keyPoints.toLowerCase().includes(this.searchQuery) ||
                trend.aiInsight.toLowerCase().includes(this.searchQuery) ||
                trend.tags.some(tag => tag.toLowerCase().includes(this.searchQuery))
            );
        }

        return trends;
    }

    createTrendCard(trend) {
        const card = document.createElement('div');
        card.className = 'trend-card';
        card.dataset.trendId = trend.id;

        const timeAgo = this.formatTimeAgo(trend.daysSince);

        card.innerHTML = `
            <div class="trend-header">
                <h3 class="trend-title">${trend.title}</h3>
                <div class="trend-badges">
                    <span class="trend-badge impact-${trend.impactLevel.toLowerCase().replace(' ', '-')}">${trend.impactLevel}</span>
                    <span class="trend-badge status-${trend.implementationStatus.toLowerCase()}">${trend.implementationStatus}</span>
                </div>
            </div>
            <div class="trend-description">${trend.keyPoints}</div>
            
            <div class="ai-summary">
                <div class="ai-summary-header">🧠 AI Strategic Insight</div>
                <div class="ai-summary-text">${trend.aiInsight}</div>
            </div>
            
            <div class="trend-citation">
                <div class="citation-header">📄 Source Citation</div>
                <div class="citation-source">${trend.source}</div>
                <div class="trend-actions">
                    <a href="${trend.sourceUrl}" target="_blank" class="read-article-btn">
                        🔗 Read More
                    </a>
                    <div class="trend-timeline">
                        ⏰ ${timeAgo} • 🌍 ${trend.region}
                    </div>
                </div>
            </div>
            
            <div class="trend-tags">
                ${trend.tags.map(tag => 
                    `<span class="trend-tag">#${tag}</span>`
                ).join('')}
            </div>
        `;

        return card;
    }

    formatTimeAgo(days) {
        if (days === 0) return 'Today';
        if (days === 1) return '1 day ago';
        if (days < 7) return `${days} days ago`;
        if (days < 30) return `${Math.floor(days / 7)} weeks ago`;
        if (days < 365) return `${Math.floor(days / 30)} months ago`;
        return `${Math.floor(days / 365)} years ago`;
    }

    initializeCharts() {
        // Impact distribution chart with navy theme colors
        const ctx = document.getElementById('impactChart');
        if (ctx) {
            const allTrends = [...this.intelligenceData.peru, ...this.intelligenceData.latam, ...this.intelligenceData.usa];
            const veryHighCount = allTrends.filter(t => t.impactLevel === 'Very High').length;
            const highCount = allTrends.filter(t => t.impactLevel === 'High').length;

            this.charts.impactChart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ['Very High Impact', 'High Impact'],
                    datasets: [{
                        data: [veryHighCount, highCount],
                        backgroundColor: ['#1FB8CD', '#FFC185'],
                        borderColor: ['#38bdf8', '#fdba74'],
                        borderWidth: 2
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                boxWidth: 12,
                                padding: 15,
                                font: {
                                    size: 11
                                },
                                color: '#e2e8f0'
                            }
                        }
                    }
                }
            });
        }

        console.log('📈 Intelligence analytics charts initialized');
    }

    updateLiveTimestamp() {
        const now = new Date();
        const timeString = now.toLocaleString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            timeZoneName: 'short'
        });

        const liveTimeElement = document.getElementById('live-time');
        if (liveTimeElement) {
            liveTimeElement.textContent = `${timeString} - Live Intelligence`;
        }
    }

    startLiveUpdates() {
        // Update live timestamp every minute
        setInterval(() => {
            this.updateLiveTimestamp();
        }, 60000);

        console.log('🔄 Live updates started');
    }

    exportIntelligenceReport() {
        const trends = this.getFilteredTrends();
        const content = this.generateIntelligenceReport(trends);
        this.downloadContent(content, `deliatech-intelligence-${this.currentRegion}-${new Date().toISOString().split('T')[0]}.txt`);
        this.showNotification(`📊 ${this.currentRegion.toUpperCase()} intelligence report exported successfully!`);
    }

    generateIntelligenceReport(trends) {
        let content = `📊 DELIATECH AI & FINTECH INTELLIGENCE REPORT\n`;
        content += `=============================================\n\n`;
        content += `Region: ${this.currentRegion.toUpperCase()}\n`;
        content += `Generated: ${new Date().toLocaleString()}\n`;
        content += `Professional Intelligence by: DeliaTech\n`;
        content += `Total Trends: ${trends.length}\n\n`;

        if (this.searchQuery) {
            content += `Search Filter: "${this.searchQuery}"\n\n`;
        }

        const impactCounts = {
            'Very High': trends.filter(t => t.impactLevel === 'Very High').length,
            'High': trends.filter(t => t.impactLevel === 'High').length
        };

        const statusCounts = {
            'Active': trends.filter(t => t.implementationStatus === 'Active').length,
            'Planning': trends.filter(t => t.implementationStatus === 'Planning').length,
            'Proposed': trends.filter(t => t.implementationStatus === 'Proposed').length
        };

        content += `INTELLIGENCE ANALYTICS:\n`;
        content += `=======================\n`;
        content += `• Very High Impact: ${impactCounts['Very High']} trends\n`;
        content += `• High Impact: ${impactCounts['High']} trends\n`;
        content += `• Active Implementations: ${statusCounts['Active']}\n`;
        content += `• Planning Phase: ${statusCounts['Planning']}\n`;
        content += `• Proposed Initiatives: ${statusCounts['Proposed']}\n\n`;

        content += `INTELLIGENCE TRENDS:\n`;
        content += `====================\n\n`;

        trends.forEach((trend, index) => {
            content += `${index + 1}. ${trend.title}\n`;
            content += `   Region: ${trend.region}\n`;
            content += `   Impact Level: ${trend.impactLevel}\n`;
            content += `   Implementation Status: ${trend.implementationStatus}\n`;
            content += `   Time Since: ${this.formatTimeAgo(trend.daysSince)}\n`;
            content += `   \n`;
            content += `   📊 Key Intelligence:\n`;
            content += `   ${trend.keyPoints}\n`;
            content += `   \n`;
            content += `   🧠 AI Strategic Insight:\n`;
            content += `   ${trend.aiInsight}\n`;
            content += `   \n`;
            content += `   📄 Verified Source:\n`;
            content += `   ${trend.source}\n`;
            content += `   🔗 ${trend.sourceUrl}\n`;
            content += `   \n`;
            content += `   🏷️ Content Tags: ${trend.tags.join(', ')}\n`;
            content += `\n   ----------------------------------------\n\n`;
        });

        content += `DELIATECH INTELLIGENCE PLATFORM\n`;
        content += `================================\n`;
        content += `🎯 Professional intelligence curation\n`;
        content += `📊 Cross-regional trend analysis\n`;
        content += `🧠 AI-powered strategic insights\n`;
        content += `🔍 Full source verification and citation\n`;
        content += `📈 Impact assessment and implementation tracking\n`;
        content += `🌍 Global fintech and AI intelligence expertise\n\n`;
        content += `📧 Subscribe to DeliaTech Weekly Intelligence:\n`;
        content += `https://substack.com/@deliagreen?utm_source=user-menu\n\n`;
        content += `Weekly AI & FinTech Intelligence with Professional Analysis:\n`;
        content += `• Comprehensive regional trend analysis\n`;
        content += `• AI-powered market insights\n`;
        content += `• Professional source citations\n`;
        content += `• Export-ready intelligence reports\n`;
        content += `• Early access to breaking developments\n`;
        content += `• Strategic analysis and insights\n\n`;
        content += `© 2025 DeliaTech Intelligence - Premium Intelligence Platform\n`;

        return content;
    }

    downloadContent(content, filename) {
        const blob = new Blob([content], { type: 'text/plain;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        
        link.setAttribute('href', url);
        link.setAttribute('download', filename);
        link.style.visibility = 'hidden';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'intelligence-notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #38bdf8 0%, #0ea5e9 100%);
            color: #ffffff;
            padding: 16px 24px;
            border-radius: 8px;
            z-index: 10000;
            animation: slideInRight 0.3s ease-out;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
            max-width: 350px;
            font-weight: 500;
            border: 1px solid rgba(255, 255, 255, 0.2);
            font-family: var(--font-family-base);
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease-in';
            setTimeout(() => notification.remove(), 300);
        }, 4000);
    }
}

// Initialize the Intelligence Dashboard
document.addEventListener('DOMContentLoaded', () => {
    console.log('📊 Starting AI & FinTech Intelligence Dashboard...');
    console.log('🎯 September 19, 2025, 2:39 PM EDT - Live Intelligence');
    
    try {
        // Add notification animations
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            
            @keyframes slideOutRight {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
        
        // Initialize the dashboard
        window.intelligenceDashboard = new IntelligenceDashboard();
        
        console.log('✅ DeliaTech Intelligence Dashboard initialized!');
        console.log('🎯 Features: Navy blue theme, AI insights, full citations, regional analysis');
        console.log('📊 Coverage: Peru (3 trends), LATAM (3 trends), USA (3 trends)');
        console.log('🧠 AI Insights: Strategic analysis and cross-regional correlations');
        console.log('📧 DeliaTech Integration: Weekly intelligence newsletter subscription');
        
    } catch (error) {
        console.error('❌ Intelligence Dashboard initialization failed:', error);
        document.getElementById('trends-container').innerHTML = `
            <div class="loading">
                <h3>⚠️ Intelligence System Error</h3>
                <p>Please refresh the page to restore intelligence monitoring.</p>
            </div>
        `;
    }
});

// Global keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (!window.intelligenceDashboard) return;
    
    // Alt + 1-4 for regions
    if (e.altKey && e.key >= '1' && e.key <= '4') {
        e.preventDefault();
        const regions = ['all', 'peru', 'latam', 'usa'];
        window.intelligenceDashboard.switchRegion(regions[parseInt(e.key) - 1]);
    }
    
    // Ctrl + E for export
    if (e.ctrlKey && e.key === 'e') {
        e.preventDefault();
        window.intelligenceDashboard.exportIntelligenceReport();
    }
    
    // Ctrl + F for search focus
    if (e.ctrlKey && e.key === 'f') {
        e.preventDefault();
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.focus();
        }
    }
});

console.log('🚀 DeliaTech AI & FinTech Intelligence Dashboard loaded successfully!');