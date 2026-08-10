#!/usr/bin/env node

import { Command } from "commander";
import chalk from "chalk";

const program = new Command();

program
  .version("1.0.0")
  .description("A CLI to get a daily Bible verse")
  .action(() => {
    console.log(chalk.blueBright("Fetching your daily Bible verse..."));
  });

program.parse(process.argv);
