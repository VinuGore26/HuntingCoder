import React from 'react'
import { useRouter } from 'next/router'
import styles from "@/styles/BlogPost.module.css";

const slug = () => {
    const router = useRouter();
    const {slug} = router.query;
  return (
    <main className={styles.main}>
      <h1>Title of a page is {slug}</h1> 
      <hr />
      <div className={styles.blogItem}>
        <p className={styles.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quos recusandae blanditiis ab accusamus optio voluptatem, maiores cum harum assumenda.</p>
      </div>
    </main>
  )
}

export default slug;
