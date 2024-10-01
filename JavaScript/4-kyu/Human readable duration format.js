// Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.
// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.
// It is much easier to understand with an example:
// * For seconds = 62, your function should return 
//     "1 minute and 2 seconds"
// * For seconds = 3662, your function should return
//     "1 hour, 1 minute and 2 seconds"
// For the purpose of this Kata, a year is 365 days and a day is 24 hours.
// Note that spaces are important.
// Detailed rules
// The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.
// The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.
// A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.
// Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.
// A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.
// A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

function formatDuration (seconds) {
  if(seconds === 0) return 'now';

  let years = Math.floor(seconds / 31536000);
  let days = Math.floor((seconds % 31536000) / 86400);
  let hours = Math.floor((seconds % 86400) / 3600);
  let minutes = Math.floor((seconds % 3600) / 60);
  let sec = seconds % 60;

  let timeAssets = ['second', 'minute', 'hour', 'day', 'year']
  let answer = [];

  answer.push(sec, minutes, hours, days, years);

  for(let i = answer.length - 1; i >= 0; i--) {
    if(String(answer[i]).slice(0, 1) == 0) {
      answer.splice(i, 1);
    } else {
      break;
    }
  }

  for (let i = 0; i < answer.length; i++) {
    for (let j = i; j < i + 1; j++) {
      if (answer[i] === 1) {
        answer[i] = answer[i] + ' ' + timeAssets[i];
      } else {
        answer[i] = answer[i] + ' ' + timeAssets[i] + 's';
      }
    }
  }

  answer.reverse();

  for(let i = answer.length - 1; i >= 0; i--) {
    if(String(answer[i]).slice(0, 1) == 0) {
      answer.splice(i, 1);
    }
  }

  if(answer.length === 1) return answer[0];
  if(answer.length === 2) return answer[0] + ' and ' + answer[1];
  if(answer.length === 3) return answer[0] + ', ' + answer[1] + ' and ' + answer[2];
  if(answer.length === 4) return answer[0] + ', ' + answer[1] + ', ' + answer[2] + ' and ' + answer[3];
  if(answer.length === 5) return answer[0] + ', ' + answer[1] + ', ' + answer[2] + ', ' + answer[3] + ' and ' + answer[4];
}
