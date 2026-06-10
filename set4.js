// ======================== EXAM AUTH ========================
function checkExamAuth() {
    const user = document.getElementById("username").value;
    const key = document.getElementById("userKey").value;
    if (user === "mts" && key === "set4exam") {
        document.getElementById("examAuth").style.display = "none";
        document.getElementById("examContent").style.display = "block";
        loadFullExam();
        startTimer(60);
    } else { alert("Username (သို့) Key မှားယွင်းနေပါသည်။"); }
}

let timerInterval, timeLeft;
function startTimer(minutes) { timeLeft = minutes * 60; updateTimerDisplay(); timerInterval = setInterval(() => { timeLeft--; updateTimerDisplay(); if (timeLeft <= 0) { clearInterval(timerInterval); alert("⏰ အချိန်ပြည့်ပါပြီ။"); submitExam(); } }, 1000); }
function updateTimerDisplay() { const mins = Math.floor(timeLeft / 60), secs = timeLeft % 60; document.getElementById("timer").textContent = `⏱️ ${mins}:${secs.toString().padStart(2, '0')}`; }
function loadFullExam() { loadGrammar(); loadReading(); loadListening(); loadWriting(); loadSpeaking(); }

// ======================== GRAMMAR (30 Qs - A2 Level) ========================
function loadGrammar() {
    const qs = [
        { q:"The crew __________ the deck every morning.", opts:["a) cleans","b) clean","c) cleaning"], ans:"a" },
        { q:"My name __________ John. I am a seafarer.", opts:["a) is","b) are","c) am"], ans:"a" },
        { q:"The ship __________ at the port yesterday.", opts:["a) arrive","b) arrived","c) arriving"], ans:"b" },
        { q:"We always __________ life jackets on deck.", opts:["a) wear","b) wears","c) wearing"], ans:"a" },
        { q:"There __________ many lifeboats on the ship.", opts:["a) is","b) are","c) has"], ans:"b" },
        { q:"She __________ to the bridge now.", opts:["a) go","b) goes","c) is going"], ans:"c" },
        { q:"The captain __________ the weather report yesterday.", opts:["a) read","b) reads","c) reading"], ans:"a" },
        { q:"I can __________ English and Burmese.", opts:["a) speak","b) speaks","c) speaking"], ans:"a" },
        { q:"This rope is __________ than that one.", opts:["a) long","b) longer","c) longest"], ans:"b" },
        { q:"The engineer __________ the engine right now.", opts:["a) check","b) checks","c) is checking"], ans:"c" },
        { q:"We must __________ the safety rules.", opts:["a) follow","b) follows","c) following"], ans:"a" },
        { q:"The weather __________ very bad yesterday.", opts:["a) is","b) was","c) were"], ans:"b" },
        { q:"__________ you like to work on a ship?", opts:["a) Do","b) Does","c) Is"], ans:"a" },
        { q:"He __________ been a seafarer for five years.", opts:["a) has","b) have","c) is"], ans:"a" },
        { q:"Please __________ your lifejacket before the drill.", opts:["a) put on","b) puts on","c) putting on"], ans:"a" },
        { q:"The ship is __________ than the boat.", opts:["a) big","b) bigger","c) biggest"], ans:"b" },
        { q:"They __________ lunch in the mess room now.", opts:["a) have","b) are having","c) had"], ans:"b" },
        { q:"The bosun told me __________ the ropes.", opts:["a) check","b) to check","c) checking"], ans:"b" },
        { q:"There is __________ water in the tank.", opts:["a) many","b) much","c) few"], ans:"b" },
        { q:"The crew __________ finished the work.", opts:["a) have","b) has","c) is"], ans:"a" },
        { q:"I __________ my safety boots every day.", opts:["a) wear","b) wears","c) wearing"], ans:"a" },
        { q:"The ship will leave __________ Monday morning.", opts:["a) on","b) in","c) at"], ans:"a" },
        { q:"He speaks English very __________.", opts:["a) good","b) well","c) better"], ans:"b" },
        { q:"__________ is the muster station? On the boat deck.", opts:["a) What","b) Where","c) When"], ans:"b" },
        { q:"You __________ smoke in the engine room.", opts:["a) must not","b) must","c) can"], ans:"a" },
        { q:"The cook __________ meals every day.", opts:["a) prepare","b) prepares","c) preparing"], ans:"b" },
        { q:"We arrived __________ the port early.", opts:["a) in","b) at","c) on"], ans:"b" },
        { q:"She __________ her lifejacket before the drill started.", opts:["a) put on","b) puts on","c) putting on"], ans:"a" },
        { q:"How __________ lifeboats are on this ship?", opts:["a) many","b) much","c) long"], ans:"a" },
        { q:"The captain said the weather __________ good tomorrow.", opts:["a) will be","b) is","c) was"], ans:"a" }
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

// ======================== READING (15 Marks - 5 Qs x3) ========================
function loadReading() {
    document.getElementById('readingQuestions').innerHTML = `
        <div class="reading-passage"><h3>Life on a Ship</h3><p>"My name is Ko Min. I am a deck cadet on a container ship. Every morning, I wake up at 6:00 a.m. and start work at 8:00 a.m. My duties include helping the officers on the bridge and doing maintenance work on deck. I always wear my safety helmet, gloves, and boots. In my free time, I read books and talk to my family on the phone."</p>
        <div class="question"><p><strong>1.</strong> What is Ko Min's job?</p><div class="options"><label><input type="radio" name="reading_q0" value="A"> A. Captain</label><label><input type="radio" name="reading_q0" value="B"> B. Deck cadet</label><label><input type="radio" name="reading_q0" value="C"> C. Cook</label></div></div>
        <div class="question"><p><strong>2.</strong> What time does he start work?</p><div class="options"><label><input type="radio" name="reading_q1" value="A"> A. 6:00 a.m.</label><label><input type="radio" name="reading_q1" value="B"> B. 7:00 a.m.</label><label><input type="radio" name="reading_q1" value="C"> C. 8:00 a.m.</label></div></div></div>
        <div class="reading-passage"><h3>Safety on Deck</h3><p>"Working on deck can be dangerous. All crew members must wear Personal Protective Equipment or PPE. This includes a safety helmet, gloves, and steel-toe boots. When you work near the mooring area, you must stand away from the snap-back zone. If a rope breaks, it can hurt you badly. Always listen to the officer's orders and follow the safety rules."</p>
        <div class="question"><p><strong>3.</strong> What does PPE stand for?</p><div class="options"><label><input type="radio" name="reading_q2" value="A"> A. Personal Protective Equipment</label><label><input type="radio" name="reading_q2" value="B"> B. Personal Private Equipment</label><label><input type="radio" name="reading_q2" value="C"> C. Professional Protective Equipment</label></div></div>
        <div class="question"><p><strong>4.</strong> What must you do near the mooring area?</p><div class="options"><label><input type="radio" name="reading_q3" value="A"> A. Run quickly</label><label><input type="radio" name="reading_q3" value="B"> B. Stand away from snap-back zone</label><label><input type="radio" name="reading_q3" value="C"> C. Sit down</label></div></div>
        <div class="question"><p><strong>5.</strong> What can happen if a rope breaks?</p><div class="options"><label><input type="radio" name="reading_q4" value="A"> A. Nothing</label><label><input type="radio" name="reading_q4" value="B"> B. It can hurt you</label><label><input type="radio" name="reading_q4" value="C"> C. The ship stops</label></div></div></div>`;
    window.readingAnswers = ["B", "C", "A", "B", "B"];
}

// ======================== LISTENING (25 Marks - 10 Qs) ========================
function loadListening() {
    document.getElementById('listeningQuestions').innerHTML = `
        <div class="card"><h3>Part 1: Short Conversations (5 Qs)</h3><div class="audio-container"><audio controls><source src="set4part1.mp3" type="audio/mpeg"></audio></div>
        <div class="question"><p><strong>1.</strong> What time is the meeting?</p><div class="options"><label><input type="radio" name="listening_q0" value="A"> A. 8:00</label><label><input type="radio" name="listening_q0" value="B"> B. 9:00</label><label><input type="radio" name="listening_q0" value="C"> C. 10:00</label></div></div>
        <div class="question"><p><strong>2.</strong> Where is the meeting?</p><div class="options"><label><input type="radio" name="listening_q1" value="A"> A. Bridge</label><label><input type="radio" name="listening_q1" value="B"> B. Mess room</label><label><input type="radio" name="listening_q1" value="C"> C. Engine room</label></div></div>
        <div class="question"><p><strong>3.</strong> What is the weather like today?</p><div class="options"><label><input type="radio" name="listening_q2" value="A"> A. Sunny</label><label><input type="radio" name="listening_q2" value="B"> B. Rainy</label><label><input type="radio" name="listening_q2" value="C"> C. Windy</label></div></div>
        <div class="question"><p><strong>4.</strong> What does the bosun ask the deckhand to bring?</p><div class="options"><label><input type="radio" name="listening_q3" value="A"> A. Hammer</label><label><input type="radio" name="listening_q3" value="B"> B. Paint</label><label><input type="radio" name="listening_q3" value="C"> C. Rope</label></div></div>
        <div class="question"><p><strong>5.</strong> What time does the watch start?</p><div class="options"><label><input type="radio" name="listening_q4" value="A"> A. 12:00</label><label><input type="radio" name="listening_q4" value="B"> B. 16:00</label><label><input type="radio" name="listening_q4" value="C"> C. 20:00</label></div></div></div>
        <div class="card"><h3>Part 2: Daily Routine (5 Qs)</h3><div class="audio-container"><audio controls><source src="set4part2.mp3" type="audio/mpeg"></audio></div>
        <div class="question"><p><strong>6.</strong> What does the cook prepare for breakfast?</p><div class="options"><label><input type="radio" name="listening_q5" value="A"> A. Rice and fish</label><label><input type="radio" name="listening_q5" value="B"> B. Eggs and toast</label><label><input type="radio" name="listening_q5" value="C"> C. Noodles</label></div></div>
        <div class="question"><p><strong>7.</strong> How many crew members are on board?</p><div class="options"><label><input type="radio" name="listening_q6" value="A"> A. 15</label><label><input type="radio" name="listening_q6" value="B"> B. 20</label><label><input type="radio" name="listening_q6" value="C"> C. 25</label></div></div>
        <div class="question"><p><strong>8.</strong> When is the fire drill?</p><div class="options"><label><input type="radio" name="listening_q7" value="A"> A. Monday</label><label><input type="radio" name="listening_q7" value="B"> B. Wednesday</label><label><input type="radio" name="listening_q7" value="C"> C. Friday</label></div></div>
        <div class="question"><p><strong>9.</strong> What must everyone bring to the drill?</p><div class="options"><label><input type="radio" name="listening_q8" value="A"> A. Lifejacket</label><label><input type="radio" name="listening_q8" value="B"> B. Helmet</label><label><input type="radio" name="listening_q8" value="C"> C. Gloves</label></div></div>
        <div class="question"><p><strong>10.</strong> Where is the muster station?</p><div class="options"><label><input type="radio" name="listening_q9" value="A"> A. Bridge</label><label><input type="radio" name="listening_q9" value="B"> B. Boat deck</label><label><input type="radio" name="listening_q9" value="C"> C. Engine room</label></div></div></div>`;
    window.listeningAnswers = ["B", "B", "B", "B", "B", "B", "B", "C", "A", "B"];
}

// ======================== WRITING (20 Marks - 4 Tasks x5) ========================
function loadWriting() {
    document.getElementById('writingQuestions').innerHTML = `
        <div class="card"><h3>Task 1: Introduce Yourself [5 Marks]</h3><p>Write 3-4 sentences about yourself. Include your name, job, and why you like working at sea.</p><textarea id="writingTask1" rows="3"></textarea></div>
        <div class="card"><h3>Task 2: Short Message [5 Marks]</h3><p>Tell your friend about the weather today. (25-30 words)</p><textarea id="writingTask2" rows="3"></textarea></div>
        <div class="card"><h3>Task 3: Safety Notice [5 Marks]</h3><p>Write a short safety notice about wearing PPE on deck. (30-40 words)</p><textarea id="writingTask3" rows="4"></textarea></div>
        <div class="card"><h3>Task 4: Describe Your Day [5 Marks]</h3><p>Describe a typical day on your ship. What do you do from morning to evening? (40-50 words)</p><textarea id="writingTask4" rows="4"></textarea></div>`;
}
function gradeWriting() {
    let s = 0;
    [{ id:'writingTask1', kw:["name","am","seafarer","cadet","officer","like","sea","work","travel","ship"], max:5 },
     { id:'writingTask2', kw:["weather","sunny","rainy","hot","cold","windy","today","temperature","cloudy","clear"], max:5 },
     { id:'writingTask3', kw:["ppe","helmet","gloves","boots","wear","safety","deck","protect","injury","required"], max:5 },
     { id:'writingTask4', kw:["morning","wake","breakfast","work","deck","lunch","afternoon","watch","dinner","sleep"], max:5 }
    ].forEach(t => { const txt = document.getElementById(t.id)?.value || ''; if (txt.length > 15) { let c = 0; t.kw.forEach(k => { if (txt.toLowerCase().includes(k)) c++; }); s += Math.min(t.max, c); } });
    return Math.min(20, s);
}

// ======================== SPEAKING (10 Qs x1 = 10 Marks) ========================
const speakingQs = [
    { prompt:"What is your name and where are you from?", kw:["name","from","myanmar","yangon","live","country","city"], max:1 },
    { prompt:"What is your job on the ship?", kw:["cadet","deck","engine","officer","rating","cook","work","duty"], max:1 },
    { prompt:"What time do you wake up every day?", kw:["wake","morning","o'clock","early","start","work","day"], max:1 },
    { prompt:"What do you eat for breakfast?", kw:["breakfast","eat","rice","noodles","bread","eggs","drink","coffee","tea"], max:1 },
    { prompt:"Do you like working on a ship? Why?", kw:["like","love","enjoy","ship","sea","travel","work","friend","good","bad"], max:1 },
    { prompt:"What safety equipment do you wear on deck?", kw:["helmet","gloves","boots","ppe","safety","wear","protect","deck"], max:1 },
    { prompt:"What do you do in your free time?", kw:["free","time","read","sleep","phone","family","music","movie","exercise"], max:1 },
    { prompt:"Where is the muster station on your ship?", kw:["muster","station","boat","deck","location","emergency","drill","go"], max:1 },
    { prompt:"What is the weather like today?", kw:["weather","sunny","rainy","hot","cold","windy","today","cloudy"], max:1 },
    { prompt:"What is your favorite food on the ship?", kw:["favorite","food","rice","chicken","fish","noodles","cook","meal","delicious"], max:1 }
];

function loadSpeaking() {
    let html = '<h3>Speaking Test [10 Marks]</h3>';
    speakingQs.forEach((q, i) => {
        html += `<div class="card"><p><strong>Q${i+1}:</strong> ${q.prompt}</p><textarea id="speaking_q${i}" rows="2"></textarea></div>`;
    });
    document.getElementById('speakingQuestions').innerHTML = html;
}

function gradeSpeaking() {
    let total = 0;
    speakingQs.forEach((q, i) => {
        const ans = document.getElementById(`speaking_q${i}`)?.value || '';
        if (ans.length >= 5) { let c = 0; q.kw.forEach(k => { if (ans.toLowerCase().includes(k)) c++; }); total += Math.min(q.max, c); }
    });
    return Math.min(10, total);
}

// ======================== SUBMIT ========================
function submitExam() {
    clearInterval(timerInterval);
    let total = 0, max = 0;

    let gs = 0; for (let i = 0; i < 30; i++) { const s = document.querySelector(`input[name="grammar_q${i}"]:checked`); if (s && s.value === window.grammarAnswers[i]) gs++; }
    total += gs; max += 30;

    let rs = 0; for (let i = 0; i < 5; i++) { const s = document.querySelector(`input[name="reading_q${i}"]:checked`); if (s && s.value === window.readingAnswers[i]) rs += 3; }
    total += rs; max += 15;

    let ls = 0; for (let i = 0; i < 10; i++) { const s = document.querySelector(`input[name="listening_q${i}"]:checked`); if (s && s.value === window.listeningAnswers[i]) ls += 2.5; }
    total += ls; max += 25;

    const ws = gradeWriting(); total += ws; max += 20;
    const ss = gradeSpeaking(); total += ss; max += 10;

    const pct = Math.round((total/max)*100);
    const today = new Date();
    const dateStr = today.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });

    document.getElementById('examResult').style.display = 'block';
    document.getElementById('examResult').innerHTML = `
        <div class="result-card" id="resultCard">
            <div class="result-header"><h3>📊 MEPT Exam Results - Set 4</h3><p class="result-date">📅 ${dateStr}</p></div>
            <div class="result-score-circle"><span class="big-score">${pct}%</span><span class="total-score">${total}/${max}</span></div>
            <div class="result-grade ${gradeClass(pct)}">${gradeMsg(pct)}</div>
            <div class="result-details">${bar('📖 Grammar', gs, 30)}${bar('📰 Reading', rs, 15)}${bar('🎧 Listening', ls, 25)}${bar('✍️ Writing', ws, 20)}${bar('🗣️ Speaking', ss, 10)}</div>
            <button class="download-btn" onclick="downloadPDF()">📥 Download Result as PDF</button>
        </div>`;
    document.getElementById('examResult').scrollIntoView({ behavior: 'smooth' });
}

function bar(name, score, max) { const p = Math.round((score/max)*100); return `<div class="result-item"><span class="section-name">${name}</span><span class="section-score">${score}/${max} (${p}%)</span><div class="section-bar"><div class="section-bar-fill" style="width:${p}%"></div></div></div>`; }
function gradeClass(p) { if (p >= 80) return 'grade-excellent'; if (p >= 60) return 'grade-good'; if (p >= 40) return 'grade-fair'; return 'grade-poor'; }
function gradeMsg(p) { if (p >= 80) return '🏆 Excellent!'; if (p >= 60) return '👍 Good job!'; if (p >= 40) return '📚 Need practice.'; return '💪 Keep studying!'; }
function downloadPDF() { const card = document.getElementById('resultCard'); const btn = card.querySelector('.download-btn'); btn.style.display = 'none'; html2pdf().set({ margin: 1, filename: 'MEPT_Set4_Result.pdf', image: { type: 'jpeg', quality: 0.98 }, html2canvas: { scale: 2 }, jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' } }).from(card).save().then(() => { btn.style.display = 'block'; }); }
