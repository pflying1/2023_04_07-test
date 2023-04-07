function elementMaker(tagName, content) {
  return `<${tagName}><${content}</${tagName}>`;
}
function setattributeMaker(tagName,setattriName,setattriValue,content) {
  return `<${tagName} ${setattriName}="${setattriValue}">${content}</${tagName}>`;
}

function reder(data) {
  return `
  <!doctype html>
  <html>
  <head>
    <title>POST</title>
    <meta charset="utf-8">
  </head>
  <body>
  <form action="/post_test" method="post">
    ${data}
    </form>
  </body>
  </html>
  `;
}
let elementsData = [];
for (let i =1; i<6; i++) {
  elementsData.push(elementMaker('div', `${i}번 안녕하세요.`));
}
elementsData.push(setattributeMaker('div','id','header','하이'));
console.log(elementsData);
reder(elementsData.join(''));



