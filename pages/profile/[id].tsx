import React, { useState, useEffect } from 'react';
import { Tabs } from 'antd';
import { UserOutlined, HomeOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { ProfileForm } from '@/src/Core';
import { useRouter } from 'next/router';

type TabPosition = 'left' | 'right' | 'top' | 'bottom';

const Profile: React.FC = () => {
    const [tabPosition, setTabPosition] = useState<TabPosition>('left');
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setTabPosition('top');
            } else {
                setTabPosition('left');
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='mt-24 mb-20 px-4 md:px-20 lg:px-40 xl:px-96'>
            <style jsx>{`
                @media (max-width: 768px) {
                    .tab-text {
                        display: none;
                    }
                    .tab-icon {
                        font-size: 24px;
                    }
                }
                .custom-tabs .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
                    color: #38b2ac !important; /* text-teal-400 */
                }
            `}</style>
            <h1 className='text-4xl text-teal-500 font-semibold text-center mb-8'>PROFİL BİLGİLERİ</h1>
            <Tabs
                className="custom-tabs"
                tabPosition={tabPosition}
                type="card"
                items={[
                    {
                        label: (
                            <span className="tab-label">
                                <UserOutlined className="tab-icon" />
                                <span className="tab-text ">Profil</span>
                            </span>
                        ),
                        key: '1',
                        children: <ProfileForm formType="profile" id={id} />,
                    },
                    {
                        label: (
                            <span className="tab-label">
                                <HomeOutlined className="tab-icon" />
                                <span className="tab-text">Adres</span>
                            </span>
                        ),
                        key: '2',
                        children: <ProfileForm formType="address" id={id} />,
                    },
                    {
                        label: (
                            <span className="tab-label">
                                <ShoppingCartOutlined className="tab-icon" />
                                <span className="tab-text">Siparişler</span>
                            </span>
                        ),
                        key: '3',
                        children: <ProfileForm formType="orders" id={id} />,
                    },
                ]}
            />
        </div>
    );
};

export default Profile;