var data = document.getElementById('markdown-text').textContent;

console.log(data);
window.onbeforeunload = function() {
  return "Are you sure?";
}
