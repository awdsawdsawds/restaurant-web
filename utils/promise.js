export async function withResolve (promiseIns) {
  try {
    const result = await promiseIns
    return Promise.resolve([null, result])
  } catch (error) {
    return Promise.resolve([error, null])
  }
}
