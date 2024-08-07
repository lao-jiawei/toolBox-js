import { Time } from "../src";
test('测试Time.getWeekDay', () => {
  expect(Time.getWeekDay('2024-06-20')).toBe('星期四');

  expect(Time.getWeekDay('2024-06-20', '周')).toBe('周四');

})

test('测试Time.format', () => {
  expect(Time.format('2024-06-20', 'YYYY-MM-DD')).toBe('2024-06-20');
  expect(Time.format('2024-06-20', 'yyyy-MM-DD')).toBe('2024-06-20');
})

test('测试Time.isDateValid', () => {
  expect(Time.isDateValid('December 17, 1995 03:24:00')).toBe(true);
  expect(Time.isDateValid('1995-12-17T03:24:00')).toBe(true);
  expect(Time.isDateValid('1995-12-17 T03:24:00')).toBe(false);
  expect(Time.isDateValid('Duck')).toBe(false);
  expect(Time.isDateValid(1995, 11, 17)).toBe(true);
  expect(Time.isDateValid(1995, 11, 17, 'Duck')).toBe(false);
  expect(Time.isDateValid({})).toBe(false);
})

test('测试Time.isDateValid', () => {
  expect(Time.isLeapYear(2020)).toBe(true);
  expect(Time.isLeapYear(2021)).toBe(false);
  expect(Time.isLeapYear(2000)).toBe(true);
  expect(Time.isLeapYear(1900)).toBe(false);
})

test('测试Time.dayDif ', () => {
  expect(Time.dayDif('2024-07-14','2024-07-15')).toBe(1);
  expect(Time.dayDif('2024.07.14','2024.07.16')).toBe(2);
})

