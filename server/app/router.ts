import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  app.passport.mount('github');

  router.get('/', controller.page.index);
  router.get('/product', controller.page.product);
  router.get('/talk', controller.page.talk);
  router.get('/help', controller.page.help);
  router.get('/case', controller.page.case);

  router.resources('user', '/api/user', app.controller.user);

  // admin
  router.post('/api/admin/login', controller.admin.login);
  router.post('/api/admin/loginout', controller.admin.loginout);

  router.get('/api/admin/themelist', controller.admin.themelist);
  router.get('/api/admin/theme/:id', controller.admin.themelist);
  router.put('/api/admin/themeupdate', controller.admin.themeupdate);
  router.post('/api/admin/themecreate', controller.admin.themecreate);

  router.put('/api/admin/userupdate', controller.admin.userupdate);
  router.get('/api/admin/user/:id', controller.admin.userinfo);
  router.get('/api/admin/userlist', controller.admin.userlist);

  router.get('/api/admin/config', controller.admin.getconfig);
  router.put('/api/admin/config', controller.admin.configupdate);

  router.get('/api/admin/componentlist', controller.admin.componentlist);
  router.get('/api/admin/component/:id', controller.admin.component);
  router.post('/api/admin/component', controller.admin.componentcreate);
  router.put('/api/admin/component', controller.admin.componentupdate);

  router.get('/api/admin/group', controller.admin.group);
  router.post('/api/admin/group', controller.admin.groupcreate);
  router.put('/api/admin/group', controller.admin.groupupdate);
};
