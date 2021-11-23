import { App, Configuration } from '@midwayjs/decorator';
import { ILifeCycle } from '@midwayjs/core';
import * as orm from '@midwayjs/orm';
import * as swagger from '@midwayjs/swagger';
import { Application } from 'egg';
import { join } from 'path';

@Configuration({
  importConfigs: [join(__dirname, './config')],
  conflictCheck: true,
  imports: [
    orm, // 加载 orm 组件
    swagger,
  ],
})
export class ContainerLifeCycle implements ILifeCycle {
  @App()
  app: Application;

  async onReady() {}
}
