import { readdirSync, copyFileSync, mkdirSync } from 'node:fs'
import { consola as logger } from 'consola'

(async function main() {
  const PageName = await logger.prompt('请输入page', {type: 'text'})

  if (!PageName) return main();

  // 读取文件夹下内容
  const files = readdirSync(`./bin/template/page`);

  mkdirSync(`./src/pages/${PageName}`)
  files.forEach(file => {
    const [_fileName, fileType] = file.split('.')
    const newFileName = `${PageName}.${fileType}`
    const metaFile = `./bin/template/page/${file}`

    Bun.write(`./src/pages/${PageName}/${newFileName}`, Bun.file(metaFile))
  })

  const appJson = await Bun.file(`./src/app.json`).json()
  appJson.pages.push(`pages/${PageName}/${PageName}`)

  Bun.write(`./src/app.json`, JSON.stringify(appJson, null, 2))
})()