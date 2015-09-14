===================================================================
 Daniel Abrego
 Udacity FEND P6 Feed Reader Testing

 README
===================================================================

This application will complete Jasmine test suites for a web-based RSS feed reader
application.

To run the application, simply start up a browser, and open the index.html file.
The following messages will appear at the bottom of the page, indicating that
all Jasmine testing has passed.

8 specs, 0 failures
Jasmine__TopLevel__Suite
	RSS Feeds
		are defined
		URL is defined
		name is defined
	The menu
		is hidden by default
		displays when clicked
		hides when clicked again
	Initial Entries
		has at least a single entry
	New Feed Selection
		has content changes when new feed loaded

Also the title of the page will end up as 'HTML 5 Rocks.'  This is because
the test suites call the javascript function 'loadfeed()' a few times as part
of the testing process.  This function will load different feeds as if the 
webpage was clicked by a user.

===================================================================
Files that were edited for this project:
===================================================================
jasmine/spec/feedreader.js

===================================================================
Resources:
===================================================================
Video: Udacity FEND nanodegree Javascript Testing course
Excerpts from book: JavaScript Testing with Jasmine By Evan Hahn











