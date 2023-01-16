import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Profile = () => {
  const [user_id, setUserId] = useState();
  const [profileImage, setProfileImage] = useState();
  const navigate = useNavigate();

  const getProfile = async () => {
    try {
      // Kakao SDK API를 이용해 사용자 정보 획득
      let data = await window.Kakao.API.request({
        url: '/v2/user/me',
      });
      // 사용자 정보 변수에 저장
      setUserId(data.properties.nickname);
      localStorage.setItem('id', data.properties.nickname);
      window.location.reload();
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getProfile();
  }, []);
  return (
    <div style={{ height: '500px', textAlign: 'center' }}>
      <h1>{user_id} 님의 로그인을 축하합니다!</h1>
    </div>
  );
};
export default Profile;
