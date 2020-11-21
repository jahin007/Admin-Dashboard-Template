$(document).ready(function () {
	$('#toggle-btn').on('click', function () {
        // open or close navbar
        $('#sidebar, #content,#leftCol').toggleClass('active');
        $(this).toggleClass('active');

        // close dropdowns
        $('.collapse.in').toggleClass('in');

        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    } );
} );


