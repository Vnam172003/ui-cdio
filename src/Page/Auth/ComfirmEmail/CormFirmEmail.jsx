import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { VerifyAccount } from "../../../Api/Api.auth";
import ImageEmail from "../../../assets/ImageEmail.jpg";
import { notification } from "antd";
function CormFirmEmail() {
  const { email } = useParams();
  console.log(email);
  const [otp, setOtp] = useState("");
  const { mutate } = useMutation({
    mutationFn: (body) => VerifyAccount(body),
  });

  const handleSubmit = () => {
    mutate(
      { verifyEmailToken: otp },
      {
        onSuccess: () => {
          window.location.href = `/login`;
        },
        onError: (error) => {
          notification.error({
            message: "Error",
            description: "Opt không đúng",
          });
        },
      }
    );
  };
  return (
    <div className="bg-white h-screen flex justify-center  text-black">
      <div class="max-w-xl px-5 text-center">
        <img src={ImageEmail} alt="" width={600} />
        <p class="mb-2 text-lg text-zinc-500">
          Tài khoản của bạn đã được phê duyệt và bây giờ bạn có thể đăng nhập
          vào
          <a
            target="_blank"
            href={`https://mail.google.com/`}
            class="font-medium text-indigo-500"
          >
            {email}
          </a>
          để lấy mã otp
        </p>

        <input
          value={otp}
          onChange={(event) => setOtp(event.target.value)}
          type="text"
          class="bg-white border-b border-gray-300 text-gray-900 text-sm outline-none focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-white dark:focus:border-orange-500"
          placeholder="Verify OTP"
          required
        />

        <span
          onClick={handleSubmit}
          class="mt-3 inline-block w-96 rounded bg-orange-500 px-5 py-3 font-medium text-white shadow-md shadow-orange-400/20 hover:bg-orange-600"
        >
          gửi
        </span>
      </div>
    </div>
  );
}

export default CormFirmEmail;
