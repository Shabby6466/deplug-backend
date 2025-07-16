import BigNumber from 'bignumber.js';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CalculatorService {
  public add(num1: number, num2: number): number {
    return new BigNumber(num1).plus(new BigNumber(num2)).toNumber();
  }

  public substract(num1: number, num2: number): number {
    return new BigNumber(num1).minus(new BigNumber(num2)).toNumber();
  }

  public multiply(num1: number, num2: number): number {
    return new BigNumber(num1).multipliedBy(new BigNumber(num2)).toNumber();
  }

  public divide(num1: number, num2: number): number {
    return new BigNumber(num1).dividedBy(new BigNumber(num2)).toNumber();
  }
}
