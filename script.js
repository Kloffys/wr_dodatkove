const svg = document.getElementById("metro");
const yearSelect = document.getElementById("yearSelect");
const svgNS = "http://www.w3.org/2000/svg";

const metroByYear = {
    1975: {
        red: [
            { coords: [235, 330], name: "Вулиця Свердлова" },
            { coords: [303, 298], name: "ВокзальнаПівденний вокзал" },
            { coords: [343, 285], name: "Центральний ринок" },
            { coords: [377, 288], name: "Радянська" },
            { coords: [409, 342], name: "Проспект Гагарина" },
            { coords: [465, 353], name: "Спортивна" },
            { coords: [520, 362], name: "Завод імені Малишева" },
            { coords: [584, 378], name: "Московський проспект" },

        ]
    }, 1978: {
        red: [
            { coords: [235, 330], name: "Вулиця Свердлова" },
            { coords: [303, 298], name: "ВокзальнаПівденний вокзал" },
            { coords: [343, 285], name: "Центральний ринок" },
            { coords: [377, 288], name: "Радянська" },
            { coords: [409, 342], name: "Проспект Гагарина" },
            { coords: [465, 353], name: "Спортивна" },
            { coords: [520, 362], name: "Завод імені Малишева" },
            { coords: [584, 378], name: "Московський проспект" },
            { coords: [637, 406], name: "Імені маршала Жукова" },
            { coords: [701, 422], name: "Імені Радянської Армії" },
            { coords: [749, 439], name: "Індустріальна" },
            { coords: [803, 468], name: "Тракторний завод" },
            { coords: [862, 494], name: "Пролетарська" }
        ],

    }, 1984: {
        red: [
            { coords: [235, 330], name: "Вулиця Свердлова" },
            { coords: [303, 298], name: "ВокзальнаПівденний вокзал" },
            { coords: [343, 285], name: "Центральний ринок" },
            { coords: [377, 288], name: "Радянська" },
            { coords: [409, 342], name: "Проспект Гагарина" },
            { coords: [465, 353], name: "Спортивна" },
            { coords: [520, 362], name: "Завод імені Малишева" },
            { coords: [584, 378], name: "Московський проспект" },
            { coords: [637, 406], name: "Імені маршала Жукова" },
            { coords: [701, 422], name: "Імені Радянської Армії" },
            { coords: [749, 439], name: "Індустріальна" },
            { coords: [803, 468], name: "Тракторний завод" },
            { coords: [862, 494], name: "Пролетарська" }
        ],

        blue: [
            { coords: [377, 280], name: "Історичний музей" },
            { coords: [387, 232], name: "Дзержинська" },
            { coords: [424, 235], name: "Пушкінська" },
            { coords: [485, 245], name: "Київська" },
            { coords: [585, 241], name: "Барабашова" },

        ]
    }, 1986: {
        red: [
            { coords: [235, 330], name: "Вулиця Свердлова" },
            { coords: [303, 298], name: "ВокзальнаПівденний вокзал" },
            { coords: [343, 285], name: "Центральний ринок" },
            { coords: [377, 288], name: "Радянська" },
            { coords: [409, 342], name: "Проспект Гагарина" },
            { coords: [465, 353], name: "Спортивна" },
            { coords: [520, 362], name: "Завод імені Малишева" },
            { coords: [584, 378], name: "Московський проспект" },
            { coords: [637, 406], name: "Імені маршала Жукова" },
            { coords: [701, 422], name: "Імені Радянської Армії" },
            { coords: [749, 439], name: "Індустріальна" },
            { coords: [803, 468], name: "Тракторний завод" },
            { coords: [862, 494], name: "Пролетарська" }
        ],

        blue: [
            { coords: [377, 280], name: "Історичний музей" },
            { coords: [387, 232], name: "Дзержинська" },
            { coords: [424, 235], name: "Пушкінська" },
            { coords: [485, 245], name: "Київська" },
            { coords: [585, 241], name: "Барабашова" },
            { coords: [629, 213], name: "Академіка Павлова" },
            { coords: [661, 177], name: "Студентська" },
            { coords: [682, 138], name: "Героїв Труда" }
        ]
    }, 1995: {
        red: [
            { coords: [235, 330], name: "Вулиця Свердлова" },
            { coords: [303, 298], name: "ВокзальнаПівденний вокзал" },
            { coords: [343, 285], name: "Центральний ринок" },
            { coords: [377, 288], name: "Радянська" },
            { coords: [409, 342], name: "Проспект Гагарина" },
            { coords: [465, 353], name: "Спортивна" },
            { coords: [520, 362], name: "Завод імені Малишева" },
            { coords: [584, 378], name: "Московський проспект" },
            { coords: [637, 406], name: "Імені маршала Жукова" },
            { coords: [701, 422], name: "Імені Радянської Армії" },
            { coords: [749, 439], name: "Індустріальна" },
            { coords: [803, 468], name: "Тракторний завод" },
            { coords: [862, 494], name: "Пролетарська" }
        ],
        green: [
            { coords: [466, 346], name: "Метробудівників імені Г.І.Ващенко" },
            { coords: [477, 303], name: "Площа Повстання" },
            { coords: [403, 253], name: "Архітектора Бекетова" },
            { coords: [384, 224], name: "Держпром" },
            { coords: [365, 193], name: "Наукова" },

        ],
        blue: [
            { coords: [377, 280], name: "Історичний музей" },
            { coords: [387, 232], name: "Дзержинська" },
            { coords: [424, 235], name: "Пушкінська" },
            { coords: [485, 245], name: "Київська" },
            { coords: [585, 241], name: "Барабашова" },
            { coords: [629, 213], name: "Академіка Павлова" },
            { coords: [661, 177], name: "Студентська" },
            { coords: [682, 138], name: "Героїв Труда" }
        ]
    }, 2004: {
        red: [
            { coords: [235, 330], name: "Вулиця Свердлова" },
            { coords: [303, 298], name: "ВокзальнаПівденний вокзал" },
            { coords: [343, 285], name: "Центральний ринок" },
            { coords: [377, 288], name: "Радянська" },
            { coords: [409, 342], name: "Проспект Гагарина" },
            { coords: [465, 353], name: "Спортивна" },
            { coords: [520, 362], name: "Завод імені Малишева" },
            { coords: [584, 378], name: "Московський проспект" },
            { coords: [637, 406], name: "Імені маршала Жукова" },
            { coords: [701, 422], name: "Імені Радянської Армії" },
            { coords: [749, 439], name: "Індустріальна" },
            { coords: [803, 468], name: "Тракторний завод" },
            { coords: [862, 494], name: "Пролетарська" }
        ],
        green: [
            { coords: [466, 346], name: "Метробудівників імені Г.І.Ващенко" },
            { coords: [477, 303], name: "Площа Повстання" },
            { coords: [403, 253], name: "Архітектора Бекетова" },
            { coords: [384, 224], name: "Держпром" },
            { coords: [365, 193], name: "Наукова" },
            { coords: [351, 132], name: "Ботанічний Сад" },
            { coords: [343, 88], name: "23 Серпня" },

        ],
        blue: [
            { coords: [377, 280], name: "Історичний музей" },
            { coords: [387, 232], name: "Дзержинська" },
            { coords: [424, 235], name: "Пушкінська" },
            { coords: [485, 245], name: "Київська" },
            { coords: [585, 241], name: "Барабашова" },
            { coords: [629, 213], name: "Академіка Павлова" },
            { coords: [661, 177], name: "Студентська" },
            { coords: [682, 138], name: "Героїв Труда" }
        ]
    },

    2010: {
        red: [
            { coords: [235, 330], name: "Вулиця Свердлова" },
            { coords: [303, 298], name: "ВокзальнаПівденний вокзал" },
            { coords: [343, 285], name: "Центральний ринок" },
            { coords: [377, 288], name: "Радянська" },
            { coords: [409, 342], name: "Проспект Гагарина" },
            { coords: [465, 353], name: "Спортивна" },
            { coords: [520, 362], name: "Завод імені Малишева" },
            { coords: [584, 378], name: "Московський проспект" },
            { coords: [637, 406], name: "Імені маршала Жукова" },
            { coords: [701, 422], name: "Імені Радянської Армії" },
            { coords: [749, 439], name: "Індустріальна" },
            { coords: [803, 468], name: "Тракторний завод" },
            { coords: [862, 494], name: "Пролетарська" }
        ],
        green: [
            { coords: [466, 346], name: "Метробудівників імені Г.І.Ващенко" },
            { coords: [477, 303], name: "Площа Повстання" },
            { coords: [403, 253], name: "Архітектора Бекетова" },
            { coords: [384, 224], name: "Держпром" },
            { coords: [365, 193], name: "Наукова" },
            { coords: [351, 132], name: "Ботанічний Сад" },
            { coords: [343, 88], name: "23 Серпня" },
            { coords: [303, 26], name: "Олексіївська" },

        ],
        blue: [
            { coords: [377, 280], name: "Історичний музей" },
            { coords: [387, 232], name: "Дзержинська" },
            { coords: [424, 235], name: "Пушкінська" },
            { coords: [485, 245], name: "Київська" },
            { coords: [585, 241], name: "Барабашова" },
            { coords: [629, 213], name: "Академіка Павлова" },
            { coords: [661, 177], name: "Студентська" },
            { coords: [682, 138], name: "Героїв Труда" }
        ]
    },

    2016: {
        red: [
            { coords: [235, 330], name: "Вулиця Свердлова" },
            { coords: [303, 298], name: "ВокзальнаПівденний вокзал" },
            { coords: [343, 285], name: "Центральний ринок" },
            { coords: [377, 288], name: "Радянська" },
            { coords: [409, 342], name: "Проспект Гагарина" },
            { coords: [465, 353], name: "Спортивна" },
            { coords: [520, 362], name: "Завод імені Малишева" },
            { coords: [584, 378], name: "Московський проспект" },
            { coords: [637, 406], name: "Імені маршала Жукова" },
            { coords: [701, 422], name: "Імені Радянської Армії" },
            { coords: [749, 439], name: "Індустріальна" },
            { coords: [803, 468], name: "Тракторний завод" },
            { coords: [862, 494], name: "Пролетарська" }
        ],
        green: [
            { coords: [466, 346], name: "Метробудівників імені Г.І.Ващенко" },
            { coords: [477, 303], name: "Площа Повстання" },
            { coords: [403, 253], name: "Архітектора Бекетова" },
            { coords: [384, 224], name: "Держпром" },
            { coords: [365, 193], name: "Наукова" },
            { coords: [351, 132], name: "Ботанічний Сад" },
            { coords: [343, 88], name: "23 Серпня" },
            { coords: [303, 26], name: "Олексіївська" },
            { coords: [278, -1], name: "Перемога" }
        ],
        blue: [
            { coords: [377, 280], name: "Історичний музей" },
            { coords: [387, 232], name: "Дзержинська" },
            { coords: [424, 235], name: "Пушкінська" },
            { coords: [485, 245], name: "Київська" },
            { coords: [585, 241], name: "Барабашова" },
            { coords: [629, 213], name: "Академіка Павлова" },
            { coords: [661, 177], name: "Студентська" },
            { coords: [682, 138], name: "Героїв Труда" }
        ]
    },
    2025: {
        red: [
            { coords: [235, 330], name: "Холодна гора" },
            { coords: [303, 298], name: "Вокзальна" },
            { coords: [343, 285], name: "Центральний ринок" },
            { coords: [377, 288], name: "Майдан Коституції" },
            { coords: [409, 342], name: "Левада" },
            { coords: [465, 353], name: "Спортивна" },
            { coords: [520, 362], name: "Заводська" },
            { coords: [584, 378], name: "Турбоатом" },
            { coords: [637, 406], name: "Палац Спорту" },
            { coords: [701, 422], name: "Армійська" },
            { coords: [749, 439], name: "Імені О.С.Масельського" },
            { coords: [803, 468], name: "Тракторний завод" },
            { coords: [862, 494], name: "Індустріальна" }
        ],
        green: [
            { coords: [466, 346], name: "Метробудівників" },
            { coords: [477, 303], name: "Захисників України" },
            { coords: [403, 253], name: "Архітектора Бекетова" },
            { coords: [384, 224], name: "Держпром" },
            { coords: [365, 193], name: "Наукова" },
            { coords: [351, 132], name: "Ботанічний Сад" },
            { coords: [343, 88], name: "23 Серпня" },
            { coords: [303, 26], name: "Олексіївська" },
            { coords: [278, -1], name: "Перемога" }
        ],
        blue: [
            { coords: [377, 280], name: "Історичний музей" },
            { coords: [387, 232], name: "Університет" },
            { coords: [424, 235], name: "Ярослава мудрого" },
            { coords: [485, 245], name: "Київська" },
            { coords: [585, 241], name: "Академіка Барабашова" },
            { coords: [629, 213], name: "Академіка Павлова" },
            { coords: [661, 177], name: "Студентська" },
            { coords: [682, 138], name: "Салтівська" }
        ]
    },
};

const tooltip = document.createElement("div");
tooltip.style.position = "absolute";
tooltip.style.padding = "4px 8px";
tooltip.style.background = "rgba(0,0,0,0.7)";
tooltip.style.color = "#fff";
tooltip.style.borderRadius = "4px";
tooltip.style.fontSize = "12px";
tooltip.style.pointerEvents = "none";
tooltip.style.display = "none";
document.body.appendChild(tooltip);

function drawLine(name, points) {
    const polyline = document.createElementNS(svgNS, "polyline");
    polyline.setAttribute(
        "points",
        points.map(p => p.coords.join(",")).join(" ")
    );
    polyline.setAttribute("class", `line ${name}`);
    svg.appendChild(polyline);

    points.forEach(p => {
        const [x, y] = p.coords;
        const circle = document.createElementNS(svgNS, "circle");
        circle.setAttribute("cx", x);
        circle.setAttribute("cy", y);
        circle.setAttribute("r", 5);
        circle.setAttribute("class", `station ${name}`);
        svg.appendChild(circle);

        circle.addEventListener("mouseenter", () => {
            tooltip.textContent = p.name;
            tooltip.style.display = "block";
        });

        circle.addEventListener("mouseleave", () => {
            tooltip.style.display = "none";
        });

        circle.addEventListener("mousemove", e => {
            tooltip.style.left = e.pageX + 10 + "px";
            tooltip.style.top = e.pageY + 10 + "px";
        });
    });
}

function renderMetro(year) {
    svg.innerHTML = "";
    const metroLines = metroByYear[year];

    Object.entries(metroLines).forEach(([name, points]) => {
        drawLine(name, points);
    });
}

yearSelect.addEventListener("change", () => {
    renderMetro(yearSelect.value);
});

renderMetro("2025");
