var registeredNumber = 30;
var registereEarly = false;
var age = 13;
if (17 < age && registereEarly) {
    registeredNumber = registeredNumber + 100
    console.log(`Таны сургалтын бүртгэлийн дугаар: ${registeredNumber}`, `Таны сургалтын цаг: 09:00`)
} else if (17 < age && registereEarly === false) {
    registeredNumber = registeredNumber + 100
    console.log(`Таны сургалтын бүртгэлийн дугаар: ${registeredNumber}`, `Таны сургалтын цаг: 12:00`)

} else if (0 <= registeredNumber <= 100) {
    registeredNumber = registeredNumber + 100
    console.log(`Таны сургалтын бүртгэлийн дугаар: ${registeredNumber}`, `Таны сургалтын цаг: 15:00`)
}
