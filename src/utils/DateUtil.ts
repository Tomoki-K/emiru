interface DateFragment {
  original: Date;
  year: string;
  month: string;
  date: string;
  hour: string;
  minute: string;
  seconds: string;
}

const getDateFragment = (date: Date): DateFragment => {
  const padded = (x: number): string => (`0${String(x)}`).slice(-2);
  return {
    original: date,
    year:    String(date.getFullYear()),
    month:   padded(date.getMonth() + 1),
    date:    padded(date.getDate()),
    hour:    padded(date.getHours()),
    minute:  padded(date.getMinutes()),
    seconds: padded(date.getSeconds()),
  };
};

export const formatDate = (date?: Date) => {
  const target = date || new Date();
  const f = getDateFragment(target);
  return `${f.year}/${f.month}/${f.date} ${f.hour}:${f.minute}:${f.seconds}`;
};
