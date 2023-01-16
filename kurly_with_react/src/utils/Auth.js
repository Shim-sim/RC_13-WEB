import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
const Auth = () => {
  const REST_API_KEY = 'bfad3e783b00c7d48a85544f666984de';
  const REDIRECT_URI = 'http://localhost:3000/oauth/kakao/token';
  const CLIENT_SECRET = `ipDehsKYM36D58GNb5tzaAbXMCHszuxe`;

  const code = new URL(window.location.href).searchParams.get('code');
  const navigate = useNavigate();

  useEffect(() => {
    const getToken = async () => {
      const body = qs.stringify({
        grant_type: 'authorization_code',
        client_id: REST_API_KEY,
        redirect_uri: REDIRECT_URI,
        code: code,
        client_secret: CLIENT_SECRET,
      });

      const res = await axios.post('https://kauth.kakao.com/oauth/token', body);
      if (res.status === 200) {
        window.Kakao.init(REST_API_KEY);
        window.Kakao.Auth.setAccessToken(res.data.access_token);
        console.log('여기까지 성공해서 옮겨짐');
        navigate('/profile');
      }
    };
    getToken();
  }, []);

  return null;
};
export default Auth;
