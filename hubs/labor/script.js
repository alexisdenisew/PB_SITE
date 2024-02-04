function search() {
    var input, filter, box, titles, a, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    box = document.getElementById('box');
    titles = box.getElementsByTagName('h1');
    var found = false;
  
    for (i = 0; i < titles.length; i++) {
      a = titles[i].getElementsByTagName("a")[0];
      if (a) {
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          document.getElementById('searchResult').innerHTML = `"${txtValue}" was found on the list.`; // Display message with found value
          found = true;
          break;
        }
      }
    }
  
    if (!found) {
      document.getElementById('searchResult').innerHTML = "No results found for \"" + input.value + "\". Which doesn't necessarily mean they don't use prison labor, as this isn't yet an exhaustive list. Please do some more research!";
    }
  }
  
  
