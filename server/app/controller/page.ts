import { Controller } from 'egg';

export default class PageController extends Controller {
  public async index() {
    const { ctx } = this;
    await ctx.render('index', { active: '/', pageTitle: '首页' });
  }
  public async product() {
    const { ctx } = this;
    await ctx.render('product', { active: '/product', pageTitle: '产品' });
  }
  public async talk() {
    const { ctx } = this;
    await ctx.render('talk', { active: '/talk', pageTitle: '社区' });
  }
  public async help() {
    const { ctx } = this;
    await ctx.render('help', { active: '/help', pageTitle: '帮助中心' });
  }
  public async case() {
    const { ctx } = this;
    await ctx.render('case', { active: '/case', pageTitle: '行业方案' });
  }
}
