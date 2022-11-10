// Import stylesheets
import "./style.css"
import { DuckSimulator } from "./duck"

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById("app")
appDiv.innerHTML = `<h1>TypeScript Ducks</h1>`

const duckSimulator = new DuckSimulator()

duckSimulator.main()
