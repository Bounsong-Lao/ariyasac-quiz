document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Quiz Logic
    const questions = [
        {
            question: "ອະຣິຍະສັຈ 4 ມີຈັກປະການ?",
            options: [
                "2 ປະການ",
                "3 ປະການ",
                "4 ປະການ",
                "5 ປະການ"
            ],
            answer: "4 ປະການ",
            explanation: "ອະຣິຍະສັຈ 4 ມີ 4 ປະການຄື: ທຸກ, ສະມຸໄທ, ນິໂຣດ, ແລະ ມັກ."
        },
        {
            question: "ຄວາມຈິງອັນປະເສີດຂໍ້ທຳອິດແມ່ນຫຍັງ?",
            options: [
                "ສະມຸໄທ",
                "ທຸກ",
                "ນິໂຣດ",
                "ມັກ"
            ],
            answer: "ທຸກ",
            explanation: "ຄວາມຈິງອັນປະເສີດຂໍ້ທຳອິດຄື ທຸກ (Dukkha), ຄວາມຈິງທີ່ວ່າທຸກມີຢູ່."
        },
        {
            question: "ສາເຫດຫຼັກຂອງທຸກໃນພຸດທະສາສະໜາແມ່ນຫຍັງ?",
            options: [
                "ຄວາມໂສກເສົ້າ",
                "ຄວາມເຈັບປວດ",
                "ຕັນຫາ (ຄວາມຢາກ)",
                "ຄວາມແກ່ຊະລາ"
            ],
            answer: "ຕັນຫາ (ຄວາມຢາກ)",
            explanation: "ສາເຫດຫຼັກຂອງທຸກຄື ຕັນຫາ (ຄວາມຢາກ), ຄວາມທະຍານຢາກ, ຄວາມຍຶດຕິດ."
        },
        {
            question: "ການດັບທຸກ (ນິໂຣດ) ເກີດຂຶ້ນໄດ້ແນວໃດ?",
            options: [
                "ໂດຍການຫາເງິນໃຫ້ຫຼາຍ",
                "ໂດຍການລະຕັນຫາໃຫ້ໝົດໄປ",
                "ໂດຍການມີຄວາມສຸກຕະຫຼອດເວລາ",
                "ໂດຍການຫຼີກລ້ຽງຄວາມຈິງ"
            ],
            answer: "ໂດຍການລະຕັນຫາໃຫ້ໝົດໄປ",
            explanation: "ການດັບທຸກແມ່ນເກີດຂຶ້ນໂດຍການລະຕັນຫາ, ຄວາມຢາກ, ຄວາມຍຶດຕິດໃຫ້ໝົດສິ້ນໄປ."
        },
        {
            question: "ເປົ້າໝາຍສູງສຸດຂອງການດັບທຸກໃນພຸດທະສາສະໜາແມ່ນຫຍັງ?",
            options: [
                "ຄວາມຮັ່ງມີ",
                "ຊື່ສຽງ",
                "ນິບພານ",
                "ອຳນາດ"
            ],
            answer: "ນິບພານ",
            explanation: "ເປົ້າໝາຍສູງສຸດຂອງການດັບທຸກຄື ນິບພານ, ເຊິ່ງເປັນສະພາບທີ່ປາສະຈາກທຸກ."
        },
        {
            question: "ມັກມີອົງ 8 ປະກອບດ້ວຍຈັກຂໍ້ປະຕິບັດ?",
            options: [
                "5 ຂໍ້",
                "6 ຂໍ້",
                "7 ຂໍ້",
                "8 ຂໍ້"
            ],
            answer: "8 ຂໍ້",
            explanation: "ມັກມີອົງ 8 ປະກອບດ້ວຍ 8 ຂໍ້ປະຕິບັດຄື: ສໍາມາທິທິ, ສໍາມາສັງກັບປະ, ສໍາມາວາຈາ, ສໍາມາກຳມັນຕະ, ສໍາມາອາຊີວະ, ສໍາມາໄວຍາມະ, ສໍາມາສະຕິ, ສໍາມາສະມາທິ."
        },
        {
            question: "ຄວາມເຫັນຊອບ (ສຳມາທິທິ) ແມ່ນໝາຍເຖິງຫຍັງ?",
            options: [
                "ການເຫັນດີເຫັນພ້ອມກັບຄົນອື່ນ",
                "ການເຂົ້າໃຈຢ່າງຖືກຕ້ອງໃນອະຣິຍະສັຈ 4",
                "ການມີທັດສະນະຄະຕິທີ່ດີຕໍ່ທຸກຄົນ",
                "ການເຫັນສິ່ງຕ່າງໆດ້ວຍຕາເປົ່າ"
            ],
            answer: "ການເຂົ້າໃຈຢ່າງຖືກຕ້ອງໃນອະຣິຍະສັຈ 4",
            explanation: "ສຳມາທິທິ (ຄວາມເຫັນຊອບ) ແມ່ນການເຂົ້າໃຈຢ່າງຖືກຕ້ອງໃນອະຣິຍະສັຈ 4."
        },
        {
            question: "ຂໍ້ໃດຕໍ່ໄປນີ້ແມ່ນໝວດຂອງສິນໃນມັກມີອົງ 8?",
            options: [
                "ສຳມາສະຕິ, ສຳມາສະມາທິ",
                "ສຳມາທິທິ, ສຳມາສັງກັບປະ",
                "ສຳມາວາຈາ, ສຳມາກຳມັນຕະ, ສຳມາອາຊີວະ",
                "ສຳມາໄວຍາມະ"
            ],
            answer: "ສຳມາວາຈາ, ສຳມາກຳມັນຕະ, ສຳມາອາຊີວະ",
            explanation: "ໝວດສິນໃນມັກມີອົງ 8 ປະກອບມີ: ສຳມາວາຈາ (ວາຈາຊອບ), ສຳມາກຳມັນຕະ (ການງານຊອບ), ສຳມາອາຊີວະ (ອາຊີບຊອບ)."
        },
        {
            question: "ຄວາມຢາກທີ່ກ່ຽວຂ້ອງກັບການມີ ຫຼື ການເປັນສິ່ງໃດສິ່ງໜຶ່ງເອີ້ນວ່າຫຍັງ?",
            options: [
                "ກາມຕັນຫາ",
                "ພາວະຕັນຫາ",
                "ວິພາວະຕັນຫາ",
                "ໂລພະຕັນຫາ"
            ],
            answer: "ພາວະຕັນຫາ",
            explanation: "ພາວະຕັນຫາຄືຄວາມທະຍານຢາກໃນການມີ, ການເປັນ, ການຄົງຢູ່."
        },
        {
            question: "ອະຣິຍະສັຈ 4 ຖືກຄົ້ນພົບ ແລະ ສະແດງໂດຍໃຜ?",
            options: [
                "ພຣະສົງທົ່ວໄປ",
                "ພຣະພຸດທະເຈົ້າ",
                "ນັກປາດບູຮານ",
                "ຄູບາອາຈານ"
            ],
            answer: "ພຣະພຸດທະເຈົ້າ",
            explanation: "ອະຣິຍະສັຈ 4 ຖືກຄົ້ນພົບ ແລະ ສະແດງໂດຍພຣະພຸດທະເຈົ້າ."
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    const quizContainer = document.getElementById('quiz-container');
    const quizResults = document.getElementById('quiz-results');
    const startQuizBtn = document.getElementById('start-quiz-btn');
    const restartQuizBtn = document.getElementById('restart-quiz-btn');
    const scoreSpan = document.getElementById('score');
    const totalQuestionsSpan = document.getElementById('total-questions');

    startQuizBtn.addEventListener('click', startQuiz);
    restartQuizBtn.addEventListener('click', startQuiz);

    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        quizResults.style.display = 'none';
        quizContainer.style.display = 'block';
        totalQuestionsSpan.textContent = questions.length;
        displayQuestion();
    }

    function displayQuestion() {
        if (currentQuestionIndex < questions.length) {
            const q = questions[currentQuestionIndex];
            quizContainer.innerHTML = `
                <div class="quiz-question">
                    <h3>${q.question}</h3>
                    <ul class="quiz-options">
                        ${q.options.map(option => `<button>${option}</button>`).join('')}
                    </ul>
                    <div class="feedback"></div>
                    <button id="next-question-btn" style="display:none;">ຄຳຖາມຕໍ່ໄປ</button>
                </div>
            `;
            const optionButtons = quizContainer.querySelectorAll('.quiz-options button');
            optionButtons.forEach(button => {
                button.addEventListener('click', selectAnswer);
            });
        } else {
            showResults();
        }
    }

    function selectAnswer(event) {
        const selectedButton = event.target;
        const userAnswer = selectedButton.textContent;
        const currentQuestion = questions[currentQuestionIndex];
        const feedbackDiv = quizContainer.querySelector('.feedback');
        const nextBtn = document.getElementById('next-question-btn');
        const optionButtons = quizContainer.querySelectorAll('.quiz-options button');

        optionButtons.forEach(button => {
            button.disabled = true;
            if (button.textContent === currentQuestion.answer) {
                button.classList.add('correct');
            } else {
                button.classList.add('wrong');
            }
        });

        if (userAnswer === currentQuestion.answer) {
            score++;
            feedbackDiv.textContent = "ຖືກຕ້ອງ! 👍";
            feedbackDiv.classList.remove('wrong');
            feedbackDiv.classList.add('correct');
        } else {
            feedbackDiv.textContent = `ຜິດ! ຄຳຕອບທີ່ຖືກຕ້ອງແມ່ນ: "${currentQuestion.answer}". ${currentQuestion.explanation}`;
            feedbackDiv.classList.remove('correct');
            feedbackDiv.classList.add('wrong');
        }
        nextBtn.style.display = 'block';
        nextBtn.addEventListener('click', nextQuestion);
    }

    function nextQuestion() {
        currentQuestionIndex++;
        displayQuestion();
    }

    function showResults() {
        quizContainer.style.display = 'none';
        quizResults.style.display = 'block';
        scoreSpan.textContent = score;
    }

    // Initial load: show start button
    quizContainer.innerHTML = `
        <p>ກົດປຸ່ມ "ເລີ່ມທົດສອບ" ເພື່ອເລີ່ມຕົ້ນ!</p>
        <button id="start-quiz-btn">ເລີ່ມທົດສອບ</button>
    `;
    document.getElementById('start-quiz-btn').addEventListener('click', startQuiz);
});
