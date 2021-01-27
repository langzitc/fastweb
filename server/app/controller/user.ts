import { Controller } from 'egg';

export default class UserController extends Controller {
    async index() {
        const { ctx } = this;
        ctx.body = await ctx.model.User.find();
    }  
    new() {}
    show() {}
    edit() {}
    create() {}
    update() {}
    destroy() {}   
}
