import { expect, tap } from 'tapbundle'

import * as smartgulp from '../ts/index'
import * as smartstream from 'smartstream'
import * as gulpFunction from 'gulp-function'
import * as smartq from 'smartq'

tap.test('smartgulp.src -> should read a directoy', async (tools) => {
  let done = smartq.defer()
  smartgulp.src(['./test/testfiles/**/*.md'])
    .pipe(gulpFunction.forEach(async (fileArg) => {
      console.log(fileArg.path)
    }))
    .pipe(gulpFunction.atEnd(async () => {
      done.resolve()
    }))
  await done.promise
})

tap.test('smartgulp shoould replace files', async () => {
  let done = smartq.defer()
  smartgulp.src(['./test/testfiles/**/*.md'])
    .pipe(gulpFunction.forEach(async (fileArg) => {
      console.log(fileArg.path)
    }))
    .pipe(gulpFunction.atEnd(async () => {
      done.resolve()
    }))
    .pipe(smartgulp.replace())
  await done.promise
})

tap.start()
