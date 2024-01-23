import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Snippet } from './snippet.entity';
import { Repository } from 'typeorm';
import { CreateSnippetDto } from './dtos/create-snippet.dto';

@Injectable()
export class SnippetsService {
  constructor(
    @InjectRepository(Snippet)
    private repo: Repository<Snippet>,
  ) {}

  create(body: CreateSnippetDto) {
    const snippet = this.repo.create(body);
    return this.repo.save(snippet);
  }

  findOne(id: number) {
    if (!id) {
      return null;
    }
    return this.repo.findOneBy({ id });
  }

  find() {
    return this.repo.find();
  }

  async update(id: number, attrs: Partial<Snippet>) {
    const snippet = await this.repo.findOneBy({ id });
    if (!snippet) {
      throw new NotFoundException('snippet not found');
    }

    Object.assign(snippet, attrs);
    return this.repo.save(snippet);
  }

  async remove(id: number) {
    const snippet = await this.repo.findOneBy({ id });
    if (!snippet) {
      throw new NotFoundException('snippet not found');
    }
    return this.repo.remove(snippet);
  }
}
