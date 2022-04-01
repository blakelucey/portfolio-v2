import Head from "next/head";
import Image from "next/Image";
// import Layout, { siteTitle } from '../components/layout'
import utilStyles from "../styles/utils.module.css";
// import { getSortedPostsData } from '../lib/posts'
import Link from "next/link";
// import Date from '../components/date'
//mui
import { Container } from "@mui/material";

export default function Home() {
  return (
    <div>
      <Container>
        <Image
          priority
          width={108}
          height={108}
          src="/images/profile.jpg"
          className={utilStyles.borderCircle}
        />
      </Container>
    </div>
  );
}
