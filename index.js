
function getFirstSelector(selector) {
 return document.querySelector(selector)
}

function nestedTarget() {
return document.querySelector('#nested .target')
}


function increaseRankBy(n) {
  var ranklist = document.querySelectorAll('.ranked-list')
  for (var i = 0; i < ranklist.length; i++) {
    ranklist[i].innerHTML = parseInt(ranklist[i].innerHTML) + n
  }
}

function deepestChild() {
let node = document.getElementById('grand-node')
let nextNode = node.children[0]
while (nextNode) {
    node = nextNode
    nextNode = node.children[0] 
  }

  return node
}
