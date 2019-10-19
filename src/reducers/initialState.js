export default {
  furnitures: localStorage.getItem('furnitures') != null ? JSON.parse(localStorage.getItem('furnitures')) : null,
  furnitureStyles: localStorage.getItem('furnitureStyles') != null ? JSON.parse(localStorage.getItem('furnitureStyles')) : null,
  furnituresDisplay: localStorage.getItem('furnituresDisplay') != null ? JSON.parse(localStorage.getItem('furnituresDisplay')) : null,
  apiProcess: {
    onLoading: {
      status: false,
      message: '',
      key: ''
    },
    hasError: {
      status: false,
      message: '',
      key: ''
    },
    onSuccess: {
      status: false,
      message: '',
      key: ''
    }
  },
}
