import { Hono } from "hono";
import user from "./user";
import blog from "./blog";

const api = new Hono().basePath("/api/v1");

api.route("/user", user);
api.route("/blog", blog);

export default api;
