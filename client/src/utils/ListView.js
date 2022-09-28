export const tasksToWeeks = (tasks) => {
    const monthStrings = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const dayStrings = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    const startDay = 1 // Monday

    const days = []
    tasks.forEach((task) => {
        const date = new Date(task.date * 1000)
        const day = days.find(day => 
            day.date === date.getDate() &&
            day.month === date.getMonth() + 1 &&
            day.year === date.getFullYear()
        ) 
        if (!day) {
            days.push({
                time: date.getTime() / 1000,
                date: date.getDate(),
                month: date.getMonth() + 1,
                year: date.getFullYear(),
                dayString: dayStrings[date.getDay()],
                monthString: monthStrings[date.getMonth()],
                tasks: [task],
            })
        } else {
            day.tasks.push(task)
            day.tasks.sort((a,b) => a.date - b.date)
            // TODO: Test this
        }
    })

    const weeks = []
    days.forEach((day) => {
        const dayDate = new Date(day.year, day.month - 1, day.date)
        const weekTime = dayDate.getTime() / 1000 
                - (((dayDate.getDay() - startDay) % 7 + 7) % 7) * 86400
        const week = weeks.find(week => week.startTime === weekTime)
        if (!week) {
            const weekStartDate = new Date(weekTime * 1000)
            weeks.push({
                startTime: weekTime,
                date: weekStartDate.getDate(),
                month: weekStartDate.getMonth() + 1,
                year: weekStartDate.getFullYear(),
                dayString: dayStrings[weekStartDate.getDay()],
                monthString: monthStrings[weekStartDate.getMonth()],
                days: [day],
            })
        } else {
            week.days.push(day)
            week.days.sort((a,b) => a.time - b.time)
        }
    })

    weeks.sort((a,b) => a.startTime - b.startTime)
    return weeks
}

export const getDateString = (date) => {
    var year = date.getFullYear().toString()
    var month = (date.getMonth() + 1).toString()
    var day = date.getDate().toString()
    
    if (month.length < 2) month = '0' + month
    if (day.length < 2) day = '0' + day

    return year + '-' + month + '-' + day
}

export const dateStringToDate = (dateString) => {
    const split = dateString.split('-')
    return new Date(split[0], split[1] - 1, split[2])
}