"use strict";

// Class definition
var KTAppSidebar = function () {
	// Private variables
	var sidebar;
	var headerMenu;
	var menuWrapper;

	var handleMenuScroll = function() {
		var menuActiveItem = menuWrapper.querySelector(".menu-link.active");

		if ( !menuActiveItem ) {
			return;
		} 

		if ( KTUtil.isVisibleInContainer(menuActiveItem, menuWrapper) === true) {
			return;
		}

		menuWrapper.scroll({
			top: KTUtil.getRelativeTopPosition(menuActiveItem, menuWrapper),
			behavior: 'smooth'
		});
	}

	// Public methods
	return {
		init: function () {
			// Elements
			sidebar = document.querySelector('#kt_app_sidebar');
			headerMenu = document.querySelector('#kt_app_header_menu');
			menuWrapper = document.querySelector('#kt_app_sidebar_menu_wrapper');
			
			if ( sidebar === null ) {
				return;
			}

			if ( menuWrapper ) {
				handleMenuScroll();
			}
		}
	};
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
	KTAppSidebar.init();
});