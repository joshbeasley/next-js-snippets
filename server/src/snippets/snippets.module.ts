import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Snippet } from './snippet.entity';
import { SnippetsController } from './snippets.controller';
import { SnippetsService } from './snippets.service';

@Module({
  imports: [TypeOrmModule.forFeature([Snippet])],
  controllers: [SnippetsController],
  providers: [SnippetsService],
})
export class SnippetsModule {}
