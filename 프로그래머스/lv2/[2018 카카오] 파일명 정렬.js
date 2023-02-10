function solution(files) {
  const regex1 = /[^0-9]+/;
  const regex2 = /[0-9]+/;
  const answer = [];
  const arr = files.map((f, i) => {
    const head = regex1.exec(f)[0].toLowerCase();
    const number = regex2.exec(f)[0] * 1;
    return { head, number, i };
  });
  arr.sort((a, b) => (a.head > b.head ? 1 : -1));
  arr.sort((a, b) => (a.head > b.head ? 1 : -1 && a.number - b.number));
  arr.sort((a, b) => {
    if (a.head === b.head && a.number === b.number) return a.i - b.i;
  });
  arr.forEach((a) => answer.push(files[a.i]));
  return answer;
}
