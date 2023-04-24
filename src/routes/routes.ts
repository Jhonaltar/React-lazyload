import { lazy , LazyExoticComponent} from "react";
//import { LazyPage1, LazyPage2, LazyPage3 } from "../01-laztload/pages";

type JSXComponent = () => JSX.Element;

interface Route {
    to:string;
    path:string;
    name:string;
    Componet: LazyExoticComponent<JSXComponent> | JSXComponent;
}

const Lazy1 = lazy(()=> import(/* webpackChunkName: "LazyPage1" */'../01-laztload/pages/LazyPage1'));
const Lazy2 = lazy(()=> import(/* webpackChunkName: "LazyPage2" */'../01-laztload/pages/LazyPage2'));
const Lazy3 = lazy(()=> import(/* webpackChunkName: "LazyPage3" */'../01-laztload/pages/LazyPage3'));

export const routes: Route[] = [
  {
    to: "/lazy1",
    path: "lazy1",
    Componet: Lazy1,
    name: "Lazy-1",
  },
  {
    to: "/lazy2",
    path: "lazy2",
    Componet: Lazy2,
    name: "Lazy-2",
  },
  {
    to: "/lazy3",
    path: "lazy3",
    Componet: Lazy3,
    name: "Lazy-3",
  },
];
