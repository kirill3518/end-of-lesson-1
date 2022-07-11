export class LocalStorage {
    user: {
        userName: string,
        avatarUrl: string
    }
    favoritesAmount: number

    constructor(user: {
        userName: string,
        avatarUrl: string
    }, favoritesAmount: number) {
        this.user.userName = user.userName
        this.favoritesAmount = favoritesAmount
    }
}

// const storage = new LocalStorage(
// user: {
//     userName: string = 'qwer123',
//         avatarUrl: string = 'zxcvb987456'
// }, 5)

export function getUserData(value: unknown) {
    if (value instanceof LocalStorage) {
        return value.user
    }
    return value
}

export function getFavoritesAmount(value: unknown) {
    if (value instanceof LocalStorage) {
        return value.favoritesAmount
    }
    return value
}
// getUserData(storage)

function renderBlock(elementId, html) {
    const element = document.getElementById(elementId)
    element.innerHTML = html
}

export function renderUserBlock(userName: string, avatarUrl: string, favoritesAmount?: number) {
    renderBlock(
        'user-block',
        `
        <div id="user-block" class="user-block">
          <p>${userName}</p>
          <p>${avatarUrl}</p>
          <p>${favoritesAmount}</p>
        </div>
      `
    )
}
