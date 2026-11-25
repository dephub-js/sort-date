/* eslint-disable security/detect-object-injection */
import { parseDate } from '#/utils.ts';

/**
 * Sorts an array of objects in place in descending order by a date property.
 * @template T - The type of the objects in the array.
 *
 * @param {T[]} data - Array of objects to sort in place.
 * @param {keyof T} key - Property key holding a date string or numeric timestamp.
 * @throws {Error} When a property value is not a string or number, or cannot be parsed into a valid date.
 * @returns {T[]} The same array sorted from newest to oldest.
 * @example
 * const data = [
 *   { name: 'Event 1', date: '2023-05-01' },
 *   { name: 'Event 2', date: '2024-03-01' },
 * ];
 * const sortedData = sortByDate(data, 'date');
 */
export function sortByDate<T extends object>(data: T[], key: keyof T): T[] {
  return data.sort((a, b) => parseDate(b[key], key) - parseDate(a[key], key));
}
