/* eslint-disable @typescript-eslint/no-duplicate-enum-values */
export enum AuthTokenExpires {
  INVITE_EMAIL = '2h',
  ADMIN_AUTH_2FA = '10h',
  ADMIN_FORGOT_PASSWORD = '2h',
  USER_FORGOT_PASSWORD = '2h',
}

export enum AuthTokenType {
  LOGIN = 'LOGIN',
  INVITE_EMAIL = 'INVITE_EMAIL',
  ADMIN_AUTH_2FA = 'ADMIN_AUTH_2FA',
  ADMIN_FORGOT_PASSWORD = 'ADMIN_FORGOT_PASSWORD',
  USER_FORGOT_PASSWORD = 'USER_FORGOT_PASSWORD',
}
