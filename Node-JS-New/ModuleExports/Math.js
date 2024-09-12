add = (a, b) => {
  return a + b;
};

sub = (a, b) => {
  return a - b;
};

mul = (a, b) => {
  return a * b;
};

module.exports = { RenameAdd: add, RenameSubtract: sub, RenameMul: mul };
