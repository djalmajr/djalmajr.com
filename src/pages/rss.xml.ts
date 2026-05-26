import type { APIRoute } from "astro";
import { generateRss } from "../utils/generateRss";
import { SITE } from "../config";

export const GET: APIRoute = ({ currentLocale }) =>
  generateRss(currentLocale ?? SITE.lang);
