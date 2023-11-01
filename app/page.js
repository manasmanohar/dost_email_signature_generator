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
        companyLogo: 'https://lh3.googleusercontent.com/d/1o65M7OvQhTGfYX3MRX2N0U4MVHvKifp1',
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
          alert('Copied to Clipboard');
          return generateCode(data);
        },
      });
    
      return () => {
        clipboard.destroy(); // Cleanup when the component unmounts
      };
    }, [data]);
  

    const generateCode = (userData) => {
        const template = `<!DOCTYPE html>
    <html lang="en">
    <head><title></title>
    </head>
    <body style="padding-bottom: 5px; font-size: 16px;">
        <div id="title" style="padding-bottom: 10px; line-height: 1.2;">
        ${userData.valediction ? userData.valediction : ''} <br> ${userData.name ? userData.name : ''} <br> ${
            userData.position ? userData.position : ''
        }
        </div>
        <table width="100%" cellspacing="0" cellpadding="0" style="border-collapse: collapse;">
            <tr>
                <td width=25%" style="border-right: 3px solid #727272;">
                    <a href="${userData.website ? userData.website : ''}">
                        <img src="${
                            userData.companyLogo ? userData.companyLogo : ''
                        }" width="120" alt="Company Logo" style="display: block;   margin-right: 28px;">
                    </a>
                </td>
                <td width="20">&nbsp;</td>
                <td>
                    <table cellspacing="0" cellpadding="0" style="border-collapse: collapse; ">
                    <tr>
    <td style="padding-bottom: 4px; display: flex; align-items: center;">
        <img src="https://lh3.googleusercontent.com/d/1iktF6_cWiEoz58fMHMCzS7RU3hUFITmn" alt="Email" width="18" style="margin-left: 3px; margin-right: 8px; vertical-align: middle;">
        <a href="mailto:${userData.email ? userData.email : ''}" style="text-decoration: none; color: #000;">${
            userData.email ? userData.email : ''
        }</a>
    </td>
</tr>
<tr>
    <td style="padding-bottom: 4px; display: flex; align-items: center;">
        <img src="https://lh3.googleusercontent.com/d/1cha0M_J8OgEFqkgiXeq-xVuLJsStm42Z" alt="Phone" width="18" style="margin-left: 3px; margin-right: 8px; vertical-align: middle;">
        <a href="tel:${userData.phone ? userData.phone : ''}" style="text-decoration: none; color: #000;">${
            userData.phone ? userData.phone : ''
        }</a>
    </td>
</tr>
<tr>
    <td style="padding-bottom: 4px; display: flex; align-items: center;">
        <img src="https://lh3.googleusercontent.com/d/1H-yQnpnYFjcmbxCDkHGd-d5PHPXg9Y4d" alt="Website" width="18" style="margin-left: 3px; margin-right: 8px; vertical-align: middle;">
        <a href="${userData.website ? userData.website : ''}" style="text-decoration: none; color: #000;">${
            userData.website ? userData.website : ''
        }</a>
    </td>
</tr>
        <td colspan="5">
        <table width="100%" cellspacing="0" cellpadding="0" style="border-collapse: collapse; margin-left:1px; margin-top:4px">
            <tr>
        <td >
                    <a href="${userData.facebook ? userData.facebook : ''}">
                        <img src="https://lh3.googleusercontent.com/d/1x6W1d0TvBITOJ9y6kTy61y_rw1CECtSZ" alt="Facebook" width="23">
                    </a>
                </td>
                <td >
                    <a href="${userData.instagram ? userData.instagram : ''}">
                        <img src="https://lh3.googleusercontent.com/d/10GawDpTY-lwC1C7ZhTpkxH0l8hfuf_X4" alt="Instagram" width="23">
                    </a>
                </td>
                <td >
                    <a href="${userData.twitter ? userData.twitter : ''}">
                        <img src="https://lh3.googleusercontent.com/d/1Gvmrl2SRhkAW5HHDTsx6B94Yvbsifyhb" alt="Twitter" width="18" style="margin-right: 2px;">
                    </a>
                </td>
                <td>
                    <a href="${userData.youtube ? userData.youtube : ''}">
                        <img src="https://ci3.googleusercontent.com/mail-sig/AIorK4x9QA7suXjuAX66Bb5jKPrEp2T3W3fe4baIFL37YqNddIPKl3Gk2FTQOj-YKkU1b7sc08t4W7Y" alt="YouTube" width="23" style="margin-top: 0.5px;">
                        </a>
                  </td>
                  <td>
                    <a href="${userData.linkedin ? userData.linkedin : ''}">
                    <img src="https://lh3.googleusercontent.com/d/1gULATZue8UUN4sHMveePXtvc5MvLvBKF"  alt="LinkedIn" width="23">
                    </a>
                    </td>
                </tr>
            </table>
            
        </td>
    </tr>
      </table>
      
  </td>
</tr>
</table>
        <img src="https://lh3.googleusercontent.com/d/1OhklmfN06gv2S2XoOZXUMHHcfqmavOYK" style="width: 100%; height: 2px; margin-top:12px" alt="">
    </body>
    </html>
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
                        Enter your details below
                    </p> 
            <InputForm data={data} setData={setData} />
            <div className='w-full mt-4 border border-green-600 bg-green-300 p-4 rounded-lg'><p className=''>✅ Tip: After entering your details, carefully select the Signature preview using the cursor and copy-paste it into your email client</p>
            </div>
          </div>

                <div className="lg:w-1/2 flex flex-col h-full">
                    {' '}
                    <h2 className="text-lg font-semibold mb-4 underline">Signature Preview</h2>{' '}
                    <div className="border border-gray-400 rounded-lg  p-4 lg:mb-6 ">
                    
                   <LivePreview data={data} generateCode={generateCode} />


                      </div>
            
                      <h2 className="text-lg font-semibold  underline">HTML Code</h2>
                    <CodePreview  data={data} generateCode={generateCode} />
                </div>
            </div>

            <div className="pt-12 flex items-center justify-center">
                {' '}
                <p className="underline underline-offset-2">
                    Built with ❤️ by <a href="https://www.manasmanohar.com"> Manas Manohar</a>
                </p>
            </div>
        </div>
    )
}

export default Home
