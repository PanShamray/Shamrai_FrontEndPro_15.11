const browserInfo = `
    Browser: ${navigator.appName}<br>
    Version: ${navigator.userAgent}
`;

document.getElementById("browserInfo").innerHTML = browserInfo;

/////////////////////////////////////////////////////////////////////////////////////////////
function selectCheckboxFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const devicesParam = urlParams.get('devices');

    if(devicesParam){
        const devices = devicesParam.split(',');
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            if(devices.includes(checkbox.value.toLowerCase())){
                checkbox.checked = true;
            }
        })
    }
}
selectCheckboxFromURL();

document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const value = this.value.toLowerCase();
        const urlParams = new URLSearchParams(window.location.search);
        let devicesParam = urlParams.get('devices');

        if(!devicesParam){
            devicesParam = value;
        } else {
            const devices = devicesParam.split(',');
            const index = devices.indexOf(value);

            if(index === -1){
                devices.push(value)
            } else {
                devices.splice(index, 1)
            }
            devicesParam = devices.join(',');
        }
        const newUrl = window.location.origin + window.location.pathname + "?devices=" + devicesParam;
        window.history.replaceState({path: newUrl},'', newUrl);
    })
})