const isEmail = email => {
    const re = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
    return re.test(email) && email.length >= 7 && email.length <= 255;
};

const isValidPassword = password => {
    return password.length >= 1 && password.length <= 20;
};

const isValid = {
    email: isEmail,
    password: isValidPassword
};

export { isValid };