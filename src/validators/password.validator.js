export function validatePassword(password) {
    if (!password) {
        throw new Error("Password is required.");
    }

    if (password.length < 8) {
        throw new Error("Password must be at least 8 characters long.");
    }

    if (!/[A-Z]/.test(password)) {
        throw new Error("Password must contain at least one uppercase letter.");
    }

    if (!/[a-z]/.test(password)) {
        throw new Error("Password must contain at least one lowercase letter.");
    }

    if (!/\d/.test(password)) {
        throw new Error("Password must contain at least one number.");
    }

    return password;
}