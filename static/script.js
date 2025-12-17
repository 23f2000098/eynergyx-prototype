function predictFailure() {

    // Simulated prediction logic (prototype)
    const risk = Math.random();

    let message = "";
    if (risk > 0.6) {
        message = "⚠️ High failure risk detected. Immediate service recommended.";
    } else {
        message = "✅ Vehicle health is stable. No critical issues detected.";
    }

    document.getElementById("result").innerText = message;

    // Show service booking button
    document.getElementById("bookServiceBtn").style.display = "block";

    // Trigger UEBA alert after prediction
    setTimeout(() => {
        document.getElementById("uebaAlert").style.display = "block";
    }, 2500);
}

/* -------- Service Modal -------- */

function openServiceModal() {
    document.getElementById("serviceModal").style.display = "block";
}

function closeServiceModal() {
    document.getElementById("serviceModal").style.display = "none";
}

function confirmService() {
    alert("✅ Service appointment successfully scheduled!");
    closeServiceModal();
}

/* -------- UEBA -------- */

function dismissUEBA() {
    document.getElementById("uebaAlert").style.display = "none";
}
