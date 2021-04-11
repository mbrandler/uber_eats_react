Это учебный проект.

[Демо](https://mbrandler.github.io/uber_eats_react/)

В данном проекте используются:

```
- ReactJS
- Redux
- React Router
- Bootstrap
```

Приложение позволяет смотреть меню ресторанов и добавлять заказы в корзину. На данный момент заполнены только первые два ресторана, остальные используются для демонстрации верстки. Рестораны и меню находятся в двух разных редьюсерах, соединенных в один.

Чтобы запустить приложение локально скачайте репозиторий, введите 
```
yarn install / npm install 
```
затем запустите:
```
yarn start / npm start
```

Для деплоймента на github pages:
```
Измените в файле GITHUBUSERNAME ./package.json "homepage":"http://GITHUBUSERNAME.github.io/uber_eats_react"
yarn run build / npm run build
yarn run deploy / npm run deploy
```
