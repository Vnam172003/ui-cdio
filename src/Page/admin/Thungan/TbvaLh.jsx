import { Input } from "antd";
import { Button, Flex } from "antd";
import TextArea from "antd/es/input/TextArea";
function TbvaLh() {
  return (
    <div>
      <div className="my-1  flex gap-10 mx-5">
        Nhập mã số bệnh nhân
        <Input placeholder="Mã số bệnh nhân" className="py-2" />
      </div>
      <div className="flex justify-center my-5 ">
        <Flex className="gap-10" wrap>
          <Button type="primary">Tra cứu bảo hiểm</Button>
          <Button>Tra cứu lịch sử bênh nhân</Button>
          <Button type="dashed">Đặt lịch khám</Button>
        </Flex>
      </div>
      <p className="font-bold text-center">Nhập thông tin</p>
      <TextArea className="my-4"></TextArea>
    </div>
  );
}

export default TbvaLh;
