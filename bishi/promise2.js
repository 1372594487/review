new Promise((resolve) => {
  resolve()
  new Promise((resolve) => {
    resolve()
  }).then(() => {
    console.log('3')
  })
}).then(() => {
  console.log('4')
})
