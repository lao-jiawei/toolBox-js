import { Format } from "../src";

test('测试Form.formatMoney', () => {
  expect(Format.formatMoney(12341234.246)).toBe('12,341,234.25');

  expect(Format.formatMoney(12341234.246, '$')).toBe('$12,341,234.25');

  expect(Format.formatMoney(12341234.246, '$', 1)).toBe('$12,341,234.2');
})