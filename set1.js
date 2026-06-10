// ======================== EXAM AUTH ========================
function checkExamAuth() {
    const user = document.getElementById("username").value;
    const key = document.getElementById("userKey").value;
    if (user === "mts" && key === "set1exam") {
        document.getElementById("examAuth").style.display = "none";
        document.getElementById("examContent").style.display = "block";
        loadFullExam();
        startTimer(90);
    } else {
        alert("Username (သို့) Key မှားယွင်းနေပါသည်။");
    }
}

// ======================== TIMER ========================
let timerInterval, timeLeft;
function startTimer(minutes) {
    timeLeft = minutes * 60;
    updateTimerDisplay();
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft <= 0) { clearInterval(timerInterval); alert("⏰ အချိန်ပြည့်ပါပြီ။"); submitExam(); }
    }, 1000);
}
function updateTimerDisplay() {
    const mins = Math.floor(timeLeft / 60), secs = timeLeft % 60;
    document.getElementById("timer").textContent = `⏱️ ${mins}:${secs.toString().padStart(2, '0')}`;
}

// ======================== LOAD FULL EXAM ========================
function loadFullExam() { loadGrammar(); loadReading(); loadListening(); loadWriting(); loadSpeaking(); }

// ======================== GRAMMAR ========================
function loadGrammar() {
    const qs = [
        { q: "While the deckhands __________ the cargo hatches, the rain suddenly started.", opts: ["A. secure", "B. were securing", "C. have secured"], ans: "B" },
        { q: "The Chief Engineer ordered that the emergency generator __________ before departure tomorrow.", opts: ["A. must test", "B. be tested", "C. testing"], ans: "B" },
        { q: "The vessel has been sailing __________ five days without encountering any rough seas.", opts: ["A. for", "B. since", "C. during"], ans: "A" },
        { q: "If the oil pressure drops too low, the safety system __________ the auxiliary engine automatically.", opts: ["A. stops", "B. stopped", "C. would stop"], ans: "A" },
        { q: "The new radar system is __________ more reliable than the one we used on the previous voyage.", opts: ["A. very", "B. much", "C. directly"], ans: "B" },
        { q: "The bosun asked the deckhands __________ the mooring ropes carefully.", opts: ["A. to handle", "B. handling", "C. handled"], ans: "A" },
        { q: "By the time the captain arrived, the crew __________ the lifeboat drill.", opts: ["A. completed", "B. had completed", "C. completes"], ans: "B" },
        { q: "The engineer said that the repair __________ by tomorrow morning.", opts: ["A. will finish", "B. would be finished", "C. is finishing"], ans: "B" },
        { q: "We must ensure that all safety equipment __________ regularly.", opts: ["A. is checked", "B. checks", "C. checking"], ans: "A" },
        { q: "The ship cannot leave port __________ the customs officers have cleared the cargo.", opts: ["A. while", "B. until", "C. during"], ans: "B" }
    ];
    let html = '';
    qs.forEach((q, i) => {
        html += `<div class="question"><p><strong>${i+1}.</strong> ${q.q}</p><div class="options">`;
        q.opts.forEach(opt => { html += `<label><input type="radio" name="grammar_q${i}" value="${opt.charAt(0)}"> ${opt}</label>`; });
        html += `</div></div>`;
    });
    document.getElementById('grammarQuestions').innerHTML = html;
    window.grammarAnswers = qs.map(q => q.ans);
}

// ======================== READING ========================
function loadReading() {
    document.getElementById('readingQuestions').innerHTML = `
        <div class="reading-passage"><h3>Bunkering Operations</h3><p>"Bunkering operations—the process of receiving fuel oil into a ship's tanks—require maximum alertness from the entire crew to prevent environmental pollution. Before the operation begins, a pre-bunkering checklist must be signed by both the ship's bunkering officer and the barge supervisor. All deck scuppers must be tightly plugged to ensure that any accidental spill is contained on board and does not leak into the sea. Additionally, fire-fighting equipment must be laid out ready for immediate use near the bunkering station, and effective communication signals must be established between the ship and the bunker barge."</p>
        <div class="question"><p><strong>1.</strong> What is the primary reason why bunkering operations require maximum alertness?</p><div class="options"><label><input type="radio" name="reading_q0" value="A"> A. To finish the operation faster</label><label><input type="radio" name="reading_q0" value="B"> B. To prevent environmental pollution</label><label><input type="radio" name="reading_q0" value="C"> C. To test the fire-fighting equipment</label></div></div>
        <div class="question"><p><strong>2.</strong> What must happen before the bunkering operation can officially start?</p><div class="options"><label><input type="radio" name="reading_q1" value="A"> A. The ship must leave the port</label><label><input type="radio" name="reading_q1" value="B"> B. The deck scuppers must be left open</label><label><input type="radio" name="reading_q1" value="C"> C. A pre-bunkering checklist must be signed by both parties</label></div></div>
        <div class="question"><p><strong>3.</strong> Why must the deck scuppers be tightly plugged during the operation?</p><div class="options"><label><input type="radio" name="reading_q2" value="A"> A. To stop fuel oil from leaking into the sea if a spill occurs</label><label><input type="radio" name="reading_q2" value="B"> B. To allow water to drain off the deck quickly</label><label><input type="radio" name="reading_q2" value="C"> C. To keep the bunkering station clean</label></div></div></div>
        <div class="reading-passage"><h3>Watchkeeping Duties</h3><p>"The officer of the watch (OOW) is responsible for the safe navigation of the ship during their shift. They must continuously monitor the radar, check the vessel's position on the chart, and maintain a proper lookout by sight and hearing. The OOW must also ensure that all navigation equipment is functioning correctly and report any irregularities to the Captain immediately. During periods of heavy traffic or restricted visibility, the OOW must call the Captain to the bridge without delay."</p>
        <div class="question"><p><strong>4.</strong> What is the OOW responsible for during their shift?</p><div class="options"><label><input type="radio" name="reading_q3" value="A"> A. Cooking meals for the crew</label><label><input type="radio" name="reading_q3" value="B"> B. Safe navigation of the ship</label><label><input type="radio" name="reading_q3" value="C"> C. Engine maintenance</label></div></div>
        <div class="question"><p><strong>5.</strong> When must the OOW call the Captain to the bridge?</p><div class="options"><label><input type="radio" name="reading_q4" value="A"> A. During meal times</label><label><input type="radio" name="reading_q4" value="B"> B. During heavy traffic or restricted visibility</label><label><input type="radio" name="reading_q4" value="C"> C. When the radar is working perfectly</label></div></div></div>`;
    window.readingAnswers = ["B", "C", "A", "B", "B"];
}

// ======================== LISTENING ========================
function loadListening() {
    document.getElementById('listeningQuestions').innerHTML = `
        <div class="card"><h3>Part 1: Short Audio Conversations</h3>
        <div class="audio-container"><p><em>🎧 Audio Part 1</em></p><audio controls><source src="set1part1.mp3" type="audio/mpeg"></audio></div>
        <div class="question"><p><strong>1.</strong> What should the deck crew do because of the heavy fog?</p><div class="options"><label><input type="radio" name="listening_q0" value="A"> A. Start painting</label><label><input type="radio" name="listening_q0" value="B"> B. Stop chipping work and prepare the anchor</label><label><input type="radio" name="listening_q0" value="C"> C. Change course</label></div></div>
        <div class="question"><p><strong>2.</strong> What is causing the twelve-hour delay?</p><div class="options"><label><input type="radio" name="listening_q1" value="A"> A. Bad weather</label><label><input type="radio" name="listening_q1" value="B"> B. Port-side steering gear breakdown</label><label><input type="radio" name="listening_q1" value="C"> C. Heavy traffic</label></div></div></div>
        <div class="card"><h3>Part 2: Long Conversation</h3>
        <div class="audio-container"><p><em>🎧 Audio Part 2</em></p><audio controls><source src="set1part2.mp3" type="audio/mpeg"></audio></div>
        <div class="question"><p><strong>3.</strong> What problem did the Third Engineer notice?</p><div class="options"><label><input type="radio" name="listening_q2" value="A"> A. Fuel leak</label><label><input type="radio" name="listening_q2" value="B"> B. Slight vibration in purifier</label><label><input type="radio" name="listening_q2" value="C"> C. Blocked filters</label></div></div>
        <div class="question"><p><strong>4.</strong> Why not wait for another hour?</p><div class="options"><label><input type="radio" name="listening_q3" value="A"> A. Shift ending</label><label><input type="radio" name="listening_q3" value="B"> B. Delayed reporting causes major breakdown</label><label><input type="radio" name="listening_q3" value="C"> C. Chief Engineer was there</label></div></div></div>`;
    window.listeningAnswers = ["B", "B", "B", "B"];
}

// ======================== WRITING ========================
function loadWriting() {
    document.getElementById('writingQuestions').innerHTML = `
        <div class="card"><h3 style="color: var(--primary);">Task 1: Short Message (25–35 words) [10 Marks]</h3>
        <div class="option-card"><p class="mt-15"><strong>Prompt:</strong> You noticed that the safety latch on the galley refrigerator door is loose. Write a short message to the Second Engineer reporting this issue.</p>
        <textarea id="writingTask1" placeholder="Type your message here..." rows="4"></textarea></div></div>
        <div class="card" style="margin-top: 20px;"><h3 style="color: var(--primary);">Task 2: Paragraph Writing (90–120 words) [15 Marks]</h3>
        <div class="option-card"><p class="mt-15"><strong>Prompt:</strong> Write about "The Risks of Working in Enclosed Spaces on a Ship."</p>
        <textarea id="writingTask2" placeholder="Type your paragraph here..." rows="6"></textarea></div></div>`;
}

function gradeWriting() {
    let score = 0;
    const kw1 = ["safety", "latch", "galley", "refrigerator", "loose", "repair", "food", "door", "rough", "seas", "immediately", "second", "engineer"];
    const t1 = document.getElementById('writingTask1')?.value || '';
    if (t1.length > 15) { let c = 0; kw1.forEach(k => { if (t1.toLowerCase().includes(k)) c++; }); score += Math.min(10, c * 2); }
    const kw2 = ["enclosed", "space", "risks", "toxic", "gas", "oxygen", "permit", "testing", "communication", "standby", "watch", "safety", "entry", "suffocation", "fatal", "precautions", "atmosphere", "radio"];
    const t2 = document.getElementById('writingTask2')?.value || '';
    if (t2.length > 60) { let c = 0; kw2.forEach(k => { if (t2.toLowerCase().includes(k)) c++; }); score += Math.min(15, Math.floor(c * 1.5)); }
    return Math.min(25, score);
}

// ======================== SPEAKING ========================
const speakingQuestions = [
    { id: 1, keywords: ["captain", "chief", "officer", "ten", "years", "career", "vessel", "command", "qualified", "ocean", "experience", "sailing"], maxScore: 3 },
    { id: 2, keywords: ["difficult", "situation", "training", "studies", "overcame", "solve", "help", "teacher", "study", "practice", "learn", "challenge"], maxScore: 3 },
    { id: 3, keywords: ["time", "management", "watchkeeping", "officer", "schedule", "punctual", "duty", "safety", "navigation", "alert", "rest", "shift"], maxScore: 3 },
    { id: 4, keywords: ["snap", "back", "zone", "mooring", "rope", "break", "tension", "injury", "fatal", "force", "safe", "distance"], maxScore: 2 },
    { id: 5, keywords: ["deck", "rating", "mooring", "lines", "tend", "rope", "secure", "bitt", "winch", "communication", "officer", "safety"], maxScore: 2 },
    { id: 6, keywords: ["radio", "walkie", "talkie", "bridge", "aft", "deck", "communication", "berthing", "orders", "officer", "clear", "signal"], maxScore: 2 },
    { id: 7, keywords: ["automated", "alarms", "alert", "watchkeeping", "safety", "detect", "abnormalities", "react", "promptly", "fault", "hazard", "help", "crucial", "disagree", "agree"], maxScore: 5 }
];

const speakingPrompts = [
    "Where do you see yourself in your maritime career ten years from now?",
    "Describe a difficult situation you faced during your studies or training, and how you overcame it.",
    "Why is strict time management essential for watchkeeping officers?",
    "Why must crew members stand clear of the 'snap-back zone' during mooring operations?",
    "What are the duties of a deck rating while tending the mooring lines?",
    "What kind of communication is used between the bridge and the aft deck during berthing?",
    "Statement: \"Automated alarms on modern ships make the watchkeeping crew less alert during night watches.\" Agree or Disagree?"
];

function loadSpeaking() {
    let html = '<h3 style="color: var(--primary); margin-bottom: 15px;">Part 1: Introduction and Career Life [9 Marks]</h3>';
    for (let i = 0; i < 3; i++) { html += speakingCard(i, speakingPrompts[i], speakingQuestions[i].keywords); }
    html += '<h3 style="color: var(--primary); margin: 25px 0 15px;">Part 2: Safe Mooring Operations [6 Marks]</h3>';
    for (let i = 3; i < 6; i++) { html += speakingCard(i, speakingPrompts[i], speakingQuestions[i].keywords); }
    html += '<h3 style="color: var(--primary); margin: 25px 0 15px;">Part 3: Debate Conversation [5 Marks]</h3>';
    html += speakingCard(6, speakingPrompts[6], speakingQuestions[6].keywords);
    document.getElementById('speakingQuestions').innerHTML = html;
}

function speakingCard(i, prompt, keywords) {
    return `<div class="card" style="margin-top: 15px;"><p><strong>Q${i+1}:</strong> ${prompt}</p><p style="font-size: 0.85rem; color: #666;">💡 Keywords: ${keywords.join(', ')}</p><textarea id="speaking_q${i}" placeholder="Type your answer here..." rows="3" style="width: 100%; margin-top: 10px;"></textarea></div>`;
}

function gradeSpeaking() {
    let total = 0;
    speakingQuestions.forEach((q, i) => {
        const ans = document.getElementById(`speaking_q${i}`)?.value || '';
        if (ans.length >= 5) { let c = 0; q.keywords.forEach(k => { if (ans.toLowerCase().includes(k)) c++; }); total += Math.min(q.maxScore, c); }
    });
    return Math.min(15, total);
}

// ======================== SUBMIT EXAM ========================
function submitExam() {
    clearInterval(timerInterval);
    let total = 0, max = 0;

    let gs = 0; for (let i = 0; i < 10; i++) { const s = document.querySelector(`input[name="grammar_q${i}"]:checked`); if (s && s.value === window.grammarAnswers[i]) gs += 2; }
    total += gs; max += 20;

    let rs = 0; for (let i = 0; i < 5; i++) { const s = document.querySelector(`input[name="reading_q${i}"]:checked`); if (s && s.value === window.readingAnswers[i]) rs += 3; }
    total += rs; max += 15;

    let ls = 0; for (let i = 0; i < 4; i++) { const s = document.querySelector(`input[name="listening_q${i}"]:checked`); if (s && s.value === window.listeningAnswers[i]) ls += (i < 2) ? 5 : 7.5; }
    total += ls; max += 25;

    const ws = gradeWriting(); total += ws; max += 25;
    const ss = gradeSpeaking(); total += ss; max += 15;

    const pct = Math.round((total/max)*100);
    const today = new Date();
    const dateStr = today.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });

    document.getElementById('examResult').style.display = 'block';
    document.getElementById('examResult').innerHTML = `
        <div class="result-card" id="resultCard">
            <div class="result-header"><h3>📊 MEPT Exam Results - Set 1</h3><p class="result-date">📅 ${dateStr}</p></div>
            <div class="result-score-circle"><span class="big-score">${pct}%</span><span class="total-score">${total}/${max}</span></div>
            <div class="result-grade ${gradeClass(pct)}">${gradeMsg(pct)}</div>
            <div class="result-details">${bar('📖 Grammar', gs, 20)}${bar('📰 Reading', rs, 15)}${bar('🎧 Listening', ls, 25)}${bar('✍️ Writing', ws, 25)}${bar('🗣️ Speaking', ss, 15)}</div>
            <button class="download-btn" onclick="downloadPDF()">📥 Download Result as PDF</button>
        </div>`;
    document.getElementById('examResult').scrollIntoView({ behavior: 'smooth' });
}

function bar(name, score, max) { const p = Math.round((score/max)*100); return `<div class="result-item"><span class="section-name">${name}</span><span class="section-score">${score}/${max} (${p}%)</span><div class="section-bar"><div class="section-bar-fill" style="width:${p}%"></div></div></div>`; }
function gradeClass(p) { if (p >= 80) return 'grade-excellent'; if (p >= 60) return 'grade-good'; if (p >= 40) return 'grade-fair'; return 'grade-poor'; }
function gradeMsg(p) { if (p >= 80) return '🏆 Excellent! You are ready for the exam!'; if (p >= 60) return '👍 Good job! Keep practicing!'; if (p >= 40) return '📚 Need more practice.'; return '💪 Keep studying!'; }

function downloadPDF() {
    const card = document.getElementById('resultCard');
    const btn = card.querySelector('.download-btn');
    btn.style.display = 'none';
    html2pdf().set({ margin: 1, filename: 'MEPT_Set1_Result.pdf', image: { type: 'jpeg', quality: 0.98 }, html2canvas: { scale: 2 }, jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' } }).from(card).save().then(() => { btn.style.display = 'block'; });
}
