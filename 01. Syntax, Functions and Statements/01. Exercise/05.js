function calculateTimeToUniversity(steps, footstepLengthInMeters, speed){
    let meters = steps * footstepLengthInMeters;
    let breaks = Math.floor(meters / 500);
    
    let speedInMeters = speed * 1000;
    let timeInHours = meters / speedInMeters;

    let hour = String(Math.trunc(timeInHours)).padStart(2, "0");
    let minute = String(Math.trunc(timeInHours * 60) + breaks).padStart(2, "0");
    let seconds = String(Math.round(timeInHours * 60 * 60) % 60).padStart(2, "0");
    
    console.log(`${hour}:${minute}:${(seconds)}`);
}

console.log(calculateTimeToUniversity(4000, 0.60, 5));

function solve(steps, footprint, kmph) {
    function formatNumber(number) {
        if (number < 10) {
            return '0' + number.toString()
        } else {
            return number
        }
    }
    let distance = steps * footprint;
    let mph = kmph * 1000;
    let minutesRestBreak = Math.floor(distance / 500) / 60;
    let travelTime = (distance / mph) + minutesRestBreak;
    let hours = Math.floor(travelTime)
    let minutes = Math.floor(travelTime * 60);
    let seconds = Math.round(((travelTime * 60) - minutes) * 60);
    console.log(`${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(seconds)}`);

}
solve(4000, 0.60, 5);
solve(2564, 0.70, 5.5);