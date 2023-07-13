import type { Foo } from "./foo-bar.js";

export class B {
  constructor(readonly foo: Foo) {}
}
