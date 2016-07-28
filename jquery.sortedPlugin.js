(function ($) {
  'use strict';
  jQuery.fn.sortedPlugin = function (options) {

    options = $.extend({
      sortedBy: 'byValue',
      direction: 'asc',
      dataType: '(int,string)'
    }, options);

    var context = this;

    function map(arr, func) {
      var returnedArray = [];

      for (var i = 0, length = arr.length; i < length; i += 1) {
        returnedArray.push(func(arr[i], i, arr));
      }

      return returnedArray;
    }

    function isNumber(option) {
      if (options.sortedBy === 'byValue') {
        return Number(option.value);
      }
      return Number(option.text);
    }

    function sorting(array) {
      array.sort(function (a, b) {
        if (options.sortedBy === 'byValue') {
          if (a.value < b.value) return -1;
          if (a.value > b.value) return 1;
          return 0;
        }
        if (a.text < b.text) return -1;
        if (a.text > b.text) return 1;
        return 0;
      });
      if (options.direction === 'desc') {
        array.reverse();
      }
      return array;
    }

    function concatenation(int, string) {
      if (options.dataType.indexOf('int') == 1) {
        return int.concat(string);
      }
      return string.concat(int);
    }

    function make() {
      var selectItem = this;
      var options = $(selectItem).children('option');
      var intArray = [];
      var stringArray = [];

      for (var i = 0, length = options.length; i < length; i += 1) {
        if (isNumber(options[i])) {
          intArray.push(options[i]);
        } else {
          stringArray.push(options[i]);
        }
      }
      sorting(intArray);
      sorting(stringArray);

      var newArray = concatenation(intArray, stringArray);

      $(selectItem).html(newArray);
    }

    return function(){
      context.each(make);
    }
  };

})(jQuery);