const ora = import('ora');

async function withLoading(title, callback) {
  const spinner = (await ora).default().start(`${title}...\n`);
  try {
    const res = await callback(spinner);
    spinner.succeed(`${title} : succeeded\n`).stop().clear();
    return res;
  } catch (err) {
    spinner.fail(`${title}:failed\n`).clear();
  }
}

module.exports = { withLoading };
