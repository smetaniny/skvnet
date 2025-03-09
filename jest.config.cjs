module.exports = {
    testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',  // Используйте babel для преобразования
  },
  transformIgnorePatterns: [
    '/node_modules/(?!your-package-to-transform|other-package).+\\.js$',  // Разрешить трансформацию файлов внутри node_modules, если это необходимо
  ],
  globals: {
    'import.meta.env': {}  // Мокаем переменные окружения для import.meta
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',  // Настройка путей для модулей, если нужно
  },
};
