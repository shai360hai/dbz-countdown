// Countdown for Standard Release
const countdown = () => {
    // Release date: 11 October 2024
    const releaseDate = new Date("Oct 11, 2024 00:00:00").getTime();
    
    // Early access date: 3 days before release (8 October 2024)
    const earlyAccessDate = new Date("Oct 08, 2024 00:00:00").getTime();
    
    const now = new Date().getTime();

    // Calculate time differences
    const releaseDiff = releaseDate - now;
    const earlyDiff = earlyAccessDate - now;

    // Release Countdown
    const releaseDays = Math.floor(releaseDiff / (1000 * 60 * 60 * 24));
    const releaseHours = Math.floor((releaseDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const releaseMinutes = Math.floor((releaseDiff % (1000 * 60 * 60)) / (1000 * 60));
    const releaseSeconds = Math.floor((releaseDiff % (1000 * 60)) / 1000);

    document.getElementById("release-days").innerHTML = releaseDays;
    document.getElementById("release-hours").innerHTML = releaseHours;
    document.getElementById("release-minutes").innerHTML = releaseMinutes;
    document.getElementById("release-seconds").innerHTML = releaseSeconds;

    // Early Access Countdown
    const earlyDays = Math.floor(earlyDiff / (1000 * 60 * 60 * 24));
    const earlyHours = Math.floor((earlyDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const earlyMinutes = Math.floor((earlyDiff % (1000 * 60 * 60)) / (1000 * 60));
    const earlySeconds = Math.floor((earlyDiff % (1000 * 60)) / 1000);

    document.getElementById("early-days").innerHTML = earlyDays;
    document.getElementById("early-hours").innerHTML = earlyHours;
    document.getElementById("early-minutes").innerHTML = earlyMinutes;
    document.getElementById("early-seconds").innerHTML = earlySeconds;

    // If release is complete
    if (releaseDiff < 0) {
        clearInterval(countdownInterval);
        document.getElementById("release-countdown").innerHTML = "Released!";
    }

    // If early access is complete
    if (earlyDiff < 0) {
        clearInterval(countdownInterval);
        document.getElementById("early-countdown").innerHTML = "Early Access Available!";
    }
};

// Run the countdown every second
const countdownInterval = setInterval(countdown, 1000);
