class Schema {
  constructor(title, hr, min, meridiem, isOn, activeDays) {
    this.title = title;
    this.hr = hr.toString().length < 2 ? `0${hr}` : `${hr}`
    this.min = min.toString().length < 2 ? `0${min}` : `${min}`
    this.meridiem = meridiem.toUpperCase()
    this.isOn = isOn
    this.activeDays = activeDays
  }
}

const alarmData = [
  new Schema("test", 10, 59, 'PM', false, [0, 6]),
  new Schema("test2", 1, 2, 'am', true, [0, 2, 4]),
]
export default alarmData