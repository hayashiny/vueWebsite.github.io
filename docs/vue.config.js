module.exports = {
    pages: {
        'index': {
            entry: '.src/index.html',
            template: 'src/index.html',
            title: 'Home',
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        'menu': {
            entry: '.src/pages/Menu/main.js',
            template: 'src/index.html',
            title: 'Menu',
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        'order': {
            entry: '.src/pages/Order/main.js',
            template: 'src/index.html',
            title: 'Order',
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        }
    }
}

