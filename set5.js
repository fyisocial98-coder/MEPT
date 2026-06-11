// ======================== EXAM AUTH ========================
function checkExamAuth() {
    const user = document.getElementById("username").value;
    const key = document.getElementById("userKey").value;
    if (user === "zaykhantpaing" && key === "set5@2026") {
        document.getElementById("examAuth").style.display = "none";
        document.getElementById("examContent").style.display = "block";
        loadFullExam();
        startTimer(90);
    } else { alert("Username (သို့) Key မှားယွင်းနေပါသည်။"); }
}

let timerInterval, timeLeft;
function startTimer(minutes) { timeLeft = minutes * 60; updateTimerDisplay(); timerInterval = setInterval(() => { timeLeft--; updateTimerDisplay(); if (timeLeft <= 0) { clearInterval(timerInterval); alert("⏰ အချိန်ပြည့်ပါပြီ။"); submitExam(); } }, 1000); }
function updateTimerDisplay() { const mins = Math.floor(timeLeft / 60), secs = timeLeft % 60; document.getElementById("timer").textContent = `⏱️ ${mins}:${secs.toString().padStart(2, '0')}`; }
function loadFullExam() { loadGrammar(); loadReading(); loadListening(); loadWriting(); loadSpeaking(); }

// ======================== GRAMMAR (30 Qs - A2/B1 Level) ========================
function loadGrammar() {
    const qs = [
        { q:"The crew __________ the deck every morning.", opts:["a) cleans","b) clean","c) cleaning"], ans:"a" },
        { q:"My name is Ko Min. I __________ a deck cadet.", opts:["a) am","b) is","c) are"], ans:"a" },
        { q:"The ship __________ at the port yesterday morning.", opts:["a) arrive","b) arrived","c) arriving"], ans:"b" },
        { q:"We always __________ life jackets during drills.", opts:["a) wear","b) wears","c) wearing"], ans:"a" },
        { q:"There __________ twenty crew members on this ship.", opts:["a) is","b) are","c) has"], ans:"b" },
        { q:"She __________ to the bridge right now.", opts:["a) go","b) goes","c) is going"], ans:"c" },
        { q:"The captain __________ the weather report an hour ago.", opts:["a) read","b) reads","c) reading"], ans:"a" },
        { q:"I can __________ English and a little Burmese.", opts:["a) speak","b) speaks","c) speaking"], ans:"a" },
        { q:"This rope is __________ than that old one.", opts:["a) strong","b) stronger","c) strongest"], ans:"b" },
        { q:"The engineer __________ the engine at the moment.", opts:["a) check","b) checks","c) is checking"], ans:"c" },
        { q:"All crew must __________ the safety instructions carefully.", opts:["a) follow","b) follows","c) following"], ans:"a" },
        { q:"The weather __________ very rough during the night.", opts:["a) is","b) was","c) were"], ans:"b" },
        { q:"__________ you ever worked on a container ship?", opts:["a) Did","b) Have","c) Do"], ans:"b" },
        { q:"He __________ a seafarer since 2020.", opts:["a) has been","b) was","c) is"], ans:"a" },
        { q:"Please __________ your safety helmet before going on deck.", opts:["a) put on","b) puts on","c) putting on"], ans:"a" },
        { q:"The ship is __________ than the fishing boat.", opts:["a) large","b) larger","c) largest"], ans:"b" },
        { q:"They __________ lunch in the mess room now.", opts:["a) have","b) are having","c) had"], ans:"b" },
        { q:"The bosun asked me __________ the mooring ropes.", opts:["a) to check","b) check","c) checking"], ans:"a" },
        { q:"There is too __________ water in the bilge.", opts:["a) many","b) much","c) few"], ans:"b" },
        { q:"The crew __________ already finished the cleaning.", opts:["a) have","b) has","c) is"], ans:"a" },
        { q:"I __________ my safety boots every day on deck.", opts:["a) wear","b) wears","c) wearing"], ans:"a" },
        { q:"The ship will depart __________ Tuesday morning.", opts:["a) on","b) in","c) at"], ans:"a" },
        { q:"He speaks maritime English very __________.", opts:["a) good","b) well","c) better"], ans:"b" },
        { q:"__________ is the fire extinguisher? Near the galley door.", opts:["a) What","b) Where","c) When"], ans:"b" },
        { q:"You __________ smoke near the bunkering station.", opts:["a) must not","b) must","c) can"], ans:"a" },
        { q:"The cook __________ fresh meals every day.", opts:["a) prepare","b) prepares","c) preparing"], ans:"b" },
        { q:"We arrived __________ the discharge port early.", opts:["a) in","b) at","c) on"], ans:"b" },
        { q:"She __________ her immersion suit before the drill started.", opts:["a) put on","b) puts on","c) putting on"], ans:"a" },
        { q:"How __________ lifebuoys are on the main deck?", opts:["a) many","b) much","c) long"], ans:"a" },
        { q:"The captain said the sea conditions __________ better tomorrow.", opts:["a) will be","b) is","c) was"], ans:"a" }
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
        <div class="reading-passage"><h3>Daily Routine on a Tanker</h3><p>"My name is U Aung. I am an AB seaman on an oil tanker. Every morning, I wake up at 5:30 a.m. and have breakfast at 6:00. My watch starts at 8:00 a.m. During my watch, I check the mooring lines, do painting work, and help with deck maintenance. At 12:00, I have lunch in the crew mess room. In the afternoon, I attend safety drills or continue maintenance work. I finish work at 5:00 p.m. and have dinner at 6:00. After dinner, I sometimes watch movies or call my family."</p>
        <div class="question"><p><strong>1.</strong> What is U Aung's rank?</p><div class="options"><label><input type="radio" name="reading_q0" value="A"> A. Officer</label><label><input type="radio" name="reading_q0" value="B"> B. AB seaman</label><label><input type="radio" name="reading_q0" value="C"> C. Cook</label></div></div>
        <div class="question"><p><strong>2.</strong> What time does his watch start?</p><div class="options"><label><input type="radio" name="reading_q1" value="A"> A. 6:00 a.m.</label><label><input type="radio" name="reading_q1" value="B"> B. 8:00 a.m.</label><label><input type="radio" name="reading_q1" value="C"> C. 12:00 p.m.</label></div></div>
        <div class="question"><p><strong>3.</strong> What does he do in the afternoon?</p><div class="options"><label><input type="radio" name="reading_q2" value="A"> A. Sleeps</label><label><input type="radio" name="reading_q2" value="B"> B. Attends drills or maintenance</label><label><input type="radio" name="reading_q2" value="C"> C. Goes ashore</label></div></div></div>
        <div class="reading-passage"><h3>Bunkering Safety</h3><p>"Bunkering is the process of taking fuel oil on board. It is a dangerous operation, so all crew must be very careful. Before bunkering starts, the scuppers on deck must be plugged. This stops oil from going into the sea if there is a spill. No smoking is allowed near the bunkering station. Fire-fighting equipment must be ready. The crew must use radios to communicate between the ship and the barge."</p>
        <div class="question"><p><strong>4.</strong> What is bunkering?</p><div class="options"><label><input type="radio" name="reading_q3" value="A"> A. Loading cargo</label><label><input type="radio" name="reading_q3" value="B"> B. Taking fuel oil</label><label><input type="radio" name="reading_q3" value="C"> C. Cleaning decks</label></div></div>
        <div class="question"><p><strong>5.</strong> Why must scuppers be plugged?</p><div class="options"><label><input type="radio" name="reading_q4" value="A"> A. To let water drain</label><label><input type="radio" name="reading_q4" value="B"> B. To stop oil going into the sea</label><label><input type="radio" name="reading_q4" value="C"> C. To clean the deck</label></div></div></div>`;
    window.readingAnswers = ["B", "B", "B", "B", "B"];
}

// ======================== LISTENING (25 Marks - 10 Qs) ========================
function loadListening() {
    document.getElementById('listeningQuestions').innerHTML = `
        <div class="card"><h3>Part 1: Morning Briefing (5 Qs)</h3><div class="audio-container"><audio controls><source src="set5part1.mp3" type="audio/mpeg"></audio></div>
        <div class="question"><p><strong>1.</strong> What time is the briefing?</p><div class="options"><label><input type="radio" name="listening_q0" value="A"> A. 7:00</label><label><input type="radio" name="listening_q0" value="B"> B. 8:00</label><label><input type="radio" name="listening_q0" value="C"> C. 9:00</label></div></div>
        <div class="question"><p><strong>2.</strong> What work is planned for today?</p><div class="options"><label><input type="radio" name="listening_q1" value="A"> A. Painting</label><label><input type="radio" name="listening_q1" value="B"> B. Rust removal</label><label><input type="radio" name="listening_q1" value="C"> C. Both A and B</label></div></div>
        <div class="question"><p><strong>3.</strong> What is the weather forecast?</p><div class="options"><label><input type="radio" name="listening_q2" value="A"> A. Sunny</label><label><input type="radio" name="listening_q2" value="B"> B. Rainy</label><label><input type="radio" name="listening_q2" value="C"> C. Stormy</label></div></div>
        <div class="question"><p><strong>4.</strong> Who must check the mooring lines?</p><div class="options"><label><input type="radio" name="listening_q3" value="A"> A. AB seamen</label><label><input type="radio" name="listening_q3" value="B"> B. Officers</label><label><input type="radio" name="listening_q3" value="C"> C. Cook</label></div></div>
        <div class="question"><p><strong>5.</strong> When is the fire drill?</p><div class="options"><label><input type="radio" name="listening_q4" value="A"> A. Monday</label><label><input type="radio" name="listening_q4" value="B"> B. Tuesday</label><label><input type="radio" name="listening_q4" value="C"> C. Wednesday</label></div></div></div>
        <div class="card"><h3>Part 2: Galley Conversation (5 Qs)</h3><div class="audio-container"><audio controls><source src="set5part2.mp3" type="audio/mpeg"></audio></div>
        <div class="question"><p><strong>6.</strong> What meal are they preparing?</p><div class="options"><label><input type="radio" name="listening_q5" value="A"> A. Breakfast</label><label><input type="radio" name="listening_q5" value="B"> B. Lunch</label><label><input type="radio" name="listening_q5" value="C"> C. Dinner</label></div></div>
        <div class="question"><p><strong>7.</strong> What is the main dish?</p><div class="options"><label><input type="radio" name="listening_q6" value="A"> A. Fish</label><label><input type="radio" name="listening_q6" value="B"> B. Chicken curry</label><label><input type="radio" name="listening_q6" value="C"> C. Beef</label></div></div>
        <div class="question"><p><strong>8.</strong> How many crew members today?</p><div class="options"><label><input type="radio" name="listening_q7" value="A"> A. 18</label><label><input type="radio" name="listening_q7" value="B"> B. 22</label><label><input type="radio" name="listening_q7" value="C"> C. 25</label></div></div>
        <div class="question"><p><strong>9.</strong> What vegetable is with the meal?</p><div class="options"><label><input type="radio" name="listening_q8" value="A"> A. Carrots</label><label><input type="radio" name="listening_q8" value="B"> B. Beans</label><label><input type="radio" name="listening_q8" value="C"> C. Mixed vegetables</label></div></div>
        <div class="question"><p><strong>10.</strong> What time will lunch be served?</p><div class="options"><label><input type="radio" name="listening_q9" value="A"> A. 11:30</label><label><input type="radio" name="listening_q9" value="B"> B. 12:00</label><label><input type="radio" name="listening_q9" value="C"> C. 12:30</label></div></div></div>`;
    window.listeningAnswers = ["B", "C", "A", "A", "C", "B", "B", "B", "C", "B"];
}

// ======================== WRITING (20 Marks - 4 Tasks x5) ========================
function loadWriting() {
    document.getElementById('writingQuestions').innerHTML = `
        <div class="card"><h3>Task 1: Introduce Your Ship [5 Marks]</h3><p>Write 3-4 sentences about your ship. Include: type of ship, number of crew, and where you are sailing. (25-30 words)</p><textarea id="writingTask1" rows="3"></textarea></div>
        <div class="card"><h3>Task 2: Safety Report [5 Marks]</h3><p>Write a short report about a safety hazard you found on deck. Tell what you found and who you reported it to. (30-35 words)</p><textarea id="writingTask2" rows="3"></textarea></div>
        <div class="card"><h3>Task 3: Daily Log Entry [5 Marks]</h3><p>Write a short logbook entry for today. Include: weather, work done, and any incidents. (35-40 words)</p><textarea id="writingTask3" rows="4"></textarea></div>
        <div class="card"><h3>Task 4: Email to Family [5 Marks]</h3><p>Write a short email to your family about life on the ship. Tell them about your work, the food, and how you feel. (40-50 words)</p><textarea id="writingTask4" rows="4"></textarea></div>`;
}
function gradeWriting() {
    let s = 0;
    [{ id:'writingTask1', kw:["ship","tanker","container","crew","sailing","port","voyage","deck","engine","cargo"], max:5 },
     { id:'writingTask2', kw:["found","hazard","slippery","broken","reported","officer","bosun","safety","deck","fixed"], max:5 },
     { id:'writingTask3', kw:["weather","sunny","rainy","work","painting","maintenance","drill","incident","deck","watch"], max:5 },
     { id:'writingTask4', kw:["dear","family","work","food","good","miss","love","ship","sea","healthy"], max:5 }
    ].forEach(t => { const txt = document.getElementById(t.id)?.value || ''; if (txt.length > 15) { let c = 0; t.kw.forEach(k => { if (txt.toLowerCase().includes(k)) c++; }); s += Math.min(t.max, c); } });
    return Math.min(20, s);
}

// ======================== SPEAKING (10 Qs x1 = 10 Marks) ========================
const speakingQs = [
    { prompt:"Tell me about yourself and your job on the ship.", kw:["name","am","cadet","seaman","officer","work","deck","engine","ship"], max:1 },
    { prompt:"What do you do every day on the ship?", kw:["wake","breakfast","work","watch","deck","maintenance","lunch","drill","dinner","sleep"], max:1 },
    { prompt:"What safety equipment do you use on deck?", kw:["helmet","gloves","boots","ppe","lifejacket","safety","wear","protect"], max:1 },
    { prompt:"Why is it important to follow safety rules?", kw:["safety","rules","accident","injury","protect","dangerous","careful","follow"], max:1 },
    { prompt:"What would you do if you saw a fire on board?", kw:["fire","alarm","shout","extinguisher","muster","station","report","officer","help"], max:1 },
    { prompt:"Describe the weather today. Is it good for working on deck?", kw:["weather","sunny","rainy","windy","hot","cold","deck","work","safe"], max:1 },
    { prompt:"What is your favorite meal on the ship? Who cooks it?", kw:["favorite","meal","food","rice","chicken","fish","cook","galley","delicious"], max:1 },
    { prompt:"How do you communicate with your family when you are at sea?", kw:["phone","call","internet","message","family","talk","miss","sea"], max:1 },
    { prompt:"What do you do in your free time on the ship?", kw:["free","time","read","movie","music","exercise","sleep","phone","friend"], max:1 },
    { prompt:"Do you like working at sea? Why or why not?", kw:["like","love","sea","work","travel","money","friend","good","bad","career"], max:1 }
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
        if (ans.length >= 8) { let c = 0; q.kw.forEach(k => { if (ans.toLowerCase().includes(k)) c++; }); total += Math.min(q.max, c); }
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
            <div class="result-header"><h3>📊 MEPT Exam Results - Set 5</h3><p class="result-date">📅 ${dateStr}</p></div>
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
function downloadPDF() { const card = document.getElementById('resultCard'); const btn = card.querySelector('.download-btn'); btn.style.display = 'none'; html2pdf().set({ margin: 1, filename: 'MEPT_Set5_Result.pdf', image: { type: 'jpeg', quality: 0.98 }, html2canvas: { scale: 2 }, jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' } }).from(card).save().then(() => { btn.style.display = 'block'; }); }
