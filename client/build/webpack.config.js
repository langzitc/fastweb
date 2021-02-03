const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const getEntryies = () => {
    const basePath = path.resolve(__dirname, '../page');
    const arr = fs.readdirSync(basePath);
    const entryies = {};
    arr.forEach((item) => {
        const epath = path.join(basePath, item);
        const stat = fs.statSync(epath);
        if(stat.isDirectory()) {
            entryies[item] = path.resolve(epath, 'index.js');
        }
    });
    return entryies;
}

const getHtmlPlugins = () => {
    const basePath = path.resolve(__dirname, '../page');
    const arr = fs.readdirSync(basePath);
    return arr.map(it => {
        return new HtmlWebpackPlugin({
            chunks: [it],
            filename: `${it}.html`,
            template: path.resolve(basePath, `${it}/index.html`),
        });
    });  
}

module.exports = {
    entry: {
        ...getEntryies(),
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
    },
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
        compress: true,
        port: 8080,
        hot: true,
    },
    plugins: [
        ...getHtmlPlugins(),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',    
                    options: {
                        presets: [
                            '@babel/preset-env'
                        ]
                    }
                }
            },
            {
                test: /\.less$/,
                use:["style-loader", "css-loader", "less-loader"]
            },            
        ]
    },    
};