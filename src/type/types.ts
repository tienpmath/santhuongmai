import { Route } from "@/app/routers/types";

export interface CustomLink {
  label: string;
  href: Route;
  targetBlank?: boolean;
}

export type TwMainColor =
  | "pink"
  | "green"
  | "yellow"
  | "red"
  | "indigo"
  | "blue"
  | "purple"
  | "gray";

//
