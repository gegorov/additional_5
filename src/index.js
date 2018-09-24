module.exports = function check(str, bracketsConfig) {
  if (str.length <= 0) {
    return true;
  }
  if (str.length % 2 !== 0) {
    return false;
  }
  const brackets = new Map();

  bracketsConfig.forEach((element) => {
    brackets.set(element[0], element[1]);
  });

  const myStr = str;
  const stack = [];
  let isCorrect = false;

  myStr.split('').forEach((char) => {
    const previous = brackets.get(stack[stack.length - 1]);
    if (brackets.has(char) && previous !== char) {
      stack.push(char);
      isCorrect = true;
    } else if (stack.length > 0 && previous === char) {
      stack.pop();
      isCorrect = true;
    } else {
      isCorrect = false;
    }
  });

  return isCorrect;
};
