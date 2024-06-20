import { Link, useNavigate } from "react-router-dom";
import Input from "../../../Components/Input";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { getRule } from "../../../util/rule";
import Image from "../../../assets/ImageAuth.png";

import { registerAccount } from "../../../Api/Api.auth";
import { useState } from "react";
import Button from "../../../Components/Button";

function Register() {
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
  const navigate = useNavigate();
  const registerMutation = useMutation({
    mutationFn: (body) => registerAccount(body),
  });
  const onSubmit = handleSubmit((data) => {
    const body = data;
    registerMutation.mutate(body, {
      onSuccess: () => {
        navigate("/");
      },
    });
  });
  return (
    <div className="grid grid-cols-2  bg-[#6E5CC2]">
      <div className="col-span-1">
        <img src={Image} alt="" className="m-auto mt-24 h-[500px] " />
      </div>
      <div className=" col-span-1 w-full  bg-white text-black shadow-2xl">
        <form
          className="mx-10 pt-10 text-mainColor-color_D9D9D9"
          onSubmit={onSubmit}
          noValidate
        >
          <div className=" w-full relative flex justify-between items-center  ">
            <span className="text-3xl font-text  font-semibold capitalize ">
              Đăng ký tài khoản của bạn
            </span>
          </div>
          <div className="mt-7 ">
            <div className="flex gap-3">
              <Input
                name="firstName"
                type="text"
                placeholder="Họ"
                rules={rule.firstName}
                register={register}
                errorMessage={errors.firstName?.message}
              />
              <Input
                name="lastName"
                type="text"
                placeholder="Tên"
                rules={rule.lastName}
                register={register}
                errorMessage={errors.lastName?.message}
              />
            </div>
            <Input
              name="email"
              type="Email"
              placeholder="Email"
              rules={rule.email}
              register={register}
              errorMessage={errors.email?.message}
            />
            <Input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="mật khẩu"
              autoComplete="on"
              rules={rule.password}
              register={register}
              errorMessage={errors.password?.message}
            />

            <div>
              <Input
                name="xác nhận mật khẩu"
                type={showPassword ? "text" : "password"}
                placeholder="confirm password"
                autoComplete="on"
                rules={rule.confirmPassword}
                register={register}
                errorMessage={errors.confirmPassword?.message}
              />
              <div className="flex items-center gap-2 mb-3" onClick={eye}>
                <input type="checkbox" className="w-4 h-4" />
                hiển thị mật khẩu
              </div>
              <p className="my-2">
                bạn đã có tài khoản chưa?
                <Link
                  to={"/login"}
                  className=" pl-1 text-red-500 cursor-pointer  hover:opacity-50"
                >
                  đăng nhập
                </Link>
              </p>
            </div>
          </div>
          <Button label={"Đăng kí"} />
        </form>
      </div>
      <div className="col-span-2 hidden lg:block"></div>
    </div>
  );
}

export default Register;
