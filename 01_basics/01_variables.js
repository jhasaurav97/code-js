const accountId = 144335
let accountEmail = "saurav@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 1234  Not Valid//

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

accountEmail = "harry@google.com"
accountPassword = "4321"
accountCity = "Delhi"
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])