/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum WeekDays {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}

function isWeekend(day: string): boolean {
  return day === WeekDays.Saturday || day === WeekDays.Sunday;
}

console.log(isWeekend(WeekDays.Monday));
console.log(isWeekend(WeekDays.Saturday));
