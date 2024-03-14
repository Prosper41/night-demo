let x
let d = new Date();

x = d.toString();

x = d.getTime()
x = d.valueOf()

x = d.getFullYear()

x = d.getMonth() + 1;
x = d.getDate()
x = d.getDay()

x = d.getHours()
x = d.getMilliseconds()

x = d.getMinutes()

x = `${d.getFullYear()} - ${d.getMonth() + 1} - ${d.getDate()}`;

x = Intl.DateTimeFormat('gh-GB').format(d)
x = Intl.DateTimeFormat('default').format(d)

x = d.toLocaleString('default', { month: 'long' })

x = d.toLocaleString('default', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: '2-digit',
  hour: '2-digit',
  minute: 'numeric',
  second: 'numeric',
  timeZone: 'America/Los_Angeles'
});

console.log(x);
 