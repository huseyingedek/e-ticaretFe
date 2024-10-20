import React, { useEffect, useState } from 'react';
import { Form, Input } from 'antd';
import { useFetchApi } from '@/src/Hooks';
import { getCookie } from "cookies-next";

interface ProfileFormProps {
    formType: 'profile' | 'address' | 'orders';
    id: string | string[] | undefined;
}

interface Profile {
    _id?: string;
    name?: string;
    lastName?: string;
    email?: string;
    phone?: string;
}

const ProfileForm: React.FC<ProfileFormProps> = ({ formType, id }) => {
    const token = getCookie("token");
    const [getProfile, response] = useFetchApi<Profile>(`/api/users/profile/${id}`);
    const [profile, setProfile] = useState<Profile>({});

    useEffect(() => {
        if (id) {
            getProfile(undefined, { Authorization: `Bearer ${token}` });
        }
    }, [id, token]);

    useEffect(() => {
        if (response) {
            setProfile(response);
        }
    }, [response]);

    return (
        <div className='flex justify-center'>
            <div className='space-y-4 w-full max-w-md'>
                {formType === 'profile' && (
                    <Form layout="vertical" initialValues={profile} key={profile._id}>
                        <Form.Item label="Ad" name="name">
                            <Input 
                                value={profile.name || ''} 
                                onChange={(e) => setProfile({ ...profile, name: e.target.value })} 
                            />
                        </Form.Item>
                        <Form.Item label="Soyad" name="lastName">
                            <Input 
                                value={profile.lastName || ''} 
                                onChange={(e) => setProfile({ ...profile, lastName: e.target.value })} 
                            />
                        </Form.Item>
                        <Form.Item label="Email" name="email">
                            <Input 
                                type="email" 
                                value={profile.email || ''} 
                                onChange={(e) => setProfile({ ...profile, email: e.target.value })} 
                            />
                        </Form.Item>
                        <Form.Item label="Phone" name="phone">
                            <Input 
                                value={profile.phone || ''} 
                                onChange={(e) => setProfile({ ...profile, phone: e.target.value })} 
                            />
                        </Form.Item>
                    </Form>
                )}
                {/* Adres ve Siparişler formları buraya eklenecek */}
            </div>
        </div>
    );
};

export default ProfileForm;
