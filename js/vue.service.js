const service = {
    generatePercentagesList(vue) {
        return vue.books.map(t => utils.generatePercentageWithCeil(t.currentPage, t.totalPages, 100))
    },
    enableRemoveButtons(vue) {
        vue.isEnabledRemoveButtons = false
    },
    removeBook(vue, index) {
        const book = vue.books[index]
        if (utils.isEmptyString(book.title) || confirm(`Remove book "${book.title}"?`)) {
            vue.books.splice(index, 1)
            repository.save(vue.books)
        }
    },
    sabeBooksCurrentState(vue) {
        repository.save(vue.books)
    },
    saveBookConfig(vue, index) {
        const book = vue.books[index]
        book.isEditingBook = false
        repository.save(vue.books)
    },
    enableBookEdition(vue, index) {
        const book = vue.books[index]
        book.isEditingBook = true
    },
    disableRemoveButtons(vue) {
        vue.isEnabledRemoveButtons = true
    },
    createEmptyBook(vue) {
        const emptyBook = { title: "", currentPage: 1, totalPages: 1, isEditingBook: true }
        vue.books.push(emptyBook)
        repository.save(vue.books)
    },
    renderBooks(vue) {
        vue.books = repository.all()
    }
}