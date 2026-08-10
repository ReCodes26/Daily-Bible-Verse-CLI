# Daily Bible Verse CLI

A simple command-line tool that displays a Bible verse for the day, fetched from a public domain Bible version.

## About

I made this simple tool to practice creating CLI's with Node.js. It uses a public API to fetch the daily Bible verse based on the current date.

## Installation

```bash
npm install -g .
```

## Usage

```bash
bible-verse
```

### Options

| Option                            | Description                                                                                |
| --------------------------------- | ------------------------------------------------------------------------------------------ |
| `-t, --translation <translation>` | Set the verse translation. Available: `web` (default), `kjv`, `asv`, `bbe`, `darby`, `dra` |

### Example

```bash
bible-verse -t kjv
```

Output:

```
Today's Verse:
        In the beginning God created the heaven and the earth.
Reference: Genesis 1:1 (KJV)
```

## How it works

The verse shown is determined by the current day of the year, picking from a curated list of popular verses. The verse text and reference are fetched from the [Bible API](https://bible-api.com/).

## License

MIT
