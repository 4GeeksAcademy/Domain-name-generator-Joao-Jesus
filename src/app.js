/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let domain = [".eu", ".pt"];

  let domainGenerator = [];

  for (let index in pronoun) {
    domainGenerator[0] = pronoun[index];
    for (let index1 in adj) {
      domainGenerator[1] = adj[index1];
      for (let index2 in noun) {
        domainGenerator[2] = noun[index2];
        for (let index3 in domain) {
          domainGenerator[3] = domain[index3];
          console.log(
            domainGenerator[0] +
              domainGenerator[1] +
              domainGenerator[2] +
              domainGenerator[3]
          );
        }
      }
    }
  }
};
