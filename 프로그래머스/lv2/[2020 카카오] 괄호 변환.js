function solution(p) {
  function checkStr(str) {
    const stack = [];
    str.split("").forEach((e) => {
      if (stack.length === 0) stack.push(e);
      else if (stack[stack.length - 1] === "(") {
        if (e === ")") stack.pop();
        else stack.push(e);
      } else stack.push(e);
    });
    return stack.length === 0;
  }

  function f(str) {
    if (str === "") return "";
    let lc = 0,
      rc = 0,
      index = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "(") lc++;
      if (str[i] === ")") rc++;
      if (lc === rc) {
        index = i;
        break;
      }
    }
    const u = str.slice(0, index + 1);
    const v = str.slice(index + 1, str.length);
    if (checkStr(u)) return u + f(v);
    else {
      let temp = "(";
      temp += f(v);
      temp += ")";
      let ru = u.slice(1, u.length - 1);
      ru = ru.replaceAll("(", "!");
      ru = ru.replaceAll(")", "(");
      ru = ru.replaceAll("!", ")");
      temp += ru;
      return temp;
    }
  }

  if (checkStr(p)) return p;
  else return f(p);
}
