import {
  IsCurrency, IsNotEmpty, IsNumber, IsOptional, Length, Max, MaxLength, min, Min, ValidateIf,
} from 'class-validator';

export default class Car {
   @IsOptional()
     // id!:number|undefined;
     id!: number;

  @Length(1, 50, {
    message: 'Car Make must be from $constraint1 to $constraint2 characters',
  })
    make = '';

  @Length(1, 50, {
    message: 'Car Make must be from $constraint1 to $constraint2 characters',
  })
    model = '';

  // @Min(1908, {
  //   message: 'Car year must be newer than 1908',
  // })
  // @Max(2024, {
  //   message: 'Car year cannot be newer than 2024',
  // })
    year!: number;

    //@IsNumber()
    km!: number;

  @IsCurrency({}, { message: 'Must be currency' })
    price!: number;

  @Length(1, 20, {
    message: 'Transmission should be either Manual or Automatic',
  })
    transmission = '';

  @MaxLength(3, { message: ' Drivetrain should either be FWD, RWD or AWD only' })
  @IsNotEmpty({message: 'Drivetrain cannot be empty'})
    drivetrain = '';

  @ValidateIf((v) => v.numUpVotes !== undefined)
  @IsOptional()
    numUpVotes!: number;

  @ValidateIf((v) => v.numDownVotes !== undefined)
  @IsOptional()
    numDownVotes!: number;

  @IsOptional()
  @IsNotEmpty({message: 'Please enter your gmail email address'})
    traderEmail!: string;

  @IsOptional()
  @IsNotEmpty({message: 'Please enter your first and last name'})
    traderName!: string;
}
