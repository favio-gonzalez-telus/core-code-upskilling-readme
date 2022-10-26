# core-code-upskilling-readme

## week 1
### tuesday - challenge 1
```
function ensureQuestion(s) {
  const aux = [...s];
  if (aux[aux.length - 1] == '?') {
    return s;
  } else {
    return s + '?';
  }
}
```
### tuesday - challenge 2
```
function reverseWords(str){
  return str.split(' ').reverse().join(' ');
}
```
