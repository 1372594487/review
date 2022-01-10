new Promise((resolve) => {
  console.log('Promise')

  resolve()
})

  .then(function () {
    new Promise((resolve) => {
      console.log('promise1')
      resolve()
    })

      .then(function () {
        console.log('promise1-1')
      })

      .then(function () {
        console.log('promise1-2')
      })

      .then(function () {
        console.log('promise1-3')
      })

      .then(function () {
        console.log('promise1-4')
      })

    console.log('after promise1')
  })

  .then(function () {
    new Promise((resolve) => {
      console.log('promise2')

      resolve()
    })

      .then(function () {
        console.log('promise2-1')
      })

      
      .then(function () {
        console.log('promise2-2')
      })

      .then(function () {
        console.log('promise2-3')
      })

      .then(function () {
        console.log('promise2-4')
      })

    console.log('after promise2')
  })

  .then(function () {
    new Promise((resolve) => {
      console.log('promise3')

      resolve()
    })

      .then(function () {
        console.log('promise3-1')
      })

      .then(function () {
        console.log('promise3-2')
      })

      .then(function () {
        console.log('promise3-3')
      })

      .then(function () {
        console.log('promise3-4')
      })

    console.log('after promise3')
  })
