import { Link } from "react-router-dom";
import Input from "../../../Components/Input";
import { useForm } from "react-hook-form";
import { getRule } from "../../../util/rule";
import { useMutation } from "@tanstack/react-query";
import { LoginAccount } from "../../../Api/Api.auth";
import Image from "../../../assets/imageAuthen.png";
import { useState } from "react";
import Button from "../../../Components/Button";
import { notification } from "antd";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const eye = () => {
    setShowPassword(!showPassword);
  };

  const rule = getRule();
  const LogionAccountMutation = useMutation({
    mutationFn: (body) => LoginAccount(body),

    onError: (error) => {
      notification.error({
        message: "Error",
        description: "Tên đăng nhập hoặc mật khẩu không đúng",
      });
    },
  });

  const onSubmit = handleSubmit((data) =>
    LogionAccountMutation.mutate(data, {})
  );

  return (
    <div className="grid grid-cols-2 h-screen bg-[#39AD7C]">
      <div className="col-span-1">
        <img src={Image} alt="" className="m-auto mt-24 h-[500px] " />
      </div>
      <div className="col-span-1 w-full  py-10  bg-white rounded-2xl text-black shadow-2xl">
        <form
          className="mx-14  text-mainColor-color_D9D9D9"
          onSubmit={onSubmit}
          noValidate
        >
          <div className=" w-full my-auto relative flex justify-between items-center  ">
            <span className="text-3xl mt-32 font-text  font-semibold capitalize ">
              Tài Khoản Đăng Nhập
            </span>
          </div>
          <div className="mt-7 ">
            <Input
              name="email"
              type="Email"
              placeholder="Email"
              rules={rule.email}
              register={register}
              errorMessage={errors.email?.message}
            />

            <div>
              <div className="relative">
                <Input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  autoComplete="on"
                  rules={rule.password}
                  register={register}
                  errorMessage={errors.password?.message}
                />
                <div
                  className="flex justify-end gap-2 mb-3 absolute top-3 right-1 "
                  onClick={eye}
                >
                  {!showPassword && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 stroke-black "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  )}
                  {showPassword && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 stroke-black"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                      />
                    </svg>
                  )}
                </div>
              </div>

              {/* <p className="mt-2">
                Bạn chưa có tài khoản?
                <Link
                  to={"/register"}
                  className=" pl-1 text-red-500 cursor-pointer capitalize  hover:opacity-50"
                >
                  đăng ký
                </Link>
              </p> */}
            </div>
          </div>

          <Button label={"Đăng nhập"} />
        </form>
      </div>
    </div>
  );
}
export default Login;
