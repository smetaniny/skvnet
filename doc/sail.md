# Установка и настройка Laravel Sail в Windows с использованием WSL

### 1. Установка Bash в WSL

1. Запустите **Ubuntu** в WSL с помощью следующей команды:

```bash
wsl -d Ubuntu
cd /mnt/e/server/skvnet.loc
```

2. Внутри терминала Ubuntu выполните обновление списка пакетов и установите Bash:

```bash
sudo apt update
sudo apt install bash
```

### 2. Настройка Laravel Sail

Для настройки Laravel Sail и DevContainer выполните следующие шаги:

#### Установка Sail с параметром `--devcontainer`

Для автоматической настройки контейнера для разработки:

```bash
php artisan sail:install --devcontainer
```

#### Добавление дополнительных услуг

Чтобы добавить дополнительные сервисы в Sail:

```bash
php artisan sail:add
```

#### Остановка контейнеров

Если контейнеры уже запущены, их нужно остановить:

```bash
./vendor/bin/sail down
```

#### Запуск контейнеров

Запустите контейнеры в фоновом режиме:

```bash
./vendor/bin/sail up -d
alias sail='sh $([ -f sail ] && echo sail || echo vendor/bin/sail)'
sail down
sail up
sail up --build
sail up -d
```

### 3. Основные команды для работы с контейнерами

#### Artisan команды внутри контейнера

-   **Запуск очереди**:

```bash
php artisan queue:work
```

-   **Запуск очереди внутри Sail**:

```bash
sail artisan queue:work
```

#### Проверка версии PHP внутри Sail

```bash
sail php --version
```

#### Запуск PHP-скрипта внутри Sail

```bash
sail php script.php
```

#### Установка пакетов через Composer

Для установки пакетов:

```bash
sail composer require laravel/sanctum
sail composer require laravel/breeze --dev
sail artisan breeze:install react --ssr
sail npm install --save-dev typescript @types/react @types/react-dom

```

#### Работа с Node.js и npm внутри Sail

-   **Проверка версии Node.js**:

```bash
sail node --version
```

-   **Запуск npm**:

```bash
sail artisan serve
sail npm run dev
sail npm run build --ssr
sail yarn
```

#### Работа с тестами

-   **Запуск тестов**:

```bash
sail test
```

-   **Запуск тестов по группе**:

```bash
sail test --group orders
```

-   **Запуск тестов через Artisan**:

```bash
sail artisan test
```

#### Использование Dusk (тесты в браузере)

```bash
sail dusk
```

#### Открытие оболочки внутри контейнера

Для работы с контейнером через командную строку:

```bash
sail shell
```

#### Вход в контейнер с правами root

```bash
sail root-shell
```

#### Использование Tinker

Для работы с базой данных или другими внутренними объектами Laravel:

```bash
sail tinker
```

#### Сборка контейнеров без использования кэша

```bash
sail build --no-cache
```

#### Запуск контейнеров

```bash
sail up
```

#### Поделиться контейнером через ссылку

```bash
sail share
```

### 4. Продвинутые команды

#### Использование Middleware в Laravel

Пример добавления middleware:

```php
->withMiddleware(function (Middleware $middleware) {
    $middleware->trustProxies(at: '*');
})
```

#### Поделиться контейнером с поддоменом

Для того чтобы создать поддомен при запуске:

```bash
sail share --subdomain=my-sail-site
```

#### Публикация конфигурации Sail

```bash
sail artisan sail:publish

docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' skvnetloc-laravel.test-1

```
