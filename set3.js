// ======================== EXAM AUTH ========================
function checkExamAuth() {
    const user = document.getElementById("username").value;
    const key = document.getElementById("userKey").value;
    if (user === "mts" && key === "set3exam") {
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

// ======================== GRAMMAR (30 Qs - B2 Level) ========================
function loadGrammar() {
    const qs = [
        { q:"Had the crew been properly briefed, the accident __________.", opts:["A. would avoid","B. would have been avoided","C. avoided"], ans:"B" },
        { q:"It is imperative that the emergency generator __________ weekly.", opts:["A. is tested","B. be tested","C. tests"], ans:"B" },
        { q:"The vessel, along with her entire crew, __________ missing since Tuesday.", opts:["A. have been","B. has been","C. were"], ans:"B" },
        { q:"Not until the fog cleared __________ able to resume their course.", opts:["A. were they","B. they were","C. they had been"], ans:"A" },
        { q:"The chief engineer insisted that the purifier __________ before noon.", opts:["A. be repaired","B. was repaired","C. repairing"], ans:"A" },
        { q:"__________ the storm warning, the captain decided to alter course.", opts:["A. Having received","B. Received","C. Receiving"], ans:"A" },
        { q:"The more sophisticated the equipment, __________ the maintenance required.", opts:["A. the greater","B. the great","C. greater"], ans:"A" },
        { q:"Barely __________ the gangway when the mooring line snapped.", opts:["A. had they secured","B. they secured","C. they had secured"], ans:"A" },
        { q:"The OOW reported that a small fishing vessel __________ on the radar.", opts:["A. has been detected","B. had been detected","C. detects"], ans:"B" },
        { q:"It is high time the maritime industry __________ stricter safety protocols.", opts:["A. adopts","B. adopted","C. adopting"], ans:"B" },
        { q:"Neither the chief officer nor the bosun __________ aware of the oil spill.", opts:["A. was","B. were","C. has"], ans:"A" },
        { q:"__________ that the cargo was properly lashed, the ship departed.", opts:["A. Having ensured","B. Ensuring","C. Ensured"], ans:"A" },
        { q:"The captain demanded that all crew members __________ the safety briefing.", opts:["A. attend","B. attends","C. attended"], ans:"A" },
        { q:"Only by thorough inspection __________ potential hazards be identified.", opts:["A. can","B. can be","C. they can"], ans:"A" },
        { q:"The vessel's ETA was revised owing __________ adverse weather conditions.", opts:["A. to","B. from","C. by"], ans:"A" },
        { q:"Should the oil pressure drop, the auxiliary engine __________ automatically.", opts:["A. will stop","B. stops","C. would stop"], ans:"A" },
        { q:"The pumpman, whose duty is to monitor ballast operations, __________ on deck now.", opts:["A. is","B. are","C. were"], ans:"A" },
        { q:"I regret __________ that the lifeboat drill has been postponed.", opts:["A. to inform","B. informing","C. inform"], ans:"A" },
        { q:"The cargo was heavier than __________ in the manifest.", opts:["A. declaring","B. declared","C. declare"], ans:"B" },
        { q:"__________ the circumstances, the Master's decision was justified.", opts:["A. Given","B. Giving","C. Gave"], ans:"A" },
        { q:"The ship will not sail until all deficiencies __________.", opts:["A. are rectified","B. rectified","C. will be rectified"], ans:"A" },
        { q:"It is essential that each crew member __________ their designated muster station.", opts:["A. knows","B. know","C. knew"], ans:"B" },
        { q:"The deck was so slippery __________ several crew members fell.", opts:["A. that","B. so","C. because"], ans:"A" },
        { q:"__________ the engineer's expertise, the problem was quickly resolved.", opts:["A. Thanks to","B. Because","C. Due"], ans:"A" },
        { q:"The company requires that all new recruits __________ a medical examination.", opts:["A. undergo","B. undergoes","C. underwent"], ans:"A" },
        { q:"The vessel was prevented __________ entering the port due to the storm.", opts:["A. from","B. to","C. for"], ans:"A" },
        { q:"No sooner had the anchor dropped __________ the rain stopped.", opts:["A. than","B. when","C. then"], ans:"A" },
        { q:"The chief cook, together with his assistants, __________ the galley inspection.", opts:["A. is preparing for","B. are preparing for","C. prepare"], ans:"A" },
        { q:"If the captain __________ aware, he would have altered course immediately.", opts:["A. was","B. had been","C. were"], ans:"B" },
        { q:"The officer recommended that the cadet __________ more time studying charts.", opts:["A. spends","B. spend","C. spent"], ans:"B" }
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
        <div class="reading-passage"><h3>COLREGs - Rule 5 (Look-out)</h3><p>"Every vessel shall at all times maintain a proper look-out by sight and hearing as well as by all available means appropriate in the prevailing circumstances and conditions so as to make a full appraisal of the situation and of the risk of collision. The look-out must be a dedicated task; the person performing it must not be assigned other duties that could interfere with maintaining a proper watch."</p>
        <div class="question"><p><strong>1.</strong> What must every vessel maintain at all times?</p><div class="options"><label><input type="radio" name="reading_q0" value="A"> A. Radio contact</label><label><input type="radio" name="reading_q0" value="B"> B. Proper look-out</label><label><input type="radio" name="reading_q0" value="C"> C. Engine readiness</label></div></div>
        <div class="question"><p><strong>2.</strong> Can the look-out perform other duties?</p><div class="options"><label><input type="radio" name="reading_q1" value="A"> A. Yes, if quick</label><label><input type="radio" name="reading_q1" value="B"> B. No, it's a dedicated task</label><label><input type="radio" name="reading_q1" value="C"> C. Only during daytime</label></div></div></div>
        <div class="reading-passage"><h3>ISM Code Overview</h3><p>"The International Safety Management (ISM) Code requires shipping companies to establish a Safety Management System (SMS). The SMS must include clear instructions for safe operation, emergency preparedness, and procedures for reporting non-conformities. The Designated Person Ashore (DPA) serves as the link between the ship and shore management, ensuring that adequate resources and support are provided."</p>
        <div class="question"><p><strong>3.</strong> What does ISM Code require companies to establish?</p><div class="options"><label><input type="radio" name="reading_q2" value="A"> A. Profit plan</label><label><input type="radio" name="reading_q2" value="B"> B. Safety Management System</label><label><input type="radio" name="reading_q2" value="C"> C. Crew list</label></div></div>
        <div class="question"><p><strong>4.</strong> Who serves as link between ship and shore?</p><div class="options"><label><input type="radio" name="reading_q3" value="A"> A. Captain</label><label><input type="radio" name="reading_q3" value="B"> B. DPA</label><label><input type="radio" name="reading_q3" value="C"> C. Chief Engineer</label></div></div>
        <div class="question"><p><strong>5.</strong> What must the SMS include procedures for?</p><div class="options"><label><input type="radio" name="reading_q4" value="A"> A. Entertainment only</label><label><input type="radio" name="reading_q4" value="B"> B. Reporting non-conformities</label><label><input type="radio" name="reading_q4" value="C"> C. Menu planning</label></div></div></div>`;
    window.readingAnswers = ["B", "B", "B", "B", "B"];
}

// ======================== LISTENING (25 Marks - 10 Qs) ========================
function loadListening() {
    document.getElementById('listeningQuestions').innerHTML = `
        <div class="card"><h3>Part 1: Emergency Communication (5 Qs)</h3><div class="audio-container"><audio controls><source src="set3part1.mp3" type="audio/mpeg"></audio></div>
        <div class="question"><p><strong>1.</strong> What type of emergency is declared?</p><div class="options"><label><input type="radio" name="listening_q0" value="A"> A. Fire in engine room</label><label><input type="radio" name="listening_q0" value="B"> B. Flooding in cargo hold</label><label><input type="radio" name="listening_q0" value="C"> C. Man overboard</label></div></div>
        <div class="question"><p><strong>2.</strong> Which cargo hold is affected?</p><div class="options"><label><input type="radio" name="listening_q1" value="A"> A. Number 1</label><label><input type="radio" name="listening_q1" value="B"> B. Number 3</label><label><input type="radio" name="listening_q1" value="C"> C. Number 5</label></div></div>
        <div class="question"><p><strong>3.</strong> What should the damage control team do first?</p><div class="options"><label><input type="radio" name="listening_q2" value="A"> A. Start pumps</label><label><input type="radio" name="listening_q2" value="B"> B. Close watertight doors</label><label><input type="radio" name="listening_q2" value="C"> C. Evacuate</label></div></div>
        <div class="question"><p><strong>4.</strong> What signal is sounded?</p><div class="options"><label><input type="radio" name="listening_q3" value="A"> A. Fire alarm</label><label><input type="radio" name="listening_q3" value="B"> B. General emergency alarm</label><label><input type="radio" name="listening_q3" value="C"> C. Abandon ship</label></div></div>
        <div class="question"><p><strong>5.</strong> Where should all crew muster?</p><div class="options"><label><input type="radio" name="listening_q4" value="A"> A. Bridge</label><label><input type="radio" name="listening_q4" value="B"> B. Boat deck</label><label><input type="radio" name="listening_q4" value="C"> C. Engine room</label></div></div></div>
        <div class="card"><h3>Part 2: Port State Control Interview (5 Qs)</h3><div class="audio-container"><audio controls><source src="set3part2.mp3" type="audio/mpeg"></audio></div>
        <div class="question"><p><strong>6.</strong> What is the inspector checking?</p><div class="options"><label><input type="radio" name="listening_q5" value="A"> A. Crew certificates</label><label><input type="radio" name="listening_q5" value="B"> B. Safety equipment</label><label><input type="radio" name="listening_q5" value="C"> C. Cargo manifest</label></div></div>
        <div class="question"><p><strong>7.</strong> Which certificate has expired?</p><div class="options"><label><input type="radio" name="listening_q6" value="A"> A. Oil Record Book</label><label><input type="radio" name="listening_q6" value="B"> B. Fire extinguisher certificate</label><label><input type="radio" name="listening_q6" value="C"> C. Safety Equipment Certificate</label></div></div>
        <div class="question"><p><strong>8.</strong> How many deficiencies were found?</p><div class="options"><label><input type="radio" name="listening_q7" value="A"> A. Two</label><label><input type="radio" name="listening_q7" value="B"> B. Three</label><label><input type="radio" name="listening_q7" value="C"> C. Four</label></div></div>
        <div class="question"><p><strong>9.</strong> When must deficiencies be rectified?</p><div class="options"><label><input type="radio" name="listening_q8" value="A"> A. Before departure</label><label><input type="radio" name="listening_q8" value="B"> B. Within 14 days</label><label><input type="radio" name="listening_q8" value="C"> C. At next port</label></div></div>
        <div class="question"><p><strong>10.</strong> Will the ship be detained?</p><div class="options"><label><input type="radio" name="listening_q9" value="A"> A. Yes, immediately</label><label><input type="radio" name="listening_q9" value="B"> B. No, if rectified</label><label><input type="radio" name="listening_q9" value="C"> C. Undecided</label></div></div></div>`;
    window.listeningAnswers = ["B", "B", "B", "B", "B", "B", "B", "B", "A", "B"];
}

// ======================== WRITING (20 Marks - 4 Tasks x5) ========================
function loadWriting() {
    document.getElementById('writingQuestions').innerHTML = `
        <div class="card"><h3>Task 1: Incident Report [5 Marks]</h3><p>Write a brief incident report about a minor oil spill during bunkering.</p><textarea id="writingTask1" rows="4"></textarea></div>
        <div class="card"><h3>Task 2: Email to DPA [5 Marks]</h3><p>Email the DPA about an upcoming Port State Control inspection.</p><textarea id="writingTask2" rows="4"></textarea></div>
        <div class="card"><h3>Task 3: Safety Circular [5 Marks]</h3><p>Draft a safety circular about proper PPE usage on deck.</p><textarea id="writingTask3" rows="4"></textarea></div>
        <div class="card"><h3>Task 4: Paragraph [5 Marks]</h3><p>Discuss the role of the ISM Code in maritime safety. (60-80 words)</p><textarea id="writingTask4" rows="5"></textarea></div>`;
}
function gradeWriting() {
    let s = 0;
    [{ id:'writingTask1', kw:["oil","spill","bunkering","contained","reported","chief","officer","scupper","plug","immediately"], max:5 },
     { id:'writingTask2', kw:["dpa","port","state","control","inspection","ready","documents","certificate","preparation","contact"], max:5 },
     { id:'writingTask3', kw:["ppe","helmet","gloves","boots","safety","deck","wear","required","injury","protect"], max:5 },
     { id:'writingTask4', kw:["ism","code","safety","management","system","emergency","preparedness","dpa","non-conformity","compliance"], max:5 }
    ].forEach(t => { const txt = document.getElementById(t.id)?.value || ''; if (txt.length > 20) { let c = 0; t.kw.forEach(k => { if (txt.toLowerCase().includes(k)) c++; }); s += Math.min(t.max, c); } });
    return Math.min(20, s);
}

// ======================== SPEAKING (10 Qs x1 = 10 Marks) ========================
const speakingQs = [
    { prompt:"Explain the ISM Code and its importance in maritime safety.", kw:["ism","code","safety","management","system","dpa","emergency","compliance"], max:1 },
    { prompt:"What is the role of the Designated Person Ashore (DPA)?", kw:["dpa","designated","person","ashore","link","ship","shore","support","resources"], max:1 },
    { prompt:"Describe the procedure for entering an enclosed space.", kw:["enclosed","space","permit","gas","testing","oxygen","standby","communication","entry","safety"], max:1 },
    { prompt:"What actions would you take if you discovered flooding in a cargo hold?", kw:["flooding","cargo","hold","alarm","watertight","doors","pumps","captain","damage","control"], max:1 },
    { prompt:"How do you prepare for a Port State Control inspection?", kw:["port","state","control","inspection","documents","certificate","records","ready","checklist","update"], max:1 },
    { prompt:"What are the key elements of effective Bridge Resource Management?", kw:["bridge","resource","management","communication","teamwork","officer","safety","navigation","challenge"], max:1 },
    { prompt:"Why is proper garbage management critical under MARPOL Annex V?", kw:["garbage","marpol","annex","plastic","food","waste","sea","pollution","discharge","regulations"], max:1 },
    { prompt:"Describe the emergency procedures for a fire in the engine room.", kw:["fire","engine","room","alarm","extinguisher","ventilation","fuel","shut","team","muster"], max:1 },
    { prompt:"What is the importance of the Oil Record Book?", kw:["oil","record","book","marpol","discharge","legal","inspection","pollution","fine","document"], max:1 },
    { prompt:"Do you think STCW certification alone makes a competent seafarer? Explain.", kw:["stcw","certification","competent","experience","practical","training","skills","knowledge","seafarer","learning"], max:1 }
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
        if (ans.length >= 10) { let c = 0; q.kw.forEach(k => { if (ans.toLowerCase().includes(k)) c++; }); total += Math.min(q.max, c); }
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
            <div class="result-header"><h3>📊 MEPT Exam Results - Set 3</h3><p class="result-date">📅 ${dateStr}</p></div>
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
function downloadPDF() { const card = document.getElementById('resultCard'); const btn = card.querySelector('.download-btn'); btn.style.display = 'none'; html2pdf().set({ margin: 1, filename: 'MEPT_Set3_Result.pdf', image: { type: 'jpeg', quality: 0.98 }, html2canvas: { scale: 2 }, jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' } }).from(card).save().then(() => { btn.style.display = 'block'; }); }
