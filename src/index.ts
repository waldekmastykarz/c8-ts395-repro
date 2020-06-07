import { File1 } from './folder';

export class Foo {
  public bar(): string {
    const a: File1 = new File1();
    return a.msg('123');
  }
}