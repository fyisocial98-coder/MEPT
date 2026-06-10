// ======================== EXAM AUTH ========================
function checkExamAuth() {
    const user = document.getElementById("username").value;
    const key = document.getElementById("userKey").value;
    if (user === "zello" && key === "il0veuu") {
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

// ======================== GRAMMAR (30 Qs) ========================
function loadGrammar() {
    const qs = [
        { q:"While the deckhands __________ the cargo hatches, the rain suddenly started.", opts:["A. secure","B. were securing","C. have secured"], ans:"B" },
        { q:"The Chief Engineer ordered that the emergency generator __________ before departure.", opts:["A. must test","B. be tested","C. testing"], ans:"B" },
        { q:"The vessel __________ for five days without encountering rough seas.", opts:["A. has been sailing","B. sailed","C. was sailing"], ans:"A" },
        { q:"If the oil pressure __________ too low, the safety system stops the engine.", opts:["A. drops","B. dropped","C. would drop"], ans:"A" },
        { q:"The new radar system is __________ more reliable than the previous one.", opts:["A. very","B. much","C. directly"], ans:"B" },
        { q:"By the time the captain arrived, the crew __________ the drill.", opts:["A. completed","B. had completed","C. completes"], ans:"B" },
        { q:"The engineer said the repair __________ by tomorrow morning.", opts:["A. will finish","B. would be finished","C. is finishing"], ans:"B" },
        { q:"We must ensure all equipment __________ regularly.", opts:["A. is checked","B. checks","C. checking"], ans:"A" },
        { q:"The ship cannot leave __________ customs clearance is obtained.", opts:["A. while","B. until","C. during"], ans:"B" },
        { q:"The bosun insisted that the deckhands __________ the ropes carefully.", opts:["A. handle","B. handled","C. handling"], ans:"A" },
        { q:"Neither the captain nor the officers __________ aware of the storm.", opts:["A. was","B. were","C. has been"], ans:"B" },
        { q:"The lifeboat drill __________ every Saturday without fail.", opts:["A. conducts","B. is conducted","C. conducted"], ans:"B" },
        { q:"Had the lookout been more alert, the collision __________ avoided.", opts:["A. would be","B. would have been","C. will be"], ans:"B" },
        { q:"The cargo manifest, together with the bills of lading, __________ on the bridge.", opts:["A. is kept","B. are kept","C. keep"], ans:"A" },
        { q:"It is essential that every crew member __________ the safety briefing.", opts:["A. attends","B. attend","C. attended"], ans:"B" },
        { q:"The pumpman reported that the ballast tanks __________ before loading.", opts:["A. emptied","B. had been emptied","C. were emptying"], ans:"B" },
        { q:"__________ the heavy weather, the vessel maintained her course.", opts:["A. Despite","B. Although","C. However"], ans:"A" },
        { q:"The chief mate asked the cadet __________ the logbook entries.", opts:["A. to double-check","B. double-checking","C. double-check"], ans:"A" },
        { q:"No sooner __________ the gangway than the rain started.", opts:["A. had they lowered","B. they lowered","C. they had lowered"], ans:"A" },
        { q:"The more you practice, __________ you communicate.", opts:["A. the better","B. the best","C. better"], ans:"A" },
        { q:"The OOW must call the Captain if visibility __________ below two miles.", opts:["A. drops","B. will drop","C. would drop"], ans:"A" },
        { q:"All scuppers must be plugged __________ any oil spill escapes.", opts:["A. lest","B. so that","C. in order to"], ans:"A" },
        { q:"The chief engineer, along with his team, __________ in the engine room.", opts:["A. is working","B. are working","C. work"], ans:"A" },
        { q:"I wish I __________ more about maritime regulations before joining.", opts:["A. knew","B. had known","C. know"], ans:"B" },
        { q:"The vessel's ETA has been revised __________ the port authority.", opts:["A. by","B. from","C. with"], ans:"A" },
        { q:"__________ the storm warning, the ship remained in port.", opts:["A. Due to","B. Because","C. Since"], ans:"A" },
        { q:"The crew were advised __________ life jackets at all times.", opts:["A. wearing","B. to wear","C. wear"], ans:"B" },
        { q:"It is high time the company __________ new safety equipment.", opts:["A. purchases","B. purchased","C. purchasing"], ans:"B" },
        { q:"The cargo was secured __________ it wouldn't shift.", opts:["A. so that","B. because","C. although"], ans:"A" },
        { q:"Only after the inspection __________ allowed to resume.", opts:["A. were they","B. they were","C. they had"], ans:"A" }
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

// ======================== READING (10 Marks) ========================
function loadReading() {
    document.getElementById('readingQuestions').innerHTML = `
        <div class="reading-passage"><h3>Emergency Procedures</h3><p>"In the event of a fire on board, the first action is to raise the alarm. All crew must proceed to muster stations. Fire teams under the Chief Officer combat the blaze while others assist with boundary cooling."</p>
        <div class="question"><p><strong>1.</strong> First action in a fire?</p><div class="options"><label><input type="radio" name="reading_q0" value="A"> A. Call Captain</label><label><input type="radio" name="reading_q0" value="B"> B. Raise alarm</label><label><input type="radio" name="reading_q0" value="C"> C. Fight fire</label></div></div>
        <div class="question"><p><strong>2.</strong> Who directs fire teams?</p><div class="options"><label><input type="radio" name="reading_q1" value="A"> A. Captain</label><label><input type="radio" name="reading_q1" value="B"> B. Chief Officer</label><label><input type="radio" name="reading_q1" value="C"> C. Bosun</label></div></div></div>
        <div class="reading-passage"><h3>Bridge Resource Management</h3><p>"BRM ensures all resources are used for safe navigation. No single person can manage all tasks alone. It requires open communication and willingness to challenge unsafe decisions."</p>
        <div class="question"><p><strong>3.</strong> Key principle of BRM?</p><div class="options"><label><input type="radio" name="reading_q2" value="A"> A. Captain alone</label><label><input type="radio" name="reading_q2" value="B"> B. No one manages all</label><label><input type="radio" name="reading_q2" value="C"> C. Only officers decide</label></div></div>
        <div class="question"><p><strong>4.</strong> BRM requires?</p><div class="options"><label><input type="radio" name="reading_q3" value="A"> A. Strict hierarchy</label><label><input type="radio" name="reading_q3" value="B"> B. Open communication</label><label><input type="radio" name="reading_q3" value="C"> C. Solo work</label></div></div>
        <div class="question"><p><strong>5.</strong> Team members must be willing to?</p><div class="options"><label><input type="radio" name="reading_q4" value="A"> A. Follow blindly</label><label><input type="radio" name="reading_q4" value="B"> B. Challenge unsafe decisions</label><label><input type="radio" name="reading_q4" value="C"> C. Work alone</label></div></div></div>`;
    window.readingAnswers = ["B", "B", "B", "B", "B"];
}

// ======================== LISTENING (25 Marks) ========================
function loadListening() {
    document.getElementById('listeningQuestions').innerHTML = `
        <div class="card"><h3>Part 1: Short Audio (5 Qs)</h3><div class="audio-container"><audio controls><source src="set2part1.mp3" type="audio/mpeg"></audio></div>
        <div class="question"><p><strong>1.</strong> Emergency announced?</p><div class="options"><label><input type="radio" name="listening_q0" value="A"> A. Fire</label><label><input type="radio" name="listening_q0" value="B"> B. Man overboard</label><label><input type="radio" name="listening_q0" value="C"> C. Collision</label></div></div>
        <div class="question"><p><strong>2.</strong> Which side?</p><div class="options"><label><input type="radio" name="listening_q1" value="A"> A. Port</label><label><input type="radio" name="listening_q1" value="B"> B. Starboard</label><label><input type="radio" name="listening_q1" value="C"> C. Aft</label></div></div>
        <div class="question"><p><strong>3.</strong> Helmsman action?</p><div class="options"><label><input type="radio" name="listening_q2" value="A"> A. Maintain</label><label><input type="radio" name="listening_q2" value="B"> B. Hard starboard</label><label><input type="radio" name="listening_q2" value="C"> C. Stop</label></div></div>
        <div class="question"><p><strong>4.</strong> Who throws lifebuoy?</p><div class="options"><label><input type="radio" name="listening_q3" value="A"> A. OOW</label><label><input type="radio" name="listening_q3" value="B"> B. Deck rating</label><label><input type="radio" name="listening_q3" value="C"> C. Bosun</label></div></div>
        <div class="question"><p><strong>5.</strong> Signal sounded?</p><div class="options"><label><input type="radio" name="listening_q4" value="A"> A. One blast</label><label><input type="radio" name="listening_q4" value="B"> B. Three long blasts</label><label><input type="radio" name="listening_q4" value="C"> C. Continuous</label></div></div></div>
        <div class="card"><h3>Part 2: Long Conversation (5 Qs)</h3><div class="audio-container"><audio controls><source src="set2part2.mp3" type="audio/mpeg"></audio></div>
        <div class="question"><p><strong>6.</strong> Meeting topic?</p><div class="options"><label><input type="radio" name="listening_q5" value="A"> A. Equipment</label><label><input type="radio" name="listening_q5" value="B"> B. Port inspection</label><label><input type="radio" name="listening_q5" value="C"> C. Crew change</label></div></div>
        <div class="question"><p><strong>7.</strong> Inspection day?</p><div class="options"><label><input type="radio" name="listening_q6" value="A"> A. Monday</label><label><input type="radio" name="listening_q6" value="B"> B. Tuesday</label><label><input type="radio" name="listening_q6" value="C"> C. Wednesday</label></div></div>
        <div class="question"><p><strong>8.</strong> Document updated?</p><div class="options"><label><input type="radio" name="listening_q7" value="A"> A. Oil Record Book</label><label><input type="radio" name="listening_q7" value="B"> B. Garbage Book</label><label><input type="radio" name="listening_q7" value="C"> C. Logbook</label></div></div>
        <div class="question"><p><strong>9.</strong> Who accompanies?</p><div class="options"><label><input type="radio" name="listening_q8" value="A"> A. Chief Officer</label><label><input type="radio" name="listening_q8" value="B"> B. Captain</label><label><input type="radio" name="listening_q8" value="C"> C. Chief Engineer</label></div></div>
        <div class="question"><p><strong>10.</strong> Drill demonstrated?</p><div class="options"><label><input type="radio" name="listening_q9" value="A"> A. Fire</label><label><input type="radio" name="listening_q9" value="B"> B. Abandon ship</label><label><input type="radio" name="listening_q9" value="C"> C. Both</label></div></div></div>`;
    window.listeningAnswers = ["B", "B", "B", "B", "B", "B", "C", "A", "A", "C"];
}

// ======================== WRITING (25 Marks - 5 Tasks) ========================
function loadWriting() {
    document.getElementById('writingQuestions').innerHTML = `
        <div class="card"><h3>Task 1: Short Message [5 Marks]</h3><p>Report damaged mooring rope to Chief Officer.</p><textarea id="writingTask1" rows="3"></textarea></div>
        <div class="card"><h3>Task 2: Short Message [5 Marks]</h3><p>Inform engine room about propeller shaft vibration.</p><textarea id="writingTask2" rows="3"></textarea></div>
        <div class="card"><h3>Task 3: Paragraph [5 Marks]</h3><p>Explain importance of BRM on bridge. (50-60 words)</p><textarea id="writingTask3" rows="4"></textarea></div>
        <div class="card"><h3>Task 4: Paragraph [5 Marks]</h3><p>Describe enclosed space entry procedure. (50-60 words)</p><textarea id="writingTask4" rows="4"></textarea></div>
        <div class="card"><h3>Task 5: Paragraph [5 Marks]</h3><p>Discuss garbage management under MARPOL. (50-60 words)</p><textarea id="writingTask5" rows="4"></textarea></div>`;
}
function gradeWriting() {
    let s = 0;
    [{ id:'writingTask1', kw:["damaged","mooring","rope","chief","officer","report","replace","snap","back","urgent"], max:5 },
     { id:'writingTask2', kw:["vibration","propeller","shaft","engine","room","report","unusual","bearing","urgent"], max:5 },
     { id:'writingTask3', kw:["brm","bridge","resource","management","communication","teamwork","safety","officer","navigation"], max:5 },
     { id:'writingTask4', kw:["enclosed","space","permit","gas","testing","oxygen","standby","communication","entry","safety"], max:5 },
     { id:'writingTask5', kw:["garbage","marpol","waste","plastic","food","incinerator","pollution","sea","environment","regulations"], max:5 }
    ].forEach(t => { const txt = document.getElementById(t.id)?.value || ''; if (txt.length > 15) { let c = 0; t.kw.forEach(k => { if (txt.toLowerCase().includes(k)) c++; }); s += Math.min(t.max, c); } });
    return Math.min(25, s);
}

// ======================== SPEAKING (10 Qs x1 = 10 Marks) ========================
const speakingQs = [
    { prompt:"Where do you see yourself in your maritime career ten years from now?", kw:["captain","chief","officer","career","vessel","command","sailing","experience"], max:1 },
    { prompt:"Describe a difficult situation during training and how you overcame it.", kw:["difficult","training","overcame","solve","help","learn","challenge","practice"], max:1 },
    { prompt:"Why is strict time management essential for watchkeeping officers?", kw:["time","management","watchkeeping","officer","schedule","punctual","duty","safety"], max:1 },
    { prompt:"Explain the steps you would take if you discovered a fire in the galley.", kw:["fire","galley","alarm","extinguisher","muster","station","report","officer"], max:1 },
    { prompt:"What is the importance of the Oil Record Book?", kw:["oil","record","book","marpol","pollution","discharge","legal","inspection"], max:1 },
    { prompt:"Describe how you would handle a disagreement with a senior officer.", kw:["respect","professional","discuss","private","safety","hierarchy","solve","calm"], max:1 },
    { prompt:"Why must crew stand clear of the snap-back zone during mooring?", kw:["snap","back","zone","rope","break","tension","injury","fatal"], max:1 },
    { prompt:"Why must the deck be secured before heavy weather?", kw:["heavy","weather","secure","lashing","equipment","rope","safety","damage"], max:1 },
    { prompt:"What communication is used between bridge and aft deck during berthing?", kw:["radio","walkie","talkie","bridge","aft","deck","communication","berthing"], max:1 },
    { prompt:"Do you agree modern technology has made seafaring safer? Explain.", kw:["technology","safer","navigation","radar","ais","communication","errors","human"], max:1 }
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

    let rs = 0; for (let i = 0; i < 5; i++) { const s = document.querySelector(`input[name="reading_q${i}"]:checked`); if (s && s.value === window.readingAnswers[i]) rs += 2; }
    total += rs; max += 10;

    let ls = 0; for (let i = 0; i < 10; i++) { const s = document.querySelector(`input[name="listening_q${i}"]:checked`); if (s && s.value === window.listeningAnswers[i]) ls += 2.5; }
    total += ls; max += 25;

    const ws = gradeWriting(); total += ws; max += 25;
    const ss = gradeSpeaking(); total += ss; max += 10;

    const pct = Math.round((total/max)*100);
    const today = new Date();
    const dateStr = today.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });

    document.getElementById('examResult').style.display = 'block';
    document.getElementById('examResult').innerHTML = `
        <div class="result-card" id="resultCard">
            <div class="result-header"><h3>📊 MEPT Exam Results - Set 2</h3><p class="result-date">📅 ${dateStr}</p></div>
            <div class="result-score-circle"><span class="big-score">${pct}%</span><span class="total-score">${total}/${max}</span></div>
            <div class="result-grade ${gradeClass(pct)}">${gradeMsg(pct)}</div>
            <div class="result-details">${bar('📖 Grammar', gs, 30)}${bar('📰 Reading', rs, 10)}${bar('🎧 Listening', ls, 25)}${bar('✍️ Writing', ws, 25)}${bar('🗣️ Speaking', ss, 10)}</div>
            <button class="download-btn" onclick="downloadPDF()">📥 Download Result as PDF</button>
        </div>`;
    document.getElementById('examResult').scrollIntoView({ behavior: 'smooth' });
}

function bar(name, score, max) { const p = Math.round((score/max)*100); return `<div class="result-item"><span class="section-name">${name}</span><span class="section-score">${score}/${max} (${p}%)</span><div class="section-bar"><div class="section-bar-fill" style="width:${p}%"></div></div></div>`; }
function gradeClass(p) { if (p >= 80) return 'grade-excellent'; if (p >= 60) return 'grade-good'; if (p >= 40) return 'grade-fair'; return 'grade-poor'; }
function gradeMsg(p) { if (p >= 80) return '🏆 Excellent!'; if (p >= 60) return '👍 Good job!'; if (p >= 40) return '📚 Need practice.'; return '💪 Keep studying!'; }
function downloadPDF() { const card = document.getElementById('resultCard'); const btn = card.querySelector('.download-btn'); btn.style.display = 'none'; html2pdf().set({ margin: 1, filename: 'MEPT_Set2_Result.pdf', image: { type: 'jpeg', quality: 0.98 }, html2canvas: { scale: 2 }, jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' } }).from(card).save().then(() => { btn.style.display = 'block'; }); }
