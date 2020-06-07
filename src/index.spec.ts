import * as assert from 'assert';
import { Foo } from '.';

describe('test', () => {
  it('works', () => {
    const foo = new Foo();
    assert.equal(foo.bar(), '123');
  });
});