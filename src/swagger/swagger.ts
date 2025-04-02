import swaggerUi from "swagger-ui-express"
import yaml from "js-yaml"

import swaggerSpec from "../../docs/api-doc.yaml?raw"

const parsedSpec = yaml.load(swaggerSpec) as Record<string, any>

export const swaggerDocs = swaggerUi.setup(parsedSpec, {
  swaggerOptions: {
    supportedSubmitMethods: ["get", "post", "put", "delete"],
  },
})
export const swaggerServe = swaggerUi.serve
