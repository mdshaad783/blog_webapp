import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs';

export default function FooterComp() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
            <div className="mt-5">
            <Link to ="/" className='self-center whitespace-nowrap 
            text-lg sm:text-xl font-semibold dark:text-white'>
              <span className='bg-gradient-to-tr from-gray-500 via-gray-700 to-black rounded-lg text-white py-2 px-4'>Shaad's</span>
              {" "}Blogify
            </Link>
            </div>
            <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
                <div>
                  <Footer.Title title='About' />
                  <Footer.LinkGroup col>
                    <Footer.Link
                      href='https://www.100jsprojects.com'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                        Portfolio
                    </Footer.Link>
                    <Footer.Link
                      href='/about'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                        Shaad's Blogify
                    </Footer.Link>
                   </Footer.LinkGroup>
                </div>
                <div>
                   <Footer.Title title='Follow us' />
                   <Footer.LinkGroup col>
                    <Footer.Link
                       href='https://github.com/mdshaad783'
                       target='_blank'
                       rel='noopener noreferrer'
                    >
                        GitHub
                    </Footer.Link>
                    <Footer.Link
                       href='https://www.linkedin.com/in/%F0%9D%97%A0%F0%9D%97%B1-%F0%9D%97%A6%F0%9D%97%B5%F0%9D%97%AE%F0%9D%97%AE%F0%9D%97%B1-%F0%9D%97%A5%F0%9D%97%B2%F0%9D%97%B5%F0%9D%97%AE%F0%9D%97%BB-6a8113230/'
                       target='_blank'
                       rel='noopener noreferrer'
                    >
                        LinkedIn
                    </Footer.Link>
                    </Footer.LinkGroup>
                </div>
                <div>
                   <Footer.Title title='Legal' />
                   <Footer.LinkGroup col>
                     <Footer.Link href='#'>Privacy Policy</Footer.Link>
                     <Footer.Link href='#'>Terms &amp; Conditions</Footer.Link>
                    </Footer.LinkGroup>
                </div>
            </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright 
            href="#"
            by="Shaad's blogify"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href='#' icon={BsFacebook}/>
            <Footer.Icon href='#' icon={BsInstagram}/>
            <Footer.Icon href='#' icon={BsTwitter}/>
            <Footer.Icon href='https://github.com/mdshaad783' icon={BsGithub}/>
            <Footer.Icon href='https://www.linkedin.com/in/%F0%9D%97%A0%F0%9D%97%B1-%F0%9D%97%A6%F0%9D%97%B5%F0%9D%97%AE%F0%9D%97%AE%F0%9D%97%B1-%F0%9D%97%A5%F0%9D%97%B2%F0%9D%97%B5%F0%9D%97%AE%F0%9D%97%BB-6a8113230/' icon={BsLinkedin}/>
          </div>
        </div>
      </div>
    </Footer>
  )
}
