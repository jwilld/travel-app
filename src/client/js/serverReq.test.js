import { getReq, postReq } from "./ServerReq.js";

test("works with async/await", async () => {
  expect.assertions(0);
  await getReq("/trips");
});
test("works with async/await", async () => {
  expect.assertions(0);
  await postReq("/trip");
});
