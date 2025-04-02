import { Handler } from '@netlify/functions'
import fs from 'fs/promises'
import path from 'path'

export const handler: Handler = async (event, context) => {
    try {
        const currentDir = path.dirname(__filename)
        const varTaskDir = '/var/task/docs'

        const [currentFiles, varTaskFiles] = await Promise.all([
            fs.readdir(currentDir),
            fs.readdir(varTaskDir)
        ])

        return {
            statusCode: 200,
            body: JSON.stringify({
                currentDirectory: {
                    path: currentDir,
                    files: currentFiles
                },
                varTaskDirectory: {
                    path: varTaskDir,
                    files: varTaskFiles
                }
            })
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to list directories' })
        }
    }
}
