class UserService {
    getName() {
        return fetch('https://randomuser.me/api/')
    }
}

const userService = new UserService()

export default userService