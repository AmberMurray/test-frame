function dailyPlanner (dayOfWeek) {
  if (arguments.length > 1) {
    return 'Pick one day'
  }
  if (dayOfWeek === 'Monday' || dayOfWeek === 'Tuesday' || dayOfWeek === 'Wednesday' || dayOfWeek === 'Thursday') {
    return 'Working'
  } else if (dayOfWeek === 'Friday') {
    return 'TGIF'
  } else if (dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday') {
    return 'Weekend'
  }
  return 'Pick a day'
}

module.exports = dailyPlanner
