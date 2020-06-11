function getRandomInit(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min) // max-min+1确保能取到max的最大值，+min获取max和min的区间
}

export function shuffle(arr) {
  let _arr = arr.slice()
  for (let i = 0; i < arr.length; i++) {
    let j = getRandomInit(0, 1)
    let t = arr[i]
    arr[i] = arr[j]
    arr[j] = t
  }
  return _arr
}
