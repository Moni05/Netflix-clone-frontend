const RegisterReducer = (state, action) => {
    switch (action.type) {
      case "REGISTER_START":
        return {
          isLoading: true,
        };
      case "REGISTER_SUCCESS":
        return {
          isLoading: true,
          status: "success",
          message: action.payload,
        };
      case "REGISTER_FAILURE":
        return {
          isLoading: false,
          status: "error",
          message: action.payload,
        };
      default:
        return { ...state };
    }
};
  
export default RegisterReducer;