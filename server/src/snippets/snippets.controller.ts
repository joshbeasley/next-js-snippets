import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateSnippetDto } from './dtos/create-snippet.dto';
import { SnippetsService } from './snippets.service';
import { UpdateSnippetDto } from './dtos/update-snippet.dto';

@Controller('snippets')
export class SnippetsController {
  constructor(private snippetsService: SnippetsService) {}

  @Get('/:id')
  async findSnippet(@Param('id') id: string) {
    const snippet = await this.snippetsService.findOne(parseInt(id));
    if (!snippet) {
      throw new NotFoundException('snippet not found');
    }
    return snippet;
  }

  @Get()
  findAllUsers() {
    return this.snippetsService.find();
  }

  @Post()
  async createSnippet(@Body() body: CreateSnippetDto) {
    return await this.snippetsService.create(body);
  }

  @Patch('/:id')
  updateUser(@Param('id') id: string, @Body() body: UpdateSnippetDto) {
    return this.snippetsService.update(parseInt(id), body);
  }

  @Delete('/:id')
  removeUser(@Param('id') id: string) {
    return this.snippetsService.remove(parseInt(id));
  }
}
