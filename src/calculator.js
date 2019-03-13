

export class userDate {
  constructor(month, date, year) {
    this.month = month;
    this.date = date;
    this.year = year;
  }

   checkArgs() {
    if ((typeof this.month === "number") && (typeof this.date === "number") && (typeof this.year === "number")) {
      return "true";
    } else {
      return "false";
    }
  }

  checkMin() {
    if (( this.month !== 0 ) && ( this.date !== 0 ) && ( this.year !== 0 )) {
      return "input non-zero";
    }
  }

  checkMaxDays() {
    if (this.date > 31) {
      return "date exceeds 31";
    }
  }

  checkMaxMonths() {
    if (this.month > 12) {
      return 'month exceeds 12';
    }
  }

  getDay() {
    const days = ["Sunday", "Monday", "Tuesady", "Wednesday", "Thursday", "Friday", "Saturday"]
    const validMonth = (this.month - 1)
    const newDate = new Date(this.year, validMonth, this.date);
    const dayIndex = newDate.getDay();
    const dayOfWeek = days[dayIndex];
    return dayOfWeek;
  }
}

export function dayConvert(date) {
  const dateArray = date.split("/");
  const inputDate = new userDate (parseInt(dateArray[0]), parseInt(dateArray[1]), parseInt(dateArray[2]));
  console.log(inputDate);
  console.log(inputDate.checkMin());
  if (inputDate.checkMin() === "input non-zero") {
    const dayOfWeek = inputDate.getDay();
    return dayOfWeek;
  } else {
    alert("Something went wrong. Please make sure you entered a date in MM/DD/YYYY format!");
  }
}
