export function validateEmail(email) {
    if(!email){
        throw new Error('Email is required');
    }

    if(!isValidEmail(email)){
        throw new Error('Invalid email');
    }

    return email;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
