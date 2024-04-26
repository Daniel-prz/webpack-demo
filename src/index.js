document.getElementById("content").innerText = "Hello, World!";
import _ from "/node_modules/lodash";

const newText = _.camelCase("hello world");
console.log(newText);
