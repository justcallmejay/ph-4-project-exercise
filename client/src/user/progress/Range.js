export const days = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

export function Range(end) {
    const {result} = Array.from({length: end}).reduce(({result, current}) => ({
        result: [...result, current],
        current: current + 1
    }), {result: [], current: 1})

    return result
}

export function getDaysInMonth(date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
};

export function getSortedDay(date) {
    const daysInMonth = Range(getDaysInMonth(date));
    const index = new Date(date.getFullYear(), date.getMonth() + 1).getDay();
    return [...Array(index === 0 ? 6 : index - 1), ...daysInMonth];
}

export function getMonthYear(date) {
    const month = date.toDateString().split(" ");
    return `${month[1]} ${month[3]}`;
};

export function  prevMonth(date, cb) {
    const month = date.getMonth();
    if (month > 0) {
        date.setMonth(month - 1)
    } else {
        date.setMonth(11);
        date.setFullYear(date.getFullYear() - 1)
    }
    cb(new Date(date));
};

export function nextMonth(date, cb) {
    const month = date.getMonth();
    if (month < 11) {
        date.setMonth(month + 1)
    } else {
        date.setMonth(0);
        date.setFullYear(date.getFullYear() + 1)
    }
    cb(new Date(date));
}

export function areDatesTheSame(first, second) {
    return first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate()
}

