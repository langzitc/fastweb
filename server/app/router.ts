import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.page.index);
  router.get('/product', controller.page.product);
  router.get('/talk', controller.page.talk);
  router.get('/help', controller.page.help);
  router.get('/case', controller.page.case);
};
