module.exports = {
    "entry": [
        "./src/TagInput.js"
    ],
    "module": {
        "rules": [
            {
                "test": /.(js|jsx)$/,
                "exclude": "/node_modules/",
                "use": [
                    "babel-loader"
                ]
            },
            {
                "test": /(.css$)/,
                "loaders": [
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    },
    "externals": {
        "react": {
            "root": "React",
            "commonjs2": "react",
            "commonjs": "react",
            "amd": "react"
        },
        "react-dom": {
            "root": "ReactDOM",
            "commonjs2": "react-dom",
            "commonjs": "react-dom",
            "amd": "react-dom"
        }
    },
    "resolve": {
        "extensions": [
            "*",
            ".js",
            ".jsx"
        ]
    },
    "output": {
        "publicPath": "/",
        "filename": "index.js",
        "libraryTarget": "commonjs2"
    },
    "devServer": {
        "contentBase": "./build"
    }
}