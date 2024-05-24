import { test, expect } from "vitest";

class CElement {
	#num;
	publicSet;
	#privateSet;
	constructor(num: number, publicSet: Set<string>, privateSet: Set<string>) {
		// works after this assignments
		this.#num = num;
		this.publicSet = publicSet;

		// `this` gonna be a TypeError on the Debugger after this assignment
		this.#privateSet = publicSet;
	}
}

test("TypeError in debugger", () => {
	const cElement = new CElement(1, new Set(["asdf"]), new Set(["asdf"]));

	expect(true).toBe(true);
});
