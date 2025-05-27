const VERSION = '1.5.5';


const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

const overlay = document.createElement('div');
overlay.className = 'theme-transition-overlay';
document.body.appendChild(overlay);

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    html.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

themeToggle.addEventListener('click', (e) => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.body.classList.add('theme-transition-active');
    
    const icon = themeToggle.querySelector('i');
    icon.style.transform = 'scale(0.8)';
    
    requestAnimationFrame(() => {
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        updateThemeIcon(newTheme);
        icon.style.transform = 'scale(1.1)';
        
        setTimeout(() => {
            icon.style.transform = 'scale(1)';
            document.body.classList.remove('theme-transition-active');
        }, 400);
    });
});

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    icon.classList.remove(theme === 'dark' ? 'fa-moon' : 'fa-sun');
    icon.classList.add(theme === 'dark' ? 'fa-sun' : 'fa-moon');
}

const schedule = {
    "mon": {
        "date": "2025-05-26",
        "lessons": [
            {
                "start": "8:30",
                "end": "9:15",
                "subject": "Спецтехнологія",
                "teacher": "Ромашина В. В.",
                "location": "Ауд. 23"
            },
            {
                "start": "9:25",
                "end": "10:10",
                "subject": "Спецтехнологія",
                "teacher": "Ромашина В. В.",
                "location": "Ауд. 23"
            },
            {
                "start": "10:25",
                "end": "11:10",
                "subject": "Хімія",
                "teacher": "Гінтов М. С.",
                "location": "Ауд. 8-2"
            },
            {
                "start": "11:30",
                "end": "12:15",
                "subject": "Хімія",
                "teacher": "Гінтов М. С.",
                "location": "Ауд. 8-2"
            },
            {
                "start": "12:35",
                "end": "13:20",
                "subject": "Українська література",
                "teacher": "Прокопенко А. О.",
                "location": "Ауд. 7-2"
            },
            {
                "start": "13:30",
                "end": "14:15",
                "subject": "Українська література",
                "teacher": "Прокопенко А. О.",
                "location": "Ауд. 7-2"
            },
            {
                "start": "14:30",
                "end": "15:15",
                "subject": "Математика",
                "teacher": "Чіркова Н. В.",
                "location": "Ауд. 23-2"
            },
            {
                "start": "15:25",
                "end": "16:10",
                "subject": "Фізична культура",
                "teacher": "Смірнов А. А.",
                "location": "С/М_1"
            }
        ]
    },
    "tue": {
        "date": "2025-05-27",
        "lessons": [
            {
                "start": "8:30",
                "end": "9:15",
                "subject": "Іноземна мова",
                "teacher": "Іванченко Л. В. / Іванченко С. С.",
                "location": "Ауд. 17/17-2"
            },
            {
                "start": "9:25",
                "end": "10:10",
                "subject": "Іноземна мова",
                "teacher": "Іванченко Л. В. / Іванченко С. С.",
                "location": "Ауд. 17/17-2"
            },
            {
                "start": "10:25",
                "end": "11:10",
                "subject": "Фізика і астрономія",
                "teacher": "Журав В. В.",
                "location": "Ауд. 45-2"
            },
            {
                "start": "11:30",
                "end": "12:15",
                "subject": "Фізика і астрономія",
                "teacher": "Журав В. В.",
                "location": "Ауд. 45-2"
            },
            {
                "start": "12:35",
                "end": "13:20",
                "subject": "Осн. Енергоефективності",
                "teacher": "Ромашина В. В.",
                "location": "Ауд. 23"
            },
            {
                "start": "13:30",
                "end": "14:15",
                "subject": "Осн. Енергоефективності",
                "teacher": "Ромашина В. В.",
                "location": "Ауд. 23"
            },
            {
                "start": "14:30",
                "end": "15:15",
                "subject": "Електроматеріалознавство",
                "teacher": "Мацак І. В.",
                "location": "Ауд. 25"
            },
            {
                "start": "15:25",
                "end": "16:10",
                "subject": "Електроматеріалознавство",
                "teacher": "Мацак І. В.",
                "location": "Ауд. 25"
            }
        ]
    },
    "wed": {
        "date": "2025-05-28",
        "lessons": [
            {
                "start": "8:00",
                "end": "13:35",
                "subject": "Виробниче навчання",
                "teacher": "Ковальчук М. В. / Мацак І. В.",
                "location": "ел.майс 1 / ел.майс 2",
                "timeBlocks": [
                    "8:00 - 8:45",
                    "8:55 - 9:40",
                    "9:50 - 10:35",
                    "11:00 - 11:45",
                    "11:55 - 12:40",
                    "12:50 - 13:35"
                ]
            }
        ]
    },
    "thu": {
        "date": "2025-05-29",
        "lessons": [
            {
                "start": "8:00",
                "end": "13:35",
                "subject": "Виробниче навчання",
                "teacher": "Ковальчук М. В. / Мацак І. В.",
                "location": "ел.майс 1 / ел.майс 2",
                "timeBlocks": [
                    "8:00 - 8:45",
                    "8:55 - 9:40",
                    "9:50 - 10:35",
                    "11:00 - 11:45",
                    "11:55 - 12:40",
                    "12:50 - 13:35"
                ]
            }
        ]
    },
    "fri": {
        "date": "2025-05-30",
        "lessons": [
            {
                "start": "8:30",
                "end": "9:15",
                "subject": "Географія",
                "teacher": "Коломієць Л. А.",
                "location": "Ауд. 31-2"
            },
            {
                "start": "9:25",
                "end": "10:10",
                "subject": "Географія",
                "teacher": "Коломієць Л. А.",
                "location": "Ауд. 31-2"
            },
            {
                "start": "10:25",
                "end": "11:10",
                "subject": "Зарубіжна література",
                "teacher": "Ковальова Т. М.",
                "location": "Ауд. 42-2"
            },
            {
                "start": "11:30",
                "end": "12:15",
                "subject": "Зарубіжна література",
                "teacher": "Ковальова Т. М.",
                "location": "Ауд. 42-2"
            },
            {
                "start": "12:35",
                "end": "13:20",
                "subject": "Фізична культура",
                "teacher": "Смірнов А. А.",
                "location": "С/М_1"
            },
            {
                "start": "13:30",
                "end": "14:15",
                "subject": "Фізична культура",
                "teacher": "Смірнов А. А.",
                "location": "С/М_1"
            }
        ]
    }
};




function calculateDuration(start, end) {
    const [startH, startM] = start.split(':').map(Number);
    const [endH, endM] = end.split(':').map(Number);
    const totalMinutes = (endH * 60 + endM) - (startH * 60 + startM);
    return `${Math.floor(totalMinutes / 60)} ч ${totalMinutes % 60} мин`;
}

function renderDaysTabs() {
    const daysContainer = document.getElementById('days-tabs');
    const daysMap = {
        "mon": "ПН", 
        "tue": "ВТ",
        "wed": "СР",
        "thu": "ЧТ",
        "fri": "ПТ"
    };

    for (const [dayId, dayName] of Object.entries(daysMap)) {
        const tab = document.createElement('div');
        tab.className = 'tab';
        tab.textContent = dayName;
        tab.dataset.dayId = dayId;
        tab.onclick = () => {
            tab.style.transform = 'scale(0.95)';
            setTimeout(() => {
                tab.style.transform = '';
                showDay(dayId);
            }, 150);
        };
        daysContainer.appendChild(tab);
    }
}

function highlightCurrentLesson(dayId) {
    const lessons = document.querySelectorAll('.lesson');
    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes();
    
    const dayData = schedule[dayId];
    if (!dayData) return;
    
    const dayDate = new Date(dayData.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    dayDate.setHours(0, 0, 0, 0);
    
    // Reset all lessons and time blocks
    lessons.forEach(lesson => {
        lesson.classList.remove('current', 'next');
        const timeBlocks = lesson.querySelectorAll('.time-block-item');
        timeBlocks.forEach(block => {
            block.classList.remove('current-time-block');
            const remainingTime = block.querySelector('.remaining-time');
            if (remainingTime) remainingTime.remove();
        });
        // Remove remaining time from regular lessons
        const timeBlock = lesson.querySelector('.time-block');
        const existingRemainingTime = timeBlock.querySelector('.remaining-time');
        if (existingRemainingTime) existingRemainingTime.remove();
    });
    
    // If not today, don't highlight anything
    if (dayDate.getTime() !== today.getTime()) return;
    
    let foundCurrentLesson = false;
    
    lessons.forEach(lesson => {
        const timeRange = lesson.querySelector('.time-range').textContent;
        const [start, end] = timeRange.split(' — ');
        const [startH, startM] = start.split(':').map(Number);
        const [endH, endM] = end.split(':').map(Number);
        const lessonStart = startH * 60 + startM;
        const lessonEnd = endH * 60 + endM;
        
        // Check if lesson has time blocks
        const hasTimeBlocks = lesson.querySelector('.time-blocks-container') !== null;
        
        if (hasTimeBlocks) {
            const timeBlockElements = lesson.querySelectorAll('.time-block-item');
            let foundCurrentBlock = false;
            
            timeBlockElements.forEach((block, index) => {
                const blockText = block.textContent.trim();
                const [blockStart, blockEnd] = blockText.split(' - ');
                const [blockStartH, blockStartM] = blockStart.split(':').map(Number);
                const [blockEndH, blockEndM] = blockEnd.split(':').map(Number);
                const blockStartTime = blockStartH * 60 + blockStartM;
                const blockEndTime = blockEndH * 60 + blockEndM;
                
                if (currentTime >= blockStartTime && currentTime <= blockEndTime) {
                    foundCurrentBlock = true;
                    block.classList.add('current-time-block');
                    
                    const remainingTime = blockEndTime - currentTime;
                    const hours = Math.floor(remainingTime / 60);
                    const minutes = remainingTime % 60;
                    
                    const remainingElement = document.createElement('div');
                    remainingElement.className = 'remaining-time';
                    remainingElement.innerHTML = `
                        <div class="remaining-time-label">До конца:</div>
                        <div class="remaining-time-value">${hours > 0 ? `${hours} ч ` : ''}${minutes} мин</div>
                    `;
                    block.appendChild(remainingElement);
                }
            });
            
            if (foundCurrentBlock) {
                lesson.classList.add('current');
                foundCurrentLesson = true;
            }
        } else {
            // For regular lessons without time blocks
            if (currentTime >= lessonStart && currentTime <= lessonEnd) {
                lesson.classList.add('current');
                foundCurrentLesson = true;
                
                const remainingTime = lessonEnd - currentTime;
                const hours = Math.floor(remainingTime / 60);
                const minutes = remainingTime % 60;
                
                const timeBlock = lesson.querySelector('.time-block');
                const remainingElement = document.createElement('div');
                remainingElement.className = 'remaining-time';
                remainingElement.innerHTML = `
                    <div class="remaining-time-label">До конца урока:</div>
                    <div class="remaining-time-value">${hours > 0 ? `${hours} ч ` : ''}${minutes} мин</div>
                `;
                timeBlock.appendChild(remainingElement);
            } else if (currentTime < lessonStart && !foundCurrentLesson) {
                lesson.classList.add('next');
            }
        }
    });
}

function showDay(dayId) {
    const activeTab = document.querySelector('.tab.active');
    if (activeTab && activeTab.dataset.dayId === dayId) {
        return;
    }

    const container = document.getElementById('schedule-container');
    container.innerHTML = '';
    
    const dayData = schedule[dayId];
    if (!dayData) return;
    
    const dayHeader = document.createElement('div');
    dayHeader.className = 'day-header';
    const date = new Date(dayData.date);
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    dayHeader.textContent = date.toLocaleDateString('ru-RU', options);
    container.appendChild(dayHeader);

    dayData.lessons.forEach((lesson, index) => {
        const duration = calculateDuration(lesson.start, lesson.end);
        const lessonElement = document.createElement('div');
        lessonElement.className = 'lesson';
        lessonElement.style.animationDelay = `${index * 0.1}s`;
        
        if (lesson.timeBlocks && lesson.timeBlocks.length > 3) {
            lessonElement.classList.add('single-long-lesson');
        }

        let timeBlocksHTML = '';
        if (lesson.timeBlocks) {
            timeBlocksHTML = `
                <div class="time-blocks-container">
                    ${lesson.timeBlocks.map(block => `
                        <div class="time-block-item">${block}</div>
                    `).join('')}
                </div>
            `;
        }

        lessonElement.innerHTML = `
            <div class="time-block">
                <div class="time-range">${lesson.start} — ${lesson.end}</div>
                <div class="duration">${duration}</div>
                ${timeBlocksHTML}
            </div>
            <div class="subject-info">
                <div class="subject-name">${lesson.subject}</div>
                <div class="subject-meta">
                    <span><i class="fas fa-user"></i> ${lesson.teacher}</span>
                    <span><i class="fas fa-map-marker-alt"></i> ${lesson.location}</span>
                </div>
            </div>
        `;
        container.appendChild(lessonElement);
    });

    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.dayId === dayId);
    });

    highlightCurrentLesson(dayId);
}

function autoSelectCurrentDay() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const dayOfWeek = today.getDay();
    if (dayOfWeek === 0 || dayOfWeek === 6) {
        const container = document.getElementById('schedule-container');
        container.innerHTML = `
            <div class="weekend-message">
                <i class="fas fa-umbrella-beach"></i>
                <h3>Сегодня выходной!</h3>
                <p>Можно отдохнуть и набраться сил.</p>
            </div>
        `;
        
        document.querySelectorAll('.tab').forEach(tab => {
            tab.classList.remove('active');
        });
        return;
    }
    
    for (const dayId in schedule) {
        const dayDate = new Date(schedule[dayId].date);
        if (dayDate.getTime() === today.getTime()) {
            const tab = document.querySelector(`.tab[data-day-id="${dayId}"]`);
            if (tab) {
                setTimeout(() => tab.click(), 300);
            }
            return;
        }
    }
    
    const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    const todayDay = today.getDay();
    const currentDayId = days[todayDay];
    
    if (schedule[currentDayId]) {
        const tab = document.querySelector(`.tab[data-day-id="${currentDayId}"]`);
        if (tab) {
            setTimeout(() => tab.click(), 300);
        }
    }
}

function renderCurrentDate() {
    const today = new Date();
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    document.getElementById('today').textContent = today.toLocaleDateString('ru-RU', options);
    document.getElementById('update-date').textContent = today.toLocaleDateString('ru-RU');
    document.getElementById('version').textContent = `v${VERSION}`;
}

function updateWeekDates(startDate) {
    const date = new Date(startDate);
    const days = ['mon', 'tue', 'wed', 'thu', 'fri'];
    
    days.forEach(day => {
        if (schedule[day]) {
            schedule[day].date = date.toISOString().split('T')[0];
            date.setDate(date.getDate() + 1);
        }
    });

    const activeTab = document.querySelector('.tab.active');
    if (activeTab) {
        showDay(activeTab.dataset.dayId);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    renderDaysTabs();
    renderCurrentDate();
    autoSelectCurrentDay();
});

setInterval(() => {
    const activeTab = document.querySelector('.tab.active');
    if (activeTab) {
        highlightCurrentLesson(activeTab.dataset.dayId);
    }
}, 60000);
