const repository = {
    STORE_NAME: "books",
    DEFAULT_VALUES: [
        {
            title: "Memórias Póstumas de Brás Cubas",
            currentPage: 145,
            totalPages: 145,
            isEditingBook: false
        },
        {
            title: "A Riqueza das Nações",
            currentPage: 65,
            totalPages: 158,
            isEditingBook: false
        }
    ],
    startup() {
        try {
            JSON.parse(localStorage[this.STORE_NAME])
        } catch {
            localStorage[this.STORE_NAME] = JSON.stringify(this.DEFAULT_VALUES)
        }
    },
    all() {
        return JSON.parse(localStorage[this.STORE_NAME])
    },
    save(values) {
        localStorage[this.STORE_NAME] = JSON.stringify(values)
    }
}