import React from 'react'

const advisoryMembers = [
    {
        name: 'Dr. Jayashri Shetty',
        title: 'Head of Department, MBA at MITE',
        image: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_500/https://mite.ac.in/wp-content/uploads/2023/12/Dr.-Jayashri-500x500.jpg',
        bio: `Dr. Jayashri Shetty is the Associate Professor and Head of the Department of Management Studies at MITE. With over 35 years of academic experience, her interests span finance, corporate accounting, investment management, business law, and corporate ethics. She has presented at numerous conferences and published in international journals on topics like CSR and mutual fund portfolio management. She holds a PhD in Finance and Accounting, MPhil, and MBA from reputed universities, and has been with MITE for over 8 years.`,
    },
    {
        name: 'Professor Prashanth C M',
        title: 'Principal, MITE',
        image: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_500/https://mite.ac.in/wp-content/uploads/2023/04/MITE_Principa_Prashanth_web-500x500.jpg',
        bio: `A distinguished academician with 26 years of experience, Prof. Prashanth holds a PhD in Computer Science & Engineering from NITK Surathkal and a Master's from VIT Vellore. He's a member of ISTE, SSI, IAENG, and CSI, with 23+ publications, 1 Indian patent, and extensive international academic exposure. His research interests include Embedded Systems, IoT, Social Computing, and HPC.`,
    },
    {
        name: 'Dr. Amith Donald Menezes',
        title: 'Assistant Professor, MBA at MITE',
        image: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_150/https://mite.ac.in/wp-content/uploads/2023/12/Amith-Menezes-e1743222312488-150x150.jpg',
        bio: `Dr. Menezes brings 12 years of banking experience and 12 years in academia. He's worked in operations at leading private banks and served as HOD at a top MBA institution. His research spans 50+ conferences, and he teaches Accounting for Managers, Management Accounting, and Financial Management. He holds a PhD in Banking and Finance, MBA, M.Com, and NET (Management).`,
    },
    {
        name: 'Dr. Sheekant G Naik',
        title: 'Assistant Professor, MBA at MITE',
        image: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_298/https://mite.ac.in/wp-content/uploads/2023/12/Shreekant-G-Naik-e1743222431138-298x300.jpg',
        bio: `Dr. Naik has 12 years in Sales & Marketing and 10+ years in academia. He was Area Sales Manager for a global pharma company and has published in Scopus-indexed journals. He teaches Marketing Management, CRM, and Strategic Brand Management. He holds a PhD in Retail Marketing and an MBA in Marketing and HR.`,
    },
    {
        name: 'Mr. Pradeep Kumar B R',
        title: 'Senior Assistant Professor, MBA at MITE',
        image: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_500/https://mite.ac.in/wp-content/uploads/2023/12/Pradeep-Kumar-B-R-500x500.jpg',
        bio: `With 15 years in B2B sales and 5 years in academia, Mr. Pradeep has led technical sales across 15+ countries. His interests include industrial product sales, key account management, and HRM. He holds a Mechanical Engineering degree and an MBA in Marketing and HR, and has been with MITE for over 5 years.`,
    },
    {
        name: 'Ms. Verina DSouza',
        title: 'Assistant Professor, MBA at MITE',
        image: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_150/https://mite.ac.in/wp-content/uploads/2023/12/Verina-e1743222940136-150x150.jpg',
        bio: `Ms. Verina has 16 years of professional experience, including 9 years in corporate roles with global MNCs and The British Council, Kuwait. Her interests include Tourism, Talent Acquisition, Retailing, and T&D. She's published research and is pursuing a PhD in Medical Tourism. She holds an MBA in HR and Marketing.`,
    },
    {
        name: 'Ms. Ramya Bhardwaj B S',
        title: 'Assistant Professor, MBA at MITE',
        image: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_150/https://mite.ac.in/wp-content/uploads/2023/11/Ramya-B-S-150x150.jpg',
        bio: `Ms. Ramya has 5+ years of academic experience and has published in international journals on Banking and Innovation. She teaches Corporate Valuation, Financial Derivatives, HR Analytics, and more. Her interests include Finance, Accounting, and Marketing.`,
    },
    {
        name: 'Dr. Venkatesh Amin',
        title: 'Director, MDP at Srinivas University',
        image: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_150/https://mite.ac.in/wp-content/uploads/2024/08/Venkatesh-150x150.png',
        bio: `Dr. Amin has 25+ years of corporate experience and is a trainer for Kanara Chamber associations. He's conducted 100+ strategy workshops and served as HOD at Shree Devi Institute. He holds a PhD in Marketing and Consumer Behaviour and an MBA from Andhra University.`,
    },
    {
        name: 'Mr. Prabhoda K S',
        title: 'Manager, HR & Admin at Cardolite',
        image: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_150/https://mite.ac.in/wp-content/uploads/2024/08/Prabodha-150x150.png',
        bio: `Mr. Prabhoda has 17 years in HR, including 11 at Cardolite and 5 at Mangalore SEZ. He's skilled in labor relations, HRIS, and project management. He holds a DPHRM from XLRI, a personnel management certification from SIMS, and a law degree from SDM Law College.`,
    },
    {
        name: 'Mr. Sheraz H Shaikh',
        title: 'Entrepreneur & Alumni Representative',
        image: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_500/https://mite.ac.in/wp-content/uploads/2024/07/MBA_2010_Sheraz-500x500.jpeg',
        bio: `Mr. Sheraz has worked as a financial analyst in Dubai and now runs Sunshine Traders in Moodbidri. He's an authorized dealer for Samsung and Pidilite, and is pursuing CFE from Frankfurt School of Finance. He holds an MBA in Finance from MITE.`,
    },
];

const AdvisoryBoard = () => {
    return (
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">Department Advisory Board</h2>
                <p className="text-lg text-gray-600 text-center mb-4">
                    The Department Advisory Board for the Department of Management Studies for the year 2023–24 consists of:
                </p>
                <p className="text-md text-gray-500 text-center mb-12">
                    This board supports the department in formulating strategic action plans and guiding its academic and professional growth.
                </p>

                <div className="space-y-16">
                    {advisoryMembers.map((member, index) => (
                        <div
                            key={index}
                            className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                }`}
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-32 h-32 rounded-full object-cover shadow-md"
                            />
                            <div className="max-w-xl">
                                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                                <p className="text-sm text-gray-500 mb-2">{member.title}</p>
                                <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">{member.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AdvisoryBoard