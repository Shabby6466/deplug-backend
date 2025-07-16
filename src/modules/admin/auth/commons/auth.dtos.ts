import { SameAs } from '@modules/common/validator/same-as.validator';
import { ApiProperty } from '@nestjs/swagger';
import { ResponseMessage } from '@utils/enum';
import { IsEmail, IsNotEmpty, IsString, IsUUID, Matches } from 'class-validator';

export class TwoFactorPayload {
  @ApiProperty({ example: '1234' })
  @IsNotEmpty()
  @IsString()
  code: string;
}
export class ToggleTwoFactorPayload {
  @ApiProperty({ example: '1234' })
  @IsNotEmpty()
  @IsString()
  code: string;
}

export class ForgotPasswordDto {
  @ApiProperty({ example: 'email@yopmail.com' })
  @IsEmail()
  @IsNotEmpty()
  @Matches(/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, {
    message: ResponseMessage.INVALID_EMAIL,
  })
  email: string;
}

export class ResetPasswordDto {
  @ApiProperty({ example: 'Abc@123' })
  @IsNotEmpty()
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$&+,:;=?@#|'<>.^*()_%!-])[A-Za-z\d$&+,:;=?@#|'<>.^*()_%!-]{6,15}$/, {
    message: ResponseMessage.INVALID_PASSWORD,
  })
  password: string;

  @ApiProperty({ example: 'Abc@123' })
  @SameAs('password', { message: ResponseMessage.PASSWORD_NOT_MATCH })
  passwordConfirmation: string;
}

export class SetPasswordPayload {
  @ApiProperty({ example: 'Abc@123' })
  @IsNotEmpty()
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,15}$/, {
    message: ResponseMessage.INVALID_PASSWORD,
  })
  password: string;

  @ApiProperty({ example: 'Abc@123' })
  @SameAs('password', { message: ResponseMessage.PASSWORD_NOT_MATCH })
  passwordConfirmation: string;

  device?: any;
}

export class InviteStaffDto {
  @ApiProperty({ example: 'John' })
  @IsNotEmpty()
  @IsString()
  firstName?: string;

  @ApiProperty({ example: 'Dow' })
  @IsNotEmpty()
  @IsString()
  lastName?: string;

  @ApiProperty({ example: '+923135472460' })
  @IsNotEmpty()
  @IsString()
  contactNo?: string;

  @ApiProperty({ example: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11' })
  @IsNotEmpty()
  @IsUUID()
  roleId: string;

  @IsEmail()
  @ApiProperty({ example: 'email@yopmail.com' })
  @IsNotEmpty()
  @Matches(/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, {
    message: ResponseMessage.INVALID_EMAIL,
  })
  email: string;
}
