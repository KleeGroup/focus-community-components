module.exports = {
    children: [{
        module: 'dist',
        children: [{
            module: 'node.js'
        }, {
            module: 'react-ui-tree.css'
        }, {
            module: 'react-ui-tree.js'
        }, {
            module: 'tree.js'
        }]
    }, {
        module: 'example',
        children: [{
            module: 'app.js'
        }, {
            module: 'app.less'
        }, {
            module: 'index.html'
        }]
    }, {
        module: 'lib',
        children: [{
            module: 'node.js'
        }, {
            module: 'react-ui-tree.js'
        }, {
            module: 'react-ui-tree.less'
        }, {
            module: 'tree.js'
        }]
    }, {
        module: '.gitiignore'
    }, {
        module: 'index.js'
    }, {
        module: 'LICENSE'
    }, {
        module: 'Makefile'
    }, {
        module: 'package.json'
    }, {
        module: 'README.md'
    }, {
        module: 'webpack.config.js'
    }]
}
