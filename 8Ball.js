window.addEventListener('DOMContentLoaded', () => {
    let lastX = 0;
    let shakes = 0;
    let cooldown = false;

    const ball = document.getElementById('response-img');
    const textEl = document.getElementById('response-text');
    const button = document.getElementById('shake-button');

    const answers = [
        { text: 'Yes', color: '#00ff88', img: 'wink-blue-emoji-blue.png' },
        { text: 'Maybe', color: '#66aaff', img: 'blueemoji.jpg' },
        { text: 'Ask someone near you', color: '#ffaa33', img: 'salute-blue-emoji-blue.png' },
        { text: 'It will happen', color: '#00ff88', img: 'thousand-yard-stare-blue-emoji-blue.png' },
        { text: 'Perchance', color: '#00ffaa', img: 'wink-blue-emoji-blue.png' },
        { text: 'Whatever makes you happy', color: '#00ff88', img: 'wearing-shades-blue-emoji-violet.png' },
        { text: 'Ask Mr. Kilogore', color: '#88cc44', img: 'zany-blue-emoji-blue.png' },
        { text: 'If it makes you happy', color: '#00ff88', img: 'red-lips-smack-kiss-blue-emoji-blue.png' },
        { text: 'Ask again', color: '#ffcc33', img: 'waving-hello-blue-emoji-blue.png' }
    ];

    function shakeMagic8Ball() {
        const question = prompt('Ask a question for the Magic 8-Ball:');
        if (!question || !question.trim()) {
            textEl.innerText = 'Please ask a real question!';
            ball.src = 'unhappyFace.jpg';
            return;
        }

        const result = answers[Math.floor(Math.random() * answers.length)];
        textEl.innerText = result.text;
        textEl.style.color = result.color;
        ball.src = result.img;

        // Trigger fade-in animation
        textEl.style.animation = 'none';
        void textEl.offsetWidth;
        textEl.style.animation = 'fadeIn 0.6s ease';
    }

    // Button click triggers Magic 8-Ball
    button.addEventListener('click', () => {
        ball.classList.add('shake-animation');
        setTimeout(() => {
            ball.classList.remove('shake-animation');
            shakeMagic8Ball();
        }, 600);
    });

    // Mouse shake triggers Magic 8-Ball
    window.addEventListener('mousemove', (e) => {
        let movement = Math.abs(e.clientX - lastX);
        shakes = movement > 30 ? shakes + 1 : 0;

        if (shakes > 5 && !cooldown) {
            cooldown = true;
            ball.classList.add('shake-animation');
            setTimeout(() => {
                ball.classList.remove('shake-animation');
                shakeMagic8Ball();
                cooldown = false;
            }, 700);
            shakes = 0;
        }

        lastX = e.clientX;
    });
});
