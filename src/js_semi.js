export function canInsertSemi(string, pos) {
  for (let i = pos - 1; i >= 0; i--) {
    let ch = string.charCodeAt(i)
    if (ch === 10) break
    if (ch !== 32 && ch !== 9) return false
  }
  return true
}
