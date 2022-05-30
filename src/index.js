import React from "react";
import ReactDOM from "react-dom";
import { Hooks } from "./Hooks";
import { Formulario } from "./hooks/effect/Formulario";
import { Mensaje } from "./hooks/effect/Mensaje";
import { HookCallback } from "./hooks/memo/HookCallBack";
import { HookUseMemo } from "./hooks/memo/HookUseMemo";
import { Memoriza } from "./hooks/memo/Memoriza";
import { MultipleCustomHooks } from "./hooks/MultipleCustomHooks";
import { TodoApp } from "./hooks/reducer/TodoApp";
import { FocusScreen } from "./hooks/ref/FocusScreen";
import { UseRefMultipleCustomHooks } from "./hooks/ref/UseRefMultipleCustomHooks";
import { Contador } from "./hooks/state/Contador";
import { ContadorConCustomHook } from "./hooks/state/ContadorConCustomHook";

ReactDOM.render(<TodoApp />, document.getElementById("root"));

//import("./hooks/reducer/intro-reducer");
