import { IsOptional, IsString } from 'class-validator';

export class UpdateSnippetDto {
  @IsString()
  @IsOptional()
  title: string;

  @IsString()
  @IsOptional()
  code: string;
}
