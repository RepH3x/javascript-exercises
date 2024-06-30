const fibonacci = function(index) {
  const base = [0, 1];
  if(index < 0) { return "OOPS"; }
  if(index <= 1) { return base[index]; }
  let generated = [...base];
  for(let i=index; i >= base.length; i--) {
    generated.push(generated.at(-1) + generated.at(-2));
  }
  return generated.at(-1);
};

// Do not edit below this line
module.exports = fibonacci;
