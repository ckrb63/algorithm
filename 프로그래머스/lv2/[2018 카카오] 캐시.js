function solution(cacheSize, cities) {
  const arr = Array.from({ length: cacheSize }, () => "");
  let count = 0;
  cities.forEach((c) => {
    c = c.toLowerCase();
    if (arr.includes(c)) {
      arr.splice(
        arr.findIndex((i) => i === c),
        1
      );
      arr.unshift(c);
      count += 1;
    } else {
      arr.pop();
      arr.unshift(c);
      count += 5;
    }
  });
  if (cacheSize === 0) return cities.length * 5;
  return count;
}
