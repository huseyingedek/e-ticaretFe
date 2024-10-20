import React, { useEffect } from 'react';
import { Form, Input, DatePicker } from 'antd';
import { useFetchApi } from '@/src/Hooks';

interface ProfileFormProps {
    formType: 'profile' | 'address' | 'orders';
    userId: string | string[] | undefined;
}

const ProfileForm: React.FC<ProfileFormProps> = ({ formType, userId }) => {
    const [getProfile, response] = useFetchApi(`/api/users/profile/${userId}`);
    let profile = response?.profile;

    useEffect(() => {
        if (userId) {
            getProfile();
        }
    }, [userId]);

    return (
        <div className='flex justify-center'>
            <div className='space-y-4 w-full max-w-md'>
                {formType === 'profile' && (
                    <Form layout="vertical">
                        <Form.Item label="Ad" name="firstName">
                            <Input defaultValue={profile?.firstName} />
                        </Form.Item>
                        <Form.Item label="Soyad" name="lastName">
                            <Input defaultValue={profile?.lastName} />
                        </Form.Item>
                        <Form.Item label="Email" name="email">
                            <Input type="email" defaultValue={profile?.email} />
                        </Form.Item>
                        <Form.Item label="Phone" name="phone">
                            <Input type="phone" defaultValue={profile?.phone} />
                        </Form.Item>
                    </Form>
                )}

                {formType === 'address' && (
                    <>
                        <h2 className='text-2xl font-semibold'>Adres</h2>
                        <Form layout="vertical">
                            <Form.Item label="Adres Satırı 1" name="addressLine1">
                                <Input defaultValue={profile?.addressLine1} />
                            </Form.Item>
                            <Form.Item label="Adres Satırı 2" name="addressLine2">
                                <Input defaultValue={profile?.addressLine2} />
                            </Form.Item>
                            <Form.Item label="Şehir" name="city">
                                <Input defaultValue={profile?.city} />
                            </Form.Item>
                            <Form.Item label="Posta Kodu" name="postalCode">
                                <Input defaultValue={profile?.postalCode} />
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