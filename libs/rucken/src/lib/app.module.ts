import { Module } from '@nestjs/common';
import { EnvReplacerModule } from './env-replacer/env-replacer.module';
import { Extracti18nModule } from './extract-i18n/extract-i18n.module';
import { GettextModule } from './gettext/gettext.module';
import { PostgresModule } from './postgres/postgres.module';
import { PrepareModule } from './prepare/prepare.module';
import { ToolsModule } from './tools/tools.module';
import { TranslateModule } from './translate/translate.module';

@Module({
  imports: [
    ToolsModule.forRoot(),
    GettextModule.forRoot(),
    Extracti18nModule.forRoot(),
    TranslateModule.forRoot(),
    PrepareModule.forRoot(),
    PostgresModule.forRoot(),
    EnvReplacerModule.forRoot(),
  ],
})
export class AppModule {}
