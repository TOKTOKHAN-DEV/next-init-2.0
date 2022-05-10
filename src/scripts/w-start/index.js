/* eslint-disable @typescript-eslint/no-var-requires */

const { Octokit } = require('@octokit/core');
const { prompt, AutoComplete } = require('enquirer');
const { spawn } = require('node:child_process');
const ora = import('ora');

const tokConfig = require('../../../tok-script.config');
const config = tokConfig.module['w:start'];

const github = new Octokit({
  auth: config.token,
});

async function main() {
  const { title, detail, labels } = await runQuestions();
  const { data } = await createGitHubIssue({ title, detail, labels }); //
  const issueNumber = data.number;
  checkOutBranch(`${issueNumber}-${title}`);
}

main();

async function createGitHubIssue({ title, detail, labels }) {
  const spinner = (await ora).default();
  spinner.start('Loading Create-Github-Issue...\n');
  try {
    const res = await github.request('POST /repos/{owner}/{repo}/issues', {
      owner: config.owner,
      repo: config.repoName,
      assignees: config.assignees,
      labels,
      title,
      body: detail,
    });
    spinner.succeed('Succeed Create-Github-Issue!\n');
    return res;
  } catch (err) {
    spinner.fail('Fail Create-Github-Issue\n').clear();
    console.error(err);
  }
}

function checkOutBranch(branchName) {
  spawn('git', ['checkout', '-b', branchName], {
    stdio: 'inherit',
  });
}

async function runQuestions() {
  const { title, detail } = await prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What will you do?',
      required: true,
    },
    {
      type: 'input',
      name: 'detail',
      message: 'has detail?(skip: Enter)',
    },
  ]);

  const labels = await new AutoComplete({
    name: 'labels',
    message: 'Select issue labels(select: Space)',
    multiple: true,
    choices: ['bug', 'features'],
  }).run();

  return { title, detail, labels };
}
