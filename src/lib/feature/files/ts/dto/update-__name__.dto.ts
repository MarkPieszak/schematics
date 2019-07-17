import { IsInt, IsString } from 'class-validator';

export class Create<%= classify(name) %>Dto {
  @IsInt()
  readonly id: string;

  @IsString()
  readonly name: string;
}