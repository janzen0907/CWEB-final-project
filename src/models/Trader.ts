import { IsEmail, IsOptional, Length } from 'class-validator';

export default class Trader {
  @IsOptional()
    id!: number|undefined;

  @IsEmail({}, { message: 'Must be valid email' })
    email!: string;

  @Length(1, 300, {
    message: 'Name must be between $constrain1 and $constraint2 characters',
  })
    name!: string;

  @IsOptional()
    rating!: number;

  @IsOptional()
    ratingCount!: number;
}
