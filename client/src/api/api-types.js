export {};
/**
*@typedef {object} API
*@property {introscpection} introscpection
*@property {counter} counter
*@property {auth} auth
*/
/**
*@typedef {object} introscpection;
*@property {function} getModules
***Возвращает схему API сервера.**
*___
* Returns: Объект со схемой API.

*/
/**
*@typedef {object} counter;
*@property {function} getCounts
***Получение обновляемого счётчика.**
*___
* Emit: Объект события
* - `counter` { *Number* } - Счётчик **Required** 

*/
/**
*@typedef {object} auth;
*@property {function} register
***Регистрация нового пользователя с ролью user.**
*___
* Params: 
* - `username` { *string* } - Имя пользователя. **Required** 
* - `password` { *string* } - Пароль. **Required** 

*___
* Returns: 
* - `username` { *string* } - Имя пользователя. **Required** 
* - `role` { *string* } - Роль пользователя. **Required** 
* - `createdTime` { *string* } - Временная метка создания пользователя. **Required** 

*@property {function} login
***Аутентификация пользователя.**
*___
* Params: 
* - `username` { *string* } - Имя пользователя. **Required** 
* - `password` { *string* } - Пароль. **Required** 

*___
* Returns: 
* - `username` { *string* } - Имя пользователя. **Required** 
* - `role` { *string* } - Роль пользователя. **Required** 
* - `createdTime` { *string* } - Временная метка создания пользователя. **Required** 

*@property {function} logout
***Выход пользователя из системы.**
*@property {function} me
***Получение данных о текущем пользователе.**
*___
* Returns: 
* - `username` { *string* } - Имя пользователя. **Required** 
* - `role` { *string* } - Роль пользователя. **Required** 
* - `createdTime` { *string* } - Временная метка создания пользователя. **Required** 

*@property {function} changePassword
***Смена пароля текущего пользователя.**
*___
* Params: 
* - `username` { *string* } - Имя пользователя. **Required** 
* - `oldPassword` { *string* } - Старый пароль. **Required** 
* - `newPassword` { *string* } - Новый пароль. **Required** 

*___
* Returns: 
* - `username` { *string* } - Имя пользователя. **Required** 
* - `role` { *string* } - Роль пользователя. **Required** 
* - `createdTime` { *string* } - Временная метка создания пользователя. **Required** 

*/
