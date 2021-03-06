import React, { useState, useEffect, useContext } from 'react'
import './BlogScreenStyle.css'
import { Icon } from '@iconify/react';
import _ from "lodash";
import BlogCard from './BlogCard';
import manImage from '../../assets/images/work.png'
import Button from '../../Components/Button';
import Header from '../../Components/Header';
import AppContext from '../../Store/Context';


function BlogScreen() {

    const [visible, setVisible] = useState(false)
    const appCtx = useContext(AppContext)
    const showContact = appCtx.showContactPage
    const showNav = appCtx.showNav
    const blurStyle = showContact || showNav ? 'blur-effect' : ''


    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        });
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className={blurStyle}>
            <Header />
            <div className='blog-screen'>
                <div className='blog-bottom'>
                    <h3>Articles and News</h3>
                    <small>Blog</small>
                    <i id='arrow-icon'><Icon icon="bi:arrow-right" color="#d105d4" inline={true} /></i>
                </div>
                <div className='blog-header-section'>
                    <span className='blog-section-text'>
                        <h3>Latest From Our Blog</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi beatae voluptate officiis, repudiandae reiciendis fuga alias.</p>
                    </span>
                    <input placeholder='Search Here' className='blog-search' />
                </div>
                <section className='blog-card-top'>
                    <ul>
                        {_.times(6, (i) => (
                            <li key={i}>
                                <BlogCard
                                    // blogImage = {manImage}
                                    blogHeader=''
                                    blogText=''
                                >
                                    <img id='blog-image' src={manImage} alt={manImage} />
                                    <h3>12 popup use cases to increase conversions</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi beatae voluptate officiis, repudiandae reiciendis fuga aliasLorem ipsum dolor</p>
                                    <small className='blog-card-bottom'>read more</small>
                                </BlogCard>
                            </li>
                        ))}
                    </ul>
                </section>

                <div className='blog-header-section'>
                    <span className='blog-section-text'>
                        <h3>Latest From Our Blog</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi beatae voluptate officiis, repudiandae reiciendis fuga alias.</p>
                    </span>
                </div>
                <section className='blog-card-top'>
                    <ul>
                        {_.times(3, (i) => (
                            <li key={i}>
                                <BlogCard>
                                    <h3>12 popup use cases to increase conversions</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi beatae voluptate officiis, repudiandae reiciendis fuga aliasLorem ipsum dolor</p>
                                    <small className='blog-card-bottom'>read more</small>
                                </BlogCard>
                            </li>
                        ))}
                    </ul>

                </section>
                <div className='blog-btn'>
                    <Button >Load more</Button>
                </div>
                <div className='blog-bottom'>
                    <h3>What to know about metrics ?</h3>
                    <p>Learn who we are and what drives us</p>
                    <small>Contact Us</small>
                    <i id='arrow-icon'><Icon icon="bi:arrow-right" color="#d105d4" inline={true} /></i>
                    <div className='blog-buttom-effect'></div>
                </div>

            </div>
            {visible && <div id='arrow-up-icon' onClick={scrollToTop}>
                <Icon icon="bi:arrow-up" />
            </div>}
        </div>

    )
}

export default BlogScreen