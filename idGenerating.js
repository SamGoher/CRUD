let date = new Date();

function idGenerating() {
  return `${date.getTime()}`;
}

module.exports = idGenerating;