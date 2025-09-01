const VERSION = 'v2.1.0';
const LAST_UPDATE = '2025-09-01';

function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('ru-RU', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    }).replace(/\./g, '.');
}

document.documentElement.setAttribute('data-theme', 'dark');

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
    
    lessons.forEach(lesson => {
        lesson.classList.remove('current', 'next');
        const timeBlocks = lesson.querySelectorAll('.time-block-item');
        timeBlocks.forEach(block => {
            block.classList.remove('current-time-block');
            const remainingTime = block.querySelector('.remaining-time');
            if (remainingTime) remainingTime.remove();
        });
        const timeBlock = lesson.querySelector('.time-block');
        const existingRemainingTime = timeBlock.querySelector('.remaining-time');
        if (existingRemainingTime) existingRemainingTime.remove();
    });
    
    if (dayDate.getTime() !== today.getTime()) return;
    
    let foundCurrentLesson = false;
    
    lessons.forEach(lesson => {
        const timeRange = lesson.querySelector('.time-range').textContent;
        const [start, end] = timeRange.split(' — ');
        const [startH, startM] = start.split(':').map(Number);
        const [endH, endM] = end.split(':').map(Number);
        const lessonStart = startH * 60 + startM;
        const lessonEnd = endH * 60 + endM;
        
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
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const dayDate = new Date(dayData.date);
    dayDate.setHours(0, 0, 0, 0);
    
    if (dayDate.getTime() === today.getTime()) {
        dayHeader.innerHTML += ' <span style="color: var(--text-primary);">(Сегодня)</span>';
    }
    
    if (dayData.lessons && dayData.lessons.length > 0) {
        dayData.lessons.forEach((lesson, index) => {
            const lessonElement = document.createElement('div');
            lessonElement.className = 'lesson';
            lessonElement.style.setProperty('--animation-order', index);
            
            const timeBlock = document.createElement('div');
            timeBlock.className = 'time-block';
            
            const timeRange = document.createElement('div');
            timeRange.className = 'time-range';
            timeRange.textContent = `${lesson.start} — ${lesson.end}`;
            
            const duration = document.createElement('div');
            duration.className = 'duration';
            duration.textContent = calculateDuration(lesson.start, lesson.end);
            
            timeBlock.appendChild(timeRange);
            timeBlock.appendChild(duration);
            
            const subjectInfo = document.createElement('div');
            subjectInfo.className = 'subject-info';
            
            const subjectName = document.createElement('div');
            subjectName.className = 'subject-name';
            subjectName.textContent = lesson.subject;
            
            const subjectMeta = document.createElement('div');
            subjectMeta.className = 'subject-meta';
            
            if (lesson.teacher) {
                const teacherSpan = document.createElement('span');
                teacherSpan.innerHTML = `<i class="fas fa-user"></i>${lesson.teacher}`;
                subjectMeta.appendChild(teacherSpan);
            }
            
            if (lesson.location) {
                const locationSpan = document.createElement('span');
                locationSpan.innerHTML = `<i class="fas fa-map-marker-alt"></i>${lesson.location}`;
                subjectMeta.appendChild(locationSpan);
            }
            
            if (lesson.type) {
                const typeSpan = document.createElement('span');
                typeSpan.innerHTML = `<i class="fas fa-tag"></i>${lesson.type}`;
                subjectMeta.appendChild(typeSpan);
            }
            
            subjectInfo.appendChild(subjectName);
            subjectInfo.appendChild(subjectMeta);
            
            lessonElement.appendChild(timeBlock);
            lessonElement.appendChild(subjectInfo);
            
            if (lesson.time_blocks && lesson.time_blocks.length > 0) {
                const timeBlocksContainer = document.createElement('div');
                timeBlocksContainer.className = 'time-blocks-container';
                
                lesson.time_blocks.forEach((block, blockIndex) => {
                    const timeBlockItem = document.createElement('div');
                    timeBlockItem.className = 'time-block-item';
                    timeBlockItem.textContent = `${block.start} - ${block.end}`;
                    timeBlocksContainer.appendChild(timeBlockItem);
                });
                
                subjectInfo.appendChild(timeBlocksContainer);
            }
            
            container.appendChild(lessonElement);
        });
    } else {
        const noLessons = document.createElement('div');
        noLessons.className = 'weekend-message';
        noLessons.innerHTML = `
            <i class="fas fa-calendar-check"></i>
            <h3>Выходной день</h3>
            <p>Сегодня нет занятий по расписанию</p>
        `;
        container.appendChild(noLessons);
    }
    
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
        if (tab.dataset.dayId === dayId) {
            tab.classList.add('active');
        }
    });
    
    highlightCurrentLesson(dayId);
}

function updateCurrentDate() {
    const today = new Date();
    const options = { 
        weekday: 'long', 
        day: 'numeric', 
        month: 'long',
        year: 'numeric'
    };
    const dateStr = today.toLocaleDateString('ru-RU', options);
    document.getElementById('today').textContent = dateStr;
}

function initializeMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const menuDropdown = document.getElementById('menuDropdown');
    
    menuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        menuDropdown.classList.toggle('show');
        menuToggle.classList.toggle('active');
    });
    
    document.addEventListener('click', function(e) {
        if (!menuDropdown.contains(e.target) && e.target !== menuToggle) {
            menuDropdown.classList.remove('show');
            menuToggle.classList.remove('active');
        }
    });
}

function getCurrentDayId() {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const dayMap = {1: 'mon', 2: 'tue', 3: 'wed', 4: 'thu', 5: 'fri'};
    return dayMap[dayOfWeek] || 'mon';
}

function initialize() {
    updateCurrentDate();
    renderDaysTabs();
    initializeMenu();
    
    document.getElementById('update-date').textContent = formatDate(LAST_UPDATE);
    document.getElementById('version').textContent = VERSION;
    
    const currentDayId = getCurrentDayId();
    showDay(currentDayId);
    
    setInterval(() => {
        const activeTab = document.querySelector('.tab.active');
        if (activeTab) {
            highlightCurrentLesson(activeTab.dataset.dayId);
        }
    }, 60000);
}

document.addEventListener('DOMContentLoaded', initialize);