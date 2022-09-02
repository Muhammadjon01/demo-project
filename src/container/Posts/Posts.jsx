import React from "react";
import { Table, Button } from "antd";
import { useGetPostsQuery } from "../../api/posts";
import { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";

function Posts() {
  const { data = [], isLoading } = useGetPostsQuery();
  const [search, setSearch] = useState("");
  const [datas, setDatas] = useState([]);

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

  useEffect(() => {
    setDatas(
      data.filter((elem) =>
        elem.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  if (isLoading) return <h1>Loading</h1>;
  return (
    <div className="bg-green-400">
      <div className="flex justify-between w-[80%] mx-auto py-5">
        <h1 className="text-3xl font-bold  text-white">Posts Table</h1>
        <div>
          <input
            className="rounded-full px-10"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
          />
          <AiOutlineSearch size={20} className="mt-[-30px] mx-2" />
        </div>
      </div>
      {data.length > 0 && search === "" && (
        <Table
          className="w-[80%] mx-auto"
          columns={columns}
          dataSource={data}
          rowKey="id"
        />
      )}
      {search.length > 0 && data.length > 0 && (
        <Table
          className="w-[80%] mx-auto"
          columns={columns}
          dataSource={datas}
          rowKey="id"
        />
      )}
    </div>
  );
}

export default Posts;
