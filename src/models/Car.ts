import {
  IsCurrency, IsNumber, IsOptional, Length, Max, MaxLength, min, Min,
} from 'class-validator';

export default class Car {
  @IsOptional()
    id!: number|undefined;

  // NOTE: We could change this to a select box of available care makes if time permits
  @Length(1, 50, {
    message: 'Car Make must be from $constraint1 to $constraint2 charecters',
  })
    make!: string;

  @Length(1, 50, {
    message: 'Car Make must be from $constraint1 to $constraint2 charecters',
  })
    model!: string;

  @Min(1908, {
    message: 'Car year must be newer than 1908',
  })
  @Max(2024, {
    message: 'Car year cannot be newer than 2024',
  })
    year!: number;

  @IsNumber()
    km!: number;

  @IsCurrency({}, { message: 'Must be Canadian currency' })
    price!: number;

  @Length(1, 20, {
    message: 'Transmission should be either Manual or Automatic',
  })
    transmission!: string;

  @MaxLength(3, { message: ' Drivetrain should either be FWD, RWD or AWD only' })
    drivetrain!: string;

  @IsOptional()
    numUpvotes!: number;

  @IsOptional()
    numDownVotes!: number;
}
