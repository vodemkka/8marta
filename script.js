let canSpin = true;

function spinWheel() {
    if (!canSpin) return;

    let wheel = document.querySelector(".inner-wheel");
    let arrow = document.querySelector(".arrow");

    let prizeCount = 7; // Количество призов
    let randomPrizeIndex = Math.floor(Math.random() * prizeCount); // Генерация случайного индекса приза

    canSpin = false;

    let deg = Math.floor(Math.random() * 360) + 360 * 5;

    wheel.style.transition = "all 6s ease-out";
    wheel.style.transform = `rotate(${deg}deg)`;

    arrow.style.transition = "all 6s ease-out";
    arrow.style.transform = `rotate(${deg}deg)`;

    setTimeout(() => {
        canSpin = true;
        showModal(randomPrizeIndex);
    }, 6000);
}

function showModal(prizeIndex) {
    let modal = document.getElementById("modal");
    let prizeInfo = document.querySelector(".prize-info");
    let prizeImage = document.querySelector(".prize-image");
    let prizeName = document.querySelector(".prize-name");
    let prizesList = document.querySelectorAll(".prizes-list li");

    prizeImage.src = prizesList[prizeIndex].querySelector("img").src;
    prizeName.textContent = prizesList[prizeIndex].textContent;

    modal.style.display = "block";
}

function closeModal() {
    let modal = document.getElementById("modal");
    modal.style.display = "none";
}

function claimPrize() {
    alert('Поздравляю!');
    window.location.reload();

    closeModal();
}

