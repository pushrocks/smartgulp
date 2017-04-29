import { expect, tap } from 'tapbundle'

import * as smartgulp from '../dist/index'
import * as smartstream from 'smartstream'
import * as gulpFunction from 'gulp-function'
import * as smartq from 'smartq'

tap.test('smartgulp.src -> should read a directoy', async () => {
  let done = smartq.defer()
  smartgulp.src(['./test/testfiles/**/*'])
    .pipe(gulpFunction.forEach(async (fileArg) => {
      console.log(fileArg.path)
    }))
    .pipe(gulpFunction.atEnd(async () => {
      console.log('hey')
      done.resolve()
    }))
  await done.promise
})

tap.start()
