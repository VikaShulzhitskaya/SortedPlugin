$(function () {
  var plugin1 = $('#sortedSelect').sortedPlugin({
    sortedBy: 'byValue',
    direction: 'asc',
    dataType: '(int,string)'
  });

  $('#oneSort').click(function () {
    plugin1.sort();
  });

  var plugin2 = $('#sortedSelect').sortedPlugin({
    sortedBy: 'byText',
    direction: 'desc',
    dataType: '(int,string)'
  });

  $('#twoSort').click(function () {
    plugin2.sort();
  });

});