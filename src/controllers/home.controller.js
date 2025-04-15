export class HomeController {
    constructor() {

    }

    static home(req, res) {
        console.log('Authorized')
        res.status(200).send('Authorized')
    }
}