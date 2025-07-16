import { IsNotEmpty, IsString, Matches } from 'class-validator';
import { ResponseMessage } from '@utils/enum';
import { SameAs } from '@modules/common/validator/same-as.validator';
import { ApiProperty } from '@nestjs/swagger';

export class ConfirmationPayload {
  @ApiProperty({ example: 'Password@123' })
  @IsNotEmpty()
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$&+,:;=?@#|'<>.^*()_%!-])[A-Za-z\d$&+,:;=?@#|'<>.^*()_%!-]{6,50}$/, {
    message: ResponseMessage.INVALID_PASSWORD,
  })
  password: string;

  @ApiProperty({ example: 'Password@123' })
  @SameAs('password', { message: ResponseMessage.PASSWORD_NOT_MATCH })
  passwordConfirmation: string;

  @ApiProperty({ example: 'John doe' })
  @IsNotEmpty()
  @IsString()
  name: string;
}
