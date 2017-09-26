// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

// import DE from './modules/dots';

import jqvalidation from './modules/jqvalidate.js';


( ($) => {
  'use strict';

  // When DOM is ready
  $(() => {

  
    jcf.replaceAll();
    $('[data-toggle="datepicker"]').datepicker({
        yearRange: '1994:2017',
        dateFormat: 'dd-mm-yy'
    });
    jqvalidation();
    

  });

})(jQuery);