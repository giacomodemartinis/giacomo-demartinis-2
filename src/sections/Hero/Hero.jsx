import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import twitterLight from '../../assets/twitter-light.svg'
import twitterDark from '../../assets/twitter-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import CV from '../../assets/cv.pdf'
import {useTheme} from '../../common/ThemeContext'

function Hero() {
    const {theme, toggleTheme} = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const TwitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const GithubIcon = theme === 'light' ? githubLight : githubDark;
    const LinkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  return (
    <section id='hero' className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img 
                className={styles.Hero} 
                src={heroImg} 
                alt="Profile picture of Giacomo de Martinis" 
            />
            <img 
                className={styles.colorMode}  
                src={themeIcon} 
                alt='Color mode icon'
                onClick={toggleTheme}
            />
        </div>
        <div className={styles.info}>
            <h1>
                Giacomo 
                <br />
                de Martinis
            </h1>
            <h2>Product Manager</h2>
            <span>
               <a href="https://twitter.com/" target="_blank">
                    <img src={TwitterIcon} alt="Twitter icon" />
               </a>
               <a href="https://github.com/" target="_blank">
                    <img src={GithubIcon} alt="Github icon" />
               </a>
               <a href="https://linkedin.com/" target="_blank">
                    <img src={LinkedinIcon} alt="Linkedin icon" />
               </a>  
            </span>
            <p className={styles.description}>
                With a passion for building Mobile App Products
            </p>
            <a href={CV} download>
                <button className= 'hover'>
                    Resume
                </button>
            </a>
        </div>
    </section>
  );
}

export default Hero