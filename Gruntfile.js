// 包装函数
module.exports = function(grunt) {

    // 任务配置
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %> */\n' //添加banner
            },
            builda: { //任务一：压缩a.js，不混淆变量名，保留注释，添加footer
                options: {
                    mangle: false, //不混淆变量名
                    preserveComments: 'all', //不删除注释，还可以为 false（删除全部注释），some（保留@preserve @license @cc_on等注释）
                    footer: '\n/*! <%= pkg.name %> 最后修改于： <%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %> */' //添加footer
                },
                files: {
                    'build/js/a.min.js': ['js/_drag.js', 'js/_model.js', 'js/_poi_popup.js']
                }
            },
            buildb: { //任务二：压缩b.js，输出压缩信息
                options: {
                    report: "min" //输出压缩率，可选的值有 false(不输出信息)，gzip
                },
                files: {
                    'build/js/b.min.js': ['js/_publish_popup.js', 'js/classic_travels_detail.js']
                }
            },
            buildall: { //任务三：按原文件结构压缩js文件夹内所有JS文件
                files: [{
                    expand: true,
                    cwd: 'js', //js目录下
                    src: '**/*.js', //所有js文件
                    dest: 'build/js/all' //输出到此目录下
                }]
            },
            release: { //任务四：合并压缩a.js和b.js
                files: {
                    'build/js/all/all.js': ['js/**/*.js']
                }
            }
        },
        concat: {
            mini: {
                options: {
                    banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %> */\n' //添加banner
                },
                files: {
                    'build/css/index.min.css': ['css/_daypage.css', 'css/_det_daybox.css', 'css/_det_reply.css'],
                },
            }
        },
        cssmin: {
            minify: {
                options: {
                    banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %> */\n' //添加banner
                },
                files: {
                    'build/css/all.css': ['css/**/*.css'] // 合并并压缩 build/css 目录下(包含子目录)的所有css文件
                }
            }
        },
        connect: {
            server: {
                options: {
                    port: 9999,
                    hostname: '*',
                    onCreateServer: function(server, connect, options) {
                        var io = require('socket.io').listen(server);
                        io.sockets.on('connection', function(socket) {
                            // do something with socket
                        });
                    }
                }
            }
        }
    });

    // 加载插件
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-connect');

    // 默认任务
    grunt.registerTask('default', ['uglify:release']);

    // 自定义任务
    grunt.registerTask('mina', ['uglify:builda']);
    grunt.registerTask('minb', ['uglify:buildb']);
    grunt.registerTask('minall', ['uglify:buildall']);
    grunt.registerTask('cssmini', ['cssmin:minify']);
    grunt.registerTask('concati', ['concat:mini']);
    grunt.registerTask('connect', ['connect']);

};