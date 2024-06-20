import React from "react";
import { Calendar, theme, Button, Form, Input } from "antd";

const onPanelChange = (value, mode) => {
  console.log(value.format("YYYY-MM-DD"), mode);
};
function Thongke() {
  const { token } = theme.useToken();
  const wrapperStyle = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };
  return (
    <div className="m-5">
      <div className="bg-slate-500 shadow-xl py-2 w-52 my-5 px-1">
        Số liệu cần thống kê
      </div>
      <div className="flex justify-around">
        <div style={wrapperStyle}>
          <Calendar fullscreen={false} onPanelChange={onPanelChange} />
        </div>
        <div className="mt-10">
          <Form
            name="wrap"
            labelCol={{
              flex: "110px",
            }}
            labelAlign="left"
            labelWrap
            wrapperCol={{
              flex: 1,
            }}
            colon={false}
            style={{
              maxWidth: 600,
            }}
          >
            <div className="flex gap-5 ">
              <div className="text-white">Tổng số tiền</div>
              <Form.Item
                name="Tổng số tiền"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </div>
            <div className="flex gap-4 ">
              <div className="text-white">Số bệnh nhân</div>
              <Form.Item
                name="số bệnh nhân"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </div>
            <div className="flex gap-1 ">
              <div className="text-white">Số ngày đã khám</div>
              <Form.Item
                name="Số ngày đã khám"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </div>
            <Form.Item label=" ">
              <Button type="primary" htmlType="submit">
                Thêm mới
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Thongke;
