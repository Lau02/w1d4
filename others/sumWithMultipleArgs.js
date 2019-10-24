function sum() {
  let acum;

  for (var i = 0; i < arguments.length; i++) {
    acum += arguments[i];
  }

  return acum;
}
