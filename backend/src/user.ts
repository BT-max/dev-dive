// authors.ts
import { Hono } from "hono";

const user = new Hono();

user.post("/signup", (c) => c.json("signup", 201));
user.post("/signin", (c) => c.json("signin", 201));

export default user;
