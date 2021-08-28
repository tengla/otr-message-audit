
const assert = require('assert');
const routes = require('./routes');

const shouldSucceed = async () => {

  const { messagesRoute } = routes({
    messagesQuery: (train_id, country, from, until) => {
      assert(train_id === '94');
      assert(country === 'NO');
      assert(from === '2021-08-24 00:00:00');
      assert(until === '2021-08-24 23:59:59')
      return Promise.resolve([])
    }
  });

  const req = {
    query: {
      from: '2021-08-24 00:00:00',
      until: '2021-08-24 23:59:59',
      train_id: '94',
      country: 'NO'
    }
  };

  const res = {
    send: (msgs) => {
      assert(msgs.length < 1);
    }
  };
  await messagesRoute(req, res);
};

const shouldFail = async () => {
  const { messagesRoute } = routes({});
  const req = {
    query: {
      from: '',
      until: '2021-08-24 23:59:59',
      train_id: '94',
      country: 'NO'
    }
  };
  const res = {
    status: (code) => {
      assert(code === 400)
      return {
        send: (obj) => {
          assert(obj.status === 400);
          assert(obj.error === 'Bad Request');
          assert(JSON.parse(obj.message.length), obj.message);
        }
      }
    }
  };
  await messagesRoute(req, res);
};

(async () => {
  await shouldSucceed();
  await shouldFail();
})();