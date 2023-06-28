function is_i2p_running() {
    return new Promise(resolve => {
        const req = new XMLHttpRequest();
        req.open("GET", "http://127.0.0.1:4444", true);
        req.onreadystatechange = () => {
            if (req.readyState == 4) {
                if (req.status == 403) resolve(true)
                else resolve(false)
            }
        }
        req.send();
    })
}

(async () => {
    if (await is_i2p_running()) {
        console.log("Yes it's running")
        document.getElementsByClassName("health")[0].classList.add("running")
    } else {
        document.getElementsByTagName("body")[0].classList.add("disable")
        console.log("No it's not running")
    }
})();