import { IsEmail, IsEnum, IsNotEmpty, Matches } from 'class-validator';
import { ResponseMessage, UserRoles } from '@utils/enum';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterPayload {
  @IsEmail()
  @IsNotEmpty()
  @Matches(/^[a-zA-Z]+[a-zA-Z0-9_.-]*[a-zA-Z0-9]+@(([a-zA-Z0-9-]){3,30}.)+([a-zA-Z0-9]{2,5})$/, {
    message: ResponseMessage.INVALID_EMAIL,
  })
  @Matches(/^(?!.*[-_.]{2}).*$/, {
    message: ResponseMessage.INVALID_EMAIL,
  })
  email: string;
}

export class ForgotPasswordDto {
  @IsNotEmpty()
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$&+,:;=?@#|'<>.^*()_%!-])[A-Za-z\d$&+,:;=?@#|'<>.^*()_%!-]{6,50}$/, {
    message: ResponseMessage.INVALID_PASSWORD,
  })
  password: string;
}

export class InviteAdminDto {
  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(UserRoles)
  role: UserRoles;
}

export class ForgotPasswordPayload {
  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
