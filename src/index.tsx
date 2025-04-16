import { createRoot } from "react-dom/client";
import { App } from "./app";
import { assertExist } from "./shared/lib/assert-exist";

const container = document.getElementById("root");
assertExist(container, "Container not found");

const root = createRoot(container);
root.render(<App />);
