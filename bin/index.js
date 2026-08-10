#!/usr/bin/env node

import { Command } from "commander";
import chalk from "chalk";
import { getDailyVerse } from "../lib/bible-api.js";

const program = new Command();

program
  .version("1.0.0")
  .description("A CLI to get a daily Bible verse")
  .action(getBibleVerse);

program.parse(process.argv);

function getBibleVerse() {
  getDailyVerse().then((data) => {
    if (data) {
      console.log(chalk.green(`Today's Verse: ${data.text}`));
      console.log(chalk.yellow(`Reference: ${data.reference}`));
    } else {
      console.error(chalk.red("Failed to fetch the daily Bible verse."));
    }
  });
}
