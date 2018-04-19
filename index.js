function getFirstSelector(selector) {
   return document.querySelector(selector);
}

function nestedTarget() {
   return document.querySelector("#nested .target");
}

function increaseRankBy(n) {
   let lis = document.querySelectorAll(".ranked-list>li");
   for (var i in lis) {
      lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
   }
   return lis;
}

function deepestChild() {
   return document.querySelector("#grand-node>div>div>div>div");
}
