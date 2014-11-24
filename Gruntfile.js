	module.exports = function(grunt) {

		//Project Config
		grunt.initConfig({

			pkg: grunt.file.readJSON('package.json'),

			concat: {
				js: {
					src: [],
					dest: 'js/soooner.js'
				},
				css: {
					src: [],
					dest: 'css/soooner.css'
				}
			}

		});

		// Load Plugins
		grunt.loadNpmTasks('grunt-contrib-concat');

		// Default Task
		grunt.registerTask('default', ['concat']);
	};