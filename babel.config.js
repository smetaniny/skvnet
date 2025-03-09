export default {
    presets: [
        "@babel/preset-env", // для поддержки современных JS
        "@babel/preset-react", // для JSX
        "@babel/preset-typescript", // для TypeScript
    ],
    plugins: ['@babel/plugin-syntax-import-meta'],
};
