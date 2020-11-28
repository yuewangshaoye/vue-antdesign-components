const moment = require('moment');

class TestMoment {
  constructor() {
  }

  /**
   * @TODO: 计算返回指定时间的开始时间，返回格式要求：2020-12-12 00:00:00
   * @param inputTime 输入的指定时间，格式为：2020-12-12 00:00:00
   */
  getDayStart(inputTime) {
    return  moment(inputTime).format("YYYY-MM-DD 00:00:00");
  }

  /**
   * @TODO: 计算返回指定时间所在周的开始时间，返回格式要求：2020-12-12 00:00:00 
   * @param inputTime 输入的指定时间，格式为：2020-12-12 00:00:00
   */
  getWeekStart(inputTime) {
   return moment(inputTime).startOf('week').format("YYYY-MM-DD HH:mm:ss");
  }

  /**
   * @TODO: 获取指定时间对应某个时区当前的小时数
   * @param inputTime 输入的指定时间，格式为：2020-12-12T00:00:00+08:00
   * @param timezone 指定时区（整数）：+8 表示东八区，-8表示西八区
   */
  getTimezoneCurrentHour(inputTime, timezone) {
    return moment(inputTime).hour() - moment().utcOffset()/60 + timezone; 
  }

  /**
   * @TODO: 返回从指定时间往前推整数天数后对应的时间。例如：2020-12-03 12:20:31
   * @param inputTime 输入的指定时间，格式为：2020-12-12 00:00:00
   * @param {*} days 往前推的天数（整数）
   */
  getDaysBeforeTime(inputTime, days) {
    return moment(inputTime).subtract(days, 'days').format ("YYYY-MM-DD HH:mm:ss")
  }
}

module.exports = TestMoment
