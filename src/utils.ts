export function parseDate(value: unknown, key: PropertyKey): number {
  if (typeof value !== 'string' && typeof value !== 'number') {
    throw new Error(`Invalid date value for key "${String(key)}".`);
  }

  const timestamp = new Date(value).valueOf();

  if (Number.isNaN(timestamp)) {
    throw new Error(`Unparseable date value for key "${String(key)}".`);
  }
  return timestamp;
}
