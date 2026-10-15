<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:0F2557,100:2563EB&height=170&section=header&text=BMI%20Calculator&fontSize=42&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=Abhishek%20Jadhav%20%7C%20Veda%20Technology%20Internship&descAlignY=62&descSize=17" alt="BMI Calculator header" />

  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=500&size=20&pause=1000&color=2563EB&center=true&vCenter=true&width=680&lines=Veda+Technology+Internship+%E2%80%A2+Task+6;HTML5+%E2%80%A2+CSS3+%E2%80%A2+Vanilla+JavaScript;Height+%2B+Weight+%E2%86%92+BMI+%2B+Category" alt="Typing introduction" />

  <p><b>Clean • Responsive • Accessible • Instant BMI + category</b></p>

  ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
  ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
  ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
  ![No Frameworks](https://img.shields.io/badge/No_Frameworks-0F2557?style=for-the-badge)
  ![Responsive](https://img.shields.io/badge/Responsive-22c55e?style=for-the-badge)
  ![Accessible](https://img.shields.io/badge/Accessible-2563EB?style=for-the-badge)

</div>

---

<div align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&pause=1200&color=0F2557&center=true&vCenter=true&width=620&lines=Enter+height+and+weight...;No+backend+%E2%80%A2+No+build+%E2%80%A2+Just+open+index.html" alt="Greeting typing animation" />
</div>



<details>
<summary><b>📖 Table of Contents (click to expand)</b></summary>

- [✨ Features](#-features)
- [🛠️ Technologies](#️-technologies)
- [🧮 BMI Formula](#-bmi-formula)
- [📊 Classification Ranges](#-classification-ranges)
- [📁 Project Structure](#-project-structure)
- [🚀 How to Run](#-how-to-run)
- [🔗 Profile Links](#-profile-links)
- [📝 My Approach](#-my-approach)
- [✅ Outcome](#-outcome)
- [🌐 Deployment](#-deployment)
- [🧪 Testing Checklist](#-testing-checklist)
- [📜 JavaScript Concepts](#-javascript-concepts)
- [🕹️ Controls Behaviour](#️-controls-behaviour)
- [📸 Screenshots](#-screenshots)
- [⚠️ Limitations & Disclaimer](#️-limitations--disclaimer)

</details>

## ✨ Features

<div align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=16&pause=1000&color=5B6B8C&center=true&vCenter=true&width=680&lines=BMI+%2B+Category+%E2%80%A2+Visual+Scale+%E2%80%A2+Healthy+Range;Validation+%E2%80%A2+Reset+%E2%80%A2+Keyboard+%E2%80%A2+Screening+Note" alt="Features animation" />
</div>

- **🧮 Standard BMI math** — height converted cm → m, then `weight / (m × m)`, via one shared `calculateBMI()` code path.
- **🏷️ Category badge + explanation** — Underweight / Normal weight / Overweight / Obesity, each with its own colour badge and a short, plain-language explanation.
- **🔢 Sensible display precision** — BMI rounded to exactly 2 decimals for display, while the category is decided from the full-precision value (so a true 24.996 never mislabels).
- **📏 Visual BMI scale** — four-segment indicator (14–40) with a marker showing where the result falls, plus labelled 18.5 / 25 / 30 boundary ticks.
- **⚖️ Healthy weight range** — personalised range in kg for the entered height (BMI 18.5–24.9), e.g. `53.5–72.0 kg` at 170 cm.
- **🧹 Reset button** — clears inputs, per-field errors, and the result back to the empty state, then focuses the height field.
- **🛡️ Inline validation (no popups)** — empty fields show friendly messages; `abc`, `NaN`, `Infinity`, zero/negative, and unrealistic values (height outside 50–300 cm, weight outside 2–500 kg) are rejected with clear per-field messages. `NaN`/`Infinity` can never render.
- **🎯 First-invalid focus** — submitting invalid input focuses the first bad field so keyboard users can fix it immediately.
- **⌨️ Keyboard friendly** — real `<form>` + submit button, so Enter calculates; errors clear as you type.
- **🎨 Professional UI** — light background, deep navy type, blue primary accent with restrained orange highlights (overweight accents, disclaimer panel), rounded cards, soft shadows, subtle transitions, polished focus rings.
- **♿ Accessible** — semantic `header`/`main`/`section`/`form`/`footer`, real `<label>`s, `aria-describedby` hints, `role="alert"` per-field errors, `aria-live` result region, `aria-invalid`, text-labelled scale via `role="img"`, AA-safe contrast.
- **📱 Responsive** — single-column cards, stacked buttons under 560 px, `clamp()` type scaling, `prefers-reduced-motion` support.
- **⚠️ Honest screening note** — visible disclaimer that adult BMI categories are a general screening measure, not a medical diagnosis.

## 🛠️ Technologies

| Technology | Use |
|------------|-----|
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) | Semantic structure (`index.html`) |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) | Variables, Flexbox, `clamp()`, media queries, badges + scale (`style.css`) |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) | BMI math, validation, DOM + events, scale marker (`script.js`) |
| ![No Frameworks](https://img.shields.io/badge/No_Frameworks-0F2557?style=flat-square) | Zero dependencies — requirement compliant |
| ![Fonts](https://img.shields.io/badge/System_Fonts-5B6B8C?style=flat-square) | System stack (works offline) |
| ![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white) + GitHub Pages | Version control + static hosting |

No React, Bootstrap, Tailwind, jQuery, APIs, or build tools. Badge/typing images above are README-only; the app itself loads zero external assets.

## 🧮 BMI Formula

```text
height (m) = height (cm) ÷ 100
BMI        = weight (kg) ÷ (height (m) × height (m))
```

Worked example from the brief:

```text
Height: 170 cm → 1.70 m
Weight: 65 kg
BMI = 65 ÷ (1.70 × 1.70) = 65 ÷ 2.89 ≈ 22.49 → Normal weight
```

## 📊 Classification Ranges

Standard adult BMI categories used by this calculator:

| Category | BMI range |
|----------|-----------|
| Underweight | Below 18.5 |
| Normal weight | 18.5 to below 25 |
| Overweight | 25 to below 30 |
| Obesity | 30 and above |

Boundary rule: a BMI of exactly 18.5 is Normal weight, exactly 25 is Overweight, exactly 30 is Obesity (classification uses the full-precision value, not the rounded display).

## 📁 Project Structure

```text
internship-task-6/
├── index.html                              # Semantic page structure
├── style.css                               # Complete responsive styling
├── script.js                               # BMI logic, validation, and event handling
├── README.md                               # This file
├── Veda_Technology_Task_6_Project_Report.docx  # Internship project report
└── assets/
    └── favicon.svg                         # BMI favicon (navy + blue + orange)
```



## 🚀 How to Run

<div align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=16&pause=1500&color=22c55e&center=true&vCenter=true&width=560&lines=No+npm+install...just+double-click!+%E2%9C%A8;Works+offline+%E2%80%A2+No+server+needed" alt="How to run animation" />
</div>

No install or build step. ✨

1. 📂 Open the `internship-task-6` folder.
2. 🖱️ Double-click `index.html` → opens in Chrome / Edge / Firefox.
   - Or right-click `index.html` → **Open with** → your browser.
   - Or serve it: `python -m http.server 8000` → http://localhost:8000
   - Or VS Code **Live Server**: right-click `index.html` → **Open with Live Server**.
3. 🎉 Styling loads from `style.css`, logic from `script.js` (works offline, no backend).

Quick logic check (Node, from the project folder):

```powershell
node --check script.js
node -e "const b = require('./script.js'); console.log(b.formatBMI(b.calculateBMI(170, 65)));"
# → 22.49
```

## 🔗 Profile Links

| Profile | Link |
|---------|------|
| ![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white) | https://github.com/0xAbhi13 |
| ![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white) | https://www.linkedin.com/in/0xabhi13/ |
| ![Portfolio](https://img.shields.io/badge/Portfolio-2563EB?style=flat-square&logo=globe&logoColor=white) | https://0xabhi13.github.io/MyPortfolio/ |


## 📜 JavaScript Concepts

| Concept | Where |
|---|---|
| Pure calculation functions | `calculateBMI()` — cm→m conversion + standard formula |
| Classification logic | `classifyBMI()` — full-precision boundary checks against 18.5 / 25 / 30 |
| Number formatting | `formatBMI()` — exactly 2 decimals, `null` for non-finite (never renders NaN/Infinity) |
| Input validation | `validateMeasurement()` — trim, regex, `Number()`, `isFinite`, zero/negative + min/max limits |
| Healthy-range math | `healthyWeightRange()` — BMI 18.5–24.9 mapped to kg for the entered height |
| Scale mapping | `scalePosition()` — BMI 14–40 clamped to a 0–100 % marker position |
| DOM selection | `getElementById` bindings for form, inputs, errors, and result nodes |
| DOM updates | `textContent`, `hidden`, `className`, `aria-invalid`, marker `style.left`, scale `aria-label` |
| Event listeners | guarded `submit` (Enter support), per-field `input` error clearing, `click` reset |
| Focus management | first-invalid focus on failed submit, height focus on reset |
| Conditional statements | empty / error / ok branches per field, four-way category branch |
| Functions & variables | `CATEGORY_INFO`, `showResult`, `handleCalculate`, `handleReset`, limit constants |
| Node testability | `module.exports` guard so pure logic runs under Node |

## 🕹️ Controls Behaviour

| Control | Behaviour |
|---|---|
| **Height / Weight inputs** | Accept decimal numbers; per-field error clears as soon as you type |
| **Calculate BMI (submit)** | Validates both fields; on success renders BMI + badge + explanation + range + marker; on failure shows per-field messages and focuses the first invalid field (Enter key works the same) |
| **Reset** | Clears inputs, errors, and the result back to the empty state; focuses the height field |



## ⚠️ Limitations & Disclaimer

- Categories are **general adult (20+) screening ranges**; they are not adjusted for children, teens, athletes with high muscle mass, older adults, or pregnancy.
- BMI does not distinguish fat from muscle and is **not a medical diagnosis** — the app states this visibly in the disclaimer panel.
- Inputs are metric only (cm / kg); no imperial unit toggle, kept out deliberately to stay reliable and dependency-free.
- No data is stored or sent anywhere — everything runs locally in the browser.

---

<div align="center">

  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:2563EB,100:0F2557&height=120&section=footer" alt="Footer wave" />

  <p><sub>Veda Technology Internship — Task 6: BMI Calculator • HTML5 • CSS3 • Vanilla JavaScript ✨</sub></p>

</div>
