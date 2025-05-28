"use client"

import Link from "next/link"
import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { DetailedInfo } from "../../components/detailed-info"
import styles from "./page.module.css"
import { useCallback } from "react"

export default function ResumePage() {
  const downloadDetails = useCallback(() => {
    const detailsText = `
Personal Information:
Name: Joshua Mwendwa
Phone: +2547-94-773-452
Email: officialjoshuamwendwa@gmail.com
Location: Nairobi, Kenya
Nationality: Kenyan

Education:
Moringa School - Nairobi, Kenya
June 2024 - November 2024
Software Engineering Boot Camp
Completed an intensive 25-weeks boot camp covering JavaScript, Python, HTML/CSS, Node.js, Agile methodologies, and UI/UX design.

Kasikeu Boys' High School
February 2019 - December 2022
Kenya Certificate of Secondary Education

Professional Experience:
Sales Assistant
Gemark International Kenya Ltd
January 2023 - April 2024
Worked as sales person at Gemark International Limited. Got exposed to dealing with customers, learned selling skills and communication skills.

Technical Skills:
Programming Languages: Python, JavaScript, HTML, CSS
Frameworks: Node.js, React, Express
Databases: Flask, PostgreSQL
Tools: Git, GitHub, VS Code, Postman
Methodologies: Scrum

Key Strengths:
Leadership Skills
Demonstrated strong leadership abilities throughout educational journey, serving as Head Boy in primary school and a class prefect in secondary school. Taken on various leadership roles in bootcamp settings.

Communication Skills
Excellent communicator who effectively conveys information both verbally and in writing. A keen listener who gives prompt feedback.

Teamwork
Strongly committed to fostering a collaborative team environment. Communicates with confidence, adapts quickly to changing circumstances, and demonstrates reliability.

Planning and Organizing
Possesses refined planning and organizational skills that enable balancing work, supporting team, and managing responsibilities in a timely and professional manner.

Referees:
Mathias Mwololo
Manager Gemark International Ltd
Email: mathiasmwololo01@gmail.com
Phone: +254-727-205-718

Lilian Ndanu
Administrator Forbes Global Kenya
Email: Ndanulilian54@gmail.com
Phone: +254-794-378-010

Euniter Mumbua
Administrator Majid Al Futtaim
Email: eunitermumbua4@gmail.com
Phone: +254-726-930-726
    `

    const blob = new Blob([detailsText], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "Joshua_Mwendwa_Details.txt"
    a.click()
    URL.revokeObjectURL(url)
  }, [])

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <section className={styles.resumeSection}>
          <div className={styles.resumeHeader}>
            <h1 className={styles.title}>Joshua Mwendwa</h1>
            <p className={styles.subtitle}>Software Engineer</p>
            <div className={styles.actions}>
              <Link href="/" className={styles.backButton}>
                Back to Portfolio
              </Link>
              <button className={styles.downloadButton} onClick={downloadDetails}>
                Download Details
              </button>
            </div>
          </div>

          <div className={styles.resumeContent}>
            <p className={styles.objective}>
              Motivated and passionate software engineer with a solid foundation in programming principles, acquired
              through intensive boot camp training and hands-on personal projects. Eager to leverage my skills in a
              dynamic entry-level role within the tech industry, where I can contribute to innovative solutions and
              continue to grow as a developer.
            </p>

            <DetailedInfo />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
