let lastX = 0;
let shakes = 0;

window.addEventListener("mousemove", function (e) {
    let movement = Math.abs(e.clientX - lastX);

    if (movement > 30) {
        shakes++;
    } else {
        shakes = 0;
    }

    if (shakes > 10) {
        shakeMagic8Ball();
        shakes = 0;
    }

    lastX = e.clientX;
});


function shakeMagic8Ball() {
    const question = prompt("What is your question for the Ball Of Wisdom");

    if (question === null) {
        document.getElementById('response-text').innerText = 'Please Ask a Question!';
        document.getElementById('response-text').className = 'lead text-warning';
        document.getElementById('response-img').src = 'unhappyFace.jpg';
        return;
    }

    if (!question.trim()) {
        alert('ASK A VALID QUESTION!!');
        return;
    }

    const randomNumber = Math.floor(Math.random() * 9); // gives 0–8
    let answer, image, color;

    switch (randomNumber) {
        case 0:
            answer = 'Yes';
            image = 'yes-image.jpg';
            color = 'text-success';
            break;
        case 1:
            answer = 'Maybe';
            image = 'blueemoji.jpg';
            color = 'text-primary';
            break;
        case 2:
            answer = 'Ask the closest person to you';
            image = 'yes-image.jpg';
            color = 'text-info';
            break;
        case 3:
            answer = 'It will be achieved';
            image = 'yes-image.jpg';
            color = 'text-success';
            break;
        case 4:
            answer = 'Yes';
            image = 'yes-image.jpg';
            color = 'text-success';
            break;
        case 5:
            answer = 'Yes';
            image = 'yes-image.jpg';
            color = 'text-success';
            break;
        case 6:
            answer = 'Yes';
            image = 'yes-image.jpg';
            color = 'text-success';
            break;
        case 7:
            answer = 'Yes';
            image = 'yes-image.jpg';
            color = 'text-success';
            break;
        case 8:
            answer = 'Yes';
            image = 'yes-image.jpg';
            color = 'text-success';
            break;
    }

    document.getElementById('response-text').innerText = answer;
    document.getElementById('response-text').className = `display-4 text-center strong ${color}`;
    document.getElementById('response-img').src = image;
}
