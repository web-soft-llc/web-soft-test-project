const { Counter } = require('./counter.js');

module.exports = {
  schema: {
    getCounts: {
      description: 'Получение обновляемого счётчика.',
      public: true,
      emit: {
        description: 'Объект события',
        required: ['counter'],
        properties: {
          counter: {
            type: 'Number',
            description: 'Счётчик'
          }
        }
      }
    }
  },
  Module: Counter
};
