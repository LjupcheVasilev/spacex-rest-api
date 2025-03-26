import swaggerUi from "swagger-ui-express"
import yaml from "js-yaml"
import fs from "fs"

const swaggerFilePath = "./dist/api-doc.yaml"
const swaggerSpec = yaml.load(
  fs.readFileSync(swaggerFilePath, "utf8"),
) as Record<string, any>

export const swaggerDocs = swaggerUi.setup(swaggerSpec, {
  swaggerOptions: {
    supportedSubmitMethods: ["get", "post", "put", "delete"],
  },
})
export const swaggerServe = swaggerUi.serve
