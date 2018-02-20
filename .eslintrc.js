module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb",
    "rules": {
        "func-names": ["error", "never"],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
    },
    "env": {
        "browser": true,
        "jest": true
    }
};