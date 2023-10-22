document.getElementById("shorten").addEventListener("click", function () {
    const urlInput = document.getElementById("url");
    const message = document.getElementById("message");

    const longUrl = urlInput.value;

    if (longUrl === "") {
        message.innerText = "Please enter a URL.";
    } else {
        
        const shortUrl = generateRandomString();
        message.innerHTML = `Shortened URL: <a href="javascript:void(0);" data-original-url="${longUrl}">${shortUrl}</a>`;
    }
});

document.addEventListener("click", function (e) {
    if (e.target && e.target.tagName === "A" && e.target.getAttribute("data-original-url")) {
        const originalUrl = e.target.getAttribute("data-original-url");
        window.location.href = originalUrl;
    }
});

function generateRandomString() {
    const length = 6;
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return `${result}`;
}

