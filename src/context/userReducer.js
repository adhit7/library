const userReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BOOK_DATA':
      return {
        ...state,
        bookData: action.payload,
      };
    case 'UPDATE_BOOK_DATA':
      return {
        ...state,
        bookData: action.payload,
      };
    case 'DELETE_BOOK_DATA':
      return {
        ...state,
        bookData: action.payload,
      };

    case 'ADD_AUTHOR_DATA':
      return {
        ...state,
        authorData: action.payload,
      };
    case 'UPDATE_AUTHOR_DATA':
      return {
        ...state,
        authorData: action.payload,
      };
    case 'DELETE_AUTHOR_DATA':
      return {
        ...state,
        authorData: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
