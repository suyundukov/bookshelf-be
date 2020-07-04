const account = require('./account');
const health = require('./health');

const routes = (app) => {
  app.get('/', (req, res) => {
    res.json({
      result: 'success',
      data: 'Welcome!',
    });
  });

  app.use(account);
  app.use(health);
};

module.exports = routes;
