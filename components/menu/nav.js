import Link from 'next/link'
import styles from './nav.module.css'

export default function Menu() {

	const handleToggle = () => {
		const ul = document.querySelector("ul")
		ul.classList.toggle(`${styles.navActivate}`)
	}

	return(
    <nav >
			<div className={styles.logoContainer}>
					<img
						src="/images/logo.jpg"
						className={styles.logo}
						alt="Logo"
					/>
			</div>
			<ul class={styles.links}>
				<li>
						<Link href="/">
							Home
						</Link>
				</li>
				<li>
					<Link href="/about">
						About
					</Link>
				</li>
			</ul>
			<div className={styles.burguer} onClick={handleToggle}>
				<div className={styles.line1}></div>
				<div className={styles.line2}></div>
				<div className={styles.line3}></div>
			</div>
    </nav>
	)
}