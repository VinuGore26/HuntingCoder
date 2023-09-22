import React from "react";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

const blog = () => {
  return (
    <>
      <main className={styles.main}>
        <h1>This is an Blog page.</h1>
        <div className={styles.blogs}>
          <div className={styles.blogItem}>
            <Link href={'/blogPost/learn-javasvript'}>
              <h3 className={styles.headLine}>
                How to learn Javascript in 2023
              </h3>
            </Link>
            <p className={styles.para}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
              quidem impedit sed reprehenderit, praesentium illo obcaecati?
            </p>
          </div>
          <div className={styles.blogItem}>
            <h3 className={styles.headLine}>How to learn Javascript in 2023</h3>
            <p className={styles.para}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
              quidem impedit sed reprehenderit, praesentium illo obcaecati?
            </p>
          </div>
          <div className={styles.blogItem}>
            <h3 className={styles.headLine}>How to learn Javascript in 2023</h3>
            <p className={styles.para}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
              quidem impedit sed reprehenderit, praesentium illo obcaecati?
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default blog;
