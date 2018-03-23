function contains(word, term) {
  return word.toLowerCase().indexOf(term.toLowerCase()) > -1;
};

app.filter('beerFilter', function() {
  return function(data, searchTerm) {
    if (!data) {
      return;
    };

    if (!searchTerm) {
      return data;
    };

    return data.filter(function(item) {
      return contains(item.name, searchTerm)
        || contains(item.brewery, searchTerm);
    });
  };
});
