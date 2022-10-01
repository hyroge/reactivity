import { useEffect, useDetachedScope, onScopeDipose } from './reactive'
import { useSignal } from './reactive/functional'

const count = useSignal(0)

const stop = useDetachedScope(() => {
  useEffect(() => console.log(count())) // 0
  onScopeDipose(() => console.log('Scope Diposed!'))
})

count.set(1) // 1

stop()

count.set(2) // nothing
