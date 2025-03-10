function validateForm() {
    alert('im in validateform function')
    let val=true;
    let nameValue=document.formname.name.value
    console.log('nameValue>>',nameValue)
    if(nameValue.length<5){
        alert(' Value should be greater than 5 digits')
        val=false
    }
    let Phone=document.formname.Phone.value
    console.log('nameValue>>',nameValue)
    if(Phone.length>10){
        alert('Your Phone number should not be greater than 10 Digts')
        val=false
    }
    let gender=document.formname.gender.value
    console.log('nameValue>>',nameValue)
    if(gender.gender==null){
        alert ('Please select')
        val=false
    return val;
}
