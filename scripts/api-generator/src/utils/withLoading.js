const ora = import('ora');

async function withLoading(title, callback) {
  const spinner = (await ora).default().start(`${title}...\n`);
  try {
    const res = await callback(spinner);
    spinner.succeed(`${title} : succeeded`).stop().clear();
    return res;
  } catch (err) {
    spinner.fail(`${title}:failed`).clear();
  }
}

module.exports = { withLoading };
