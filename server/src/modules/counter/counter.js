const clients = new Set();
let counter = 0;

setInterval(async () => {
  counter++;
  for (const client of clients) {
    try {
      await client.emit('counter/getCounts', { counter });
    } catch (error) {
      clients.delete(client);
    }
  }
}, 2000);

class Counter {
  getCounts(data, client) {
    clients.add(client);
  }
}

module.exports = {
  Counter
};
