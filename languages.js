const languages = {
    zh: {
        // 页面标题和描述
        pageTitle: "在线倒计时日历",
        appTitle: "精准时钟倒计时",
        appDescription: "实时精确到秒的倒计时工具，让每一秒都不错过",
        liveIndicator: "● LIVE",
        
        // 快速时钟
        quickClockSelect: "选择快速时钟",
        quickClockCities: {
            "Asia/Shanghai": "🇨🇳 北京时间",
            "Asia/Tokyo": "🇯🇵 东京时间", 
            "America/New_York": "🇺🇸 纽约时间",
            "Europe/London": "🇬🇧 伦敦时间",
            "Europe/Paris": "🇫🇷 巴黎时间",
            "Australia/Sydney": "🇦🇺 悉尼时间",
            "Asia/Dubai": "🇦🇪 迪拜时间",
            "America/Los_Angeles": "🇺🇸 洛杉矶时间",
            "Europe/Moscow": "🇷🇺 莫斯科时间",
            "Asia/Singapore": "🇸🇬 新加坡时间",
            "America/Toronto": "🇨🇦 多伦多时间",
            "Asia/Seoul": "🇰🇷 首尔时间"
        },
        
        // 月份名称
        monthNames: [
            "1月", "2月", "3月", "4月", "5月", "6月",
            "7月", "8月", "9月", "10月", "11月", "12月"
        ],
        
        // 模态框
        addCountdown: "添加倒计时",
        eventName: "事件名称：",
        eventNamePlaceholder: "请输入事件名称",
        targetDate: "目标日期：",
        targetTime: "目标时间：",
        cancel: "取消",
        confirm: "确定",
        
        // 按钮
        addButton: "+",
        deleteConfirm: "确定要删除这个倒计时吗？",
        
        // 空状态
        noEvents: "暂无倒计时事件",
        noEventsDesc: "点击右上角的 + 号添加新的倒计时",
        
        // 倒计时状态
        days: "天",
        hours: "小时", 
        minutes: "分钟",
        seconds: "秒",
        finished: "已结束",
        
        // 通知
        countdownFinished: "🎉 倒计时结束！",
        eventTimeUp: "您的事件时间到了！",
        gotIt: "知道了",
        
        // 验证消息
        pleaseEnterNameAndDate: "请输入事件名称和日期！",
        
        // 语言切换
        language: "语言",
        chinese: "中文",
        english: "English",
        
        // 页脚
        footerPrivacy: "隐私政策",
        footerAbout: "关于我们",
        footerTerms: "服务条款",
        footerCopyright: "© 2025 精准时钟倒计时. All Rights Reserved.",
        
        // 隐私政策
        privacyTitle: "隐私政策",
        privacyContent: `
            <div class="policy-section">
                <h4>信息收集</h4>
                <p>我们的倒计时应用完全基于本地存储运行，不会收集、存储或传输您的任何个人信息到我们的服务器。所有的倒计时事件和设置信息都保存在您设备的本地存储中。</p>
            </div>
            
            <div class="policy-section">
                <h4>数据使用</h4>
                <p>您在应用中创建的所有倒计时事件仅在您的设备上存储和使用，用于：</p>
                <ul>
                    <li>显示您的倒计时事件</li>
                    <li>保存您的语言偏好设置</li>
                    <li>提供更好的用户体验</li>
                </ul>
            </div>
            
            <div class="policy-section">
                <h4>第三方服务</h4>
                <p>本应用可能使用 Google Analytics 来收集匿名的使用统计信息，以帮助我们改进服务。这些信息不会与您的个人身份关联。</p>
            </div>
            
            <div class="policy-section">
                <h4>数据安全</h4>
                <p>由于所有数据都存储在您的设备本地，我们建议您：</p>
                <ul>
                    <li>定期备份重要的倒计时事件</li>
                    <li>避免在公共设备上使用本应用</li>
                    <li>清理浏览器数据时注意保护您的倒计时信息</li>
                </ul>
            </div>
        `,
        
        // 关于我们
        aboutTitle: "关于我们",
        aboutContent: `
            <div class="about-section">
                <h4>产品愿景</h4>
                <p>精准时钟倒计时致力于为用户提供最简洁、高效的时间管理工具。我们相信时间的珍贵，希望帮助每个人更好地规划和珍惜时间。</p>
            </div>
            
            <div class="about-section">
                <h4>核心特色</h4>
                <ul>
                    <li><strong>极简设计</strong> - 界面简洁清晰，专注于核心功能</li>
                    <li><strong>精确计时</strong> - 精确到秒的倒计时显示</li>
                    <li><strong>本地存储</strong> - 无需注册，数据安全可靠</li>
                    <li><strong>多时区支持</strong> - 支持全球主要城市时间显示</li>
                    <li><strong>双语界面</strong> - 支持中文和英文切换</li>
                    <li><strong>响应式设计</strong> - 完美适配各种设备</li>
                </ul>
            </div>
            
            <div class="about-section">
                <h4>使用场景</h4>
                <p>无论您是学生准备考试、职场人士管理项目截止日期，还是想要记录重要的纪念日，我们的倒计时工具都能帮助您：</p>
                <ul>
                    <li>追踪重要事件和截止日期</li>
                    <li>提醒重要的里程碑时刻</li>
                    <li>管理个人和工作日程</li>
                    <li>庆祝特殊的纪念日</li>
                </ul>
            </div>
            
            <div class="about-section">
                <h4>技术支持</h4>
                <p>我们的应用采用最新的Web技术构建，确保在各种现代浏览器中都能流畅运行。如果您在使用过程中遇到任何问题，欢迎通过页面反馈与我们联系。</p>
            </div>
            
            <div class="about-section">
                <p class="about-signature"><strong>让时间更有价值，让每一秒都算数。</strong></p>
            </div>
        `,
        
        // 服务条款
        termsTitle: "服务条款",
        termsContent: `
            <div class="terms-section">
                <h4>服务说明</h4>
                <p>精准时钟倒计时是一个免费的在线倒计时工具，旨在帮助用户管理时间和追踪重要事件。通过使用本服务，您同意遵守以下条款和条件。</p>
            </div>
            
            <div class="terms-section">
                <h4>使用许可</h4>
                <p>我们授予您有限的、非排他性的、不可转让的许可来使用本服务，仅供个人非商业用途。您不得：</p>
                <ul>
                    <li>复制、修改或逆向工程本应用</li>
                    <li>将本服务用于任何非法或未授权的目的</li>
                    <li>干扰或破坏本服务的正常运行</li>
                    <li>尝试获取本应用的源代码（除非公开提供）</li>
                </ul>
            </div>
            
            <div class="terms-section">
                <h4>用户责任</h4>
                <p>使用本服务时，您应当：</p>
                <ul>
                    <li>确保您输入的信息准确无误</li>
                    <li>妥善保管您的倒计时数据</li>
                    <li>遵守所有适用的法律法规</li>
                    <li>尊重他人的权利和隐私</li>
                </ul>
            </div>
            
            <div class="terms-section">
                <h4>服务可用性</h4>
                <p>我们努力确保服务的持续可用性，但不保证服务不会中断。我们可能会：</p>
                <ul>
                    <li>定期维护和更新服务</li>
                    <li>暂时暂停服务以进行技术升级</li>
                    <li>在必要时修改或终止某些功能</li>
                </ul>
            </div>
            
            <div class="terms-section">
                <h4>免责声明</h4>
                <p>本服务按"现状"提供，我们不对以下情况承担责任：</p>
                <ul>
                    <li>因技术故障导致的数据丢失</li>
                    <li>因时间计算错误导致的损失</li>
                    <li>第三方服务的中断或故障</li>
                    <li>用户设备或浏览器兼容性问题</li>
                </ul>
            </div>
        `
    },
    
    en: {
        // Page title and description
        pageTitle: "Online Countdown Calendar",
        appTitle: "Precision Clock Countdown",
        appDescription: "Real-time accurate countdown tool to the second, never miss a moment",
        liveIndicator: "● LIVE",
        
        // Quick clock
        quickClockSelect: "Select Quick Clock",
        quickClockCities: {
            "Asia/Shanghai": "🇨🇳 Beijing Time",
            "Asia/Tokyo": "🇯🇵 Tokyo Time",
            "America/New_York": "🇺🇸 New York Time", 
            "Europe/London": "🇬🇧 London Time",
            "Europe/Paris": "🇫🇷 Paris Time",
            "Australia/Sydney": "🇦🇺 Sydney Time",
            "Asia/Dubai": "🇦🇪 Dubai Time",
            "America/Los_Angeles": "🇺🇸 Los Angeles Time",
            "Europe/Moscow": "🇷🇺 Moscow Time",
            "Asia/Singapore": "🇸🇬 Singapore Time",
            "America/Toronto": "🇨🇦 Toronto Time",
            "Asia/Seoul": "🇰🇷 Seoul Time"
        },
        
        // Month names
        monthNames: [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ],
        
        // Modal
        addCountdown: "Add Countdown",
        eventName: "Event Name:",
        eventNamePlaceholder: "Please enter event name",
        targetDate: "Target Date:",
        targetTime: "Target Time:",
        cancel: "Cancel",
        confirm: "Confirm",
        
        // Buttons
        addButton: "+",
        deleteConfirm: "Are you sure you want to delete this countdown?",
        
        // Empty state
        noEvents: "No countdown events",
        noEventsDesc: "Click the + button in the top right to add a new countdown",
        
        // Countdown status
        days: "days",
        hours: "hours",
        minutes: "minutes", 
        seconds: "seconds",
        finished: "Finished",
        
        // Notifications
        countdownFinished: "🎉 Countdown Finished!",
        eventTimeUp: "Your event time is up!",
        gotIt: "Got it",
        
        // Validation messages
        pleaseEnterNameAndDate: "Please enter event name and date!",
        
        // Language switch
        language: "Language",
        chinese: "中文",
        english: "English",
        
        // Footer
        footerPrivacy: "Privacy Policy",
        footerAbout: "About Us",
        footerTerms: "Terms of Service",
        footerCopyright: "© 2025 Precision Clock Countdown. All Rights Reserved.",
        
        // Privacy Policy
        privacyTitle: "Privacy Policy",
        privacyContent: `
            <div class="policy-section">
                <h4>Information Collection</h4>
                <p>Our countdown application operates entirely on local storage and does not collect, store, or transmit any of your personal information to our servers. All countdown events and settings are stored locally on your device.</p>
            </div>
            
            <div class="policy-section">
                <h4>Data Usage</h4>
                <p>All countdown events you create are stored and used only on your device for:</p>
                <ul>
                    <li>Displaying your countdown events</li>
                    <li>Saving your language preferences</li>
                    <li>Providing better user experience</li>
                </ul>
            </div>
            
            <div class="policy-section">
                <h4>Third-Party Services</h4>
                <p>This application may use Google Analytics to collect anonymous usage statistics to help us improve our service. This information is not associated with your personal identity.</p>
            </div>
            
            <div class="policy-section">
                <h4>Data Security</h4>
                <p>Since all data is stored locally on your device, we recommend that you:</p>
                <ul>
                    <li>Regularly backup important countdown events</li>
                    <li>Avoid using this application on public devices</li>
                    <li>Be careful to protect your countdown information when clearing browser data</li>
                </ul>
            </div>
        `,
        
        // About Us
        aboutTitle: "About Us",
        aboutContent: `
            <div class="about-section">
                <h4>Product Vision</h4>
                <p>Precision Clock Countdown is dedicated to providing users with the most concise and efficient time management tool. We believe in the preciousness of time and hope to help everyone better plan and cherish time.</p>
            </div>
            
            <div class="about-section">
                <h4>Core Features</h4>
                <ul>
                    <li><strong>Minimalist Design</strong> - Clean and clear interface, focused on core functionality</li>
                    <li><strong>Precise Timing</strong> - Countdown display accurate to the second</li>
                    <li><strong>Local Storage</strong> - No registration required, safe and reliable data</li>
                    <li><strong>Multi-timezone Support</strong> - Support for major cities worldwide</li>
                    <li><strong>Bilingual Interface</strong> - Support for Chinese and English switching</li>
                    <li><strong>Responsive Design</strong> - Perfect adaptation to various devices</li>
                </ul>
            </div>
            
            <div class="about-section">
                <h4>Use Cases</h4>
                <p>Whether you're a student preparing for exams, a professional managing project deadlines, or want to track important anniversaries, our countdown tool can help you:</p>
                <ul>
                    <li>Track important events and deadlines</li>
                    <li>Remind important milestone moments</li>
                    <li>Manage personal and work schedules</li>
                    <li>Celebrate special anniversaries</li>
                </ul>
            </div>
            
            <div class="about-section">
                <h4>Technical Support</h4>
                <p>Our application is built with the latest web technologies to ensure smooth operation across various modern browsers. If you encounter any issues during use, please feel free to contact us through page feedback.</p>
            </div>
            
            <div class="about-section">
                <p class="about-signature"><strong>Make time more valuable, make every second count.</strong></p>
            </div>
        `,
        
        // Terms of Service
        termsTitle: "Terms of Service",
        termsContent: `
            <div class="terms-section">
                <h4>Service Description</h4>
                <p>Precision Clock Countdown is a free online countdown tool designed to help users manage time and track important events. By using this service, you agree to comply with the following terms and conditions.</p>
            </div>
            
            <div class="terms-section">
                <h4>License to Use</h4>
                <p>We grant you a limited, non-exclusive, non-transferable license to use this service for personal non-commercial use only. You may not:</p>
                <ul>
                    <li>Copy, modify, or reverse engineer this application</li>
                    <li>Use this service for any illegal or unauthorized purposes</li>
                    <li>Interfere with or disrupt the normal operation of this service</li>
                    <li>Attempt to obtain the source code of this application (unless publicly available)</li>
                </ul>
            </div>
            
            <div class="terms-section">
                <h4>User Responsibilities</h4>
                <p>When using this service, you should:</p>
                <ul>
                    <li>Ensure the information you enter is accurate</li>
                    <li>Properly safeguard your countdown data</li>
                    <li>Comply with all applicable laws and regulations</li>
                    <li>Respect the rights and privacy of others</li>
                </ul>
            </div>
            
            <div class="terms-section">
                <h4>Service Availability</h4>
                <p>We strive to ensure continuous service availability but do not guarantee uninterrupted service. We may:</p>
                <ul>
                    <li>Regularly maintain and update the service</li>
                    <li>Temporarily suspend service for technical upgrades</li>
                    <li>Modify or terminate certain features when necessary</li>
                </ul>
            </div>
            
            <div class="terms-section">
                <h4>Disclaimer</h4>
                <p>This service is provided "as is" and we are not responsible for:</p>
                <ul>
                    <li>Data loss due to technical failures</li>
                    <li>Losses due to time calculation errors</li>
                    <li>Interruption or failure of third-party services</li>
                    <li>User device or browser compatibility issues</li>
                </ul>
            </div>
        `
    }
};

// 语言管理器类
class LanguageManager {
    constructor() {
        this.currentLanguage = localStorage.getItem('language') || 'zh';
        this.translations = languages[this.currentLanguage];
    }
    
    // 获取翻译文本
    t(key) {
        const keys = key.split('.');
        let value = this.translations;
        
        for (const k of keys) {
            if (value && typeof value === 'object') {
                value = value[k];
            } else {
                return key; // 如果找不到翻译，返回键名
            }
        }
        
        return value || key;
    }
    
    // 切换语言
    switchLanguage(lang) {
        if (languages[lang]) {
            this.currentLanguage = lang;
            this.translations = languages[lang];
            localStorage.setItem('language', lang);
            this.updatePageTexts();
        }
    }
    
    // 获取当前语言
    getCurrentLanguage() {
        return this.currentLanguage;
    }
    
    // 更新页面所有文本
    updatePageTexts() {
        // 更新页面标题
        document.title = this.t('pageTitle');
        
        // 更新应用标题和描述
        const appTitleElement = document.querySelector('.app-title h1');
        if (appTitleElement) {
            appTitleElement.textContent = this.t('appTitle');
        }
        
        const appDescElement = document.querySelector('.app-description');
        if (appDescElement) {
            appDescElement.textContent = this.t('appDescription');
        }
        
        const liveIndicatorElement = document.querySelector('.live-indicator');
        if (liveIndicatorElement) {
            liveIndicatorElement.textContent = this.t('liveIndicator');
        }
        
        // 更新快速时钟选择器
        const quickClockSelect = document.getElementById('quickClockSelect');
        if (quickClockSelect) {
            const options = quickClockSelect.querySelectorAll('option');
            options[0].textContent = this.t('quickClockSelect'); // 第一个默认选项
            
            for (let i = 1; i < options.length; i++) {
                const option = options[i];
                const timezone = option.value;
                if (timezone && this.t(`quickClockCities.${timezone}`)) {
                    option.textContent = this.t(`quickClockCities.${timezone}`);
                }
            }
        }
        
        // 更新模态框文本
        const modalTitle = document.querySelector('.modal-header h3');
        if (modalTitle) {
            modalTitle.textContent = this.t('addCountdown');
        }
        
        const eventNameLabel = document.querySelector('label[for="eventTitle"]');
        if (eventNameLabel) {
            eventNameLabel.textContent = this.t('eventName');
        }
        
        const eventTitleInput = document.getElementById('eventTitle');
        if (eventTitleInput) {
            eventTitleInput.placeholder = this.t('eventNamePlaceholder');
        }
        
        const eventDateLabel = document.querySelector('label[for="eventDate"]');
        if (eventDateLabel) {
            eventDateLabel.textContent = this.t('targetDate');
        }
        
        const eventTimeLabel = document.querySelector('label[for="eventTime"]');
        if (eventTimeLabel) {
            eventTimeLabel.textContent = this.t('targetTime');
        }
        
        const cancelBtn = document.getElementById('cancelBtn');
        if (cancelBtn) {
            cancelBtn.textContent = this.t('cancel');
        }
        
        const confirmBtn = document.getElementById('confirmBtn');
        if (confirmBtn) {
            confirmBtn.textContent = this.t('confirm');
        }
        
        // 更新通知模态框
        const notificationBtn = document.getElementById('notificationClose');
        if (notificationBtn) {
            notificationBtn.textContent = this.t('gotIt');
        }
        
        // 更新语言切换按钮文本
        const languageBtn = document.getElementById('languageBtn');
        if (languageBtn) {
            languageBtn.textContent = this.t('language');
        }
        
        // 更新下拉菜单选项
        const chineseOption = document.getElementById('chineseOption');
        if (chineseOption) {
            chineseOption.textContent = this.t('chinese');
        }
        
        const englishOption = document.getElementById('englishOption');
        if (englishOption) {
            englishOption.textContent = this.t('english');
        }
        
        // 更新页脚链接
        const privacyLink = document.getElementById('privacyLink');
        if (privacyLink) {
            privacyLink.textContent = this.t('footerPrivacy');
        }
        
        const aboutLink = document.getElementById('aboutLink');
        if (aboutLink) {
            aboutLink.textContent = this.t('footerAbout');
        }
        
        const termsLink = document.getElementById('termsLink');
        if (termsLink) {
            termsLink.textContent = this.t('footerTerms');
        }
        
        const footerCopyright = document.querySelector('.footer-copyright p');
        if (footerCopyright) {
            footerCopyright.textContent = this.t('footerCopyright');
        }
        
        // 更新模态框标题
        const privacyModalTitle = document.querySelector('#privacyModal .info-modal-header h3');
        if (privacyModalTitle) {
            privacyModalTitle.textContent = this.t('privacyTitle');
        }
        
        const aboutModalTitle = document.querySelector('#aboutModal .info-modal-header h3');
        if (aboutModalTitle) {
            aboutModalTitle.textContent = this.t('aboutTitle');
        }
        
        const termsModalTitle = document.querySelector('#termsModal .info-modal-header h3');
        if (termsModalTitle) {
            termsModalTitle.textContent = this.t('termsTitle');
        }
        
        // 触发事件重新渲染，让其他组件知道语言已更改
        window.dispatchEvent(new CustomEvent('languageChanged', { 
            detail: { language: this.currentLanguage } 
        }));
    }
}

// 创建全局语言管理器实例
window.langManager = new LanguageManager();