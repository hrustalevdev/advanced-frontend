import { createRoot } from "react-dom/client";
import { Counter } from "./components/Counter";
import { assertExist } from "./shared/lib/assert-exist";

const container = document.getElementById("root");
assertExist(container, "Container not found");

const root = createRoot(container);
root.render(<Counter />);
