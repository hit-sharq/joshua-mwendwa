import Link from "next/link"
import Image from "next/image"
import styles from "./project-card.module.css"
import { ExternalLink, Github, ArrowRight } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  details: string
  codeUrl: string
  demoUrl: string
  slug?: string
}

export function ProjectCard({ title, description, image, details, codeUrl, demoUrl, slug }: ProjectCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
      </div>
      <div className={styles.cardContent}>
        <Link href={slug ? `/projects/${slug}` : "#"} className={styles.imageContainer}>
          <Image src={image || "/placeholder.svg"} alt={title} width={600} height={400} className={styles.image} />
        </Link>
        <div className={styles.details}>
          <p className={styles.detailsText}>{details}</p>
        </div>
      </div>
      <div className={styles.cardFooter}>
        <div className={styles.externalLinks}>
          <Link href={codeUrl} target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
            <Github className={styles.icon} />
          </Link>
          <Link href={demoUrl} target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
            <ExternalLink className={styles.icon} />
          </Link>
        </div>
        {slug && (
          <Link href={`/projects/${slug}`} className={styles.detailsLink}>
            View Details
            <ArrowRight className={styles.arrowIcon} />
          </Link>
        )}
      </div>
    </div>
  )
}

