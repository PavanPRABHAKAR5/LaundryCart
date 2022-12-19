function getToken(){
    let token="" ;
    if (localStorage.getItem('userInfo') !== null) {
        return 
    } else {
        console.log(`Email address not found`);
    }
}

export {getToken}