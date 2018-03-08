export const RESET_STATE = 'RESET_STATE'
export const resetState = () => ({
  type: RESET_STATE,
})

export const STACK_MODAL = 'STACK_MODAL'
export const stackModal = (c, t) => ({
  type: STACK_MODAL,
  value: c,
  title: t,
})

export const POP_MODAL = 'POP_MODAL'
export const popModal = () => ({
  type: POP_MODAL,
})
