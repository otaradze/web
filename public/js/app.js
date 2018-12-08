"use strict";
/*
*
* ============================
* ============================
*
* Include lib:
*
* - webFontLoader.js;
* - preventBehavior.js;
* - svg4everybody.js;
*
* ============================
* ============================
* */

/**
 *
 * @type {{init(): void, change(): void, chooseVal(*): void, focusElem(*): void, blurElem(*): void}}
 * @private
 */
var customSelect = {
  init: function init() {
    var _select = document.querySelectorAll('select');

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = _select[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var elem = _step.value;

        elem.previousElementSibling.innerHTML = elem.options[elem.selectedIndex].text;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  },
  change: function change() {
    var _select = document.querySelectorAll('select');

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = _select[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var elem = _step2.value;

        var _selectedOption = elem.options[elem.selectedIndex],
            _selectedValue = _selectedOption.value,
            _selectedText = _selectedOption.text;

        if (_selectedValue !== '') {
          this.chooseVal(elem);
        }

        elem.previousElementSibling.innerHTML = _selectedText;
        this.blurElem(elem);
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  },
  chooseVal: function chooseVal(elem) {
    elem.closest('.c-form__select-wrapper').classList.add('is-choose');
  },
  focusElem: function focusElem(elem) {
    elem.closest('.c-form__select-wrapper').classList.add('is-focus');
  },
  blurElem: function blurElem(elem) {
    elem.closest('.c-form__select-wrapper').classList.remove('is-focus');
  }
};





/**
 * @name initCustomSelect
 *
 * @description
 */
var initCustomSelect = function initCustomSelect() {
  var _select = document.querySelectorAll('select');

  customSelect.init();

  var _loop = function _loop(elem) {
    elem.addEventListener('change', function () {
      customSelect.change(elem);
    });
    elem.addEventListener('focus', function () {
      customSelect.focusElem(elem);
    });
    elem.addEventListener('click', function () {
      customSelect.focusElem(elem);
    });
    elem.addEventListener('blur', function () {
      customSelect.blurElem(elem);
    });
  };

  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = _select[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var elem = _step3.value;

      _loop(elem);
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3.return) {
        _iterator3.return();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }
};

/**
 * @name initPopups
 *
 * @description
 */
var initPopups = function initPopups() {

  $('[popup-js]').magnificPopup({
    type: 'inline',
    fixedContentPos: true,
    fixedBgPos: true,
    overflowY: 'auto',
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    removalDelay: 300,
    mainClass: 'is-show',
    callbacks: {
      beforeOpen: function beforeOpen() {
        this.st.mainClass = this.st.el.attr('data-effect');
      },
      close: function close() {}
    }
  });
};

/**
 * @name initPreventBehavior
 *
 * @description
 */
var initPreventBehavior = function initPreventBehavior() {

  var link = document.querySelectorAll("a");

  link.forEach(function (val, idx) {

    val.addEventListener("click", function (e) {
      if (val.getAttribute("href") === "#") {
        e.preventDefault();
      }
    });
  });
};

/**
 * @name initSvg4everybody
 *
 * @description SVG for Everybody adds external spritemaps support to otherwise SVG-capable browsers.
 */
var initSvg4everybody = function initSvg4everybody() {
  svg4everybody();
};

/**
 * @name initWebFontLoader
 *
 * @description Loading fonts regardless of the source, then adds a standard set of events you may use to control the loading experience... for more details => https://github.com/typekit/fvd
 */
var initWebFontLoader = function initWebFontLoader() {

  /**
    * @description
   */
  // WebFont.load({
  //   google: {
  //     families: [
  //       'Roboto:100,300,400,500,700,900'
  //     ]
  //   }
  // });

  /**
    * @description
   */
  var WebFontConfig = {
    custom: {
      families: ['CircularStd:n4,n5,n7', 'SFProDisplay:n4,n5,n6,n7', 'Run:n5']
    }
  };
};

/**
 * @description Document DOM ready.
 */
$(document).ready(function (ev) {
  /**
   *
   * @type {*|jQuery|HTMLElement}
   * @private
   */
  var _document = $(document),
      _window = $(window);

  /*
  * =============================================
  * CALLBACK :: start
  * ============================================= */
  /**
   *
   */
  $('body').on('click', function (ev) {
    var className = ".header__profile, .transfer__box-drop";

    if (!$(ev.target).closest(className).length) {
      $('.header__profile-drop').fadeOut(300);
      $('.transfer__box-dropdown').slideUp(300);
    }
  });

  /**
   *
   */
  var initAsideBtn = function initAsideBtn() {
    $('.aside__nav-link').on('click', function (ev) {
      var elem = $(ev.currentTarget);

      $('.aside__nav-link').removeClass('is-active');
      elem.addClass('is-active');
    });
  };

  /**
   *
   */
  var initAsideMenu = function initAsideMenu() {
    $('.aside__menu-btn').on('click', function (ev) {
      $(ev.currentTarget).toggleClass('is-active');
      $('body').toggleClass('is-menu-open');
    });
    $('.sidebar__info-btn').on('click', function () {
      $('.aside__menu-btn').removeClass('is-active');
      $('body').removeClass('is-menu-open');
    });
  };

  /**
   *
   */
  var initSidebarBtn = function initSidebarBtn() {
    $('.sidebar__nav-link').on('click', function (ev) {
      var elem = $(ev.currentTarget);

      $('.sidebar__nav-link').removeClass('is-active');
      elem.addClass('is-active');
    });
  };

  /**
   *
   */
  var initHeaderProfileDropDown = function initHeaderProfileDropDown() {
    $('.header__profile').on('click', function (ev) {
      $(ev.currentTarget).find('.header__profile-drop').fadeToggle(300);
    });
  };

  /**
   *
   */
  var initTransferDropDown = function initTransferDropDown() {
    $('[transfer-btn-js]').on('click', function (ev) {
      var elem = $(ev.currentTarget),
          parentElem = elem.closest('.transfer__box-drop');

      $('.transfer__box-dropdown').slideUp(300);
      parentElem.find('.transfer__box-dropdown').slideToggle(300);
    });
    $('.transfer__box-dropdown a').on('click', function (ev) {
      var elem = $(ev.currentTarget),
          parentElem = elem.closest('.transfer__box-drop'),
          insertNode = parentElem.find('[transfer-btn-js]'),
          currencyName = elem.find('p').text(),
          imgSrc = elem.find('img').attr('src');

      insertNode.find('p').html(currencyName);
      insertNode.find('img').attr('src', imgSrc);

      parentElem.find('.transfer__box-dropdown').slideToggle(300);
    });
  };
  /*
  * CALLBACK :: end
  * ============================================= */

  /**
   * @description Init all method
   */
  var initJquery = function initJquery() {
    // default
    initWebFontLoader();
    initPreventBehavior();
    initSvg4everybody();
    // ==========================================

    // lib
    initPopups();
    initCustomSelect();
    // ==========================================

    // callback
    initAsideBtn();
    initAsideMenu();
    initSidebarBtn();
    initHeaderProfileDropDown();
    initTransferDropDown();
    // ==========================================
  };
  initJquery();
});