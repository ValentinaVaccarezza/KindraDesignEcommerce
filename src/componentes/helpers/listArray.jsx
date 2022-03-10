const listArray = (stock) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(stock)
        }, 2000)
    })
}

export { listArray }