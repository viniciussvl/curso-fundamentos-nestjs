import { IsString, MaxLength, MinLength } from 'class-validator';

export class CreateCourseDto {
  @IsString()
  @MinLength(3)
  @MaxLength(32)
  name: string;

  @IsString()
  @MaxLength(100)
  description: string;

  @IsString({ each: true })
  tags: string[];
}
