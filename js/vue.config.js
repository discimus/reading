const appConfig = {
    data() {
        return {
            books: [],
            isEnabledRemoveButtons: false,
        }
    },
    mounted() {
        repository.startup()
        service.renderBooks(this)
    },
    computed: {
        percentage() {
            return service.generatePercentagesList(this)
        }
    },
    methods: {
        removeBook(index) {
            service.removeBook(this, index)
        },
        saveBookConfig(index) {
            service.saveBookConfig(this, index)
        },
        saveCurrentBooksState() {
            service.saveCurrentBooksState(this)
        },
        enableBookEdition(index) {
            service.enableBookEdition(this, index)
        },
        enableButtonsRemove() {
            service.enableButtonsRemove(this)
        },
        disableButtonsRemove() {
            service.disableButtonsRemove(this)
        },
        setEditModeOn() {
            service.setEditModeOn(this)
        },
        setEditModeOff() {
            service.setEditModeOff(this)
        },
        createEmptyBook() {
            service.createEmptyBook(this)
        }
    }
}