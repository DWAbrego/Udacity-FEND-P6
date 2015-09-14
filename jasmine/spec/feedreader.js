/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {

    // variables used to save the feed titles for later comparison
	this.saveFeedTitles0 = [];
	this.saveFeedTitles1 = [];

    // use these as constants for the index of the feed we need
	this.feedIndex0 = 1;
	this.feedIndex1 = 2;

	var self = this;


    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* This is a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('URL is defined', function() {
			for (i1 = 0; i1 < allFeeds.length; i1++) {
		        expect(allFeeds[i1].url).toBeDefined();
		        expect(allFeeds[i1].url.length).not.toBe(0);
			}
		});

        /* This is a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        it('name is defined', function() {
			for (i1 = 0; i1 < allFeeds.length; i1++) {
		        expect(allFeeds[i1].name).toBeDefined();
		        expect(allFeeds[i1].name.length).not.toBe(0);
			}
		});
    });


    /* test suite */
	describe('The menu', function() {

        /* This is a test that ensures the menu element is
         * hidden by default.
         */

		it('is hidden by default', function() {
			expect( $('body').hasClass("menu-hidden") ).toBe(true) ;
		});

         /* This is a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

		it('displays when clicked', function() {
			$('a.menu-icon-link').trigger('click');
			expect( $('body').hasClass("") ).toBe(true) ;
		});

		it('hides when clicked again', function() {
			$('a.menu-icon-link').trigger('click');
			expect( $('body').hasClass("menu-hidden") ).toBe(true) ;
		});

	});

    /* test suite  */
	describe('Initial Entries', function() {
        /* This is a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */

		beforeEach(function(done) {
			loadFeed(self.feedIndex0, done);
		});

		it('has at least a single entry', function(done) {
			expect( ( document.getElementsByClassName('feed')[0].children.length > 0 )
				).toBe(true);

			// get all the <h2> for this feed, which are article titles,
			// and save them in an array for testing later within the next test suite
			 $( "div.feed a.entry-link article.entry h2" ).each(function( i ) {
				self.saveFeedTitles0.push( $(this).text() );
			});

			done();
		});
	});

    /* test suite */
	describe('New Feed Selection', function() {
        /* This is a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */

		beforeEach(function(done) {
			loadFeed(self.feedIndex1, done);
		});

		it('has content changes when new feed loaded', function(done) {

			// get the <h2> which are article titles, save them in an array
			 $( "div.feed a.entry-link article.entry h2" ).each(function( i ) {
				self.saveFeedTitles1.push( $(this).text() );
			});

			// now we have 2 arrays filled with <h2> titles, and each array elem represents an individual feed
			// if we sort the 2 arrays and compare them, we expect them to be different if we changed feeds
			expect( ( self.saveFeedTitles0.sort().toString() === self.saveFeedTitles1.sort().toString() )
					).not.toBe(true);

			done();
		});
	});

}());
