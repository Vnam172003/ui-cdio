import { Button, Form, Input, InputNumber, Modal } from "antd";
import { useState } from "react";
import { usePDF } from "react-to-pdf";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: "${label} bắt buộc!",
  types: {
    number: "${label} không phải là số hợp lệ!",
  },
  number: {
    range: "${label} từ ${min} đến ${max}",
  },
};

function Vienphi() {
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });
  const [formData, setFormData] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const onFinish = (values) => {
    setFormData(values);
    setModalVisible(true);

    // Optional: Save to localStorage
    localStorage.setItem("invoiceData", JSON.stringify(values));
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  return (
    <div className="bg-white py-10">
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        style={{
          maxWidth: 600,
        }}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["user", "name"]}
          label="Tên bệnh nhân"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Mã số">
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "age"]}
          label="Tuổi"
          rules={[
            {
              type: "number",
              min: 0,
              max: 99,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item name={["user", "bao hiem y te"]} label="Bảo hiểm y tế">
          <Input />
        </Form.Item>
        <Form.Item name={["user", "ngay ra vien"]} label="Ngày ra viện">
          <Input />
        </Form.Item>
        <Form.Item name={["user", "introduction"]} label="Thông tin viện phí">
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            ...layout.wrapperCol,
            offset: 8,
          }}
        >
          <Button type="primary" htmlType="submit">
            Xuất hóa đơn
          </Button>
        </Form.Item>
      </Form>

      <Modal
        title="Thông tin hóa đơn"
        visible={modalVisible}
        onCancel={handleCancel}
        footer={[]}
      >
        <div ref={targetRef}>
          <p>
            <strong>Tên bệnh nhân:</strong> {formData?.user?.name}
          </p>
          <p>
            <strong>Mã số:</strong> {formData?.user?.ma_so}
          </p>
          <p>
            <strong>Tuổi:</strong> {formData?.user?.age}
          </p>
          <p>
            <strong>Bảo hiểm y tế:</strong> {formData?.user?.bao_hiem_y_te}
          </p>
          <p>
            <strong>Ngày ra viện:</strong> {formData?.user?.ngay_ra_vien}
          </p>
          <p>
            <strong>Thông tin viện phí:</strong> {formData?.user?.introduction}
          </p>
          <img
            src="https://content-static.healthcare.inc/uploads/sites/3/2020/08/hospital.jpg"
            alt=""
            width={200}
            className="mt-5 "
          />
        </div>
        <div className="flex justify-end gap-5">
          <button
            onClick={() => toPDF()}
            className=" bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-3 rounded"
          >
            Xuất file PDF
          </button>
          <button
            className=" bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-3 rounded"
            onClick={handleCancel}
          >
            Đóng
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default Vienphi;
