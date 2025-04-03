export const generateSampleEvents = () => {
  const events = [];
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  // Типы событий
  const types = ['responsible', 'incoming', 'internal'];

  // Генерация случайных событий для месяца
  for (let i = 0; i < 50; i++) {
    const day = Math.floor(Math.random() * 31) + 1;
    const type = types[Math.floor(Math.random() * types.length)];

    events.push({
      date: new Date(currentYear, currentMonth, day),
      type,
    });
  }

  return events;
};
