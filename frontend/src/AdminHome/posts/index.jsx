import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Paper,
  CircularProgress,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";
import CallApi, { ErrorHappened } from "../../utils/callApi";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIconCircle from "@material-ui/icons/AddCircle";
import "./style.css";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // use CallApi to fetch all posts
    CallApi("posts", "get").then((res) => {
      setLoading(false);
      if (res === ErrorHappened) return;
      setPosts(res);
    });
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: "center" }}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <TableContainer component={Paper} style={{ marginTop: 30 }}>
      <Table>
        <TableHead className="table-head">
          <TableRow>
            <TableCell
              colSpan={4}
              style={{
                fontSize: 24,
                fontWeight: "bold",
              }}
            >
              所有博客
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>标题</TableCell>
            <TableCell>类别</TableCell>
            <TableCell>写作时间</TableCell>
            <TableCell>操作</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="table-body">
          {posts.map((item) => {
            const { id, title, date, topic } = item;
            return (
              <TableRow key={id}>
                <TableCell>{title}</TableCell>
                <TableCell>{topic}</TableCell>
                <TableCell>{date}</TableCell>
                <TableCell>
                  <EditIcon
                    style={{ marginRight: 12, cursor: "pointer" }}
                    color="action"
                    onClick={() => {
                      alert("Edit");
                    }}
                  />
                  <DeleteIcon color="action" style={{ cursor: "pointer" }} />
                </TableCell>
              </TableRow>
            );
          })}
          <TableRow>
            <TableCell colSpan={4} align="center">
              <Link to="/admin/addpost">
                <AddIconCircle
                  color="primary"
                  fontSize="large"
                  style={{ cursor: "pointer" }}
                />
              </Link>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Posts;
