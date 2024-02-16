function getBrowser() {
    const wrappDiv = document.getElementById("browserInfo");
    let browserName = '';
    let browserVersion = '';

    if (window.navigator.userAgent.includes('OPR/107.0.0.0')){
        browserName = 'Opera';
        browserVersion = '107.0.0.0';
    } else if (window.navigator.userAgent.includes('Edg/121.0.0.0')) {
        browserName = 'Edge';
        browserVersion = '121.0.0.0';
    } else {
        browserName = 'Google Chrome';
        browserVersion = '119.0.0.0';
    }

    const browserInfo = `
        <p>Browser: ${browserName}</p>
        <p>Version: ${browserVersion}</p>
    `;

    wrappDiv.innerHTML = browserInfo;
}

getBrowser()

/////////////////////////////////////////////////////////////////////////////////////////////

function getUrlParams() {
    const urlParams = new URLSearchParams(window.location.search);
    return Array.from(urlParams.keys());
}

const iphone = document.getElementById("iphoneCheckbox");
const samsung = document.getElementById("samsungCheckbox");
const meizu = document.getElementById("meizuCheckbox");
const asus = document.getElementById("asusCheckbox");

function setCheckboxState() {
    const urlParams = getUrlParams();

    urlParams.forEach((param) => {
        if (param === "iphone") {
            iphone.checked = true;
        } else if (param === "samsung") {
            samsung.checked = true;
        } else if (param === "meizu") {
            meizu.checked = true;
        } else if (param === "asus") {
            asus.checked = true;
        }
    });
}

setCheckboxState();

function updateUrlParams() {
    const checkedParams = [];
    if (iphone.checked) {
        checkedParams.push("iphone");
    }
    if (samsung.checked) {
        checkedParams.push("samsung");
    }
    if (meizu.checked) {
        checkedParams.push("meizu");
    }
    if (asus.checked) {
        checkedParams.push("asus");
    }
    const newUrlParams = checkedParams.length > 0 ? `devices=${checkedParams.join(",")}` : "";
    const baseUrl = window.location.href.split("?")[0];
    const newUrl = baseUrl + (newUrlParams ? `?${newUrlParams}` : "");
    window.history.replaceState({}, "", newUrl);
}

iphone.addEventListener("change", updateUrlParams);
samsung.addEventListener("change", updateUrlParams);
meizu.addEventListener("change", updateUrlParams);
asus.addEventListener("change", updateUrlParams);