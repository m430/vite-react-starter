import global from "./global";

const models = [
  global
]

export const initModels = (app) => {
  models.forEach(m => app.model(m));
}