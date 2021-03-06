module.exports = function(grunt) {
  "use strict";

  grunt.initConfig({

    srcFiles: ["src/**/*.purs", "bower_components/**/src/**/*.purs"],

    dotPsci: ["<%=srcFiles%>"],

    psc: {
      options: {
        main: "Main",
        modules: ["Main"]
      },
      all: {
        src: ["<%=srcFiles%>"],
        dest: "dist/Main.js"
      }
    },
      
    watch: {
        files: ["src/**/*.purs", "bower_components/**/src/**/*.purs"],
        tasks: ["psc:all", "execute"]
    },

    execute: {
        src: ["dist/Main.js"]
    }
  });

  grunt.loadNpmTasks("grunt-purescript");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-execute");

  grunt.registerTask("default", ["psc:all", "dotPsci"]);
};
