

let settings = {
    userName: "loremIpsum",
    password: "BadPassword",
    isActive: false,
    ip: "127.0.0.1",
    serverName: "kodluyoruz.org"
}

// let userName = settings.userName
// console.log(userName)

let {userName:  user, password, isActive, ip, serverName} = settings //Destructuring
console.log(user, password, isActive, ip, serverName)
console.log(user)

// obje içindeki bazı bilgilerin çıkartılması
let {userName: userName2, password: password2, isActive: isActive2, ...newSettings} = settings

console.log(newSettings)


// objenin destructuring ile kopyalanması

// hatalı kopylama
// let settings2 = settings

// settings2.userName = "Degisen bilgi"

// console.log("settings",settings)
// console.log("settings2",settings2)


// dogru kopyalanma ve değiştirme
let settings2 = {...settings}
settings2.userName = "Degisen bilgi"
console.log("settings",settings)
console.log("settings2",settings2)


let score = [100, 200, 300, 400]

let [score1, score2, ...otherScore] = score
console.log(score1, score2, otherScore)

let [score3, score4] = otherScore
console.log(score3, score4)

let copyOfScore =  [...score]
copyOfScore[0] = 1
console.log(copyOfScore)