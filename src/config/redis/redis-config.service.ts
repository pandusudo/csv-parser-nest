import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  BullRootModuleOptions,
  SharedBullConfigurationFactory,
} from '@nestjs/bullmq';
import { AllConfigType } from '../config.type';

@Injectable()
export class RedisConfigService implements SharedBullConfigurationFactory {
  constructor(private configService: ConfigService<AllConfigType>) {}

  createSharedConfiguration(): BullRootModuleOptions {
    return {
      connection: {
        host: this.configService.get('redis.host', { infer: true }),
        port: this.configService.get('redis.port', { infer: true }),
      },
    } as BullRootModuleOptions;
  }
}
