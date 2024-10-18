"use strict";
import axios from "axios";
import { setCookie, deleteCookie, getCookie } from "cookies-next";
import { loginUserRedux, logoutUserRedux } from "@/src/Redux/actions";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { message } from "antd";

interface LoginResponse {
  token: string;
  refreshToken: string;
  expiresIn: string;
  message: string;
}

interface RegisterResponse {
  message: string;
}

interface ErrorResponse {
  response?: {
    data?: {
      errors?: string[];
      message?: string;
    };
  };
}

const useAuth = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const login = async (submitData: { email: string; password: string }) => {
    try {
      const response = await axios.post<LoginResponse>(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, submitData);
      const { token, refreshToken, expiresIn } = response.data;

      if (token && refreshToken && expiresIn) {
        const maxAge = Number(expiresIn.replace('h', '')) * 3600;
        if (isNaN(maxAge)) {
          throw new Error("Invalid expiresIn value");
        }

        setCookie("token", token, {
          maxAge,
        });

        setCookie("refreshToken", refreshToken, {
          maxAge,
        });

        dispatch(loginUserRedux({ token, refreshToken }));
        message.success(response.data.message);
        router.push("/home");
      } else {
        message.error("Kullanıcı bilgileri alınamadı.");
      }
    } catch (error) {
      const errorMessage = (error as ErrorResponse).response?.data?.errors?.[0] || (error as ErrorResponse).response?.data?.message || "Bilgileri kontrol ederek tekrar deneyiniz";
      message.error(errorMessage);
      console.error("Login error:", error);
    }
  };

  const register = async (submitData: { email: string; password: string; confirmPassword: string; name: string; lastName: string; phone: string; }) => {
    try {
      const response = await axios.post<RegisterResponse>(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`, submitData);
      message.success(response.data.message);
      router.push("/");

    } catch (error) {
      const errorMessage = (error as ErrorResponse).response?.data?.errors?.[0] || (error as ErrorResponse).response?.data?.message || "Bilgileri kontrol ederek tekrar deneyiniz";
      message.error(errorMessage);
      console.error("Register error:", error);
    }
  };

  const logout = async () => {
    try {
      const token = getCookie("token");
      if (!token) {
        message.error("Token bulunamadı.");
        return;
      }

      const response = await axios.post<{ message: string }>(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/logout`, { token });
      deleteCookie("token");
      deleteCookie("refreshToken");

      dispatch(logoutUserRedux());
      message.success(response.data.message);
      router.push("/login");
    } catch (error) {
      const errorMessage = (error as ErrorResponse).response?.data?.message || "Çıkış yaparken bir hata oluştu.";
      message.error(errorMessage);
      console.error("Logout error:", error);
    }
  };

  const isAuthenticated = () => {
    const token = getCookie("token");
    return !!token;
  };

  return { login, register, logout, isAuthenticated: isAuthenticated() };
};

export default useAuth;