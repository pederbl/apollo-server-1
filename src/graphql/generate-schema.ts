import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function getFilesInDirectory(dir: string, fileList: string[] = []): Promise<string[]> {
  const files = await fs.readdir(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = await fs.stat(filePath);

    if (stat.isDirectory()) {
      await getFilesInDirectory(filePath, fileList);
    } else if (file === 'schema.graphql') {
      fileList.push(filePath);
    }
  }

  return fileList;
}

async function concatenateSchemas(): Promise<void> {
  const resourcesDir = path.join(__dirname, 'resources');
  const outputFilePath = path.join(__dirname, 'generated-schema.graphql');

  try {
    const schemaFiles = await getFilesInDirectory(resourcesDir);
    const schemas = await Promise.all(
      schemaFiles.map(async (file) => {
        const content = await fs.readFile(file, 'utf8');
        return content;
      })
    );

    const concatenatedSchemas = schemas.join('\n');
    await fs.writeFile(outputFilePath, concatenatedSchemas, 'utf8');
    console.log('Schemas concatenated successfully.');
  } catch (error) {
    console.error('Error concatenating schemas:', error);
  }
}

concatenateSchemas();
