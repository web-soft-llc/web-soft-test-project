'use strict';
import { api, loadApi } from './api/api';

document.addEventListener('DOMContentLoaded', async () => {
  //Подгружаем API, делать это обязательно, так как изначально в api - пустой объект.
  await loadApi({});
  //Обычные запросы.
  try {
    console.log(await api.auth.login({ username: 'danil', password: 'danilpassword1' }));
    console.log(await api.auth.me());
    //Подписка на события, также может возвращать значения. В данном случае значение не возвращается.
    api.counter.getCounts({}, (error, data) => {
      console.log(error);
      console.log(data);
    });
    //Запросы отправляющиеся по http, а не ws сбрасывают соединения ws.
    //Это нужно, чтобы обновить куки отправляемые по ws.
    //login - отправляется по http, поэтому после него сбросится соединение сокета и в callback выше прилетит ошибка.
    //Тут свобода действий, при ошибке либо подписаться заного, либо ничего не делать.
    setTimeout(async () => {
      console.log(await api.auth.login({ username: 'danil', password: 'danilpassword1' }));
    }, 5000);
  } catch (error) {
    //В случае возврата ошибки сервером - она будет выброшена исключением.
    console.log(error);
  }
});
