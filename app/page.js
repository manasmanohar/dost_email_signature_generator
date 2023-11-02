'use client'

import React, { useState, useEffect } from 'react'
import InputForm from 'components/InputForm'
import LivePreview from 'components/LivePreview'
import CodePreview from 'components/CodePreview'
import Clipboard from 'clipboard'

const Home = () => {
    const [data, setData] = useState({
        valediction: 'Best,',
        name: 'Your Name',
        position: 'Your Position',
        email: 'name@dosteducation.com',
        phone: '+9112345467890',
        website: 'https://www.dosteducation.com',
        linkedin: 'https://www.linkedin.com/company/17914642/',
        twitter: 'https://twitter.com/DostEducation',
        instagram: 'https://www.instagram.com/dosteducation/',
        youtube: 'https://www.youtube.com/c/DostEducation',
        facebook: 'https://www.facebook.com/dosteducation/',
    })

  
    useEffect(() => {
      const clipboard = new Clipboard('#copy-button', {
        text: function (trigger) {
          alert('HTML Code Copied to Clipboard');
          return generateCode(data);
        },
      });
    
      return () => {
        clipboard.destroy();
      };
    }, [data]);
  
  
    const generateCode = (userData) => {
        const template = `<table width="100%" cellspacing="0" cellpadding="0" style="border-collapse: collapse;">
        <tr>
            <td colspan="2">
            ${userData.valediction ? userData.valediction : ''} <br> ${userData.name ? userData.name : ''} <br> ${userData.position ? userData.position : ''}
            </td>
        </tr>
        <tr>
            <td width="26%" style="border-right: 3px solid #727272;">
                <a target="_blank" href="${userData.website ? userData.website : ''}">
                    <img src="https://lh3.googleusercontent.com/d/1o65M7OvQhTGfYX3MRX2N0U4MVHvKifp1" width="120" alt="Company Logo" style="display: block; margin-right: 28px;">
                </a>
            </td>
            <td  style="padding-left:10px;">
            
                <table cellspacing="0"  cellpadding="0" style="margin-right:5px; border-collapse: collapse;">
                
                    <tr>
                        <td style="padding-bottom: 4px; display: flex; align-items: center;">
                            <img src="https://lh3.googleusercontent.com/d/1iktF6_cWiEoz58fMHMCzS7RU3hUFITmn" alt="Email" width="18" style="margin-left: 3px; margin-right: 8px; vertical-align: middle;">
                            <a target="_blank" href="mailto:${userData.email ? userData.email : ''}" style="text-decoration: none; color: #000;">${userData.email ? userData.email : ''}</a>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding-bottom: 4px; display: flex; align-items: center;">
                            <img src="https://lh3.googleusercontent.com/d/1cha0M_J8OgEFqkgiXeq-xVuLJsStm42Z" alt="Phone" width="18" style="margin-left: 3px; margin-right: 8px; vertical-align: middle;">
                            <a target="_blank" href="tel:${userData.phone ? userData.phone : ''}" style="text-decoration: none; color: #000;">${userData.phone ? userData.phone : ''}</a>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding-bottom: 4px; display: flex; align-items: center;">
                            <img src="https://lh3.googleusercontent.com/d/1H-yQnpnYFjcmbxCDkHGd-d5PHPXg9Y4d" alt="Website" width="18" style="margin-left: 3px; margin-right: 8px; vertical-align: middle;">
                            <a target="_blank" href="${userData.website ? userData.website : ''}" style="text-decoration: none; color: #000;">${userData.website ? userData.website : ''}</a>
                        </td>
                    </tr>

                    <td colspan="5">
                    <table width="100%" cellspacing="0" cellpadding="0" style="border-collapse: collapse; margin-left:1px; margin-top:4px">
                        <tr>
                    <td >
                                <a target="_blank" href="https://www.facebook.com/dosteducation/">
                                    <img src="https://lh3.googleusercontent.com/d/1x6W1d0TvBITOJ9y6kTy61y_rw1CECtSZ" alt="Facebook" width="23">
                                </a>
                            </td>
                            <td >
                                <a target="_blank" href="https://www.instagram.com/dosteducation/">
                                    <img src="https://lh3.googleusercontent.com/d/10GawDpTY-lwC1C7ZhTpkxH0l8hfuf_X4" alt="Instagram" width="23">
                                </a>
                            </td>
                            <td >
                                <a target="_blank" href="https://twitter.com/DostEducation">
                                    <img src="https://lh3.googleusercontent.com/d/1Gvmrl2SRhkAW5HHDTsx6B94Yvbsifyhb" alt="Twitter" width="18" style="margin-right: 2px;">
                                </a>
                            </td>
                            <td>
                                <a target="_blank" href="https://www.youtube.com/c/DostEducation">
                                    <img src="https://ci3.googleusercontent.com/mail-sig/AIorK4x9QA7suXjuAX66Bb5jKPrEp2T3W3fe4baIFL37YqNddIPKl3Gk2FTQOj-YKkU1b7sc08t4W7Y" alt="YouTube" width="23" style="margin-top: 0.5px;">
                                    </a>
                              </td>
                              <td>
                                <a target="_blank" href="https://www.linkedin.com/company/17914642/">
                                <img src="https://lh3.googleusercontent.com/d/1gULATZue8UUN4sHMveePXtvc5MvLvBKF"  alt="LinkedIn" width="23">
                                </a>
                                </td>
                            </tr>
                        </table>
                  
                </table>
            </td>
        </tr>
        <tr>
            <td colspan="2">
                <img src="https://lh3.googleusercontent.com/d/1OhklmfN06gv2S2XoOZXUMHHcfqmavOYK" style="width: 100%; height: 2px; margin-top: 12px" alt="">
            </td>
        </tr>
    </table>
          
    `

        return template
    }
 
    return (
        <div className=" h-full mt-4  color-black">
            <div className="">
                <h2 className="text-3xl font-semibold mb-4  "> ✍️ MailSig </h2>
                <h3 className="text-xl font-semibold mb-4 ">Email Signature Generator for Dost DostEducation</h3>
            </div>
              
            <div className="flex flex-col lg:flex-row">
              
          <div className="lg:w-1/2   pr-4 border border-gray-500 rounded-lg p-4 mr-8">
          <p className="text-lg underline font-semibold mb-2 ">
                       Settings
                    </p> 
            <InputForm data={data} setData={setData} />
            <div className='w-full mt-4 border border-green-600 bg-green-300 p-4 rounded-lg dark:text-black'><p className=''>✅ Tip: After entering your details, click on Copy Signature button and paste the signature in your Email Settings. </p>
            </div>
          </div>

                <div className="lg:w-1/2 flex flex-col h-full">
                    {' '}
                    <h2 className="text-lg font-semibold mb-4 underline">Signature Preview</h2>{' '}
                    <div className="">
                    
                   <LivePreview data={data} generateCode={generateCode} />


                      </div>
            
                      <h2 className="text-lg font-semibold  underline">HTML Code</h2>
                    <CodePreview  data={data} generateCode={generateCode} />
                </div>
            </div>

            <div className="pt-12 mb-10 flex items-center justify-center">
                {' '}
                <p className="underline underline-offset-2">
                    Built with ❤️ by <a target="_blank" href="https://www.manasmanohar.com"> Manas Manohar</a>
                </p>
            </div>
        </div>
    )
}

export default Home
