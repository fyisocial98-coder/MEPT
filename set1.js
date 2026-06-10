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
let timerInterval;
let timeLeft;

function startTimer(minutes) {
    timeLeft = minutes * 60;
    updateTimerDisplay();
    
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("⏰ အချိန်ပြည့်ပါပြီ။ စာမေးပွဲကို Submit လုပ်ပါ။");
            submitExam();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;
    document.getElementById("timer").textContent = `⏱️ ${mins}:${secs.toString().padStart(2, '0')}`;
}

// ======================== LOAD FULL EXAM ========================
function loadFullExam() {
    loadGrammar();
    loadReading();
    loadListening();
    loadWriting();
    loadSpeaking();
}

// ======================== SECTION I: GRAMMAR ========================
function loadGrammar() {
    const questions = [
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
    questions.forEach((q, i) => {
        html += `<div class="question"><p><strong>${i+1}.</strong> ${q.q}</p><div class="options">`;
        q.opts.forEach(opt => {
            const letter = opt.charAt(0);
            html += `<label><input type="radio" name="grammar_q${i}" value="${letter}"> ${opt}</label>`;
        });
        html += `</div></div>`;
    });
    document.getElementById('grammarQuestions').innerHTML = html;
    window.grammarAnswers = questions.map(q => q.ans);
}

// ======================== SECTION II: READING ========================
function loadReading() {
    const html = `
        <div class="reading-passage">
            <h3>Bunkering Operations</h3>
            <p>"Bunkering operations—the process of receiving fuel oil into a ship's tanks—require maximum alertness from the entire crew to prevent environmental pollution. Before the operation begins, a pre-bunkering checklist must be signed by both the ship's bunkering officer and the barge supervisor. All deck scuppers must be tightly plugged to ensure that any accidental spill is contained on board and does not leak into the sea. Additionally, fire-fighting equipment must be laid out ready for immediate use near the bunkering station, and effective communication signals must be established between the ship and the bunker barge."</p>
            
            <div class="question"><p><strong>1.</strong> What is the primary reason why bunkering operations require maximum alertness?</p>
                <div class="options">
                    <label><input type="radio" name="reading_q0" value="A"> A. To finish the operation faster</label>
                    <label><input type="radio" name="reading_q0" value="B"> B. To prevent environmental pollution</label>
                    <label><input type="radio" name="reading_q0" value="C"> C. To test the fire-fighting equipment</label>
                </div>
            </div>
            
            <div class="question"><p><strong>2.</strong> What must happen before the bunkering operation can officially start?</p>
                <div class="options">
                    <label><input type="radio" name="reading_q1" value="A"> A. The ship must leave the port</label>
                    <label><input type="radio" name="reading_q1" value="B"> B. The deck scuppers must be left open</label>
                    <label><input type="radio" name="reading_q1" value="C"> C. A pre-bunkering checklist must be signed by both parties</label>
                </div>
            </div>
            
            <div class="question"><p><strong>3.</strong> Why must the deck scuppers be tightly plugged during the operation?</p>
                <div class="options">
                    <label><input type="radio" name="reading_q2" value="A"> A. To stop fuel oil from leaking into the sea if a spill occurs</label>
                    <label><input type="radio" name="reading_q2" value="B"> B. To allow water to drain off the deck quickly</label>
                    <label><input type="radio" name="reading_q2" value="C"> C. To keep the bunkering station clean</label>
                </div>
            </div>
        </div>
        
        <div class="reading-passage">
            <h3>Watchkeeping Duties</h3>
            <p>"The officer of the watch (OOW) is responsible for the safe navigation of the ship during their shift. They must continuously monitor the radar, check the vessel's position on the chart, and maintain a proper lookout by sight and hearing. The OOW must also ensure that all navigation equipment is functioning correctly and report any irregularities to the Captain immediately. During periods of heavy traffic or restricted visibility, the OOW must call the Captain to the bridge without delay."</p>
            
            <div class="question"><p><strong>4.</strong> What is the OOW responsible for during their shift?</p>
                <div class="options">
                    <label><input type="radio" name="reading_q3" value="A"> A. Cooking meals for the crew</label>
                    <label><input type="radio" name="reading_q3" value="B"> B. Safe navigation of the ship</label>
                    <label><input type="radio" name="reading_q3" value="C"> C. Engine maintenance</label>
                </div>
            </div>
            
            <div class="question"><p><strong>5.</strong> When must the OOW call the Captain to the bridge?</p>
                <div class="options">
                    <label><input type="radio" name="reading_q4" value="A"> A. During meal times</label>
                    <label><input type="radio" name="reading_q4" value="B"> B. During heavy traffic or restricted visibility</label>
                    <label><input type="radio" name="reading_q4" value="C"> C. When the radar is working perfectly</label>
                </div>
            </div>
        </div>
    `;
    document.getElementById('readingQuestions').innerHTML = html;
    window.readingAnswers = ["B", "C", "A", "B", "B"];
}

// ======================== SECTION III: LISTENING ========================
function loadListening() {
    const html = `
        <div class="card">
            <h3>Part 1: Short Audio Conversations</h3>
            
            <div class="audio-container">
                <p><em>🎧 Audio Part 1 - Listen carefully. You may play twice.</em></p>
                <audio controls>
                    <source src="set1part1.mp3" type="audio/mpeg">
                    Your browser does not support the audio element.
                </audio>
            </div>
            
            <div class="question"><p><strong>1.</strong> According to Audio 1, what should the deck crew do because of the heavy fog?</p>
                <div class="options">
                    <label><input type="radio" name="listening_q0" value="A"> A. Start painting the deck area</label>
                    <label><input type="radio" name="listening_q0" value="B"> B. Stop chipping work and prepare the anchor</label>
                    <label><input type="radio" name="listening_q0" value="C"> C. Change the ship's course immediately</label>
                </div>
            </div>
            
            <div class="question"><p><strong>2.</strong> According to Audio 2, what is causing the twelve-hour delay in arrival?</p>
                <div class="options">
                    <label><input type="radio" name="listening_q1" value="A"> A. Bad weather conditions at sea</label>
                    <label><input type="radio" name="listening_q1" value="B"> B. A breakdown in the port-side steering gear</label>
                    <label><input type="radio" name="listening_q1" value="C"> C. Heavy traffic at the discharge port</label>
                </div>
            </div>
        </div>
        
        <div class="card">
            <h3>Part 2: Long Conversation</h3>
            
            <div class="audio-container">
                <p><em>🎧 Audio Part 2 - Listen carefully. You may play twice.</em></p>
                <audio controls>
                    <source src="set1part2.mp3" type="audio/mpeg">
                    Your browser does not support the audio element.
                </audio>
            </div>
            
            <div class="question"><p><strong>3.</strong> What problem did the Third Engineer notice during his daily inspection?</p>
                <div class="options">
                    <label><input type="radio" name="listening_q2" value="A"> A. A fuel leak in the purifier room</label>
                    <label><input type="radio" name="listening_q2" value="B"> B. A slight vibration in the number two fuel oil purifier</label>
                    <label><input type="radio" name="listening_q2" value="C"> C. The filters were completely blocked</label>
                </div>
            </div>
            
            <div class="question"><p><strong>4.</strong> Why did the Second Engineer tell the Third Engineer not to wait for another hour?</p>
                <div class="options">
                    <label><input type="radio" name="listening_q3" value="A"> A. Because the shift was about to end</label>
                    <label><input type="radio" name="listening_q3" value="B"> B. Because delayed reporting can cause a major machinery breakdown</label>
                    <label><input type="radio" name="listening_q3" value="C"> C. Because the Chief Engineer was already in the purifier room</label>
                </div>
            </div>
        </div>
    `;
    document.getElementById('listeningQuestions').innerHTML = html;
    window.listeningAnswers = ["B", "B", "B", "B"];
}

// ======================== SECTION IV: WRITING ========================
function loadWriting() {
    const html = `
        <div class="card">
            <h3 style="color: var(--primary);">Task 1: Short Message (25–35 words) [10 Marks]</h3>
            <div class="option-card">
                <p class="mt-15"><strong>Prompt:</strong> You noticed that the safety latch on the galley refrigerator door is loose. Write a short message to the Second Engineer reporting this issue and explaining why it needs immediate repair.</p>
                <p style="font-size: 0.85rem; color: #666; margin-top: 8px;">💡 Keywords: <em>safety latch, galley, refrigerator, loose, repair, food, door, rough seas, immediately, second engineer</em></p>
                <textarea id="writingTask1" placeholder="Type your message here..." rows="4"></textarea>
            </div>
        </div>
        
        <div class="card" style="margin-top: 20px;">
            <h3 style="color: var(--primary);">Task 2: Paragraph Writing (90–120 words) [15 Marks]</h3>
            <div class="option-card">
                <p class="mt-15"><strong>Prompt:</strong> Write a structured paragraph about "The Risks of Working in Enclosed Spaces on a Ship." Discuss what precautions a seafarer must take before entering (such as gas testing and enclosed space entry permits) and why communication with the deck watch is vital.</p>
                <p style="font-size: 0.85rem; color: #666; margin-top: 8px;">💡 Keywords: <em>enclosed, space, risks, toxic, gas, oxygen, permit, testing, communication, standby, watch, safety, entry, suffocation, fatal, precautions, atmosphere, radio</em></p>
                <textarea id="writingTask2" placeholder="Type your paragraph here..." rows="6"></textarea>
            </div>
        </div>
    `;
    document.getElementById('writingQuestions').innerHTML = html;
}

// ======================== WRITING AUTO-GRADING ========================
function gradeWriting() {
    let writingScore = 0;
    
    const task1Keywords = ["safety", "latch", "galley", "refrigerator", "loose", "repair", "food", "door", "rough", "seas", "immediately", "second", "engineer"];
    const task1Text = document.getElementById('writingTask1')?.value || '';
    
    if (task1Text.length > 15) {
        let keywordCount = 0;
        task1Keywords.forEach(keyword => {
            if (task1Text.toLowerCase().includes(keyword)) keywordCount++;
        });
        writingScore += Math.min(10, keywordCount * 2);
    }
    
    const task2Keywords = ["enclosed", "space", "risks", "toxic", "gas", "oxygen", "permit", "testing", "communication", "standby", "watch", "safety", "entry", "suffocation", "fatal", "precautions", "atmosphere", "radio"];
    const task2Text = document.getElementById('writingTask2')?.value || '';
    
    if (task2Text.length > 60) {
        let keywordCount = 0;
        task2Keywords.forEach(keyword => {
            if (task2Text.toLowerCase().includes(keyword)) keywordCount++;
        });
        writingScore += Math.min(15, Math.floor(keywordCount * 1.5));
    }
    
    return Math.min(25, writingScore);
}

// ======================== SECTION V: SPEAKING ========================
const speakingQuestions = [
    { id: 1, part: "Part 1", question: "Where do you see yourself in your maritime career ten years from now?", keywords: ["captain", "chief", "officer", "ten", "years", "career", "vessel", "command", "qualified", "ocean", "experience", "sailing"], maxScore: 3 },
    { id: 2, part: "Part 1", question: "Describe a difficult situation you faced during your studies or training, and how you overcame it.", keywords: ["difficult", "situation", "training", "studies", "overcame", "solve", "help", "teacher", "study", "practice", "learn", "challenge"], maxScore: 3 },
    { id: 3, part: "Part 1", question: "Why is strict time management essential for watchkeeping officers?", keywords: ["time", "management", "watchkeeping", "officer", "schedule", "punctual", "duty", "safety", "navigation", "alert", "rest", "shift"], maxScore: 3 },
    { id: 4, part: "Part 2", question: "Why must crew members stand clear of the 'snap-back zone' during mooring operations?", keywords: ["snap", "back", "zone", "mooring", "rope", "break", "tension", "injury", "fatal", "force", "safe", "distance"], maxScore: 2 },
    { id: 5, part: "Part 2", question: "What are the duties of a deck rating while tending the mooring lines?", keywords: ["deck", "rating", "mooring", "lines", "tend", "rope", "secure", "bitt", "winch", "communication", "officer", "safety"], maxScore: 2 },
    { id: 6, part: "Part 2", question: "What kind of communication is used between the bridge and the aft deck during berthing?", keywords: ["radio", "walkie", "talkie", "bridge", "aft", "deck", "communication", "berthing", "orders", "officer", "clear", "signal"], maxScore: 2 },
    { id: 7, part: "Part 3", question: "Statement: \"Automated alarms on modern ships make the watchkeeping crew less alert during night watches.\" Do you agree or disagree? Provide professional maritime reasons.", keywords: ["automated", "alarms", "alert", "watchkeeping", "safety", "detect", "abnormalities", "react", "promptly", "fault", "hazard", "help", "crucial", "disagree", "agree"], maxScore: 5 }
];

function loadSpeaking() {
    let html = '';
    
    // Part 1
    html += `<h3 style="color: var(--primary); margin-bottom: 15px;">Part 1: Introduction and Career Life [9 Marks]</h3>`;
    speakingQuestions.filter(q => q.part === "Part 1").forEach((q, i) => {
        html += createSpeakingCard(q, i);
    });
    
    // Part 2
    html += `<h3 style="color: var(--primary); margin: 25px 0 15px;">Part 2: Safe Mooring Operations [6 Marks]</h3>`;
    html += `<p style="color: #666; font-size: 0.9rem; margin-bottom: 15px;">📋 Screen ပေါ်ရှိ Mooring Operation ပုံနှင့် တွဲဖက်ဖြေဆိုပါ။</p>`;
    speakingQuestions.filter(q => q.part === "Part 2").forEach((q, i) => {
        html += createSpeakingCard(q, i + 3);
    });
    
    // Part 3
    html += `<h3 style="color: var(--primary); margin: 25px 0 15px;">Part 3: Debate Conversation [5 Marks]</h3>`;
    const debateQ = speakingQuestions.find(q => q.part === "Part 3");
    html += createSpeakingCard(debateQ, 6);
    
    document.getElementById('speakingQuestions').innerHTML = html;
}

function createSpeakingCard(q, index) {
    return `
        <div class="card" style="margin-top: 15px;">
            <p><strong>Q${index + 1}:</strong> ${q.question}</p>
            <p style="font-size: 0.85rem; color: #666; margin-top: 5px;">💡 Keywords: ${q.keywords.join(', ')}</p>
            <textarea id="speaking_q${index}" placeholder="Type your answer here..." rows="3" style="width: 100%; margin-top: 10px;"></textarea>
        </div>
    `;
}

function gradeSpeaking() {
    let totalSpeakingScore = 0;
    
    speakingQuestions.forEach((q, index) => {
        const answer = document.getElementById(`speaking_q${index}`)?.value || '';
        
        if (answer.length >= 5) {
            let keywordCount = 0;
            q.keywords.forEach(keyword => {
                if (answer.toLowerCase().includes(keyword.toLowerCase())) keywordCount++;
            });
            totalSpeakingScore += Math.min(q.maxScore, keywordCount);
        }
    });
    
    return Math.min(15, totalSpeakingScore);
}

// ======================== SUBMIT EXAM ========================
function submitExam() {
    clearInterval(timerInterval);
    
    let totalScore = 0, maxScore = 0;

    // Grammar (20 marks)
    let grammarScore = 0;
    for (let i = 0; i < 10; i++) {
        const sel = document.querySelector(`input[name="grammar_q${i}"]:checked`);
        if (sel && sel.value === window.grammarAnswers[i]) grammarScore += 2;
    }
    totalScore += grammarScore; maxScore += 20;

    // Reading (15 marks)
    let readingScore = 0;
    for (let i = 0; i < 5; i++) {
        const sel = document.querySelector(`input[name="reading_q${i}"]:checked`);
        if (sel && sel.value === window.readingAnswers[i]) readingScore += 3;
    }
    totalScore += readingScore; maxScore += 15;

    // Listening (25 marks)
    let listeningScore = 0;
    for (let i = 0; i < 4; i++) {
        const sel = document.querySelector(`input[name="listening_q${i}"]:checked`);
        if (sel && sel.value === window.listeningAnswers[i]) {
            listeningScore += (i < 2) ? 5 : 7.5;
        }
    }
    totalScore += listeningScore; maxScore += 25;

    // Writing (25 marks)
    const writingScore = gradeWriting();
    totalScore += writingScore; maxScore += 25;

    // Speaking (15 marks)
    const speakingScore = gradeSpeaking();
    totalScore += speakingScore; maxScore += 15;

    const percentage = Math.round((totalScore/maxScore)*100);
    
    // Get current date
    const today = new Date();
    const dateStr = today.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });

    // Build Result HTML
    const resultDiv = document.getElementById('examResult');
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `
        <div class="result-card" id="resultCard">
            <div class="result-header">
                <h3>📊 MEPT Exam Results - Set 1</h3>
                <p class="result-date">📅 ${dateStr}</p>
            </div>
            
            <div class="result-score-circle">
                <span class="big-score">${percentage}%</span>
                <span class="total-score">${totalScore}/${maxScore}</span>
            </div>
            
            <div class="result-grade ${getGradeClass(percentage)}">
                ${getGradeMessage(percentage)}
            </div>
            
            <div class="result-details">
                ${buildResultItem('📖 Grammar', grammarScore, 20)}
                ${buildResultItem('📰 Reading', readingScore, 15)}
                ${buildResultItem('🎧 Listening', listeningScore, 25)}
                ${buildResultItem('✍️ Writing', writingScore, 25)}
                ${buildResultItem('🗣️ Speaking', speakingScore, 15)}
            </div>
            
            <button class="download-btn" onclick="downloadPDF()">
                📥 Download Result as PDF
            </button>
        </div>
    `;

    resultDiv.scrollIntoView({ behavior: 'smooth' });
}

function buildResultItem(name, score, max) {
    const pct = Math.round((score/max)*100);
    return `
        <div class="result-item">
            <span class="section-name">${name}</span>
            <span class="section-score">${score}/${max} (${pct}%)</span>
            <div class="section-bar">
                <div class="section-bar-fill" style="width: ${pct}%"></div>
            </div>
        </div>
    `;
}

function getGradeClass(p) {
    if (p >= 80) return 'grade-excellent';
    if (p >= 60) return 'grade-good';
    if (p >= 40) return 'grade-fair';
    return 'grade-poor';
}

function getGradeMessage(p) {
    if (p >= 80) return '🏆 Excellent! You are ready for the exam!';
    if (p >= 60) return '👍 Good job! Keep practicing!';
    if (p >= 40) return '📚 Need more practice. Study harder!';
    return '💪 Keep studying! You can improve!';
}

function downloadPDF() {
    const resultCard = document.getElementById('resultCard');
    
    // Hide download button for PDF
    const downloadBtn = resultCard.querySelector('.download-btn');
    downloadBtn.style.display = 'none';
    
    // Print/PDF options
    const opt = {
        margin: 1,
        filename: 'MEPT_Set1_Result.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    
    // Use html2pdf library
    html2pdf().set(opt).from(resultCard).save().then(() => {
        // Show download button again
        downloadBtn.style.display = 'block';
    });
}
