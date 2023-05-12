export function getProvincias(_, res) {
    res.send([{ "province": "Sevilla", "year": 2021 }])
}

export function findByid(_, res) {
    res.send({ "province": "Sevilla", "year": 2021 })
}


