# Установка и настройка SSL-сертификата с помощью Certbot

Этот процесс позволяет получить и установить SSL-сертификат для вашего сайта с использованием инструмента Certbot.

## 1. Установка Certbot

Для начала нужно установить Certbot и плагин для Nginx:

```bash
sudo apt update
sudo apt install certbot python3-certbot-nginx
```

## 2. Получение сертификата

После установки Certbot, используйте следующую команду для получения сертификата для вашего домена. В команде укажите свой домен:

```bash
sudo certbot --nginx -d skvnet.ru -d www.skvnet.ru
```

### Примечания:
- Certbot будет автоматически пытаться настроить ваш сервер Nginx и запросить сертификат от Let's Encrypt.
- Вы будете запрашивать ваш email для уведомлений о сертификате, например, для уведомлений о продлении или проблемах с сертификатом.

## 3. Ответы на запросы Certbot

### Введите ваш email:

- Когда Certbot запросит ваш email, введите его для получения уведомлений о продлении сертификата, например:

```bash
Enter email address (used for urgent renewal and security notices): smetaniny-hosting@yandex.ru
```

### Примите условия:

- После этого вам нужно будет принять условия обслуживания Let's Encrypt, введя **A** для согласия:

```bash
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
(A)gree/(C)ancel: A
```

### Подтвердите использование email:

- Затем Certbot предложит вам согласиться с отправкой уведомлений от Electronic Frontier Foundation (EFF). Это необязательно:

```bash
Would you be willing to share your email address with the Electronic Frontier Foundation... (Y)es/(N)o: Y
```

### Редирект HTTP на HTTPS:

- Certbot предложит вам выбрать, нужно ли перенаправлять HTTP трафик на HTTPS. Рекомендуется выбрать **2** (редирект), чтобы обеспечить безопасность сайта:

```bash
1: No redirect - Make no further changes to the webserver configuration.
2: Redirect - Make all requests redirect to secure HTTPS access. Choose this for new sites, or if you're confident your site works on HTTPS. 
Select the appropriate number [1-2] then [enter]: 2
```

## 4. Проверка и настройка

После того как сертификат был установлен и Nginx настроен, вы можете проверить, что сертификат работает корректно. Введите ваш сайт в браузере с префиксом **https://**:

```bash
https://skvnet.ru/
```

Если сертификат был установлен правильно, вы увидите зеленый замок в адресной строке браузера, подтверждающий, что сайт защищен с помощью SSL.

## 5. Автоматическое продление сертификатов

Certbot автоматически настроит задачу для продления сертификата. Для проверки работы продления вы можете выполнить:

```bash
sudo certbot renew --dry-run
```

Этот процесс проверит, что Certbot может автоматически обновить сертификат без проблем.

---

Теперь ваш сайт защищен с помощью бесплатного SSL-сертификата от Let's Encrypt!
