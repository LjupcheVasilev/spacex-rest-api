import express from "express"
import dotenv from "dotenv"
import { swaggerServe, swaggerDocs } from "../swagger/swagger"
import serverless from "serverless-http"


dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

// middleware
app.use(express.json())

app.use("/api-docs", swaggerServe, swaggerDocs)

if (process.env.NODE_ENV !== 'production') {
    const startServer = async () => {
        try {
            app.listen(PORT, () => {
                console.log(`🚀 SpaceX Launchpads API Docs is running on port ${PORT}`)
            })
        } catch (error) {
            console.error("Failed to start server:", error)
            process.exit(1)
        }
    }

    startServer()
}

export const handler = serverless(app)
export { app }
