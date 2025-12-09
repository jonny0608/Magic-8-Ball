let lastX = 0;
let shakes = 0;
let cooldown = false;

const ball = document.getElementById('response-img');

// Detect mouse shaking
window.addEventListener("mousemove", function (e) {
    let movement = Math.abs(e.clientX - lastX);

    if (movement > 30) {
        shakes++;
    } else {
        shakes = 0;
    }

    // When shaking is detected
    if (shakes > 5 && !cooldown) {
        cooldown = true;

       
        ball.classList.add("shake-animation");

        
        setTimeout(() => {
            ball.classList.remove("shake-animation");
            shakeMagic8Ball();
            cooldown = false;
        }, 600);

        shakes = 0;
    }

    lastX = e.clientX;
});


function shakeMagic8Ball() {
    const question = prompt("What is your question for the Magic 8 Ball?");

    if (question === null) {
        document.getElementById('response-text').innerText = 'Please ask a question!';
        ball.src = 'unhappyFace.jpg';
        return;
    }

    if (!question.trim()) {
        alert('Please type a real question!');
        return;
    }

    // Random answers
    const answers = [
        { text: "Yes", color: "text-success", img: "yes-image.jpg" },
        { text: "Maybe", color: "text-primary", img: "blueemoji.jpg" },
        { text: "Ask someone near you", color: "text-info", img: "yes-image.jpg" },
        { text: "It will happen", color: "text-success", img: "yes-image.jpg" },
        { text: "purchance", color: "text-success", img: "yes-image.jpg" },
        { text: "Whatever makes you happy", color: "text-success", img: "yes-image.jpg" },
        { text: "Ask Mr.Kilogore", color: "#556B2F", img: "yes-image.jpg" },
        { text: "if it makes you happy", color: "text-success", img: "yes-image.jpg" },
        { text: "Ask again", color: #B8860B, img: "yes-image.jpg" }
    ];

    const result = answers[Math.floor(Math.random() * answers.length)];

    document.getElementById('response-text').innerText = result.text;
    document.getElementById('response-text').className = `display-4 text-center ${result.color}`;
    ball.src = result.img;
}
