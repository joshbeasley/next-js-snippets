import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SnippetsController } from './snippets/snippets.controller';
import { SnippetsService } from './snippets/snippets.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnippetsModule } from './snippets/snippets.module';
import { Snippet } from './snippets/snippet.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [Snippet],
      synchronize: true,
    }),
    SnippetsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
