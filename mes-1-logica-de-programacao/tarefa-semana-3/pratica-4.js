function series(nomedeSeries) {
    let array = ""
    for (let i = 0; i < nomedeSeries.length; i++) {
        console.log(nomedeSeries.indexOf(nomedeSeries[i]), nomedeSeries[i])
    }
}

series(["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"])