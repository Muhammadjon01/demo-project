import React from "react";
import { Table, Button } from "antd";
import { useGetPostsQuery } from "../../api/posts";

function Posts() {
  const { data = [], isLoading } = useGetPostsQuery();

  const columns = [
    {
      title: "№",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "view",
      render: () => {
        return <Button>view</Button>;
      },
    },
  ];

  if (isLoading) return <h1>Loading</h1>;
  return (
    <div className="bg-green-400">
        <h1 className="text-3xl font-bold pt-5 text-white">Posts Table</h1>
      {data.length > 0 && (
        <Table
          className="w-[80%] mx-auto"
          columns={columns}
          dataSource={data}
          rowKey="id"
        />
      )}
    </div>
  );
}

export default Posts;
