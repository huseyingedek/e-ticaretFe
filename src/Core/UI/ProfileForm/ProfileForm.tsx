import React, { useEffect, useState } from 'react';
import { Form, Input, DatePicker } from 'antd';
import { useFetchApi } from '@/src/Hooks';
import { getCookie } from "cookies-next";

interface ProfileFormProps {
    formType: 'profile' | 'address' | 'orders';
    id: string | string[] | undefined;
}

const ProfileForm: React.FC<ProfileFormProps> = ({ formType, id }) => {
    const token = getCookie("token");
    const [getProfile, response] = useFetchApi(`/api/users/profile/` + id);
    const [profile, setProfile] = useState<any>({});

    interface ApiResponse {
        profile?: {
            name?: string;
            lastName?: string;
            email?: string;
            phone?: string;
            addressLine1?: string;
            addressLine2?: string;
            city?: string;
            postalCode?: string;
        };
    }

    useEffect(() => {
        if (id) {
            getProfile(undefined, { Authorization: `Bearer ${token}` });
        }
    }, [id]);

    useEffect(() => {
        if (response) {
            setProfile(response);
        }
    }, [response]);

    const handleChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setProfile({
            ...profile,
            [field]: event.target.value,
        });
    };

    return (
        <div className='flex justify-center'>
            <div className='space-y-4 w-full max-w-md'>
                {formType === 'profile' && (
                    <Form layout="vertical" initialValues={profile} key={profile._id} >
                        <Form.Item label="Ad" name="name">
                            <Input value={profile?.name || ''} onChange={handleChange('name')}  />
                        </Form.Item>
                        <Form.Item label="Soyad" name="lastName">
                            <Input value={profile?.lastName || ''} onChange={handleChange('lastName')} />
                        </Form.Item>
                        <Form.Item label="Email" name="email">
                            <Input type="email" value={profile?.email || ''} onChange={handleChange('email')} />
                        </Form.Item>
                        <Form.Item label="Phone" name="phone">
                            <Input type="phone" value={profile?.phone || ''} onChange={handleChange('phone')} />
                        </Form.Item>
                    </Form>
                )}

                {formType === 'address' && (
                    <>
                        <h2 className='text-2xl font-semibold'>Adres</h2>
                        <Form layout="vertical">
                            <Form.Item label="Adres Satırı 1" name="addressLine1">
                                <Input value={profile?.addressLine1 || ''} onChange={handleChange('addressLine1')} />
                            </Form.Item>
                            <Form.Item label="Adres Satırı 2" name="addressLine2">
                                <Input value={profile?.addressLine2 || ''} onChange={handleChange('addressLine2')} />
                            </Form.Item>
                            <Form.Item label="Şehir" name="city">
                                <Input value={profile?.city || ''} onChange={handleChange('city')} />
                            </Form.Item>
                            <Form.Item label="Posta Kodu" name="postalCode">
                                <Input value={profile?.postalCode || ''} onChange={handleChange('postalCode')} />
                            </Form.Item>
                        </Form>
                    </>
                )}

                {formType === 'orders' && (
                    <>
                        <h2 className='text-2xl font-semibold'>Siparişler</h2>
                        <Form layout="vertical">
                            <Form.Item label="Sipariş Numarası" name="orderNumber">
                                <Input />
                            </Form.Item>
                            <Form.Item label="Ürün Adı" name="productName">
                                <Input />
                            </Form.Item>
                            <Form.Item label="Sipariş Tarihi" name="orderDate">
                                <DatePicker className='w-full' />
                            </Form.Item>
                        </Form>
                    </>
                )}
            </div>
        </div>
    );
};

export default ProfileForm;