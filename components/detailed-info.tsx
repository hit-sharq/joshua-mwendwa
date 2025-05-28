import styles from "./detailed-info.module.css"
import { SocialLinks } from "./social-links"

export function DetailedInfo() {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Personal Information</h3>
        <ul className={styles.infoList}>
          <li>
            <strong>Name:</strong> Joshua Mwendwa
          </li>
          <li>
            <strong>Phone:</strong> +2547-94-773-452
          </li>
          <li>
            <strong>Email:</strong> officialjoshuamwendwa@gmail.com
          </li>
          <li>
            <strong>Location:</strong> Nairobi, Kenya
          </li>
          <li>
            <strong>Nationality:</strong> Kenyan
          </li>
        </ul>

        <div className={styles.socialSection}>
          <h4 className={styles.socialTitle}>Social Media</h4>
          <SocialLinks showLabels={true} variant="outline" />
        </div>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Education</h3>
        <div className={styles.educationItem}>
          <h4>Moringa School - Nairobi, Kenya</h4>
          <p className={styles.date}>June 2024 - November 2024</p>
          <p>Software Engineering Boot Camp</p>
          <p>
            Completed an intensive 25-weeks boot camp covering JavaScript, Python, HTML/CSS, Node.js, Agile
            methodologies, and UI/UX design.
          </p>
        </div>
        <div className={styles.educationItem}>
          <h4>Kasikeu Boys' High School</h4>
          <p className={styles.date}>February 2019 - December 2022</p>
          <p>Kenya Certificate of Secondary Education</p>
        </div>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Professional Experience</h3>
        <div className={styles.experienceItem}>
          <h4>Sales Assistant</h4>
          <p className={styles.organization}>Gemark International Kenya Ltd</p>
          <p className={styles.date}>January 2023 - April 2024</p>
          <p>
            Worked as sales person at Gemark International Limited. Got exposed to dealing with customers, learned
            selling skills and communication skills.
          </p>
        </div>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Technical Skills</h3>
        <ul className={styles.skillsList}>
          <li>
            <strong>Programming Languages:</strong> Python, JavaScript, HTML, CSS
          </li>
          <li>
            <strong>Frameworks:</strong> Node.js, React, Express
          </li>
          <li>
            <strong>Databases:</strong> Flask, PostgreSQL
          </li>
          <li>
            <strong>Tools:</strong> Git, GitHub, VS Code, Postman
          </li>
          <li>
            <strong>Methodologies:</strong> Scrum
          </li>
        </ul>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Key Strengths</h3>
        <div className={styles.strengthItem}>
          <h4>Leadership Skills</h4>
          <p>
            Demonstrated strong leadership abilities throughout educational journey, serving as Head Boy in primary
            school and a class prefect in secondary school. Taken on various leadership roles in bootcamp settings.
          </p>
        </div>
        <div className={styles.strengthItem}>
          <h4>Communication Skills</h4>
          <p>
            Excellent communicator who effectively conveys information both verbally and in writing. A keen listener who
            gives prompt feedback.
          </p>
        </div>
        <div className={styles.strengthItem}>
          <h4>Teamwork</h4>
          <p>
            Strongly committed to fostering a collaborative team environment. Communicates with confidence, adapts
            quickly to changing circumstances, and demonstrates reliability.
          </p>
        </div>
        <div className={styles.strengthItem}>
          <h4>Planning and Organizing</h4>
          <p>
            Possesses refined planning and organizational skills that enable balancing work, supporting team, and
            managing responsibilities in a timely and professional manner.
          </p>
        </div>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Referees</h3>
        <div className={styles.refereeItem}>
          <h4>Mathias Mwololo</h4>
          <p className={styles.organization}>Manager Gemark International Ltd</p>
          <p>
            <strong>Email:</strong> mathiasmwololo01@gmail.com
          </p>
          <p>
            <strong>Phone:</strong> +254-727-205-718
          </p>
        </div>
        <div className={styles.refereeItem}>
          <h4>Lilian Ndanu</h4>
          <p className={styles.organization}>Administrator Forbes Global Kenya</p>
          <p>
            <strong>Email:</strong> Ndanulilian54@gmail.com
          </p>
          <p>
            <strong>Phone:</strong> +254-794-378-010
          </p>
        </div>
        <div className={styles.refereeItem}>
          <h4>Euniter Mumbua</h4>
          <p className={styles.organization}>Administrator Majid Al Futtaim</p>
          <p>
            <strong>Email:</strong> eunitermumbua4@gmail.com
          </p>
          <p>
            <strong>Phone:</strong> +254-726-930-726
          </p>
        </div>
      </div>
    </div>
  )
}

