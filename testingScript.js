$(function () {
  $('#oneSort').click(function () {
    $('#sortedSelect').sortedPlugin({
      sortedBy: 'byValue',
      direction: 'asc',
      dataType: '(int,string)'
    });
  });

  $('#twoSort').click(function () {
    $('#sortedSelect').sortedPlugin({
      sortedBy: 'byText',
      direction: 'desc',
      dataType: '(int,string)'
    });
  });

});