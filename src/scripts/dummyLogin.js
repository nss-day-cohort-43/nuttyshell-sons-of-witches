
/* Function that allows a dummy user to be loged in
    for trouble shoot reasons. Change the Number after 
    "userId" to change the dummy user that is currently 
    logged in.
*/
export const dummyLogin = () => {
    sessionStorage.setItem("userId", 2)
}