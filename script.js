function linkRedirect() {
    let inputUrl = document.getElementById("inputUrl").value;

    if (!inputUrl.startsWith("http://") && !inputUrl.startsWith("https://")) {
      inputUrl = "https://" + inputUrl;
    }

    window.location.href = inputUrl;
};

const btn = document.getElementById("btn");
btn.addEventListener("click", linkRedirect);