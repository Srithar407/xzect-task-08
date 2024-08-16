import Image from "next/image";
import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faCircleInfo, faDownload } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <body>
        <nav className={styles["nav-container"]} >
            <div className={styles["xzect-logo"]} >
                <Image src="https://www.xzect.com/assets/images/xzect-logo.svg" width={25} height={25} alt="Zxect" />
                <h3>Zxect Labs</h3>
            </div>
            <div className={styles.options}>
                <ul>
                    <li><FontAwesomeIcon icon={faCircleInfo} /></li>
                    <li><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></li>
                    <li>Get <span><FontAwesomeIcon icon={faDownload} /></span></li>
                </ul>
            </div>
        </nav>
        {/* <!-- section1 --> */}
        <section>
            <div className={styles["container"] + " " + styles["one"]} >
                <div className={styles.navi}>
                    <div className={styles["svg"] + " " + styles["nav-svg"]}>
                        {/* <!-- Logo --> */}
                        <a  href="index.html">
                            <svg width={30} height={30} xmlns="http://www.w3.org/2000/svg">
                                <g fill-rule="nonzero" fill="none">
                                    <g className={styles.circ} transform="translate(3,3)">
                                        <circle cx="5" cy="5" r="5"></circle>
                                        <circle cx="19" cy="5" r="5"></circle>
                                        <circle cx="5" cy="19" r="5"></circle>
                                        <circle cx="19" cy="19" r="5"></circle>
                                    </g>
                                    <g className={styles.circ2}>
                                        <circle cx="15" cy="5" r="5"></circle>
                                        <circle cx="25" cy="15" r="5"></circle>
                                        <circle cx="15" cy="25" r="5"></circle>
                                        <circle cx="5" cy="15" r="5"></circle>
                                    </g>
                                </g>
                            </svg>
                        </a>
                    </div>
                    <div className={styles["one-a"] + " " + styles["btns"]}>
                        <a className={styles.anker} href="#">
                            Get your card
                            <span >
                                <svg className={styles.arrow} width={12} height={10} xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 6.002h7.586L6.293 8.295a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.416l-4-4a1 1 0 0 0-1.414 1.416l2.293 2.293H1a1 1 0 1 0 0 2Z"></path>
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
                <div className={styles.content}>
                <h1 className={styles["add-text"]}>Create physical and virtual cards for your <span className={styles["add-animation"]}>
                        <svg  width="300" height="150" xmlns="http://www.w3.org/2000/svg">
                            <path d="M55.224 10.087c-13.986 3.38-25.552 7.614-33.97 12.438-4.171 2.412-7.508 4.953-9.953 7.58-2.395 2.628-3.807 5.332-4.21 8.058-.266 1.99.075 3.985 1.02 5.955.922 1.973 2.37 3.919 4.327 5.819 7.028 6.749 20.696 12.657 39.108 16.904 18.475 4.28 40.791 6.693 63.89 6.91 20.527.186 40.83-1.353 58.737-4.452 11.396-1.964 21.73-4.463 30.631-7.407 8.905-2.941 16.508-6.232 22.611-9.788 3.663-2.222 4.978-1.73 3.59.491-1.13 1.509-2.83 2.971-5.067 4.357-3.235 1.976-7.254 3.82-11.962 5.49-4.686 1.628-9.745 3.15-15.139 4.553a273.749 273.749 0 0 1-17.309 3.752 339.58 339.58 0 0 1-19.111 2.822c-3.367.35-6.676.738-10.087 1.025-3.412.286-6.868.546-10.339.75-13.955.815-28.266.87-42.283.165-13.996-.735-27.452-2.236-39.729-4.435-14.867-2.672-27.78-6.263-37.927-10.548-10.21-4.343-17.115-9.34-20.204-14.618C.15 43.028-.38 40.095.268 37.176c.295-1.462.868-2.917 1.713-4.357.883-1.432 2.027-2.847 3.427-4.239 2.819-2.783 6.622-5.463 11.342-7.99 4.626-2.528 10.101-4.9 16.335-7.074C48.423 8.116 68.15 4.072 90.24 1.802A371.99 371.99 0 0 1 115.924.135c54.806-1.437 105.87 8.691 124.34 24.662 1.911 1.728 3.392 3.498 4.431 5.295 1.352 2.388 1.655 4.82.901 7.234-.223 1.092-1.189 2.158-2.836 3.127-.493.309-1.076.603-1.742.88-.916.272-1.27-.27-1.344-1.462-.074-1.193 0-3.05-.429-5.409-.722-3.525-3.213-6.994-7.384-10.284-4.32-3.334-10.299-6.44-17.723-9.206-7.488-2.813-16.364-5.247-26.304-7.211-9.952-1.996-20.87-3.493-32.344-4.434-17.147-1.405-35.144-1.505-52.444-.292-8.673.62-17.094 1.537-25.108 2.732-7.997 1.207-15.556 2.672-22.552 4.37l-.162-.05Z" fill="#2DD4BF" fill-rule="nonzero"></path>
                        </svg>
                        business
                    </span></h1>
                <p className={styles.text}>Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</p>
    
                {/* <!-- Buttons --> */}
                <div className={styles["btn-container"]}>
                    <div className={styles["one-a"] + " " + styles["btns"] + " " + styles["one-a-1"]}>
                        <a className={styles.anker} href="#">
                            Get your card
                            <span >
                                <svg className={styles.arrow} width={12} height={10} xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 6.002h7.586L6.293 8.295a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.416l-4-4a1 1 0 0 0-1.414 1.416l2.293 2.293H1a1 1 0 1 0 0 2Z"></path>
                                </svg>
                            </span>
                        </a>
                    </div>
                    <div className={styles["one-ab"] + " " + styles["btns"] + " " + styles["one-ab-1"]}>
                        <a className={styles.anker} href="#">Read documentation</a>
                    </div>
                </div>
                
            </div>
            <div className={styles.card}>
                <Image className={styles["img-animation"]} src="https://preview.cruip.com/fintech/images/hero-illustration.svg" width={960} height={960} alt="illustrat" />
                <Image className={styles["card-one"]} src="https://preview.cruip.com/fintech/images/hero-image.png" width={548} height={545} alt="credit card" />
            </div>
        </div>
        </section>
    <div className={styles["cont-container"] + " " + styles["container"]}>
        <div className={styles.cards}>
            <div> 
                <svg width={56} height={56} xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id="a">
                            <stop stop-color="#2563EB" offset="0%"></stop>
                            <stop stop-color="#3B82F6" offset="100%"></stop>
                        </linearGradient>
                    </defs>
                    <g fill-rule="nonzero" fill="none">
                        <path d="M43.443 49.745a1.028 1.028 0 0 1-.262-.019l-23.5-4.9a1 1 0 0 1-.775-1.186l6.2-29.352a1.006 1.006 0 0 1 1.182-.773l23.42 4.885a1 1 0 0 1 .776 1.183l-6.12 29.37a1 1 0 0 1-.921.795v-.003Z" fill="#7DD3FC"></path>
                        <path d="M25 32H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h24a1 1 0 0 1 1 1v30a1 1 0 0 1-1 1ZM8 15.25l3.5 4 6.5-6.5-1-.75-5.5 4.25-2.5-2-1 1Z" fill="url(#a)"  transform="translate(6 6)"></path>
                    </g>
                </svg>
                <h2>Create custom cards</h2>
                <p>Create cards that work exactly as you configured them. Make real-time decisions on charges and spendings.</p>
            </div>
            <div>
                <svg width={56} height={56} xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id="a">
                            <stop stop-color="#2563EB" offset="0%"></stop>
                            <stop stop-color="#3B82F6" offset="100%"></stop>
                        </linearGradient>
                    </defs>
                    <g fill-rule="nonzero" fill="none">
                        <path d="m19.93 36.705-9.769-20.03c-.208-.426.026-.966.523-1.209L39.446 1.438c.497-.242 1.066-.094 1.274.332l9.77 20.03c.207.427-.026.967-.523 1.21L21.205 37.036c-.497.243-1.067.094-1.274-.332Zm2.395-22.466-7.19 3.507.876 1.798 7.19-3.507-.876-1.798Z" fill="#7DD3FC"></path>
                        <path d="M32 46V12h5.143c.474 0 .857.447.857 1v32c0 .553-.383 1-.857 1H32Zm-2 0H14.857c-.474 0-.857-.447-.857-1V13c0-.553.383-1 .857-1H30v34ZM18 34v8h2v-8h-2Z" fill="url(#a)"  transform="rotate(64 19.372 32.782)"></path>
                    </g>
                </svg>
                <h2>Create custom cards</h2>
                <p>Create cards that work exactly as you configured them. Make real-time decisions on charges and spendings.</p></div>
            <div>
                <svg width={56} height={56} xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id="a">
                            <stop stop-color="#2563EB" offset="0%"></stop>
                            <stop stop-color="#3B82F6" offset="100%"></stop>
                        </linearGradient>
                    </defs>
                    <g fill-rule="nonzero" fill="none">
                        <path d="M30.22 38.065h-26a1 1 0 0 1-1-1v-32a1 1 0 0 1 1-1h26a1 1 0 0 1 1 1v32a1 1 0 0 1-1 1Zm-19-24v2h7v-2h-7Zm3 6v2h10v-2h-10Zm-3 6v2h7v-2h-7Z" fill="#7DD3FC"></path>
                        <path d="m51.585 50.536-25.984.907a1 1 0 0 1-1.034-.964l-1.117-31.98a1 1 0 0 1 .965-1.035l25.984-.907a1 1 0 0 1 1.034.964l1.117 31.98a1 1 0 0 1-.965 1.035ZM40.337 38.061l3.832-4.11a.843.843 0 0 0-.042-1.192l-4.11-3.833-1.15 1.235 3.492 3.256-3.257 3.493 1.235 1.15Zm-4.97.173L36.518 37l-3.492-3.257 3.256-3.492-1.234-1.151-3.832 4.11a.843.843 0 0 0 .041 1.192l4.11 3.832Z" fill="url(#a)" ></path>
                    </g>
                </svg>
                <h2>Create custom cards</h2>
                <p>Create cards that work exactly as you configured them. Make real-time decisions on charges and spendings.</p></div>
        </div>
        
    </div>
    {/* <!-- section2 --> */}
    <section>
        <div className={styles["container"] + " " + styles["two"]}>
            <div className={styles["content-two"]}>
                <h1>Build a flexible card program for your business needs</h1>
            <p className={styles.text}>Creating a flexible card program for business needs involves developing a system that can manage various types of cards, such as membership cards, loyalty cards, gift cards, or access cards.</p>
            <div className={styles["btn-container"]}>
                <div className={styles["one-a"] + " " + styles["btns"] + " " + styles["two-a"]}>
                    <a className={styles.anker} href="#">
                        Get your card
                        <span >
                            <svg className={styles.arrow} width={12} height={10} xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 6.002h7.586L6.293 8.295a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.416l-4-4a1 1 0 0 0-1.414 1.416l2.293 2.293H1a1 1 0 1 0 0 2Z"></path>
                            </svg>
                        </span>
                    </a>
                </div>
            </div>
            </div>
            <div className={styles.ttwo}>
                <Image src="./profile.jpg" width={40} height={40} alt="profile" />
                <p className={styles.text}>“ We know the card market very well and this product provides the speed, flexible account model and API-first approach that no one else can. ”</p>
            </div>
            <div className={styles["two-card"]}>
                <Image className={styles["card-two-animation"]} src="https://preview.cruip.com/fintech/images/cards-illustration.svg" fill={true} alt="animation" />
                <Image className={styles["card-two"]} src="https://preview.cruip.com/fintech/images/features-02.png" fill={true} alt="cards" />
            </div>
        </div>
    </section>
    {/* <!-- section3 --> */}
    <section>
        <div className={styles["container"] + " " + styles["three"] + " " + styles["tcolor"]} aria-hidden="false">
            <div className={styles["cont-three"]}>
                <div className={styles["contant-container"]}>
                    <Image className={styles["three-img"]} src="https://preview.cruip.com/fintech/images/features-03.png" alt="connect" width={450} height={450} />
                    <div className={styles["content-two"] + " " + styles["message"]}>
                        <h1>Spend your money everywhere,pay anyone effortlessly</h1>
                        <p className={styles.text}>Effortlessly spend your money anywhere and pay anyone with ease, enhancing your financial freedom and ultimate convenience. Experience seamless transactions and unparalleled flexibility in managing your finances anytime, anywhere.</p>
                        <div className={styles["btn-container"]}>
                            <div className={styles["one-a"] + " " + styles["btns"] + " " + styles["two-a"]}>
                                <a className={styles.anker} href="#">
                                    Get your card
                                    <span >
                                        <svg className={styles.arrow} width={12} height={10} xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 6.002h7.586L6.293 8.295a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.416l-4-4a1 1 0 0 0-1.414 1.416l2.293 2.293H1a1 1 0 1 0 0 2Z"></path>
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className={styles["ttwo"]+" "+styles["tthree"]}>
                            <Image src="./profile1.png" width={40} height={40} alt="profile" />
                            <p className={styles["text"] + " " + styles["three-p"]}>“We know the card market very well and this product provides the speed, flexible account model and API-first approach that no one else can. ”</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- section4 --> */}
    <section>
        <div className={styles["container"] + " " + styles["four"] + " " + styles["fcolor"]}>
            <div className={styles["four-contant"]}>
                <div className={styles["content-two"] + " " + styles["message"] + " " + styles["cont-one"]}>
                    <h1>Get cashback rewards on your favorite brands</h1>
                    <p>Earn cashback rewards on your favorite brands and enjoy significant savings. Shop smart and maximize your spending power with every purchase, gaining more value from your favorite stores.</p>
                    <div className={styles.stores}>
                        <div className={styles["p-store"]}>
                            <h5 className={styles["four-lhead"]}>Physical Stores</h5>
                            <ul className={styles["four-ul"]}>
                                <li className={styles["four-li"]}>
                                    <svg className={styles["cont-svg"]} width={20} height={20} xmlns="http://www.w3.org/2000/svg">
                                        <circle className={styles.circle} cx="10" cy="10" r="10"></circle>
                                        <path className={styles.tick} d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"></path>
                                    </svg>
                                    <span>Starbucks</span>
                                </li>
                                <li className={styles["four-li"]}>
                                    <svg className={styles["cont-svg"]} width={20} height={20} xmlns="http://www.w3.org/2000/svg">
                                        <circle className={styles.circle} cx="10" cy="10" r="10"></circle>
                                        <path className={styles.tick} d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"></path>
                                    </svg>
                                    <span>Tesco</span>
                                </li>
                                <li className={styles["four-li"]}>
                                    <svg className={styles["cont-svg"]} width={20} height={20} xmlns="http://www.w3.org/2000/svg">
                                        <circle className={styles.circle} cx="10" cy="10" r="10"></circle>
                                        <path className={styles.tick} d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"></path>
                                    </svg>
                                    <span>American Eagle</span>
                                </li>
                                <li className={styles["four-li"]}>
                                    <svg className={styles["cont-svg"]} width={20} height={20} xmlns="http://www.w3.org/2000/svg">
                                        <circle className={styles.circle} cx="10" cy="10" r="10"></circle>
                                        <path className={styles.tick} d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"></path>
                                    </svg>
                                    <span>Bershka</span>
                                </li>
                                <li className={styles["four-li"]}>
                                    <svg className={styles["cont-svg"]} width={20} height={20} xmlns="http://www.w3.org/2000/svg">
                                        <circle className={styles.circle} cx="10" cy="10" r="10"></circle>
                                        <path className={styles.tick} d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"></path>
                                    </svg>
                                    <span>Sainsbury's</span>
                                </li>
                                <li className={styles["four-li"]}>
                                    <svg className={styles["cont-svg"]} width={20} height={20} xmlns="http://www.w3.org/2000/svg">
                                        <circle className={styles.circle} cx="10" cy="10" r="10"></circle>
                                        <path className={styles.tick} d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"></path>
                                    </svg>
                                    <span>Marks &amp; Spencer</span>
                                </li>
                                <li className={styles["four-li"]}>
                                    <svg className={styles["cont-svg"]} width={20} height={20} xmlns="http://www.w3.org/2000/svg">
                                        <circle className={styles.circle} cx="10" cy="10" r="10"></circle>
                                        <path className={styles.tick} d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"></path>
                                    </svg>
                                    <span>Primark</span>
                                </li>
                                <li className={styles["four-li"]}>
                                    <svg className={styles["cont-svg"]} width={20} height={20} xmlns="http://www.w3.org/2000/svg">
                                        <circle className={styles.circle} cx="10" cy="10" r="10"></circle>
                                        <path className={styles.tick} d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"></path>
                                    </svg>
                                    <span>SportsDirect</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h5 className={styles["four-lhead"]}>Online Stores</h5>
                            <ul className={styles["four-ul"]}>
                                <li className={styles["four-li"]}>
                                    <svg className={styles["cont-svg"]} width={20} height={20} xmlns="http://www.w3.org/2000/svg">
                                        <circle className={styles.circle} cx="10" cy="10" r="10"></circle>
                                        <path className={styles.tick} d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"></path>
                                    </svg>
                                    <span>Amazon Prime</span>
                                </li>
                                <li className={styles["four-li"]}>
                                    <svg className={styles["cont-svg"]} width={20} height={20} xmlns="http://www.w3.org/2000/svg">
                                        <circle className={styles.circle} cx="10" cy="10" r="10"></circle>
                                        <path className={styles.tick} d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"></path>
                                    </svg>
                                    <span>Universal Store</span>
                                </li>
                                <li className={styles["four-li"]}>
                                    <svg className={styles["cont-svg"]} width={20} height={20} xmlns="http://www.w3.org/2000/svg">
                                        <circle className={styles.circle} cx="10" cy="10" r="10"></circle>
                                        <path className={styles.tick} d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"></path>
                                    </svg>
                                    <span>Apple One</span>
                                </li>
                                <li className={styles["four-li"]}>
                                    <svg className={styles["cont-svg"]} width={20} height={20} xmlns="http://www.w3.org/2000/svg">
                                        <circle className={styles.circle} cx="10" cy="10" r="10"></circle>
                                        <path className={styles.tick} d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"></path>
                                    </svg>
                                    <span>Booking.com</span>
                                </li>
                                <li className={styles["four-li"]}>
                                    <svg className={styles["cont-svg"]} width={20} height={20} xmlns="http://www.w3.org/2000/svg">
                                        <circle className={styles.circle} cx="10" cy="10" r="10"></circle>
                                        <path className={styles.tick} d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"></path>
                                    </svg>
                                    <span>Netflix</span>
                                </li>
                                <li className={styles["four-li"]}>
                                    <svg className={styles["cont-svg"]} width={20} height={20} xmlns="http://www.w3.org/2000/svg">
                                        <circle className={styles.circle} cx="10" cy="10" r="10"></circle>
                                        <path className={styles.tick} d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"></path>
                                    </svg>
                                    <span>Deliveroo</span>
                                </li>
                                <li className={styles["four-li"]}>
                                    <svg className={styles["cont-svg"]} width={20} height={20} xmlns="http://www.w3.org/2000/svg">
                                        <circle className={styles.circle} cx="10" cy="10" r="10"></circle>
                                        <path className={styles.tick} d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"></path>
                                    </svg>
                                    <span>Spotify</span>
                                </li>
                                <li className={styles["four-li"]}>
                                    <svg className={styles["cont-svg"]} width={20} height={20} xmlns="http://www.w3.org/2000/svg">
                                        <circle className={styles.circle} cx="10" cy="10" r="10"></circle>
                                        <path className={styles.tick} d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"></path>
                                    </svg>
                                    <span>Well Made Clothes</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles["btn-container"]}>
                        <div className={styles["one-a"] + " " + styles["btns"] + " " + styles["two-a"] + " " + styles["four-btn"]}>
                            <a className={styles.anker} href="#">
                                Get your card
                                <span >
                                    <svg className={styles.arrow} width={12} height={10} xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 6.002h7.586L6.293 8.295a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.416l-4-4a1 1 0 0 0-1.414 1.416l2.293 2.293H1a1 1 0 1 0 0 2Z"></path>
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles["cont-image"]}>
                    <Image src="https://preview.cruip.com/fintech/images/features-04.png" width={500} height={600} alt="Stores" />
                </div>
            </div>
        </div>
    </section>
    {/* <!-- section5 --> */}
    <section>
        <div className={styles["container"] + " " + styles["five"] + " " + styles["five-color"]}>
            <div className={styles["content-two"] + " " + styles["five-msg"]}>
                <h1>Get started in minutes and connect all your accounts in one place</h1>
                <p>Quickly connect all your accounts in one place and get started in minutes with ease and efficiency, making account management simpler and more streamlined than ever before.</p>
            </div>
            <div className={styles["five-img"]}>
                <div >
                    <Image src="https://preview.cruip.com/fintech/images/logos.png" alt="icons" className={styles["five-img-div"]} width={700} height={300} />
                </div>
            </div>
            <div className={styles["five-card-msg"]} data-aos="fade-up">
                <div className={styles["five-card-msg-cont"]}>
                    <div className={styles["cont-circle"]}>
                        <div className={styles["number"]}>1</div>
                    </div>
                    <h4 className={styles["cont-title"]}>Download the app</h4>
                    <p className={styles["cont-text"]}>Create cards that work exactly as you configured them. Make real-time decisions on charges and spendings.</p>
                </div>
            
                <div className={styles["five-card-msg-cont"]}>
                    <div className={styles["cont-circle"]}>
                        <div className={styles["number"]}>2</div>
                    </div>
                    <h4 className={styles["cont-title"]}>Request your card</h4>
                    <p className={styles["cont-text"]}>Create cards that work exactly as you configured them. Make real-time decisions on charges and spendings.</p>
                </div>
        
                <div className={styles["five-card-msg-cont"]}>
                    <div className={styles["cont-circle"]}>
                        <div className={styles["number"]}>3</div>
                    </div>
                    <h4 className={styles["cont-title"]}>Connect all your account</h4>
                    <p className={styles["cont-text"]}>Create cards that work exactly as you configured them. Make real-time decisions on charges and spendings.</p>
                </div>
            
            </div>
        </div>
    </section>
    {/* <!-- section6 --> */}
    <section>
        <div className={styles["container"] + " " + styles["six"]}>
            <div className={styles.six1}>
                <div className={styles["six-cont1"]}>
                    <div className={styles["swiper-wrapper"]}>

                        {/* <!-- Card #1 --> */}
                        <div className={styles["swiper-slide"] + " " + styles["slide1"]}>
                            <div className={styles["slide-img"]}>
                                <Image src="https://preview.cruip.com/fintech/images/testimonial-01.jpg" alt="Testiomonial 01" width={380} height={180} />
                            </div>
                            <div className={styles["slide-cont"]}>
                                <Image className={styles.sign} src="https://preview.cruip.com/fintech/images/testimonial-sign-01.svg" width={105} height={46} alt="Testiomonial sign 01" />
                                <p className={styles["slide-text"]}>“ This card is awesome. The app lets me link foreign cards with a new one which makes everything 100 times easier. Like Apple Pay, online shopping without useless phone confirmation. I wish I knew this earlier. ”</p>
                                <div className={styles["slide-role"]}>
                                    <span className={styles["slide-name"]}>Elisa Koeppel</span> - <span className="slide-position">CEO &amp; Co-Founder</span>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Card #2 --> */}
                        <div className={styles["swiper-slide"] + " " + styles["slide2"]} >
                            <div className={styles["slide-img"]}>
                              <Image src="https://preview.cruip.com/fintech/images/testimonial-02.jpg" alt="Testiomonial 02" width={380} height={180} />
                            </div>
                            <div className={styles["slide-cont"]}>
                                <Image className={styles.sign} src="https://preview.cruip.com/fintech/images/testimonial-sign-02.svg" width={105} height={46} alt="Testiomonial sign 02" />
                                <p className={styles["slide-text"]}>“ This card allows us to achieve compliance with minimal effort, spend practically no time on payments-related customer support, and keep the user experience on our platform. “</p>
                                <div className={styles["slide-role"]}>
                                    <span className={styles["slide-name"]}>Maria Gress</span> - <span className="slide-position">CEO &amp; Co-Founder</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.point}>
                            <a className={styles.first}></a>
                            <a className={styles.second}></a>
                        </div>
                    </div>
                </div>
                <div className={styles["six-cont2"]}>
                    <h2 className={styles["six-cont2-head"]} >Compliance built card for businesses and professionals</h2>
                    <p className={styles["cont-text t2"]} >Compliance built card for businesses and professionals simplifies processes, ensuring adherence to regulations and standards, enhancing operational efficiency, and providing a user-friendly compliance management tool.</p>
                    <ul className={styles["cont-list"]} >
                        <li className={styles["list-li"]}>
                            <svg className={styles["list-svg"]} width={20} height={20} xmlns="http://www.w3.org/2000/svg">
                                <circle className={styles.circle} cx="10" cy="10" r="10"></circle>
                                <path className={styles.tick} d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"></path>
                            </svg>
                            <span>Identity verifications</span>
                        </li>
                        <li className={styles["list-li"]}>
                            <svg className={styles["list-svg"]} width={20} height={20} xmlns="http://www.w3.org/2000/svg">
                                <circle className={styles.circle} cx="10" cy="10" r="10"></circle>
                                <path className={styles.tick} d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"></path>
                            </svg>
                            <span>Secure credit card data tokenization</span>
                        </li>
                        <li className={styles["list-li"]}>
                            <svg className={styles["list-svg"]} width={20} height={20} xmlns="http://www.w3.org/2000/svg">
                                <circle className={styles.circle} cx="10" cy="10" r="10"></circle>
                                <path className={styles.tick} d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"></path>
                            </svg>
                            <span>Online and mobile payments</span>
                        </li>
                        <li className={styles["list-li"]}>
                            <svg className={styles["list-svg"]} width={20} height={20} xmlns="http://www.w3.org/2000/svg">
                                <circle className={styles.circle} cx="10" cy="10" r="10"></circle>
                                <path className={styles.tick} d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z"></path>
                            </svg>
                            <span>IGlobal regulations and compliance</span>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    </section>
    {/* <!-- section7 --> */}
    <section>
        <div className={styles["container"] + " " + styles["seven"]}>
            <div className={styles["seven-cont"]}>
                <h1>Get the only custom super card you'll ever need</h1>
                <p>Get the unique custom super card that fulfills all your needs, offering convenience and functionality in one.</p>
            </div>
            <div className={styles["member-card"]}>
                <div className={styles["member-cards"]}>
                    <div className={styles["card-img"]}>
                    <h2>Starter</h2>
                    <Image src="https://preview.cruip.com/fintech/images/pricing-01.png" width={300} height={180} alt="membership" />
                    </div>
                    <div className={styles["card-sub"]}>
                        <h2>$0/m</h2>
                        <div className={styles["btns"] + " " + styles["card-btn"]}>
                            <a className={styles.anker} href="#">Get Starter</a>
                        </div>
                    </div>
                    <div className={styles["mem-head"]}>
                        Features include
                    </div>
                    <ul className={styles["member-ul"]}>
                        <li className={styles["member-li"]}>
                            <svg className={styles["member-svg"]} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                            </svg>
                            <span>Contactless payments</span>
                        </li>
                        <li className={styles["member-li"]}>
                            <svg className={styles["member-svg"]} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                            </svg>
                            <span>Mobile payments</span>
                        </li>
                        <li className={styles["member-li"]}>
                            <svg className={styles["member-svg"]} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                            </svg>
                            <span>Extra card (optional)</span>
                        </li>
                        <li className={styles["member-li"]}>
                            <svg className={styles["member-svg"]} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                            </svg>
                            <span>Free payments worldwide</span>
                        </li>
                        <li className={styles["member-li"]}>
                            <svg className={styles["member-svg"]} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                            </svg>
                            <span>Free domestic ATM withdrawals</span>
                        </li>
                    </ul>
                </div>
                <div className={styles["member-cards"] + " " + styles["pop-card"]}>
                    <div className={styles["btns"] + " " + styles["card-btn"] + " " + styles["popular"]}>
                        <a>popular</a>
                    </div>
                    <div className={styles["card-img"]}>
                        <h2>Smart</h2>
                        <Image src="https://preview.cruip.com/fintech/images/pricing-02.png" width={300} height={180} alt="membership" />
                        </div>
                        <div className={styles["card-sub"]}>
                            <h2>$12/m</h2>
                            <div className={styles["btns"] + " " + styles["card-btn"] + " " + styles["card-btns"]}>
                                <a className={styles.anker} href="#">Get Smart</a>
                            </div>
                        </div>
                        <div className={styles["mem-head"]}>
                            Everything in Starter, plus
                        </div>
                        <ul className={styles["member-ul"]}>
                            <li className={styles["member-li"]}>
                                <svg className={styles["member-svg"]} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                                </svg>
                                <span>Cashback</span>
                            </li>
                            <li className={styles["member-li"]}>
                                <svg className={styles["member-svg"]} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                                </svg>
                                <span>Travel insurance</span>
                            </li>
                            <li className={styles["member-li"]}>
                                <svg className={styles["member-svg"]} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                                </svg>
                                <span>3 Extra cards (optional)</span>
                            </li>
                            <li className={styles["member-li"]}>
                                <svg className={styles["member-svg"]} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                                </svg>
                                <span>Flight insurance</span>
                            </li>
                            <li className={styles["member-li"]}>
                                <svg className={styles["member-svg"]} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                                </svg>
                                <span>Two-factor authentication</span>
                            </li>
                            <li className={styles["member-li"]}>
                                <svg className={styles["member-svg"]} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                                </svg>
                                <span>Chatbot and in-app support</span>
                            </li>
                            <li className={styles["member-li"]}>
                                <svg className={styles["member-svg"]} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                                </svg>
                                <span>Discounted domestic transfers</span>
                            </li>
                        </ul>
                </div>
                <div className={styles["member-cards"]}>
                    <div className={styles["card-img"]}>
                        <h2>You</h2>
                        <Image src="https://preview.cruip.com/fintech/images/pricing-03.png" width={300} height={180} alt="membership" />
                        </div>
                        <div className={styles["card-sub"]}>
                            <h2>$24/m</h2>
                            <div className={styles["btns"] + " " + styles["card-btn"]}>
                                <a className={styles.anker} href="#">Get You</a>
                            </div>
                        </div>
                        <div className={styles["mem-head"]}>
                            Everything in Smart, plus
                        </div>
                        <ul className={styles["member-ul"]}>
                            <li className={styles["member-li"]}>
                                <svg className={styles["member-svg"]} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                                </svg>
                                <span>Split and settle bills</span>
                            </li>
                            <li className={styles["member-li"]}>
                                <svg className={styles["member-svg"]} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                                </svg>
                                <span>Money management</span>
                            </li>
                            <li className={styles["member-li"]}>
                                <svg className={styles["member-svg"]} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                                </svg>
                                <span>5 Extra cards (optional)</span>
                            </li>
                            <li className={styles["member-li"]}>
                                <svg className={styles["member-svg"]} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                                </svg>
                                <span>Finance tracking</span>
                            </li>
                            <li className={styles["member-li"]}>
                                <svg className={styles["member-svg"]} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                                </svg>
                                <span>Free and international domestic ATM withdrawals</span>
                            </li>
                        </ul>
                </div>
                <div className={styles["member-cards"]}>
                    <div className={styles["card-img"]}>
                        <h2>Black</h2>
                        <Image src="https://preview.cruip.com/fintech/images/pricing-04.png" width={300} height={180} alt="membership" />
                     </div>
                        <div className={styles["card-sub"]}>
                            <h2>$49/m</h2>
                            <div className={styles["btns"] + " " + styles["card-btn"]}>
                                <a className={styles.anker} href="#">Get Black</a>
                            </div>
                        </div>
                        <div className={styles["mem-head"]}>
                            Everything in You, plus
                        </div>
                        <ul className={styles["member-ul"]}>
                            <li className={styles["member-li"]}>
                                <svg className={styles["member-svg"]} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                                </svg>
                                <span>Manage subscriptions</span>
                            </li>
                            <li className={styles["member-li"]}>
                                <svg className={styles["member-svg"]} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                                </svg>
                                <span>Savings vaults</span>
                            </li>
                            <li className={styles["member-li"]}>
                                <svg className={styles["member-svg"]} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                                </svg>
                                <span>Commission-free stock trade</span>
                            </li>
                            <li className={styles["member-li"]}>
                                <svg className={styles["member-svg"]} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                                </svg>
                                <span>Crypto and commodities</span>
                            </li>
                            <li className={styles["member-li"]}>
                                <svg className={styles["member-svg"]} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                                </svg>
                                <span>Free foreign exchange</span>
                            </li>
                        </ul>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- sectionFAQ --> */}
     <section>
        <div className={styles["container"] + " " + styles["faq"]}>
            <h1 className={styles["faq-head"]}>FAQs</h1>
            <div className={styles["query-cont"]}>
                <div className={styles.query1}>
                    <div className={styles.query}>
                        <h2>How can I add money to my account?</h2>
                        <p>To add money, log in to your account, navigate to "Add Funds," select the debit card option, enter your card details and the desired amount, and confirm the transaction. You should receive a confirmation message.
                        </p>
                    </div>
                    <div className={styles.query}>
                        <h2>How is my document data stored/secured?</h2>
                        <p>We secure your document data with advanced encryption, both in transit and at rest. Multi-factor authentication, regular security audits, and access controls ensure protection. We comply with industry standards and regulations to maintain the highest level of data security and privacy.</p>
                    </div>
                    <div className={styles.query}>
                        <h2>I do not want to pay now, how can I proceed?</h2>
                        <p>you can proceed without paying now by selecting the "Pay Later" option at checkout. This allows you to complete your purchase and defer the payment to a later date, within the terms specified.</p>
                    </div>
                </div>
                <div className={styles.query2}>
                    <div className={styles.query}>
                        <h2>How do I get started with card payments?</h2>
                        <p>o get started with card payments, sign up for an account, link your debit or credit card by entering your card details, verify your card through a small transaction or OTP, and you're ready to make payments securely.</p>
                    </div>
                    <div className={styles.query}>
                        <h2>Can I get a standard card for free?</h2>
                        <p>Yes, as a payment service provider, we offer a standard card for free when you sign up. Simply create an account, and the card will be issued to you without any additional charges.</p>
                    </div>
                    <div className={styles.query}>
                        <h2>I don't have the required documents, how can I proceed?</h2>
                        <p>If you don't have the required documents, please contact our support team for assistance. We may have alternative verification methods or options available to help you proceed with setting up your account or accessing our services.</p>
                    </div>
                </div>
            </div>
        </div>
     </section>
     {/* <!-- footer --> */}
    <section>
        <div className={styles["container"] + " " + styles["foot"]}>
            <div className={styles["card-add"]}>
                <div className={styles["foot-add"]}>
                    <p>What are you waiting for?</p>
                    <h1>Get the only custom super card</h1>
                </div>
                <div className={styles["btn-container"]}>
                    <div className={styles["one-a"] + " " + styles["btns"] + " " + styles["btn-color"] + " " + styles["one-a-1"]}>
                        <a className={styles.anker} href="#">
                            Get your card
                            <span >
                                <svg className={styles.arrow} width={12} height={10} xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 6.002h7.586L6.293 8.295a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.416l-4-4a1 1 0 0 0-1.414 1.416l2.293 2.293H1a1 1 0 1 0 0 2Z"></path>
                                </svg>
                            </span>
                        </a>
                    </div>
                    <div className={styles["one-ab"] + " " + styles["btns"] + " " + styles["foot-btn"] + " " + styles["one-a-1"]}>
                        <a className={styles.anker} href="#">Get in touch</a>
                    </div>
                </div>
            </div>
            <div className={styles.about}>
                <div className={styles.aboutflex}>
                    <div className={styles["svg"] + " " + styles["foot-svg"]}>
                        {/* <!-- Logo --> */}
                        <a  href="index.html" >
                            <svg width={30} height={30} xmlns="http://www.w3.org/2000/svg">
                                <g fill-rule="nonzero" fill="none">
                                    <g className={styles.circ1} transform="translate(3 3)">
                                        <circle cx="5" cy="5" r="5"></circle>
                                        <circle cx="19" cy="5" r="5"></circle>
                                        <circle cx="5" cy="19" r="5"></circle>
                                        <circle cx="19" cy="19" r="5"></circle>
                                    </g>
                                    <g className={styles.circ2}>
                                        <circle cx="15" cy="5" r="5"></circle>
                                        <circle cx="25" cy="15" r="5"></circle>
                                        <circle cx="15" cy="25" r="5"></circle>
                                        <circle cx="5" cy="15" r="5"></circle>
                                    </g>
                                </g>
                            </svg>
                        </a>
                    </div>
                    <div className={styles["about-links"]}>
                        <div className={styles["foot-card"]}>
                            <h6 className={styles["f-card-head"]}>Essentials</h6>
                            <ul className={styles["f-ul"]}>
                                <li>
                                    <a className={styles["f-li"]} href="#0">Payments</a>
                                </li>
                                <li>
                                    <a className={styles["f-li"]} href="#0">Budgeting and analytics</a>
                                </li>
                                <li>
                                    <a className={styles["f-li"]} href="#0">Open banking</a>
                                </li>
                                <li>
                                    <a className={styles["f-li"]} href="#0">Pockets</a>
                                </li>
                                <li>
                                    <a className={styles["f-li"]} href="#0">Subscriptions</a>
                                </li>
                            </ul> 
                        </div>
            
                        {/* <!-- 3rd block --> */}
                        <div className={styles["foot-card"]}>
                            <h6 className={styles["f-card-head"]}>Company</h6>
                            <ul className={styles["f-ul"]}>
                                <li>
                                    <a className={styles["f-li"]} href="#0">About us</a>
                                </li>
                                <li>
                                    <a className={styles["f-li"]} href="#0">Diversity / Inclusion</a>
                                </li>
                                <li>
                                    <a className={styles["f-li"]} href="#0">Sustainability</a>
                                </li>
                                <li>
                                    <a className={styles["f-li"]} href="#0">Code of conduct</a>
                                </li>
                                <li>
                                    <a className={styles["f-li"]} href="#0">Financial statements</a>
                                </li>
                            </ul>
                        </div>
            
                        {/* <!-- 4th block --> */}
                        <div className={styles["foot-card"]}>
                            <h6 className={styles["f-card-head"]}>Lifestyle</h6>
                            <ul className={styles["f-ul"]}>
                                <li>
                                    <a className={styles["f-li"]} href="#0">International products</a>
                                </li>
                                <li>
                                    <a className={styles["f-li"]} href="#0">Currency exchange</a>
                                </li>
                                <li>
                                    <a className={styles["f-li"]} href="#0">Lounge &amp; Smart delay</a>
                                </li>
                            </ul>
                        </div>
            
                        {/* <!-- 5th block --> */}
                        <div className={styles["foot-card"]}>
                            <h6 className={styles["f-card-head"]}>Company</h6>
                            <ul className={styles["f-ul"]}>
                                <li>
                                    <a className={styles["f-li"]} href="#0">Send us an email</a>
                                </li>
                                <li>
                                    <a className={styles["f-li"]} href="#0">Facebook</a>
                                </li>
                                <li>
                                    <a className={styles["f-li"]} href="#0">Twitter</a>
                                </li>
                                <li>
                                    <a className={styles["f-li"]} href="#0">Instagram</a>
                                </li>
                                <li>
                                    <a className={styles["f-li"]} href="#0">TikTok</a>
                                </li>
                            </ul>
                        </div>
                </div>
                </div>
                
                <div className={styles["foot-text"]}>
                    <p >
                        If you would like to find out more about which entity you receive services from please click <a  href="#0">here</a> If you have any other questions, please reach out to us via the in-app chat. Custom Bank is a bank established in the Republic of Ireland. Custom Bank is licensed by the European Central Bank and regulated by the Bank of Ireland. Cusom Bank provides credit, payment, current account and demand deposit account services.
                    </p>
                </div>
            </div>
            <Image className={styles["foot-animation"]} src="https://preview.cruip.com/fintech/images/footer-illustration.svg" width={1500} height={350} alt="animation" />
        </div>
    </section>
</body>
  );
}
