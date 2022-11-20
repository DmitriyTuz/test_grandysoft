1. Установить: 1) NodeJS - v.14.19.0;
               2) Postgres - v.12.12
2. Команды для Node в терминале среды разработки:
    - nmp install (для установки нужных модулей)
    - npx sequelize-cli db:migrate (для запуска миграций - в ней создаются
      таблицы userA, userB и связывающуя их subscription) также в миграциях
      осуществляется заполнение этих таблиц случайным образом
    - npm start (запуск)
3. Проверял используя Postmen

endpoints:

1. http://localhost:5000/users/users - получение всех юзеров (с подписками)
2. http://localhost:5000/users/not-following - получаем юзеров без подписки
3. http://localhost:5000/users/max-following - получаем топ 5 юзеров с максимальным 
количеством подписок
4. http://localhost:5000/users/getFriendsAndPutToDatabase - получение друзей 
и сохранение их в базе данных в таблице friends (просто запустить 1 раз чтобы друзья 
сохранились в базе для выполнения следующего задания)
5. http://localhost:5000/users/trainFunction?order_by=id&order_type=desc - получаем
   друзей с заданной в данном запросе сортировкой.


