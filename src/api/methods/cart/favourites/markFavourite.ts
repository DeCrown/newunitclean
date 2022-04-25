
export const markFavourite = (id: number, now: boolean) => {
    if (now) {
        console.log('Продукт с id:' + id + ' удален из избранного.');
    } else {
        console.log('Продукт с id:' + id + ' добавлен в избранное.');
    }
}