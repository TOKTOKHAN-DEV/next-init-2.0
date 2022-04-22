export const intComma = (x: number | string) => {
  return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const formatDate = (d: any) => {
  let date = null;
  if (d instanceof Date) {
    date = d;
  }
  date = new Date(d);
  const day = date.getDate();
  const monthIndex = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${year}.${`0${monthIndex}`.slice(-2)}.${`0${day}`.slice(-2)}`;
};

export const formatDateDash = (d: any) => {
  let date = null;
  if (d instanceof Date) {
    date = d;
  }
  date = new Date(d);
  const day = date.getDate();
  const monthIndex = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${year}-${`0${monthIndex}`.slice(-2)}-${`0${day}`.slice(-2)}`;
};

export const formatDateKR = (d: any) => {
  let date: any = null;
  if (d instanceof Date) {
    date = d;
  }
  date = new Date(d);
  const day = date.getDate();
  const monthIndex = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${year}년 ${`0${monthIndex}`.slice(-2)}월 ${`0${day}`.slice(-2)}일`;
};

export const formatDateTime = (d: any) => {
  let date = null;
  if (d instanceof Date) {
    date = d;
  }
  date = new Date(d);
  const day = date.getDate();
  const monthIndex = date.getMonth() + 1;
  const year = date.getFullYear();
  const hour = date.getHours();
  const min = date.getMinutes();

  return `${year}.${monthIndex}.${`0${day}`.slice(
    -2,
  )} ${hour}:${`0${min}`.slice(-2)}`;
};

export const getDays = (d: any) => {
  const week = ['일', '월', '화', '수', '목', '금', '토'];
  let date = null;
  if (d instanceof Date) {
    date = d;
  }
  date = new Date(d);
  const dayOfWeek = week[date.getDay()];
  return dayOfWeek;
};

export const MessageFormatTime = (d: any) => {
  let date = null;
  if (d instanceof Date) {
    date = d;
  }
  date = new Date(d);
  const hour = date.getHours();
  const min = date.getMinutes();

  if (hour > 12) {
    return `오후 ${hour - 12}:${min}`;
  }
  return `오전 ${hour}:${min}`;
};

export const getAge = (birth: any) => {
  let date = null;
  if (birth instanceof Date) {
    date = birth;
  }
  date = new Date(birth);
  const birthYear = date.getFullYear();
  const currYear = new Date().getFullYear();

  return currYear - birthYear;
};

export const formatTimer = (SECONDS: number) => {
  if (!SECONDS) return '';
  return new Date(SECONDS * 1000).toISOString().substr(14, 5);
};

export const formatExamTime = (SECONDS: number) => {
  const minutes = Math.floor(SECONDS / 60);
  const seconds = SECONDS - minutes * 60;
  if (minutes > 0) {
    return `${minutes}분 ${seconds}초`;
  }
  return `${seconds}초`;
};
