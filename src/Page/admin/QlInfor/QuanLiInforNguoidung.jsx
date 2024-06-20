import React, { useEffect, useState } from "react";
import { Avatar, Button, List, Skeleton } from "antd";
const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;
function QuanLiInforNguoidung() {
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        setInitLoading(false);
        setData(res.results);
        setList(res.results);
      });
  }, []);
  const onLoadMore = () => {
    setLoading(true);
    setList(
      data.concat(
        [...new Array(count)].map(() => ({
          loading: true,
          name: {},
          picture: {},
        }))
      )
    );
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        const newData = data.concat(res.results);
        setData(newData);
        setList(newData);
        setLoading(false);

        window.dispatchEvent(new Event("resize"));
      });
  };
  const loadMore =
    !initLoading && !loading ? (
      <div
        style={{
          textAlign: "center",
          marginTop: 12,
          height: 32,
          lineHeight: "32px",
        }}
      >
        <Button onClick={onLoadMore}>loading more</Button>
      </div>
    ) : null;
  return (
    <div>
      <div className=" px-1 bg-gray-600 py-3 flex justify-between">
        <div className="flex gap-2 text-sm ">
          <div className="">Image</div>
          <div className="">Tên</div>
        </div>
        <div className="text-sm flex gap-32 mr-32">
          <span className="">Tài khoản</span>
          <span className="">Mật khẩu</span>
        </div>
      </div>
      <List
        className="bg-white"
        loading={initLoading}
        itemLayout="horizontal"
        loadMore={loadMore}
        dataSource={list}
        renderItem={(item) => (
          <List.Item
            actions={[
              <a key="list-loadmore-edit ">sửa</a>,
              <a key="list-loadmore-more">xóa</a>,
            ]}
          >
            <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item.Meta
                avatar={<Avatar src={item.picture.large} />}
                title={<a>{item.name?.last}</a>}
              />
              <div className="flex gap-24">
                <div className="">{item.email}</div>
                <div className="">Hospital123123</div>
              </div>
            </Skeleton>
          </List.Item>
        )}
      />
    </div>
  );
}

export default QuanLiInforNguoidung;
