# @dephub/sort-date 📅

> Sort arrays of objects in place in descending order by a date property.

[![NPM version](https://img.shields.io/npm/v/@dephub/sort-date.svg?style=flat)](https://npmjs.org/package/@dephub/sort-date)
[![ESM-only](https://img.shields.io/badge/ESM-only-brightgreen?style=flat)](https://nodejs.org/)

## Features ✨

- 📅 **Descending Chronological Sort**: Orders items from newest to oldest using a specified date property.
- 🔢 **Flexible Date Inputs**: Supports both ISO/date strings and numeric timestamps.
- 🛡️ **Runtime Validation**: Throws descriptive errors when date values have invalid types or cannot be parsed.
- 🎯 **Type-Safe Keys**: Restricts target properties to valid keys of your object type (`keyof T`).
- ⚡ **Zero Dependencies**: Lightweight, ESM-only TypeScript implementation.

---

## Installation 📦

- npm: `npm install @dephub/sort-date`
- pnpm: `pnpm add @dephub/sort-date`
- yarn: `yarn add @dephub/sort-date`
- bun: `bun add @dephub/sort-date`

---

## Usage 🎯

### API 🧩

```ts
import { sortByDate } from '@dephub/sort-date';

const events = [
  { name: 'Event 1', date: '2023-05-01' },
  { name: 'Event 2', date: '2024-03-01' },
];

// Sorts in place from newest to oldest
const sorted = sortByDate(events, 'date');
// [
//   { name: 'Event 2', date: '2024-03-01' },
//   { name: 'Event 1', date: '2023-05-01' },
// ]
```

### Available exports

| Category | Functions    |
| -------- | ------------ |
| **Date** | `sortByDate` |

---

## License 📄

MIT License – see [LICENSE](https://www.google.com/search?q=LICENSE) for details.

**Author:** Estarlin R ([estarlincito.com](https://estarlincito.com))
