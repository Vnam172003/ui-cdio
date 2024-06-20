export const getRule = () => ({
  firstName: {
    required: { value: true, message: "Bắt Buộc" },
  },
  lastName: {
    required: { value: true, message: "Bắt Buộc" },
  },
  verifyEmail: {
    required: { value: true, message: "Bắt Buộc" },
  },
  email: {
    required: { value: true, message: "Bắt Buộc" },

    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: "Email khôn đúng định dạng",
    },
  },
  password: {
    required: { value: true, message: "Bắt Buộc" },

    pattern: {
      value: /^(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{8,}$/,
      message: "viết hoa và thêm kí tự đặt biệt",
    },
    maxLength: {
      value: 160,
      message: "đồ dài từ 6-160",
    },
    minLength: {
      value: 5,
      message: "đồ dài từ 6-160",
    },
  },
  confirmPassword: {
    required: { value: true, message: "Bắt Buộc" },
  },
});
