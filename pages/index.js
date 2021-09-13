import React from "react";
import axios from "axios";
import baseUrl from "../utils/baseUrl";

function Index() {
  return <div>Homepage</div>;
}

Index.getInitialProps = async ctx => {
  try {
    const { token } = parseCookies(ctx);

    const res = await axios.get(`${baseUrl}/api/posts`, {
      headers: { Authorization: token },
      params: { pageNumber: 1 }
    });

    return { postsData: res.data };
  } catch (error) {
    return { errorLoading: true };
  }
};
export default Index;
