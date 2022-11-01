function search() {
  var search = document.getElementById(searchbox);
  var searching = search.value;
  location.href = "https://www.google.com/search?q=" + searching;
}