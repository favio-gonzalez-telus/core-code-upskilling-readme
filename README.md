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
  const aux = str.split(' ');
  let position = aux.length - 1;
  let response = "";
  aux.forEach(word => {
    response = response + aux[position] + " ";
    position --;
  })
  return response.trim(); // reverse those words
}
```
