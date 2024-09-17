// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)
// You can find some examples in the test fixtures.

function humanReadable (seconds) {
  let hours = String(Math.floor(seconds / 3600));
  let minutes = String(Math.floor(seconds / 60 - (hours * 60)));
  let sec = String(seconds - (minutes * 60 + (hours * 3600)));
  console.log(sec)
  
  return hours.padStart(2, "0") + ':' + minutes.padStart(2, "0") + ':' + sec.padStart(2, "0");
}
