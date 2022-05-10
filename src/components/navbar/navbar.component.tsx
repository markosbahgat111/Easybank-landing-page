import React, { HTMLProps, useState } from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from 'assets/images/logo.svg';

interface Props extends HTMLProps<HTMLAllCollection> { }

export const NavBar: React.FC<Props> = () => {
	const router = useRouter();
	const [showNav, setShowNav] = useState<boolean>(false);
	const handleNavElement = () => setShowNav((showNav) => !showNav);
  return (
    <nav className={styles.navbar}>
			<div className={styles.content}>
				<div className={styles.logo}>
					<Image src={logo} alt="easybank logo"/>
				</div>
			  <ul className={styles.menu_list} id={styles[`${showNav ? "active" : undefined}`]}>
					<ul className={styles.all_links}>
						<li>Home</li>  
						<li>About</li>  
						<li>Contact</li>  
						<li>Blog</li>  
						<li>Careers</li>  
					</ul>
					<div
						className={styles.icon}
						id={styles.cancel_btn}
						onClick={() => setShowNav((showNav) => !showNav)}>
						<i className="fas fa-times fa-lg"></i>
					</div>
					<ul className={styles.user_buttons}>
							<li onClick={handleNavElement}>
								<Link href="http://markosbahgat.com">
									<a className={styles["active"]}>Request Invite</a>
								</Link>
							</li>
					</ul>
				</ul>
				<div
					className={styles.icon}
					id={styles[`${showNav && "hide"}`]}
					onClick={() => setShowNav((showNav) => !showNav)}>
					<i className="fas fa-bars fa-lg"></i>
				</div>
			</div>
		</nav>
  )
}
