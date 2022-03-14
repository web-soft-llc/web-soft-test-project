'use strict';
import { api, loadApi } from './api/api';

document.addEventListener('DOMContentLoaded', async () => {
  //Подгружаем API, делать это обязательно, так как изначально в api - пустой объект.
  await loadApi({});
  //Обычные запросы.
  //console.log(await api.introscpection.getModules());
  console.log(await api.introspection.getModules());
});

const example = {
  moduleName: {
    methodName: {
      description: 'Описание метода',
      public: true, // Можно ли получить доступ без аутентификации.
      params: {
        type: 'object',
        description: 'Описание объекта params',
        required: ['prop1'],
        properties: {
          prop1: {
            description: 'Описание проп1',
            type: 'string'
          },
          prop2: {
            description: 'Описание проп2',
            type: 'object',
            required: [],
            properties: {
              prop2prop1: {
                description: 'Описание проп2проп1',
                type: 'string'
              }
            }
          },
          prop3: {
            description: 'Описание проп3',
            type: 'number'
          },
          prop4: {
            description: 'Описание проп4',
            type: 'array',
            items: {
              description: 'Описание элементов массива',
              type: 'number|object|string'
            }
          }
        }
      },
      result: {}, //Такой же как и парамс
      emit: {}, //Такой же как и парамс
      transport: 'http' //Необходимый транспорт, для тебя - ненужная инфа
    }
  }
};
