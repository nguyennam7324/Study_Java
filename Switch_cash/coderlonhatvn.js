console.log("alo e à")
//switch_cash
//break là gì???
//câu lệnh ngắt khi 1 case dc thực thi(dk đúng) và thoát khỏi khối switch catch(nếu bên dưới còn code thì bỏ qua)
//Tại sao không phải là score mà là true???
//Tại vì case trả về giá trị true,false nếu dk là score thì sẽ lấy giá trị score(trong th này là 10) so sánh với giá trị true hoặc false trong th này là 10!=true
//Tại sao khi k có break mặc dù điều kiện đúng nhưng tại sao không in ra những cái có dk đúng mà lại in ra hết,dieu kien sai no van in???
const score = 4
switch (true) {
    case (score >= 7 && score <= 9)://true
        console.log("Học sinh khá")
        break
    case (score >= 5 && score < 7):
        console.log("Học sinh trung bình")
        break
    case (score < 5):
        console.log("Học sinh yếu")
        break
    case (score == 10):
        console.log("Học sinh giỏi")
        break
    default:
        console.log("điều kiện không thõa mãn vui lòng nhập lại")
}

console.log("-------------------------------")

//trường hợp ko có break nó sẽ bắt đầu roi(fall through)(nghĩa là nó sẽ in ra hết bất kể điều kiện đúng hay sai)
//nó sẽ bắt đầu rơi khi cash thoả mãn dk
const score1 = 4
switch (true) {
    case (score1 >= 7 && score1 <= 9)://true
        console.log("Học sinh khá")

    case (score1 >= 5 && score1 < 7):
        console.log("Học sinh trung bình")

    case (score1 < 5)://thõa mãn dk bắt đầu rơi=))
        console.log("Học sinh yếu")

    case (score1 == 10):
        console.log("Học sinh giỏi")

    default:
        console.log("điều kiện không thõa mãn vui lòng nhập lại")
}