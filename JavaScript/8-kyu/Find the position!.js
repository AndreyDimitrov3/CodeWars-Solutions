function position(letter) {
  let alp = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let position = alp.indexOf(letter.toLowerCase()) + 1;

  return 'Position of alphabet: ' + position;
}
