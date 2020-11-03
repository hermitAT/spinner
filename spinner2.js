const spinner = (num) => {
  const spinnerSymbols = ['|  ', '/  ', '-  ', '\\  ', '|  '];
  let delay = 0;

  for (let i = 0; i < num; i++) {
    if (i === num - 1) {
      spinnerSymbols.push('\n');
    }
    for (const symbol of spinnerSymbols) {
      delay += 100;

      setTimeout(() => {
        process.stdout.write('\r' + symbol);
      }, delay);
    }
  }
};

spinner(2);