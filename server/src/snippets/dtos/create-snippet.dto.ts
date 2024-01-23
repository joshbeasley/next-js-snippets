import { IsString } from 'class-validator';

export class CreateSnippetDto {
  @IsString()
  title: string;

  @IsString()
  code: string;
}
