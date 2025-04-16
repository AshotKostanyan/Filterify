export function validateUsername(username) {
    if (!username) {
        throw new Error("Username is required.");
    }

    if (username.length < 3) {
        throw new Error("Username must be at least 3 characters long.");
    }

    if (username.length > 16) {
        throw new Error("Username cannot be longer than 16 characters.");
    }

    if (!/^[a-zA-Z0-9_]+$/.test(username)) {
        throw new Error("Username can only contain letters, numbers, and underscores.");
    }

    return username;
}
