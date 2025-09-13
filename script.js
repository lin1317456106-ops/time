class CountdownApp {
    constructor() {
        this.currentDate = new Date();
        this.events = this.loadEvents();
        this.completedEvents = new Set(); // 追踪已完成的事件，避免重复提醒
        this.selectedQuickClock = null; // 选中的快速时钟
        this.animals = [
            { emoji: '🐱', name: 'cat', sound: 'meow' },
            { emoji: '🐶', name: 'dog', sound: 'woof' },
            { emoji: '🐰', name: 'rabbit', sound: 'squeak' },
            { emoji: '🐦', name: 'bird', sound: 'chirp' },
            { emoji: '🐼', name: 'panda', sound: 'grunt' },
            { emoji: '🐸', name: 'frog', sound: 'ribbit' },
            { emoji: '🐨', name: 'koala', sound: 'grunt' },
            { emoji: '🐻', name: 'bear', sound: 'growl' },
            { emoji: '🦊', name: 'fox', sound: 'yip' },
            { emoji: '🐹', name: 'hamster', sound: 'squeak' }
        ];
        this.quickClockOptions = {
            'Asia/Shanghai': { city: '北京', flag: '🇨🇳' },
            'Asia/Tokyo': { city: '东京', flag: '🇯🇵' },
            'America/New_York': { city: '纽约', flag: '🇺🇸' },
            'Europe/London': { city: '伦敦', flag: '🇬🇧' },
            'Europe/Paris': { city: '巴黎', flag: '🇫🇷' },
            'Australia/Sydney': { city: '悉尼', flag: '🇦🇺' },
            'Asia/Dubai': { city: '迪拜', flag: '🇦🇪' },
            'America/Los_Angeles': { city: '洛杉矶', flag: '🇺🇸' },
            'Europe/Moscow': { city: '莫斯科', flag: '🇷🇺' },
            'Asia/Singapore': { city: '新加坡', flag: '🇸🇬' },
            'America/Toronto': { city: '多伦多', flag: '🇨🇦' },
            'Asia/Seoul': { city: '首尔', flag: '🇰🇷' }
        };
        this.init();
    }

    init() {
        this.bindEvents();
        this.updateCurrentMonth();
        this.renderEvents();
        this.startCountdownTimer();
        this.initializeLanguage();
    }

    bindEvents() {
        // 月份切换按钮
        document.getElementById('prevMonth').addEventListener('click', () => {
            this.currentDate.setMonth(this.currentDate.getMonth() - 1);
            this.updateCurrentMonth();
            this.renderEvents();
        });

        document.getElementById('nextMonth').addEventListener('click', () => {
            this.currentDate.setMonth(this.currentDate.getMonth() + 1);
            this.updateCurrentMonth();
            this.renderEvents();
        });

        // 添加事件按钮
        document.getElementById('addEventBtn').addEventListener('click', () => {
            this.showAddEventModal();
        });

        // 弹窗相关
        document.getElementById('closeModal').addEventListener('click', () => {
            this.hideAddEventModal();
        });

        document.getElementById('cancelBtn').addEventListener('click', () => {
            this.hideAddEventModal();
        });

        document.getElementById('confirmBtn').addEventListener('click', () => {
            this.addEvent();
        });

        // 点击弹窗外部关闭
        document.getElementById('addEventModal').addEventListener('click', (e) => {
            if (e.target.id === 'addEventModal') {
                this.hideAddEventModal();
            }
        });

        // 回车键提交
        document.getElementById('eventTitle').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.addEvent();
            }
        });

        // 通知弹窗关闭按钮
        document.getElementById('notificationClose').addEventListener('click', () => {
            this.hideNotificationModal();
        });

        // 点击通知弹窗外部关闭
        document.getElementById('notificationModal').addEventListener('click', (e) => {
            if (e.target.id === 'notificationModal') {
                this.hideNotificationModal();
            }
        });

        // 快速时钟选择器
        document.getElementById('quickClockSelect').addEventListener('change', (e) => {
            this.selectQuickClock(e.target.value);
        });

        // 快速时钟关闭按钮
        document.getElementById('quickClockClose').addEventListener('click', () => {
            this.closeQuickClock();
        });

        // 语言切换相关事件
        document.getElementById('languageBtn').addEventListener('click', () => {
            this.toggleLanguageDropdown();
        });

        document.querySelectorAll('.language-option').forEach(option => {
            option.addEventListener('click', (e) => {
                const lang = e.target.getAttribute('data-lang');
                this.switchLanguage(lang);
            });
        });

        // 点击其他地方关闭语言下拉菜单
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.language-selector')) {
                this.closeLanguageDropdown();
            }
        });

        // 监听语言变更事件
        window.addEventListener('languageChanged', () => {
            this.updateCurrentMonth();
            this.renderEvents();
        });

        // 页脚链接事件
        document.getElementById('privacyLink').addEventListener('click', (e) => {
            e.preventDefault();
            this.showInfoModal('privacy');
        });

        document.getElementById('aboutLink').addEventListener('click', (e) => {
            e.preventDefault();
            this.showInfoModal('about');
        });

        document.getElementById('termsLink').addEventListener('click', (e) => {
            e.preventDefault();
            this.showInfoModal('terms');
        });

        // 模态框关闭事件
        document.getElementById('privacyClose').addEventListener('click', () => {
            this.hideInfoModal('privacy');
        });

        document.getElementById('aboutClose').addEventListener('click', () => {
            this.hideInfoModal('about');
        });

        document.getElementById('termsClose').addEventListener('click', () => {
            this.hideInfoModal('terms');
        });

        // 点击模态框背景关闭
        document.getElementById('privacyModal').addEventListener('click', (e) => {
            if (e.target.classList.contains('info-modal')) {
                this.hideInfoModal('privacy');
            }
        });

        document.getElementById('aboutModal').addEventListener('click', (e) => {
            if (e.target.classList.contains('info-modal')) {
                this.hideInfoModal('about');
            }
        });

        document.getElementById('termsModal').addEventListener('click', (e) => {
            if (e.target.classList.contains('info-modal')) {
                this.hideInfoModal('terms');
            }
        });
    }

    updateCurrentMonth() {
        const monthNames = window.langManager.t('monthNames');
        const year = this.currentDate.getFullYear();
        const month = this.currentDate.getMonth();
        
        if (window.langManager.getCurrentLanguage() === 'zh') {
            document.getElementById('currentMonth').textContent = `${year}年${monthNames[month]}`;
        } else {
            document.getElementById('currentMonth').textContent = `${monthNames[month]} ${year}`;
        }
    }

    showAddEventModal() {
        // 设置默认日期为今天
        const today = new Date();
        const dateStr = today.toISOString().split('T')[0];
        document.getElementById('eventDate').value = dateStr;
        document.getElementById('eventTitle').value = '';
        document.getElementById('eventTime').value = '09:00';
        
        document.getElementById('addEventModal').style.display = 'block';
        document.getElementById('eventTitle').focus();
    }

    hideAddEventModal() {
        document.getElementById('addEventModal').style.display = 'none';
    }

    addEvent() {
        const title = document.getElementById('eventTitle').value.trim();
        const date = document.getElementById('eventDate').value;
        const time = document.getElementById('eventTime').value;

        if (!title || !date) {
            alert(window.langManager.t('pleaseEnterNameAndDate'));
            return;
        }

        const targetDateTime = new Date(`${date} ${time}`);
        
        const newEvent = {
            id: Date.now(),
            title: title,
            targetDate: targetDateTime.toISOString(),
            status: 'active'
        };

        this.events.push(newEvent);
        this.saveEvents();
        this.renderEvents();
        this.hideAddEventModal();
    }

    deleteEvent(eventId) {
        if (confirm(window.langManager.t('deleteConfirm'))) {
            this.events = this.events.filter(event => event.id !== eventId);
            this.saveEvents();
            this.renderEvents();
        }
    }

    renderEvents() {
        const container = document.getElementById('eventsContainer');
        const currentMonth = this.currentDate.getMonth();
        const currentYear = this.currentDate.getFullYear();

        // 筛选当前月份的事件
        const currentMonthEvents = this.events.filter(event => {
            const eventDate = new Date(event.targetDate);
            return eventDate.getMonth() === currentMonth && eventDate.getFullYear() === currentYear;
        });

        // 分离进行中和已结束的事件
        const activeEvents = currentMonthEvents.filter(event => !this.isEventFinished(event));
        const finishedEvents = currentMonthEvents.filter(event => this.isEventFinished(event));

        // 按时间排序
        activeEvents.sort((a, b) => new Date(a.targetDate) - new Date(b.targetDate));
        finishedEvents.sort((a, b) => new Date(b.targetDate) - new Date(a.targetDate)); // 已结束的按完成时间降序

        if (currentMonthEvents.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <h3>${window.langManager.t('noEvents')}</h3>
                    <p>${window.langManager.t('noEventsDesc')}</p>
                </div>
            `;
            return;
        }

        let html = '';

        // 渲染进行中的事件
        if (activeEvents.length > 0) {
            const activeTitle = window.langManager.getCurrentLanguage() === 'zh' ? '🔥 进行中的倒计时' : '🔥 Active Countdowns';
            html += `
                <div class="section-header">
                    <h3 class="section-title">${activeTitle}</h3>
                    <span class="section-count">${activeEvents.length}</span>
                </div>
                <div class="events-section active-events">
            `;
            
            html += activeEvents.map(event => this.renderEventCard(event)).join('');
            html += '</div>';
        }

        // 渲染已结束的事件
        if (finishedEvents.length > 0) {
            const finishedTitle = window.langManager.getCurrentLanguage() === 'zh' ? '✅ 已完成的事件' : '✅ Completed Events';
            html += `
                <div class="section-header finished-section">
                    <h3 class="section-title">${finishedTitle}</h3>
                    <span class="section-count">${finishedEvents.length}</span>
                </div>
                <div class="events-section finished-events">
            `;
            
            html += finishedEvents.map(event => this.renderEventCard(event)).join('');
            html += '</div>';
        }

        container.innerHTML = html;
    }

    renderEventCard(event) {
        const isFinished = this.isEventFinished(event);
        const countdownData = this.calculateCountdown(event);

        return `
            <div class="event-item ${isFinished ? 'finished' : ''}">
                <button class="delete-btn" onclick="app.deleteEvent(${event.id})">×</button>
                <div class="event-title">${this.escapeHtml(event.title)}</div>
                <div class="event-date">${this.formatEventDate(event.targetDate)}</div>
                <div class="countdown-container">
                    <div class="countdown-label">${countdownData.text}</div>
                    <div class="countdown-display">
                        ${countdownData.days > 0 ? `
                            <div class="time-unit">
                                <span class="time-number">${String(countdownData.days).padStart(2, '0')}</span>
                                <span class="time-label">${window.langManager.t('days')}</span>
                            </div>
                        ` : ''}
                        <div class="time-unit">
                            <span class="time-number">${String(countdownData.hours).padStart(2, '0')}</span>
                            <span class="time-label">${window.langManager.t('hours')}</span>
                        </div>
                        <div class="time-unit">
                            <span class="time-number">${String(countdownData.minutes).padStart(2, '0')}</span>
                            <span class="time-label">${window.langManager.t('minutes')}</span>
                        </div>
                        <div class="time-unit">
                            <span class="time-number">${String(countdownData.seconds).padStart(2, '0')}</span>
                            <span class="time-label">${window.langManager.t('seconds')}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    calculateCountdown(event) {
        const now = new Date();
        const target = new Date(event.targetDate);
        const diff = target - now;

        if (diff <= 0) {
            // 倒计时结束，停止计时，显示00:00:00
            return {
                isFinished: true,
                text: window.langManager.t('finished'),
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            };
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        const remainingText = window.langManager.getCurrentLanguage() === 'zh' ? '剩余时间' : 'Time Remaining';
        
        return {
            isFinished: false,
            text: remainingText,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        };
    }

    isEventFinished(event) {
        return new Date() > new Date(event.targetDate);
    }

    formatEventDate(dateString) {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        
        return `${year}-${month}-${day} ${hours}:${minutes}`;
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    startCountdownTimer() {
        // 每秒更新一次倒计时和快速时钟
        setInterval(() => {
            this.checkForCompletedEvents();
            this.renderEvents();
            this.updateQuickClock();
        }, 1000);
    }

    // 快速时钟相关方法
    selectQuickClock(timezone) {
        if (!timezone) {
            this.closeQuickClock();
            return;
        }

        this.selectedQuickClock = timezone;
        const clockInfo = this.quickClockOptions[timezone];
        
        // 显示快速时钟
        const display = document.getElementById('quickClockDisplay');
        const city = document.getElementById('quickClockCity');
        const date = document.getElementById('quickClockDate');
        
        city.textContent = `${clockInfo.flag} ${clockInfo.city}`;
        display.style.display = 'flex';
        
        // 立即更新时间
        this.updateQuickClock();
    }

    updateQuickClock() {
        if (!this.selectedQuickClock) return;
        
        const time = this.getTimeInTimezone(this.selectedQuickClock);
        const timeElement = document.getElementById('quickClockTime');
        const dateElement = document.getElementById('quickClockDate');
        
        if (timeElement && dateElement) {
            const timeString = time.toLocaleTimeString('zh-CN', {
                hour12: false,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            });
            
            const dateString = time.toLocaleDateString('zh-CN', {
                month: 'short',
                day: 'numeric',
                weekday: 'short'
            });
            
            timeElement.textContent = timeString;
            dateElement.textContent = dateString;
        }
    }

    closeQuickClock() {
        this.selectedQuickClock = null;
        document.getElementById('quickClockDisplay').style.display = 'none';
        document.getElementById('quickClockSelect').value = '';
    }

    getTimeInTimezone(timezone) {
        const now = new Date();
        return new Date(now.toLocaleString("en-US", { timeZone: timezone }));
    }

    checkForCompletedEvents() {
        const now = new Date();
        
        this.events.forEach(event => {
            const targetDate = new Date(event.targetDate);
            const wasFinished = this.completedEvents.has(event.id);
            const isNowFinished = now >= targetDate;
            
            // 如果事件刚刚完成（之前未完成，现在完成了）
            if (!wasFinished && isNowFinished) {
                this.completedEvents.add(event.id);
                this.showCompletionNotification(event);
            }
        });
    }

    showCompletionNotification(event) {
        // 随机选择一个动物
        const randomAnimal = this.animals[Math.floor(Math.random() * this.animals.length)];
        
        // 更新通知内容
        document.getElementById('notificationTitle').textContent = '🎉 倒计时结束！';
        document.getElementById('notificationText').textContent = `"${event.title}" 的时间到了！`;
        
        // 生成动物动画
        this.generateAnimalAnimation(randomAnimal);
        
        // 播放动物声音
        this.playAnimalSound(randomAnimal.sound);
        
        // 生成庆祝粒子
        this.generateCelebrationParticles();
        
        // 显示通知弹窗
        document.getElementById('notificationModal').style.display = 'block';
        
        // 移除自动关闭功能，只保留手动关闭
    }

    generateAnimalAnimation(animal) {
        const container = document.getElementById('animalContainer');
        container.innerHTML = `<div class="animal ${animal.name}">${animal.emoji}</div>`;
    }

    playAnimalSound(soundType) {
        // 使用Web Audio API生成简单的动物声音效果
        if ('AudioContext' in window || 'webkitAudioContext' in window) {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            
            const soundPatterns = {
                meow: [400, 600, 500], // 猫叫
                woof: [200, 150], // 狗叫
                squeak: [800, 1000, 900], // 鼠叫/兔叫
                chirp: [1200, 1500, 1800, 1200], // 鸟叫
                grunt: [150, 100], // 熊/熊猫叫
                ribbit: [300, 400, 300], // 青蛙叫
                growl: [100, 80, 120], // 咆哮
                yip: [600, 800, 700] // 狐狸叫
            };
            
            const frequencies = soundPatterns[soundType] || [400, 600, 500];
            
            frequencies.forEach((freq, index) => {
                setTimeout(() => {
                    const oscillator = audioContext.createOscillator();
                    const gainNode = audioContext.createGain();
                    
                    oscillator.connect(gainNode);
                    gainNode.connect(audioContext.destination);
                    
                    oscillator.frequency.setValueAtTime(freq, audioContext.currentTime);
                    oscillator.type = 'sine';
                    
                    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
                    gainNode.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + 0.01);
                    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.2);
                    
                    oscillator.start(audioContext.currentTime);
                    oscillator.stop(audioContext.currentTime + 0.2);
                }, index * 150);
            });
        }
    }

    generateCelebrationParticles() {
        const container = document.querySelector('.notification-content');
        
        // 创建15个庆祝粒子
        for (let i = 0; i < 15; i++) {
            setTimeout(() => {
                const particle = document.createElement('div');
                particle.className = 'celebration-particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 2 + 's';
                particle.style.animationDuration = (2 + Math.random() * 3) + 's';
                
                // 随机颜色
                const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b', '#eb4d4b', '#6c5ce7'];
                particle.style.background = colors[Math.floor(Math.random() * colors.length)];
                
                container.appendChild(particle);
                
                // 3秒后移除粒子
                setTimeout(() => {
                    if (particle.parentNode) {
                        particle.parentNode.removeChild(particle);
                    }
                }, 3000);
            }, i * 100);
        }
    }

    hideNotificationModal() {
        document.getElementById('notificationModal').style.display = 'none';
        // 清理粒子
        const particles = document.querySelectorAll('.celebration-particle');
        particles.forEach(particle => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        });
    }

    loadEvents() {
        try {
            const stored = localStorage.getItem('countdown-events');
            return stored ? JSON.parse(stored) : [];
        } catch (error) {
            console.error('加载事件数据失败:', error);
            return [];
        }
    }

    saveEvents() {
        try {
            localStorage.setItem('countdown-events', JSON.stringify(this.events));
        } catch (error) {
            console.error('保存事件数据失败:', error);
            alert('保存数据失败，请检查浏览器存储设置');
        }
    }

    // 初始化语言
    initializeLanguage() {
        // 设置初始语言状态
        window.langManager.updatePageTexts();
    }

    // 切换语言下拉菜单显示/隐藏
    toggleLanguageDropdown() {
        const dropdown = document.getElementById('languageDropdown');
        dropdown.classList.toggle('show');
    }

    // 关闭语言下拉菜单
    closeLanguageDropdown() {
        const dropdown = document.getElementById('languageDropdown');
        dropdown.classList.remove('show');
    }

    // 切换语言
    switchLanguage(lang) {
        window.langManager.switchLanguage(lang);
        this.closeLanguageDropdown();
    }

    // 显示信息模态框
    showInfoModal(type) {
        const modal = document.getElementById(`${type}Modal`);
        const content = document.getElementById(`${type}Content`);
        
        if (modal && content) {
            // 根据类型加载相应内容
            const contentKey = `${type}Content`;
            content.innerHTML = window.langManager.t(contentKey);
            
            // 显示模态框
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // 防止背景滚动
            
            // 添加显示动画
            setTimeout(() => {
                modal.classList.add('show');
            }, 10);
        }
    }

    // 隐藏信息模态框
    hideInfoModal(type) {
        const modal = document.getElementById(`${type}Modal`);
        
        if (modal) {
            modal.classList.remove('show');
            document.body.style.overflow = ''; // 恢复背景滚动
            
            // 等待动画完成后隐藏
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300);
        }
    }
}

// 初始化应用
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new CountdownApp();
});