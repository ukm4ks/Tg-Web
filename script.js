// Обновлённые данные с началом и концом уроков
const schedule = {
    "mon": [
        {
            "start": "8:30",
            "end": "9:15",
            "subject": "Електротехніка",
            "teacher": "Нетесаний А. П.",
            "location": "Ауд. 24"
        },
        {
            "start": "9:25",
            "end": "10:10",
            "subject": "Електротехніка",
            "teacher": "Нетесаний А. П.",
            "location": "Ауд. 24"
        },
        {
            "start": "10:25",
            "end": "11:10",
            "subject": "Історія",
            "teacher": "Бажан-Пушкіна Ю. П.",
            "location": "Ауд. 25-2"
        },
        {
            "start": "11:30",
            "end": "12:15",
            "subject": "Історія",
            "teacher": "Бажан-Пушкіна Ю. П.",
            "location": "Ауд. 25-2"
        },
        {
            "start": "12:35",
            "end": "13:20",
            "subject": "Зарубіжна література",
            "teacher": "Ковальова Т. М.",
            "location": "Ауд. 42-2"
        },
        {
            "start": "13:30",
            "end": "14:15",
            "subject": "Зарубіжна література",
            "teacher": "Ковальова Т. М.",
            "location": "Ауд. 42-2"
        },
        {
            "start": "14:30",
            "end": "15:15",
            "subject": "Іноземна мова",
            "teacher": "Іванченко Л. В. / Іванченко С. С.",
            "location": "Ауд. 17 / 17-2"
        },
        {
            "start": "15:25",
            "end": "16:10",
            "subject": "Іноземна мова",
            "teacher": "Іванченко Л. В. / Іванченко С. С.",
            "location": "Ауд. 17 / 17-2"
        }
    ],
    "tue": [
        {
            "start": "8:30",
            "end": "15:40",
            "subject": "Виробниче навчання",
            "teacher": "—",
            "location": "—"
        }
    ],
    "wed": [
        {
            "start": "8:30",
            "end": "9:15",
            "subject": "Математика",
            "teacher": "—",
            "location": "Ауд. 31-2"
        },
        {
            "start": "9:25",
            "end": "10:10",
            "subject": "Математика",
            "teacher": "—",
            "location": "Ауд. 31-2"
        },
        {
            "start": "10:20",
            "end": "11:05",
            "subject": "Спецтехнологія",
            "teacher": "—",
            "location": "Ауд. 23"
        },
        {
            "start": "11:15",
            "end": "12:00",
            "subject": "Спецтехнологія",
            "teacher": "—",
            "location": "Ауд. 23"
        },
        {
            "start": "12:10",
            "end": "12:55",
            "subject": "Фізична культура",
            "teacher": "—",
            "location": "С/М_1"
        },
        {
            "start": "13:05",
            "end": "13:50",
            "subject": "Фізична культура",
            "teacher": "—",
            "location": "С/М_1"
        },
        {
            "start": "14:00",
            "end": "14:45",
            "subject": "Електроматеріалознавство",
            "teacher": "—",
            "location": "Ауд. 25"
        },
        {
            "start": "14:55",
            "end": "15:40",
            "subject": "Електроматеріалознавство",
            "teacher": "—",
            "location": "Ауд. 25"
        }
    ],
    "thu": [
        {
            "start": "8:30",
            "end": "9:15",
            "subject": "Хімія",
            "teacher": "—",
            "location": "Ауд. 8-2"
        },
        {
            "start": "9:25",
            "end": "10:10",
            "subject": "Хімія",
            "teacher": "—",
            "location": "Ауд. 8-2"
        },
        {
            "start": "10:20",
            "end": "11:05",
            "subject": "Географія",
            "teacher": "—",
            "location": "Ауд. 31-2"
        },
        {
            "start": "11:15",
            "end": "12:00",
            "subject": "Географія",
            "teacher": "—",
            "location": "Ауд. 31-2"
        },
        {
            "start": "12:10",
            "end": "12:55",
            "subject": "Фізика і астрономія",
            "teacher": "—",
            "location": "Ауд. 45-2"
        },
        {
            "start": "13:05",
            "end": "13:50",
            "subject": "Фізика і астрономія",
            "teacher": "—",
            "location": "Ауд. 45-2"
        }
    ],
    "fri": [
        {
            "start": "8:30",
            "end": "9:15",
            "subject": "Українська література",
            "teacher": "—",
            "location": "Ауд. 43-2"
        },
        {
            "start": "9:25",
            "end": "10:10",
            "subject": "Українська література",
            "teacher": "—",
            "location": "Ауд. 43-2"
        },
        {
            "start": "10:20",
            "end": "11:05",
            "subject": "Історія",
            "teacher": "—",
            "location": "Ауд. 25-2"
        },
        {
            "start": "11:15",
            "end": "12:00",
            "subject": "Історія",
            "teacher": "—",
            "location": "Ауд. 25-2"
        },
        {
            "start": "12:10",
            "end": "12:55",
            "subject": "Фізика і астрономія",
            "teacher": "—",
            "location": "Ауд. 45-2"
        },
        {
            "start": "13:05",
            "end": "13:50",
            "subject": "Математика (?)",
            "teacher": "—",
            "location": "Ауд. 31-2"
        },
        {
            "start": "14:00",
            "end": "14:45",
            "subject": "Фізична культура",
            "teacher": "—",
            "location": "С/М_1"
        }
    ]
};


// Функции
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
        tab.onclick = () => showDay(dayId);
        daysContainer.appendChild(tab);
    }
}

function showDay(dayId) {
    const container = document.getElementById('schedule-container');
    container.innerHTML = '';

    schedule[dayId].forEach((lesson, index) => {
        const duration = calculateDuration(lesson.start, lesson.end);
        const lessonElement = document.createElement('div');
        lessonElement.className = 'lesson';
        lessonElement.style.animationDelay = `${index * 0.1}s`;
        lessonElement.style.backgroundColor = index % 2 === 0 
            ? 'rgba(92,75,219,0.03)' 
            : 'rgba(255,236,153,0.1)';

        lessonElement.innerHTML = `
            <div class="time-block">
                <div class="time-range">${lesson.start} — ${lesson.end}</div>
                <div class="duration">${duration}</div>
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
        tab.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
}

function autoSelectCurrentDay() {
    const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    const today = new Date().getDay();
    const currentDayId = days[today];
    
    if (schedule[currentDayId]) {
        const tabs = document.querySelectorAll('.tab');
        tabs[today - 1]?.click();
    }
}

function renderCurrentDate() {
    const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    const today = new Date();
    document.getElementById('today').textContent = `${days[today.getDay()]}, ${today.toLocaleDateString()}`;
    document.getElementById('update-date').textContent = today.toLocaleDateString();
}

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    renderDaysTabs();
    renderCurrentDate();
    autoSelectCurrentDay();
});