const timeFormat: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };

export const localizedDateString = (dateString: string) => {
  const formattedDate = new Date(dateString).toLocaleDateString(undefined, timeFormat);
  return formattedDate;
};