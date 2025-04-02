import { Handler } from '@netlify/functions'
import fs from 'fs/promises'
import path from 'path'

export const handler: Handler = async (event, context) => {
    try {
        const dirPath = path.dirname(__filename)
        const files = await fs.readdir(dirPath)

        return {
            statusCode: 200,
            body: JSON.stringify({
                directory: dirPath,
                files: files
            })
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to list directory' })
        }
    }
}
