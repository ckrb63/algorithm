function solution(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  const hash1 = new Map();
  const hash2 = new Map();
  const hash3 = new Map();
  const regex = /[a-z]{2}/;
  let cnt1 = 0;
  let cnt2 = 0;
  for (let i = 0, j = 1; j < str1.length; i++, j++) {
    const str = str1.slice(i, j + 1);
    if (regex.test(str)) {
      if (hash1.has(str)) hash1.set(str, hash1.get(str) + 1);
      else hash1.set(str, 1);
    }
  }
  for (let i = 0, j = 1; j < str2.length; i++, j++) {
    const str = str2.slice(i, j + 1);
    if (regex.test(str)) {
      if (hash2.has(str)) hash2.set(str, hash2.get(str) + 1);
      else hash2.set(str, 1);
    }
  }
  for ([key, val] of hash1) {
    if (hash2.has(key)) cnt1 += Math.min(val, hash2.get(key));
    hash3.set(key, val);
  }
  for ([key, val] of hash2) {
    if (hash3.has(key)) hash3.set(key, Math.max(hash3.get(key), val));
    else hash3.set(key, val);
  }
  for ([key, val] of hash3) cnt2 += val;
  if (cnt1 === 0 && cnt2 === 0) return 65536;
  return Math.floor((cnt1 / cnt2) * 65536);
}
