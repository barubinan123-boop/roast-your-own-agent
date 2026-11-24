import { mkdirSync, writeFileSync } from 'node:fs'

const roast =
  'Muse read 200 files, called forty tools, then asked what I meant — a genius that still needs a map to find its own point.'

const main = (): void => {
  mkdirSync('/output', { recursive: true })
  writeFileSync('/output/entry.txt', roast, 'utf8')
}

main()
