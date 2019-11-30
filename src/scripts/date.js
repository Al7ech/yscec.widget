function getType(target) {
    return Object.prototype.toString.call(target).slice(8, -1);
}

export function timeElapsedString(t) {

    var moment = require('moment');

    if (getType(t) != "Date")
        return "Wrong input!"

    const now = new Date().getTime();
    const time = t.getTime();

    if (now - time < 60000) // one minute
        return "now";
    if (now - time < 3600000) // one hour
        return ((Math.floor((now - time) / 60000) == 1) ? "a minute ago" : Math.floor((now - time) / 60000).toString() + " minutes ago");
    if (now - time < 86400000) // one day
        return ((Math.floor((now - time) / 3600000) == 1) ? "an hour ago" : Math.floor((now - time) / 3600000).toString() + " hours ago");
    const time_moment = moment(time);
    const now_moment = moment(now);
    const day_diff = now_moment.diff(time_moment, 'days');
    if (day_diff <= 3) // three days
        return ((day_diff == 1) ? "yesterday" : day_diff.toString() + " days ago");
    const options = { weekday: "short", month: "short", day: "numeric" }
    return "on " + t.toLocaleDateString("en-US", options);
}