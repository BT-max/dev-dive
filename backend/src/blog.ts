import { Hono } from "hono";

const blog = new Hono();

blog.get("/:id", (c) => c.json(`GET ${c.req.param("id")}`));
blog.get("/bulk", (c) => c.json("GET bulk"));
blog.post("/", (c) => c.json("POST", 201));
blog.put("/", (c) => c.json("PUT", 201));

export default blog;
