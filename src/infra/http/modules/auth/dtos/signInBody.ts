import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmptyCustom } from 'src/infra/http/classValidators/decorators/isNotEmptyCustom';
import { IsStringCustom } from 'src/infra/http/classValidators/decorators/isStringCustom';
import { MinLengthCustom } from 'src/infra/http/classValidators/decorators/minLengthCustom';

export class SignInBody {
  @ApiProperty()
  @IsNotEmptyCustom()
  @IsStringCustom()
  name: string;

  @ApiProperty()
  @IsStringCustom()
  @MinLengthCustom(6)
  password: string;
}
