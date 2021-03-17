import { Controller } from 'egg';
import * as md5 from 'md5';
import * as uuid from 'node-uuid';

const loginRule = {
  username: {
    type: 'string',
    required: true,
  },
  password: {
    type: 'string',
    required: true,
  },
};

export default class UserController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = await ctx.model.User.find();
  }
  async componentlist() {
    const { ctx } = this;
    ctx.body = await ctx.model.Component.find();
  }
  async login() {
    const { ctx } = this;
    ctx.validate(loginRule, ctx.request.body);
    const { username, password } = ctx.request.body;
    const user = await ctx.model.User.findOne({ username });
    if (!user && username === 'admin') {
      await user.update({ password: md5(password) });
    } else if (!user) {
      throw new Error('用户不存在');
    } else if (user.password !== md5(password)) {
      throw new Error('密码错误');
    } else {
      ctx.session.user = user;
      const token = md5(uuid.v1());
      ctx.session.token = token;
      ctx.body = { user, token };
    }
  }
  async loginout() {
    const { ctx } = this;
    ctx.session.user = null;
    ctx.session.token = null;
    ctx.body = null;
  }
  async themelist() {
    const { ctx } = this;
    ctx.body = {};
  }
  async themeupdate() {
    const { ctx } = this;
    ctx.body = {};
  }
  async themecreate() {
    const { ctx } = this;
    ctx.body = {};
  }
  async userupdate() {
    const { ctx } = this;
    ctx.body = {};
  }
  async userinfo() {
    const { ctx } = this;
    ctx.body = {};
  }
  async userlist() {
    const { ctx } = this;
    ctx.body = {};
  }
  async getconfig() {
    const { ctx } = this;
    ctx.body = {};
  }
  async configupdate() {
    const { ctx } = this;
    ctx.body = {};
  }
  async component() {
    const { ctx } = this;
    ctx.body = {};
  }
  async componentcreate() {
    const { ctx } = this;
    ctx.body = {};
  }
  async componentupdate() {
    const { ctx } = this;
    ctx.body = {};
  }
  async group() {
    const { ctx } = this;
    ctx.body = {};
  }
  async groupcreate() {
    const { ctx } = this;
    ctx.body = {};
  }
  async groupupdate() {
    const { ctx } = this;
    ctx.body = {};
  }
}
